import IsICloud5GB

let answer = IsICloud5GB.isICloudFreeStill5GB()

print("Is iCloud's free tier still 5GB? \(answer ? "Yes." : "No.")")

if answer {
    print("It is. It always has been.")
}
