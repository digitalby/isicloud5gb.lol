using IsICloud5GB;

namespace IsICloud5GB.Tests;

public class IsiCloud5GbTests
{
    [Fact]
    public void IsICloudFreeStill5Gb_ReturnsTrue()
    {
        Assert.True(IsiCloud5Gb.IsICloudFreeStill5Gb());
    }

    [Fact]
    public void IsICloudFreeStill5Gb_ReturnsBool()
    {
        var result = IsiCloud5Gb.IsICloudFreeStill5Gb();
        Assert.IsType<bool>(result);
    }

    [Fact]
    public void IsICloudFreeStill5Gb_IsIdempotent()
    {
        // No matter how many times you ask, the answer does not change.
        var results = Enumerable.Range(0, 5).Select(_ => IsiCloud5Gb.IsICloudFreeStill5Gb());
        Assert.All(results, r => Assert.True(r));
    }

    [Fact]
    public void IsICloudFreeStill5Gb_IsNotFalse()
    {
        Assert.False(!IsiCloud5Gb.IsICloudFreeStill5Gb());
    }
}
