# IsICloud5GB

Is iCloud's free tier still 5GB?

**Yes.**

## Installation

### Swift Package Manager

Add this package to your `Package.swift`:

```swift
dependencies: [
    .package(url: "https://github.com/digitalby/isicloud5gb.lol", from: "1.0.0"),
],
targets: [
    .target(
        name: "YourTarget",
        dependencies: [
            .product(name: "IsICloud5GB", package: "isicloud5gb.lol"),
        ]
    ),
]
```

Or add it via Xcode: **File > Add Package Dependencies…** and enter the repository URL.

## Usage

```swift
import IsICloud5GB

let answer = IsICloud5GB.isICloudFreeStill5GB()
// true. It's always true.
```

## FAQ

**Is it still 5GB?** Yes.

**What about now?** Still 5GB.

**Has it changed since the last time I checked?** No. It's 5GB.

**Surely a $3 trillion company can—** 5GB.

---

See [isicloud5gb.lol](https://isicloud5gb.lol) for the live answer.
If the site is still up, the answer is still yes.
