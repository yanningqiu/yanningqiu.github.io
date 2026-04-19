import os

files = ["CV_Yanning Qiu_Nov2025.txt", "CV_Yanning Qiu_Oct2025_full.txt"]

for f in files:
    print(f"--- Reading {f} ---")
    try:
        with open(f, 'r', encoding='utf-8') as file:
            print(file.read())
    except UnicodeDecodeError:
        print("UTF-8 failed, trying latin-1")
        try:
            with open(f, 'r', encoding='latin-1') as file:
                print(file.read())
        except Exception as e:
            print(f"Error: {e}")
    print("\n\n")
