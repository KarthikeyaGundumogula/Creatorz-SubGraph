import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApprovalForAll,
  RoomListed,
  RoomMinted,
  RoomSold,
  RoomUnlisted,
  TransferBatch,
  TransferSingle,
  URI,
  VideoListed,
  VideoMinted,
  VideoPublished,
  VideoSold,
  VideoUnlisted
} from "../generated/Rooms/Rooms"

export function createApprovalForAllEvent(
  account: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createRoomListedEvent(
  id: BigInt,
  owner: Address,
  price: BigInt
): RoomListed {
  let roomListedEvent = changetype<RoomListed>(newMockEvent())

  roomListedEvent.parameters = new Array()

  roomListedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  roomListedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  roomListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return roomListedEvent
}

export function createRoomMintedEvent(
  id: BigInt,
  owner: Address,
  URI: string
): RoomMinted {
  let roomMintedEvent = changetype<RoomMinted>(newMockEvent())

  roomMintedEvent.parameters = new Array()

  roomMintedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  roomMintedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  roomMintedEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )

  return roomMintedEvent
}

export function createRoomSoldEvent(
  id: BigInt,
  owner: Address,
  buyer: Address,
  price: BigInt
): RoomSold {
  let roomSoldEvent = changetype<RoomSold>(newMockEvent())

  roomSoldEvent.parameters = new Array()

  roomSoldEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  roomSoldEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  roomSoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  roomSoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return roomSoldEvent
}

export function createRoomUnlistedEvent(
  id: BigInt,
  owner: Address
): RoomUnlisted {
  let roomUnlistedEvent = changetype<RoomUnlisted>(newMockEvent())

  roomUnlistedEvent.parameters = new Array()

  roomUnlistedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  roomUnlistedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return roomUnlistedEvent
}

export function createTransferBatchEvent(
  operator: Address,
  from: Address,
  to: Address,
  ids: Array<BigInt>,
  values: Array<BigInt>
): TransferBatch {
  let transferBatchEvent = changetype<TransferBatch>(newMockEvent())

  transferBatchEvent.parameters = new Array()

  transferBatchEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam("ids", ethereum.Value.fromUnsignedBigIntArray(ids))
  )
  transferBatchEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )

  return transferBatchEvent
}

export function createTransferSingleEvent(
  operator: Address,
  from: Address,
  to: Address,
  id: BigInt,
  value: BigInt
): TransferSingle {
  let transferSingleEvent = changetype<TransferSingle>(newMockEvent())

  transferSingleEvent.parameters = new Array()

  transferSingleEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  transferSingleEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferSingleEvent
}

export function createURIEvent(value: string, id: BigInt): URI {
  let uriEvent = changetype<URI>(newMockEvent())

  uriEvent.parameters = new Array()

  uriEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromString(value))
  )
  uriEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return uriEvent
}

export function createVideoListedEvent(
  id: BigInt,
  owner: Address,
  price: BigInt
): VideoListed {
  let videoListedEvent = changetype<VideoListed>(newMockEvent())

  videoListedEvent.parameters = new Array()

  videoListedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  videoListedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  videoListedEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return videoListedEvent
}

export function createVideoMintedEvent(
  id: BigInt,
  owner: Address,
  URI: string
): VideoMinted {
  let videoMintedEvent = changetype<VideoMinted>(newMockEvent())

  videoMintedEvent.parameters = new Array()

  videoMintedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  videoMintedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  videoMintedEvent.parameters.push(
    new ethereum.EventParam("URI", ethereum.Value.fromString(URI))
  )

  return videoMintedEvent
}

export function createVideoPublishedEvent(
  id: BigInt,
  owner: Address,
  RoomId: BigInt
): VideoPublished {
  let videoPublishedEvent = changetype<VideoPublished>(newMockEvent())

  videoPublishedEvent.parameters = new Array()

  videoPublishedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  videoPublishedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  videoPublishedEvent.parameters.push(
    new ethereum.EventParam("RoomId", ethereum.Value.fromUnsignedBigInt(RoomId))
  )

  return videoPublishedEvent
}

export function createVideoSoldEvent(
  id: BigInt,
  owner: Address,
  buyer: Address,
  price: BigInt
): VideoSold {
  let videoSoldEvent = changetype<VideoSold>(newMockEvent())

  videoSoldEvent.parameters = new Array()

  videoSoldEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  videoSoldEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  videoSoldEvent.parameters.push(
    new ethereum.EventParam("buyer", ethereum.Value.fromAddress(buyer))
  )
  videoSoldEvent.parameters.push(
    new ethereum.EventParam("price", ethereum.Value.fromUnsignedBigInt(price))
  )

  return videoSoldEvent
}

export function createVideoUnlistedEvent(
  id: BigInt,
  owner: Address
): VideoUnlisted {
  let videoUnlistedEvent = changetype<VideoUnlisted>(newMockEvent())

  videoUnlistedEvent.parameters = new Array()

  videoUnlistedEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  videoUnlistedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return videoUnlistedEvent
}
