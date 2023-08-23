import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll,
  beforeEach,
  afterEach,
  logStore,
} from "matchstick-as/assembly/index";
import { Address, BigInt } from "@graphprotocol/graph-ts";
// import { Approval } from "../generated/schema"
import { createMintEvent } from "./pass-utils";
import { handleMint } from "../src/pass";

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

// Runs a code block before any of the tests in the file.
// If beforeAll is declared inside of a describe block, it runs at the beginning of that describe block.

beforeAll(() => {});

// Runs a code block before every test.
// If beforeEach is declared inside of a describe block, it runs before each test in that describe block.
beforeEach(() => {
  // clearStore(); // <-- clear the store before each test in the file
});

// Runs a code block after every test.
// If afterEach is declared inside of a describe block, it runs after each test in that describe block.
afterEach(() => {});

// Defines a test group.
describe("Describe entity assertions", () => {
  beforeAll(() => {
    let owner = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    );
    let tokenId = BigInt.fromI32(0);
    let name = "test";

    let newMintEvent = createMintEvent(owner, tokenId, name);
    handleMint(newMintEvent);
  });

  afterAll(() => {
    clearStore();
  });

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test
  // Defines a test case. You can use test() inside of describe() blocks or independently.
  test("Pass created and stored", () => {
    // tokenId: BigInt!;
    // name: String!;
    // holder: Holder!;
    // tokenURIData: String;
    // metaIdentityAddress: Bytes;
    logStore();
    assert.entityCount("Pass", 1);

    // assert.fieldEquals(
    //   "Pass",
    //   "0",
    //   "holder",
    //   "0x0000000000000000000000000000000000000001"
    // );
    // assert.fieldEquals("Pass", "0", "tokenId", "0");
    // assert.fieldEquals("Pass", "0", "name", "test");
    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  });
});

// Runs a code block after all of the tests in the file.
// If afterAll is declared inside of a describe block, it runs at the end of that describe block.
afterAll(() => {});

export { handleMint };
