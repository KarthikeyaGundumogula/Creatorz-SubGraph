// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get account(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class RoomListed extends ethereum.Event {
  get params(): RoomListed__Params {
    return new RoomListed__Params(this);
  }
}

export class RoomListed__Params {
  _event: RoomListed;

  constructor(event: RoomListed) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class RoomMinted extends ethereum.Event {
  get params(): RoomMinted__Params {
    return new RoomMinted__Params(this);
  }
}

export class RoomMinted__Params {
  _event: RoomMinted;

  constructor(event: RoomMinted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get URI(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class RoomSold extends ethereum.Event {
  get params(): RoomSold__Params {
    return new RoomSold__Params(this);
  }
}

export class RoomSold__Params {
  _event: RoomSold;

  constructor(event: RoomSold) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class RoomUnlisted extends ethereum.Event {
  get params(): RoomUnlisted__Params {
    return new RoomUnlisted__Params(this);
  }
}

export class RoomUnlisted__Params {
  _event: RoomUnlisted;

  constructor(event: RoomUnlisted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class TransferBatch extends ethereum.Event {
  get params(): TransferBatch__Params {
    return new TransferBatch__Params(this);
  }
}

export class TransferBatch__Params {
  _event: TransferBatch;

  constructor(event: TransferBatch) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._event.parameters[3].value.toBigIntArray();
  }

  get values(): Array<BigInt> {
    return this._event.parameters[4].value.toBigIntArray();
  }
}

export class TransferSingle extends ethereum.Event {
  get params(): TransferSingle__Params {
    return new TransferSingle__Params(this);
  }
}

export class TransferSingle__Params {
  _event: TransferSingle;

  constructor(event: TransferSingle) {
    this._event = event;
  }

  get operator(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get from(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }

  get value(): BigInt {
    return this._event.parameters[4].value.toBigInt();
  }
}

export class URI extends ethereum.Event {
  get params(): URI__Params {
    return new URI__Params(this);
  }
}

export class URI__Params {
  _event: URI;

  constructor(event: URI) {
    this._event = event;
  }

  get value(): string {
    return this._event.parameters[0].value.toString();
  }

  get id(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class VideoListed extends ethereum.Event {
  get params(): VideoListed__Params {
    return new VideoListed__Params(this);
  }
}

export class VideoListed__Params {
  _event: VideoListed;

  constructor(event: VideoListed) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class VideoMinted extends ethereum.Event {
  get params(): VideoMinted__Params {
    return new VideoMinted__Params(this);
  }
}

export class VideoMinted__Params {
  _event: VideoMinted;

  constructor(event: VideoMinted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get URI(): string {
    return this._event.parameters[2].value.toString();
  }
}

export class VideoPublished extends ethereum.Event {
  get params(): VideoPublished__Params {
    return new VideoPublished__Params(this);
  }
}

export class VideoPublished__Params {
  _event: VideoPublished;

  constructor(event: VideoPublished) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get RoomId(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class VideoSold extends ethereum.Event {
  get params(): VideoSold__Params {
    return new VideoSold__Params(this);
  }
}

export class VideoSold__Params {
  _event: VideoSold;

  constructor(event: VideoSold) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get buyer(): Address {
    return this._event.parameters[2].value.toAddress();
  }

  get price(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class VideoUnlisted extends ethereum.Event {
  get params(): VideoUnlisted__Params {
    return new VideoUnlisted__Params(this);
  }
}

export class VideoUnlisted__Params {
  _event: VideoUnlisted;

  constructor(event: VideoUnlisted) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }
}

export class Rooms__getRoomByIDResultValue0Struct extends ethereum.Tuple {
  get id(): BigInt {
    return this[0].toBigInt();
  }

  get owner(): Address {
    return this[1].toAddress();
  }

  get URI(): string {
    return this[2].toString();
  }

  get isListed(): boolean {
    return this[3].toBoolean();
  }

  get videos(): Array<BigInt> {
    return this[4].toBigIntArray();
  }

  get Price(): BigInt {
    return this[5].toBigInt();
  }
}

export class Rooms__roomsResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: boolean;
  value4: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: boolean,
    value4: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set("value4", ethereum.Value.fromUnsignedBigInt(this.value4));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getOwner(): Address {
    return this.value1;
  }

  getURI(): string {
    return this.value2;
  }

  getIsListed(): boolean {
    return this.value3;
  }

  getPrice(): BigInt {
    return this.value4;
  }
}

export class Rooms__videosResult {
  value0: BigInt;
  value1: Address;
  value2: string;
  value3: boolean;
  value4: boolean;
  value5: BigInt;
  value6: BigInt;

  constructor(
    value0: BigInt,
    value1: Address,
    value2: string,
    value3: boolean,
    value4: boolean,
    value5: BigInt,
    value6: BigInt
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
    this.value6 = value6;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromBoolean(this.value3));
    map.set("value4", ethereum.Value.fromBoolean(this.value4));
    map.set("value5", ethereum.Value.fromUnsignedBigInt(this.value5));
    map.set("value6", ethereum.Value.fromUnsignedBigInt(this.value6));
    return map;
  }

  getId(): BigInt {
    return this.value0;
  }

  getOwner(): Address {
    return this.value1;
  }

  getURI(): string {
    return this.value2;
  }

  getIsListed(): boolean {
    return this.value3;
  }

  getIsPublished(): boolean {
    return this.value4;
  }

  getPrice(): BigInt {
    return this.value5;
  }

  getRoomId(): BigInt {
    return this.value6;
  }
}

export class Rooms extends ethereum.SmartContract {
  static bind(address: Address): Rooms {
    return new Rooms("Rooms", address);
  }

  balanceOf(account: Address, id: BigInt): BigInt {
    let result = super.call(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );

    return result[0].toBigInt();
  }

  try_balanceOf(account: Address, id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "balanceOf",
      "balanceOf(address,uint256):(uint256)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromUnsignedBigInt(id)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  balanceOfBatch(accounts: Array<Address>, ids: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );

    return result[0].toBigIntArray();
  }

  try_balanceOfBatch(
    accounts: Array<Address>,
    ids: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "balanceOfBatch",
      "balanceOfBatch(address[],uint256[]):(uint256[])",
      [
        ethereum.Value.fromAddressArray(accounts),
        ethereum.Value.fromUnsignedBigIntArray(ids)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getRoomByID(_id: BigInt): Rooms__getRoomByIDResultValue0Struct {
    let result = super.call(
      "getRoomByID",
      "getRoomByID(uint256):((uint256,address,string,bool,uint256[],uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );

    return changetype<Rooms__getRoomByIDResultValue0Struct>(
      result[0].toTuple()
    );
  }

  try_getRoomByID(
    _id: BigInt
  ): ethereum.CallResult<Rooms__getRoomByIDResultValue0Struct> {
    let result = super.tryCall(
      "getRoomByID",
      "getRoomByID(uint256):((uint256,address,string,bool,uint256[],uint256))",
      [ethereum.Value.fromUnsignedBigInt(_id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Rooms__getRoomByIDResultValue0Struct>(value[0].toTuple())
    );
  }

  isApprovedForAll(account: Address, operator: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    account: Address,
    operator: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [
        ethereum.Value.fromAddress(account),
        ethereum.Value.fromAddress(operator)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155BatchReceived(
    param0: Address,
    param1: Address,
    param2: Array<BigInt>,
    param3: Array<BigInt>,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155BatchReceived",
      "onERC1155BatchReceived(address,address,uint256[],uint256[],bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigIntArray(param2),
        ethereum.Value.fromUnsignedBigIntArray(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): Bytes {
    let result = super.call(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );

    return result[0].toBytes();
  }

  try_onERC1155Received(
    param0: Address,
    param1: Address,
    param2: BigInt,
    param3: BigInt,
    param4: Bytes
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "onERC1155Received",
      "onERC1155Received(address,address,uint256,uint256,bytes):(bytes4)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromAddress(param1),
        ethereum.Value.fromUnsignedBigInt(param2),
        ethereum.Value.fromUnsignedBigInt(param3),
        ethereum.Value.fromBytes(param4)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  rooms(param0: BigInt): Rooms__roomsResult {
    let result = super.call(
      "rooms",
      "rooms(uint256):(uint256,address,string,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Rooms__roomsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBoolean(),
      result[4].toBigInt()
    );
  }

  try_rooms(param0: BigInt): ethereum.CallResult<Rooms__roomsResult> {
    let result = super.tryCall(
      "rooms",
      "rooms(uint256):(uint256,address,string,bool,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Rooms__roomsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBoolean(),
        value[4].toBigInt()
      )
    );
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  uri(tokenId: BigInt): string {
    let result = super.call("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);

    return result[0].toString();
  }

  try_uri(tokenId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("uri", "uri(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(tokenId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  videos(param0: BigInt): Rooms__videosResult {
    let result = super.call(
      "videos",
      "videos(uint256):(uint256,address,string,bool,bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Rooms__videosResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBoolean(),
      result[4].toBoolean(),
      result[5].toBigInt(),
      result[6].toBigInt()
    );
  }

  try_videos(param0: BigInt): ethereum.CallResult<Rooms__videosResult> {
    let result = super.tryCall(
      "videos",
      "videos(uint256):(uint256,address,string,bool,bool,uint256,uint256)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Rooms__videosResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBoolean(),
        value[4].toBoolean(),
        value[5].toBigInt(),
        value[6].toBigInt()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class BuyRoomCall extends ethereum.Call {
  get inputs(): BuyRoomCall__Inputs {
    return new BuyRoomCall__Inputs(this);
  }

  get outputs(): BuyRoomCall__Outputs {
    return new BuyRoomCall__Outputs(this);
  }
}

export class BuyRoomCall__Inputs {
  _call: BuyRoomCall;

  constructor(call: BuyRoomCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyRoomCall__Outputs {
  _call: BuyRoomCall;

  constructor(call: BuyRoomCall) {
    this._call = call;
  }
}

export class BuyVideoCall extends ethereum.Call {
  get inputs(): BuyVideoCall__Inputs {
    return new BuyVideoCall__Inputs(this);
  }

  get outputs(): BuyVideoCall__Outputs {
    return new BuyVideoCall__Outputs(this);
  }
}

export class BuyVideoCall__Inputs {
  _call: BuyVideoCall;

  constructor(call: BuyVideoCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class BuyVideoCall__Outputs {
  _call: BuyVideoCall;

  constructor(call: BuyVideoCall) {
    this._call = call;
  }
}

export class GetCreatorzTokensCall extends ethereum.Call {
  get inputs(): GetCreatorzTokensCall__Inputs {
    return new GetCreatorzTokensCall__Inputs(this);
  }

  get outputs(): GetCreatorzTokensCall__Outputs {
    return new GetCreatorzTokensCall__Outputs(this);
  }
}

export class GetCreatorzTokensCall__Inputs {
  _call: GetCreatorzTokensCall;

  constructor(call: GetCreatorzTokensCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class GetCreatorzTokensCall__Outputs {
  _call: GetCreatorzTokensCall;

  constructor(call: GetCreatorzTokensCall) {
    this._call = call;
  }
}

export class ListRoomCall extends ethereum.Call {
  get inputs(): ListRoomCall__Inputs {
    return new ListRoomCall__Inputs(this);
  }

  get outputs(): ListRoomCall__Outputs {
    return new ListRoomCall__Outputs(this);
  }
}

export class ListRoomCall__Inputs {
  _call: ListRoomCall;

  constructor(call: ListRoomCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ListRoomCall__Outputs {
  _call: ListRoomCall;

  constructor(call: ListRoomCall) {
    this._call = call;
  }
}

export class ListVideoCall extends ethereum.Call {
  get inputs(): ListVideoCall__Inputs {
    return new ListVideoCall__Inputs(this);
  }

  get outputs(): ListVideoCall__Outputs {
    return new ListVideoCall__Outputs(this);
  }
}

export class ListVideoCall__Inputs {
  _call: ListVideoCall;

  constructor(call: ListVideoCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _price(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ListVideoCall__Outputs {
  _call: ListVideoCall;

  constructor(call: ListVideoCall) {
    this._call = call;
  }
}

export class MintRoomCall extends ethereum.Call {
  get inputs(): MintRoomCall__Inputs {
    return new MintRoomCall__Inputs(this);
  }

  get outputs(): MintRoomCall__Outputs {
    return new MintRoomCall__Outputs(this);
  }
}

export class MintRoomCall__Inputs {
  _call: MintRoomCall;

  constructor(call: MintRoomCall) {
    this._call = call;
  }

  get URI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class MintRoomCall__Outputs {
  _call: MintRoomCall;

  constructor(call: MintRoomCall) {
    this._call = call;
  }
}

export class MintVideoCall extends ethereum.Call {
  get inputs(): MintVideoCall__Inputs {
    return new MintVideoCall__Inputs(this);
  }

  get outputs(): MintVideoCall__Outputs {
    return new MintVideoCall__Outputs(this);
  }
}

export class MintVideoCall__Inputs {
  _call: MintVideoCall;

  constructor(call: MintVideoCall) {
    this._call = call;
  }

  get _URI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class MintVideoCall__Outputs {
  _call: MintVideoCall;

  constructor(call: MintVideoCall) {
    this._call = call;
  }
}

export class OnERC1155BatchReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155BatchReceivedCall__Inputs {
    return new OnERC1155BatchReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155BatchReceivedCall__Outputs {
    return new OnERC1155BatchReceivedCall__Outputs(this);
  }
}

export class OnERC1155BatchReceivedCall__Inputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get value3(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155BatchReceivedCall__Outputs {
  _call: OnERC1155BatchReceivedCall;

  constructor(call: OnERC1155BatchReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class OnERC1155ReceivedCall extends ethereum.Call {
  get inputs(): OnERC1155ReceivedCall__Inputs {
    return new OnERC1155ReceivedCall__Inputs(this);
  }

  get outputs(): OnERC1155ReceivedCall__Outputs {
    return new OnERC1155ReceivedCall__Outputs(this);
  }
}

export class OnERC1155ReceivedCall__Inputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get value1(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get value2(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get value3(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get value4(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class OnERC1155ReceivedCall__Outputs {
  _call: OnERC1155ReceivedCall;

  constructor(call: OnERC1155ReceivedCall) {
    this._call = call;
  }

  get value0(): Bytes {
    return this._call.outputValues[0].value.toBytes();
  }
}

export class PublishVideoCall extends ethereum.Call {
  get inputs(): PublishVideoCall__Inputs {
    return new PublishVideoCall__Inputs(this);
  }

  get outputs(): PublishVideoCall__Outputs {
    return new PublishVideoCall__Outputs(this);
  }
}

export class PublishVideoCall__Inputs {
  _call: PublishVideoCall;

  constructor(call: PublishVideoCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }

  get _RoomId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class PublishVideoCall__Outputs {
  _call: PublishVideoCall;

  constructor(call: PublishVideoCall) {
    this._call = call;
  }
}

export class SafeBatchTransferFromCall extends ethereum.Call {
  get inputs(): SafeBatchTransferFromCall__Inputs {
    return new SafeBatchTransferFromCall__Inputs(this);
  }

  get outputs(): SafeBatchTransferFromCall__Outputs {
    return new SafeBatchTransferFromCall__Outputs(this);
  }
}

export class SafeBatchTransferFromCall__Inputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get ids(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }

  get amounts(): Array<BigInt> {
    return this._call.inputValues[3].value.toBigIntArray();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeBatchTransferFromCall__Outputs {
  _call: SafeBatchTransferFromCall;

  constructor(call: SafeBatchTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get amount(): BigInt {
    return this._call.inputValues[3].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[4].value.toBytes();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class UnListRoomCall extends ethereum.Call {
  get inputs(): UnListRoomCall__Inputs {
    return new UnListRoomCall__Inputs(this);
  }

  get outputs(): UnListRoomCall__Outputs {
    return new UnListRoomCall__Outputs(this);
  }
}

export class UnListRoomCall__Inputs {
  _call: UnListRoomCall;

  constructor(call: UnListRoomCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnListRoomCall__Outputs {
  _call: UnListRoomCall;

  constructor(call: UnListRoomCall) {
    this._call = call;
  }
}

export class UnListVideoCall extends ethereum.Call {
  get inputs(): UnListVideoCall__Inputs {
    return new UnListVideoCall__Inputs(this);
  }

  get outputs(): UnListVideoCall__Outputs {
    return new UnListVideoCall__Outputs(this);
  }
}

export class UnListVideoCall__Inputs {
  _call: UnListVideoCall;

  constructor(call: UnListVideoCall) {
    this._call = call;
  }

  get _id(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class UnListVideoCall__Outputs {
  _call: UnListVideoCall;

  constructor(call: UnListVideoCall) {
    this._call = call;
  }
}
