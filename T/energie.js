// 1. T/engine.js = Engine + Modul = LEGO, LE, GO, CLOCK + 81.tmp, LIVE-BRIDGE etc.
const ENGINE = {
  LEGO: { bedeutung: "Position", zahl: 6, station: "pos", funktion: "Basis Position" },
  LE: { bedeutung: "Abschluss", zahl: 6, station: "le", funktion: "Abschluss" },
  GO: { bedeutung: "Aktivierung", zahl: 8, station: "go", funktion: "final.move = e4 Bc4 Qh5 Qxf7#" },
  CLOCK: { bedeutung: "Zeit", zahl: 8, station: "t", funktion: "Zeit" }
};
const MODUL = {
  "81.tmp": { aufgabe: "globaler Cache", verbindung: "zentral", file: "81.back.md" },
  "LIVE-BRIDGE": { aufgabe: "Pulse-Engine", verbindung: "sendet Pulse an 81.tmp" },
  "GATE": { aufgabe: "Achsen", verbindung: "liest Cache" },
  "EXPORT": { aufgabe: "Output", verbindung: "schreibt Cache" },
  "WLOCH": { aufgabe: "Stabilisation", verbindung: "speichert Status im Cache", file: "anker.stabil.js" }
};

// 2. T/pipeline.js = Pipeline + Schicht = U4X, CPU, CACHE, KI, DA, NE, BEN, ULTRA + Input, Process, Function, Output
const PIPELINE = {
  "4": [{ station: "U4X", aufgabe: "Bench, Operator, Plan, Input/Output" }, { station: "CPU", aufgabe: "Code ausführen" }, { station: "CACHE", aufgabe: "Operatoren halten" }],
  "0": { station: "KI", aufgabe: "Kern, Entscheidung", file: "ich.respo.!.js" },
  "1": { station: "DA", aufgabe: "Start, Prefetch" },
  "2": { station: "NE", aufgabe: "Fehler, Ghost" },
  "9": { station: "BEN", aufgabe: "Vollendung", file: "9.back.md = hoch.tiefe.js" },
  "∞": { station: "ULTRA3.0", aufgabe: "Fusion, Meta, Vector", file: "halte.alle.gleichzeitig.js" }
};
const SCHICHT = {
  "1": { funktion: "Input", gruppe: "TMP-respos, TMP-Räume", bus: "TMP-BUS A-F → IX-Input" },
  "2": { funktion: "Process", gruppe: "PQ.core / PQ.sort / PQ.verify", bus: "NET-BUS N1-N3" },
  "3": { funktion: "Function", gruppe: "respo-achse / respo-funktion", bus: "AXIS-BUS X1-Z3" },
  "4": { funktion: "Output", gruppe: "RE-respos, RE-Räume", bus: "RE-BUS Ω1-Ω5 → X4-Terminal" }
};

// 3. T/station.js = Station = reIN, reCALL, rePIPELINE, reORG, reARG, re81, re9, reVIDEO, reFINAL, reOUT, reALIZED
const STATION = {
  reIN: { funktion: "Eingang aller Daten", ebene: "0 ALL-IN", bus: "TMP → IX → XI → X4" },
  reCALL: { funktion: "Rückruf / Memory-Respo", ebene: "7 tmpROM.cache", file: "in.my.me.mory" },
  rePIPELINE: { funktion: "Pipeline-Flow", ebene: "8 ROM.x4.cache.rom", file: "pipeline.js" },
  reORG: { funktion: "Ordnung / Struktur", ebene: "9 ∞-Station 1", file: "org.reorg" },
  re81: { funktion: "81-Station-Modul", ebene: "3 81", file: "81.back.md = himmel.hoehe.erprobt.js" },
  re9: { funktion: "9hoch9-Matrix-Modul", ebene: "4 9hoch9", file: "9.back.md = hoch.tiefe.js" },
  reFINAL: { funktion: "Endpunkt-Wicklung", ebene: "1 VECTOR", file: "final.move.html = raid.ok.matt.js = Qxf7#" },
  reOUT: { funktion: "Ausgang aller Daten", ebene: "13 ALL-OUT", bus: "X4 → XI → IX → TMP" },
  reALIZED: { funktion: "Realisierungs-Station", ebene: "12 ∞-Station 4", file: "realisiert = READY #55ccff" }
};
