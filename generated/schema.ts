// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Rooms extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Rooms entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Rooms must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Rooms", id.toString(), this);
    }
  }

  static load(id: string): Rooms | null {
    return changetype<Rooms | null>(store.get("Rooms", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get RoomId(): BigInt {
    let value = this.get("RoomId");
    return value!.toBigInt();
  }

  set RoomId(value: BigInt) {
    this.set("RoomId", Value.fromBigInt(value));
  }

  get Owner(): Bytes {
    let value = this.get("Owner");
    return value!.toBytes();
  }

  set Owner(value: Bytes) {
    this.set("Owner", Value.fromBytes(value));
  }

  get URI(): string {
    let value = this.get("URI");
    return value!.toString();
  }

  set URI(value: string) {
    this.set("URI", Value.fromString(value));
  }

  get IsListed(): boolean {
    let value = this.get("IsListed");
    return value!.toBoolean();
  }

  set IsListed(value: boolean) {
    this.set("IsListed", Value.fromBoolean(value));
  }

  get Videos(): Array<BigInt> {
    let value = this.get("Videos");
    return value!.toBigIntArray();
  }

  set Videos(value: Array<BigInt>) {
    this.set("Videos", Value.fromBigIntArray(value));
  }

  get Price(): BigInt {
    let value = this.get("Price");
    return value!.toBigInt();
  }

  set Price(value: BigInt) {
    this.set("Price", Value.fromBigInt(value));
  }

  get BlockNumber(): BigInt {
    let value = this.get("BlockNumber");
    return value!.toBigInt();
  }

  set BlockNumber(value: BigInt) {
    this.set("BlockNumber", Value.fromBigInt(value));
  }

  get BlockTimestamp(): BigInt {
    let value = this.get("BlockTimestamp");
    return value!.toBigInt();
  }

  set BlockTimestamp(value: BigInt) {
    this.set("BlockTimestamp", Value.fromBigInt(value));
  }

  get TransactionHash(): Bytes {
    let value = this.get("TransactionHash");
    return value!.toBytes();
  }

  set TransactionHash(value: Bytes) {
    this.set("TransactionHash", Value.fromBytes(value));
  }
}

export class Video extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Video entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Video must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Video", id.toString(), this);
    }
  }

  static load(id: string): Video | null {
    return changetype<Video | null>(store.get("Video", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get VideoId(): BigInt {
    let value = this.get("VideoId");
    return value!.toBigInt();
  }

  set VideoId(value: BigInt) {
    this.set("VideoId", Value.fromBigInt(value));
  }

  get Owner(): Bytes {
    let value = this.get("Owner");
    return value!.toBytes();
  }

  set Owner(value: Bytes) {
    this.set("Owner", Value.fromBytes(value));
  }

  get URI(): string {
    let value = this.get("URI");
    return value!.toString();
  }

  set URI(value: string) {
    this.set("URI", Value.fromString(value));
  }

  get IsListed(): boolean {
    let value = this.get("IsListed");
    return value!.toBoolean();
  }

  set IsListed(value: boolean) {
    this.set("IsListed", Value.fromBoolean(value));
  }

  get IsPublished(): boolean {
    let value = this.get("IsPublished");
    return value!.toBoolean();
  }

  set IsPublished(value: boolean) {
    this.set("IsPublished", Value.fromBoolean(value));
  }

  get Price(): BigInt {
    let value = this.get("Price");
    return value!.toBigInt();
  }

  set Price(value: BigInt) {
    this.set("Price", Value.fromBigInt(value));
  }

  get Room(): BigInt {
    let value = this.get("Room");
    return value!.toBigInt();
  }

  set Room(value: BigInt) {
    this.set("Room", Value.fromBigInt(value));
  }

  get BlockNumber(): BigInt {
    let value = this.get("BlockNumber");
    return value!.toBigInt();
  }

  set BlockNumber(value: BigInt) {
    this.set("BlockNumber", Value.fromBigInt(value));
  }

  get BlockTimestamp(): BigInt {
    let value = this.get("BlockTimestamp");
    return value!.toBigInt();
  }

  set BlockTimestamp(value: BigInt) {
    this.set("BlockTimestamp", Value.fromBigInt(value));
  }

  get TransactionHash(): Bytes {
    let value = this.get("TransactionHash");
    return value!.toBytes();
  }

  set TransactionHash(value: Bytes) {
    this.set("TransactionHash", Value.fromBytes(value));
  }
}

export class SocialTokenHolding extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save SocialTokenHolding entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type SocialTokenHolding must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("SocialTokenHolding", id.toString(), this);
    }
  }

  static load(id: string): SocialTokenHolding | null {
    return changetype<SocialTokenHolding | null>(
      store.get("SocialTokenHolding", id)
    );
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get SocialTokenId(): BigInt {
    let value = this.get("SocialTokenId");
    return value!.toBigInt();
  }

  set SocialTokenId(value: BigInt) {
    this.set("SocialTokenId", Value.fromBigInt(value));
  }

  get Creator(): Bytes {
    let value = this.get("Creator");
    return value!.toBytes();
  }

  set Creator(value: Bytes) {
    this.set("Creator", Value.fromBytes(value));
  }

  get Holder(): Bytes {
    let value = this.get("Holder");
    return value!.toBytes();
  }

  set Holder(value: Bytes) {
    this.set("Holder", Value.fromBytes(value));
  }

  get IsLaunched(): boolean {
    let value = this.get("IsLaunched");
    return value!.toBoolean();
  }

  set IsLaunched(value: boolean) {
    this.set("IsLaunched", Value.fromBoolean(value));
  }

  get URI(): string {
    let value = this.get("URI");
    return value!.toString();
  }

  set URI(value: string) {
    this.set("URI", Value.fromString(value));
  }

  get LaunchingPrice(): BigInt {
    let value = this.get("LaunchingPrice");
    return value!.toBigInt();
  }

  set LaunchingPrice(value: BigInt) {
    this.set("LaunchingPrice", Value.fromBigInt(value));
  }

  get TotalAmountMinted(): BigInt {
    let value = this.get("TotalAmountMinted");
    return value!.toBigInt();
  }

  set TotalAmountMinted(value: BigInt) {
    this.set("TotalAmountMinted", Value.fromBigInt(value));
  }

  get AmountAvailbleforSale(): BigInt {
    let value = this.get("AmountAvailbleforSale");
    return value!.toBigInt();
  }

  set AmountAvailbleforSale(value: BigInt) {
    this.set("AmountAvailbleforSale", Value.fromBigInt(value));
  }

  get AmountOwnedByHolder(): BigInt {
    let value = this.get("AmountOwnedByHolder");
    return value!.toBigInt();
  }

  set AmountOwnedByHolder(value: BigInt) {
    this.set("AmountOwnedByHolder", Value.fromBigInt(value));
  }

  get AmountListedByHolder(): BigInt {
    let value = this.get("AmountListedByHolder");
    return value!.toBigInt();
  }

  set AmountListedByHolder(value: BigInt) {
    this.set("AmountListedByHolder", Value.fromBigInt(value));
  }

  get PriceSetByHolder(): BigInt {
    let value = this.get("PriceSetByHolder");
    return value!.toBigInt();
  }

  set PriceSetByHolder(value: BigInt) {
    this.set("PriceSetByHolder", Value.fromBigInt(value));
  }

  get BlockNumber(): BigInt {
    let value = this.get("BlockNumber");
    return value!.toBigInt();
  }

  set BlockNumber(value: BigInt) {
    this.set("BlockNumber", Value.fromBigInt(value));
  }

  get BlockTimestamp(): BigInt {
    let value = this.get("BlockTimestamp");
    return value!.toBigInt();
  }

  set BlockTimestamp(value: BigInt) {
    this.set("BlockTimestamp", Value.fromBigInt(value));
  }

  get TransactionHash(): Bytes {
    let value = this.get("TransactionHash");
    return value!.toBytes();
  }

  set TransactionHash(value: Bytes) {
    this.set("TransactionHash", Value.fromBytes(value));
  }
}

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save User entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type User must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("User", id.toString(), this);
    }
  }

  static load(id: string): User | null {
    return changetype<User | null>(store.get("User", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get Address(): Bytes {
    let value = this.get("Address");
    return value!.toBytes();
  }

  set Address(value: Bytes) {
    this.set("Address", Value.fromBytes(value));
  }

  get RoomsOwned(): Array<BigInt> {
    let value = this.get("RoomsOwned");
    return value!.toBigIntArray();
  }

  set RoomsOwned(value: Array<BigInt>) {
    this.set("RoomsOwned", Value.fromBigIntArray(value));
  }

  get SocialTokensOwned(): Array<BigInt> {
    let value = this.get("SocialTokensOwned");
    return value!.toBigIntArray();
  }

  set SocialTokensOwned(value: Array<BigInt>) {
    this.set("SocialTokensOwned", Value.fromBigIntArray(value));
  }

  get VideosOwned(): Array<BigInt> {
    let value = this.get("VideosOwned");
    return value!.toBigIntArray();
  }

  set VideosOwned(value: Array<BigInt>) {
    this.set("VideosOwned", Value.fromBigIntArray(value));
  }

  get TotalEarningByRooms(): BigInt {
    let value = this.get("TotalEarningByRooms");
    return value!.toBigInt();
  }

  set TotalEarningByRooms(value: BigInt) {
    this.set("TotalEarningByRooms", Value.fromBigInt(value));
  }

  get TotalEarningBySocialTokens(): BigInt {
    let value = this.get("TotalEarningBySocialTokens");
    return value!.toBigInt();
  }

  set TotalEarningBySocialTokens(value: BigInt) {
    this.set("TotalEarningBySocialTokens", Value.fromBigInt(value));
  }

  get TotalEarningByVideos(): BigInt {
    let value = this.get("TotalEarningByVideos");
    return value!.toBigInt();
  }

  set TotalEarningByVideos(value: BigInt) {
    this.set("TotalEarningByVideos", Value.fromBigInt(value));
  }

  get BlockNumber(): BigInt {
    let value = this.get("BlockNumber");
    return value!.toBigInt();
  }

  set BlockNumber(value: BigInt) {
    this.set("BlockNumber", Value.fromBigInt(value));
  }

  get BlockTimestamp(): BigInt {
    let value = this.get("BlockTimestamp");
    return value!.toBigInt();
  }

  set BlockTimestamp(value: BigInt) {
    this.set("BlockTimestamp", Value.fromBigInt(value));
  }

  get TransactionHash(): Bytes {
    let value = this.get("TransactionHash");
    return value!.toBytes();
  }

  set TransactionHash(value: Bytes) {
    this.set("TransactionHash", Value.fromBytes(value));
  }
}
