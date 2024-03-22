
import pandas as pd

# Definition der Daten entsprechend der Übungsaufgaben und Bewertungen
data = {
    'Übung': [
        "Ich kann Brüche mit verschiedenen Faktoren erweitern, kürzen und miteinander vergleichen, indem ich sie gleichnamig mache.",
        "Ich kann Subtraktionen, Additionen und Multiplikationen von Brüchen anhand von Modellen darstellen.",
        "Ich kann Additionen, Subtraktionen und Multiplikationen mit Brüchen ausführen.",
        "Ich kann Anteile mit Prozenten, Brüchen und Kommazahlen (Punktschreibweise) ausdrücken.",
        "Zusatz: Ich kann Bruchrechnungen mit erhöhter Schwierigkeit lösen."
    ],
    'Bewertung': ['1-4', '4', '4-6', '7-10', '11'],
    '3x': [0, 0, 0, 0, 0],
    '2x': [0, 0, 0, 0, 0],
    '4x': [0, 0, 1, 0, 0],
    '5x': [0, 0, 0, 1, 0]
}

# Erstellung des DataFrame
df = pd.DataFrame(data)

# Anzeige des DataFrame
print(df)
# At this point, 'transcriptions' contains image names as keys and their
# OCR-generated text as values. You can now use or save this information as needed.