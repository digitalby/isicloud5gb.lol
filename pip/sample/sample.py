from isicloud5gb import is_icloud_5gb

answer = is_icloud_5gb()

print(f"Is iCloud's free tier still 5GB? {'Yes.' if answer else 'No.'}")

if answer:
    print("It is. It always has been.")
