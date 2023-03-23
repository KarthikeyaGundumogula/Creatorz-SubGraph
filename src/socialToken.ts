import {
  SocialTokenMinted as SocialTokenMintedEvent,
  SocialTokenListed as SocialTokenListedEvent,
  SocialTokenUnlisted as SocialTokenUnlistedEvent,
  SocialTokenLaunched as SocialTokenLaunchedEvent,
  SocialTokenBought as SocialTokenBoughtEvent,
} from "../generated/SocialToken/SocialToken";
import { BigInt, store } from "@graphprotocol/graph-ts";
import { User, SocialTokenHolding } from "../generated/schema";

export function handleSocialTokenMinted(event: SocialTokenMintedEvent): void {
  let user = User.load(event.params.owner.toString());
  if (user == null) {
    user = new User(event.params.owner.toString());
    user.Address = event.params.owner;
    user.RoomsOwned = new Array<BigInt>();
    user.SocialTokensOwned = new Array<BigInt>();
    user.TotalEarningByRooms = BigInt.fromString("0");
    user.TotalEarningBySocialTokens = BigInt.fromString("0");
    user.TotalEarningByVideos = BigInt.fromString("0");
    user.BlockNumber = event.block.number;
    user.BlockTimestamp = event.block.timestamp;
    user.TransactionHash = event.transaction.hash;
  }
  let socialTokensOwned = user.SocialTokensOwned;
  socialTokensOwned.push(event.params.id);
  user.SocialTokensOwned = socialTokensOwned;
  user.save();

  let socialTokenHoldings = new SocialTokenHolding(
    event.params.id.toString() + event.params.owner.toString()
  );
  socialTokenHoldings.SocialTokenId = event.params.id;
  socialTokenHoldings.Creator = event.params.owner;
  socialTokenHoldings.Holder = event.params.owner;
  socialTokenHoldings.IsLaunched = false;
  socialTokenHoldings.URI = "";
  socialTokenHoldings.LaunchingPrice = BigInt.fromString("0");
  socialTokenHoldings.TotalAmountMinted = event.params.amount;
  socialTokenHoldings.AmountAvailbleforSale = BigInt.fromString("0");
  socialTokenHoldings.AmountOwnedByHolder = event.params.amount;
  socialTokenHoldings.AmountListedByHolder = BigInt.fromString("0");
  socialTokenHoldings.PriceSetByHolder = BigInt.fromString("0");
  socialTokenHoldings.BlockNumber = event.block.number;
  socialTokenHoldings.BlockTimestamp = event.block.timestamp;
  socialTokenHoldings.TransactionHash = event.transaction.hash;
  socialTokenHoldings.save();
}

export function handleSocialTokenLaunched(
  event: SocialTokenLaunchedEvent
): void {
  let socialTokenHoldings = SocialTokenHolding.load(
    event.params.id.toString() + event.params.owner.toString()
  );
  if (socialTokenHoldings != null) {
    socialTokenHoldings.IsLaunched = true;
    socialTokenHoldings.URI = event.params.URI;
    socialTokenHoldings.LaunchingPrice = event.params.price;
    socialTokenHoldings.AmountAvailbleforSale =
      socialTokenHoldings.TotalAmountMinted;
    socialTokenHoldings.AmountListedByHolder =
      socialTokenHoldings.TotalAmountMinted;
    socialTokenHoldings.PriceSetByHolder = event.params.price;
    socialTokenHoldings.save();
  }
}

export function handleSocialTokenListed(event: SocialTokenListedEvent): void {
  let socialTokenHoldings = SocialTokenHolding.load(
    event.params.id.toString() + event.params.owner.toString()
  );
  if (socialTokenHoldings != null) {
    let saleAmount = socialTokenHoldings.AmountAvailbleforSale;
    socialTokenHoldings.AmountAvailbleforSale = saleAmount.plus(
      event.params.amount
    );
    socialTokenHoldings.AmountListedByHolder = event.params.amount;
    socialTokenHoldings.PriceSetByHolder = event.params.price;
    socialTokenHoldings.save();
  }
}

export function handleSocialTokenBought(event: SocialTokenBoughtEvent): void {
  let socialTokenHoldings = SocialTokenHolding.load(
    event.params.id.toString() + event.params.owner.toString()
  );
  if (socialTokenHoldings != null) {
    let saleAmount = socialTokenHoldings.AmountAvailbleforSale;
    socialTokenHoldings.AmountAvailbleforSale = saleAmount.minus(
      event.params.amount
    );
    let ownerAmount = socialTokenHoldings.AmountOwnedByHolder;
    socialTokenHoldings.AmountOwnedByHolder = ownerAmount.plus(
      event.params.amount
    );
    let listedAmount = socialTokenHoldings.AmountListedByHolder;
    socialTokenHoldings.AmountListedByHolder = listedAmount.minus(
      event.params.amount
    );
    socialTokenHoldings.save();

    let socialTokenHoldingsBuyer = SocialTokenHolding.load(
      event.params.id.toString() + event.params.buyer.toString()
    );
    if (socialTokenHoldingsBuyer == null) {
      socialTokenHoldingsBuyer = new SocialTokenHolding(
        event.params.id.toString() + event.params.buyer.toString()
      );
      socialTokenHoldingsBuyer.SocialTokenId = event.params.id;
      socialTokenHoldingsBuyer.Creator = socialTokenHoldings.Creator;
      socialTokenHoldingsBuyer.Holder = event.params.buyer;
      socialTokenHoldingsBuyer.IsLaunched = false;
      socialTokenHoldingsBuyer.URI = "";
      socialTokenHoldingsBuyer.LaunchingPrice = BigInt.fromString("0");
      socialTokenHoldingsBuyer.TotalAmountMinted = BigInt.fromString("0");
      socialTokenHoldingsBuyer.AmountAvailbleforSale = BigInt.fromString("0");
      socialTokenHoldingsBuyer.AmountOwnedByHolder = event.params.amount;
      socialTokenHoldingsBuyer.AmountListedByHolder = BigInt.fromString("0");
      socialTokenHoldingsBuyer.PriceSetByHolder = BigInt.fromString("0");
      socialTokenHoldingsBuyer.BlockNumber = event.block.number;
      socialTokenHoldingsBuyer.BlockTimestamp = event.block.timestamp;
      socialTokenHoldingsBuyer.TransactionHash = event.transaction.hash;
    }
    let ownedAmount = socialTokenHoldingsBuyer.AmountOwnedByHolder;
    socialTokenHoldingsBuyer.AmountOwnedByHolder = ownedAmount.plus(
      event.params.amount
    );
    socialTokenHoldingsBuyer.save();

    if (
      socialTokenHoldings.AmountOwnedByHolder == BigInt.fromString("0") &&
      socialTokenHoldings.Holder != socialTokenHoldings.Creator
    ) {
      store.remove("SocialTokenHolding", socialTokenHoldings.id.toString());
      let seller = User.load(socialTokenHoldings.Creator.toString());
      if (seller != null) {
        let socialTokensOwned = seller.SocialTokensOwned;
        let index = socialTokensOwned.indexOf(event.params.id);
        if (index > -1) {
          socialTokensOwned.splice(index, 1);
        }
        seller.SocialTokensOwned = socialTokensOwned;
        seller.save();
      }
    }

    let buyer = User.load(event.params.buyer.toString());
    if (buyer == null) {
      buyer = new User(event.params.buyer.toString());
      buyer.Address = event.params.buyer;
      buyer.RoomsOwned = new Array<BigInt>();
      buyer.SocialTokensOwned = new Array<BigInt>();
      buyer.TotalEarningByRooms = BigInt.fromString("0");
      buyer.TotalEarningBySocialTokens = BigInt.fromString("0");
      buyer.TotalEarningByVideos = BigInt.fromString("0");
      buyer.BlockNumber = event.block.number;
      buyer.BlockTimestamp = event.block.timestamp;
      buyer.TransactionHash = event.transaction.hash;
    }
    let socialTokensOwned = buyer.SocialTokensOwned;
    socialTokensOwned.push(event.params.id);
    buyer.SocialTokensOwned = socialTokensOwned;
    buyer.save();
  }
}

export function handleSocialTokenUnlisted(
  event: SocialTokenUnlistedEvent
): void {
  let socialTokenHoldings = SocialTokenHolding.load(
    event.params.id.toString() + event.params.owner.toString()
  );
  if (socialTokenHoldings != null) {
    let saleAmount = socialTokenHoldings.AmountAvailbleforSale;
    socialTokenHoldings.AmountAvailbleforSale = saleAmount.minus(
      event.params.amount
    );
    let listedAmount = socialTokenHoldings.AmountListedByHolder;
    socialTokenHoldings.AmountListedByHolder = listedAmount.minus(
      event.params.amount
    );
    socialTokenHoldings.save();
  }
}
