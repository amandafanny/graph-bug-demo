import { log } from "matchstick-as";
import {
  Mint as MintEvent,
  Transfer as TransferEvent,
} from "../generated/Pass/Pass";
import { Pass } from "../generated/schema";

// tokenId: BigInt!;
// name: String!;
// holder: Holder!;
// tokenURIData: String;
// metaIdentityAddress: Bytes;

export function handleMint(event: MintEvent): void {
  log.info("{}", [event.params.name.toString()]);
  let entity = new Pass(event.params.tokenId.toString());
  entity.holder = event.params.to.toHexString();
  entity.tokenId = event.params.tokenId;
  entity.name = event.params.name.toString();
  entity.save();
}

export function handleTransfer(event: TransferEvent): void {
  // let entity = new Transfer(
  //   event.transaction.hash.concatI32(event.logIndex.toI32())
  // );
  // entity.from = event.params.from;
  // entity.to = event.params.to;
  // entity.tokenId = event.params.tokenId;
  // // bb
  // entity.blockNumber = event.block.number;
  // entity.blockTimestamp = event.block.timestamp;
  // entity.transactionHash = event.transaction.hash;
  // entity.save();
}
