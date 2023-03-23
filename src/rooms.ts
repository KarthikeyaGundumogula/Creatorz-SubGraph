import { BigInt } from "@graphprotocol/graph-ts";
import {
  RoomListed as RoomListedEvent,
  RoomMinted as RoomMintedEvent,
  RoomSold as RoomSoldEvent,
  RoomUnlisted as RoomUnlistedEvent,
  VideoListed as VideoListedEvent,
  VideoMinted as VideoMintedEvent,
  VideoPublished as VideoPublishedEvent,
  VideoSold as VideoSoldEvent,
  VideoUnlisted as VideoUnlistedEvent,
} from "../generated/Rooms/Rooms";
import { User, Room, Video } from "../generated/schema";

export function handleRoomMinted(event: RoomMintedEvent): void {
  let room = new Room(event.params.id.toString());
  room.id = event.params.id.toString();
  room.Owner = event.params.owner;
  room.RoomId = event.params.id;
  room.URI = event.params.URI;
  room.IsListed = false;
  room.Videos = new Array<BigInt>();
  room.Price = BigInt.fromString("0");
  room.BlockNumber = event.block.number;
  room.BlockTimestamp = event.block.timestamp;
  room.TransactionHash = event.transaction.hash;
  room.save();

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
  let roomsOwned = user.RoomsOwned;
  roomsOwned.push(event.params.id);
  user.RoomsOwned = roomsOwned;
  user.save();
}

export function handleRoomListed(event: RoomListedEvent): void {
  let room = Room.load(event.params.id.toString());
  if (room != null) {
    room.IsListed = true;
    room.Price = event.params.price;
    room.save();
  }
}

export function handleRoomSold(event: RoomSoldEvent): void {
  let room = Room.load(event.params.id.toString());
  if (room != null) {
    room.IsListed = false;
    room.Owner = event.params.buyer;
    room.save();
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
  let roomsOwned = buyer.RoomsOwned;
  roomsOwned.push(event.params.id);
  buyer.RoomsOwned = roomsOwned;
  buyer.save();

  let seller = User.load(event.params.owner.toString());
  if (seller != null) {
    let roomsOwned = seller.RoomsOwned;
    let index = roomsOwned.indexOf(event.params.id);
    if (index > -1) {
      roomsOwned.splice(index, 1);
    }
    seller.RoomsOwned = roomsOwned;
    seller.TotalEarningByRooms = seller.TotalEarningByRooms.plus(
      event.params.price
    );
    seller.save();
  }
}

export function handleRoomUnlisted(event: RoomUnlistedEvent): void {
  let room = Room.load(event.params.id.toString());
  if (room != null) {
    room.IsListed = false;
    room.save();
  }
}

export function handleVideoMinted(event: VideoMintedEvent): void {
  let video = new Video(event.params.id.toString());
  video.VideoId = event.params.id;
  video.Owner = event.params.owner;
  video.URI = event.params.URI;
  video.IsListed = false;
  video.IsPublished = false;
  video.Price = BigInt.fromString("0");
  video.Room = BigInt.fromString("0");
  video.BlockNumber = event.block.number;
  video.BlockTimestamp = event.block.timestamp;
  video.TransactionHash = event.transaction.hash;
  video.save();

  let user = User.load(event.params.owner.toString());
  if (user == null) {
    user = new User(event.params.owner.toString());
    user.Address = event.params.owner;
    user.RoomsOwned = new Array<BigInt>();
    user.SocialTokensOwned = new Array<BigInt>();
    user.VideosOwned = new Array<BigInt>();
    user.TotalEarningByRooms = BigInt.fromString("0");
    user.TotalEarningBySocialTokens = BigInt.fromString("0");
    user.TotalEarningByVideos = BigInt.fromString("0");
    user.BlockNumber = event.block.number;
    user.BlockTimestamp = event.block.timestamp;
    user.TransactionHash = event.transaction.hash;
  }
  let videosOwned = user.VideosOwned;
  videosOwned.push(event.params.id);
  user.VideosOwned = videosOwned;
  user.save();
}

export function handleVideoPublished(event: VideoPublishedEvent): void {
  let video = Video.load(event.params.id.toString());
  if (video != null) {
    video.IsPublished = true;
    video.save();
  }
  let room = Room.load(event.params.RoomId.toString());
  if (room != null) {
    let Videos = room.Videos;
    Videos.push(event.params.id);
    room.Videos = Videos;
    room.save();
  }
}

export function handleVideoListed(event: VideoListedEvent): void {
  let video = Video.load(event.params.id.toString());
  if (video != null) {
    video.IsListed = true;
    video.Price = event.params.price;
    video.save();
  }
}

export function handleVideoSold(event: VideoSoldEvent): void {
  let video = Video.load(event.params.id.toString());
  if (video != null) {
    video.IsListed = false;
    video.Owner = event.params.buyer;
    video.save();
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
  buyer.save();

  let seller = User.load(event.params.owner.toString());
  if (seller != null) {
    seller.TotalEarningByVideos = seller.TotalEarningByVideos.plus(
      event.params.price
    );
    let index = seller.VideosOwned.indexOf(event.params.id);
    if (index > -1) {
      seller.VideosOwned.splice(index, 1);
    }
    seller.save();
  }
}

export function handleVideoUnlisted(event: VideoUnlistedEvent): void {
  let video = Video.load(event.params.id.toString());
  if (video != null) {
    video.IsListed = false;
    video.save();
  }
}
