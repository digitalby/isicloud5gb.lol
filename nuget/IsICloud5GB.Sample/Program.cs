using IsICloud5GB;

bool answer = IsiCloud5Gb.IsICloudFreeStill5Gb();

Console.WriteLine($"Is iCloud's free tier still 5GB? {(answer ? "Yes." : "No.")}");

if (answer)
{
    Console.WriteLine("It is. It always has been.");
}
