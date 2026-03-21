// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "IsICloud5GB",
    products: [
        .library(
            name: "IsICloud5GB",
            targets: ["IsICloud5GB"]
        ),
    ],
    targets: [
        .target(
            name: "IsICloud5GB"
        ),
        .executableTarget(
            name: "IsICloud5GBSample",
            dependencies: ["IsICloud5GB"]
        ),
        .testTarget(
            name: "IsICloud5GBTests",
            dependencies: ["IsICloud5GB"]
        ),
    ]
)
