import XCTest
@testable import IsICloud5GB

final class IsICloud5GBTests: XCTestCase {
    func testIsICloudFreeStill5GB_ReturnsTrue() {
        XCTAssertTrue(IsICloud5GB.isICloudFreeStill5GB())
    }

    func testIsICloudFreeStill5GB_ReturnsBool() {
        let result: Bool = IsICloud5GB.isICloudFreeStill5GB()
        XCTAssertTrue(result)
    }

    func testIsICloudFreeStill5GB_IsIdempotent() {
        // No matter how many times you ask, the answer does not change.
        let results = (0..<5).map { _ in IsICloud5GB.isICloudFreeStill5GB() }
        XCTAssertTrue(results.allSatisfy { $0 })
    }

    func testIsICloudFreeStill5GB_IsNotFalse() {
        XCTAssertFalse(!IsICloud5GB.isICloudFreeStill5GB())
    }
}
