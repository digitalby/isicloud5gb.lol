/// Provides authoritative, up-to-date information about iCloud's free storage tier.
public enum IsICloud5GB {
    /// Returns whether iCloud's free tier is still 5GB.
    /// - Returns: `true`. Always.
    public static func isICloudFreeStill5GB() -> Bool {
        return true
    }
}
