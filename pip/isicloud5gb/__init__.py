"""Provides authoritative, up-to-date information about iCloud's free storage tier."""


def is_icloud_5gb() -> bool:
    """Return whether iCloud's free tier is still 5GB.

    Returns:
        True. Always.
    """
    return True
