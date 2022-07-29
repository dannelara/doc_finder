const filter_sort_data = [
  {
    rel: "Relevans",
  },
  {
    datum: "Datum",
  },
  {
    systemdatum: "systemdatum",
  },
  {
    debattdag: "Debattdag (endast dag)",
  },
  {
    debattdagtid: "Debattdagtid (med klockslag)",
  },
  {
    beslutsdag: "Beslutsdag",
  },
  {
    justeringsdag: "justeringsdag",
  },
  {
    beredningsdag: "beredningsdag",
  },
  {
    publiceringsdatum: "Publiceringsdatum",
  },
];

// "":[välj dokumenttyp]

const filter_doc_types_data = [
  { "kam-ad": "Aktuell debatt (kam-ad)" },
  { "kam-al": "Allmänpolitisk debatt (kam-al)" },
  {
    "kam-av": "Avslutning (kam-av)",
  },
  {
    "kam-at": "Avtackning (kam-at)",
  },
  { "kam-vo": "Beslut (kam-vo)" },
  {
    "kal-be": "Besök (kal-be)",
  },
  {
    "kal-be": "Besök (kal-be)",
  },
  {
    bet: "Betänkande (bet)",
  },
  {
    "kam-bd": "Bordläggningsdebatt (kam-bd)",
  },
  {
    "kam-bp": "Bordläggningsplenum (kam-bp)",
  },
  {
    "kam-bu": "Budgetdebatt (kam-bu)",
  },
  {
    "kam-dv": "Debatt om vårpropositionen (kam-dv)",
  },
  {
    ds: "Departementsserien (ds)",
  },
  {
    "kam-eu": "EU-debatt (kam-eu)",
  },
  {
    kom: "EU-förslag (kom)",
  },
  {
    eundok: "EU-nämndens dokument (eundok)",
  },
  {
    eprotokoll: "EU-nämndens protokoll (eprotokoll)",
  },
  {
    skrsam: "EU-nämndens skriftliga samråd (skrsam)",
  },
  {
    eunprot: "EU-nämndens uppteckning (eunprot)",
  },
  {
    everkber: "EU-nämndens verksamhetsberättelse (everkber)",
  },
  {
    fpm: "Fakta-PM om EU-förslag (fpm)",
  },
  {
    frsrdg: "Framställning / redogörelse (frsrdg)",
  },
  {
    "kam-fs": "Frågestund (kam-fs)",
  },
  {
    "f-lista": "Föredragningslista (f-lista)",
  },
  {
    rfs: "Föreskrifter i Riksdagsförvaltningens författningssamling (RFS)",
  },
  {
    "kam-ha": "Hälsningsanförande (kam-ha)",
  },
  {
    "kam-hh": "Högtidlighållande (kam-hh)",
  },
  {
    "kam-ar": "Information från regeringen (kam-ar)",
  },
  {
    "kam-in": "Inledning (kam-in)",
  },
  {
    ip: "Interpellation (ip)",
  },
  {
    "kam-ip": "Interpellationsdebat (kam-ip)",
  },
  {
    "kf-lista": "Kallelse och föredragningslista (kf-lista)",
  },
  {
    komm: "Kommittéberättelse (komm)",
  },
  {
    dir: "Kommittédirektiv (dir)",
  },
  {
    "ku-anm": "KU-anmälning (ku-anm)",
  },
  {
    kusprot: "KU:s särskilda protokoll (kusprot)",
  },
  {
    mot: "Motion (mot)",
  },
  {
    "kam-pa": "Parentation (kam-pa)",
  },
  {
    "kam-pd": "Partiledardebatt (kam-pd)",
  },
  {
    "kam-pf": "Plenifritt (kam-pf)",
  },
  {
    "sam-pk": "Presskonferens (sam-pk)",
  },
  {
    prop: "Proposition (prop)",
  },
  {
    prot: "Protokoll (prot)",
  },
  {
    rfr: "Rapport från riksdagen (rfr)",
  },
  {
    "kam-rf": "Regeringsförklaring (kam-rf)",
  },
  {
    "kam-rd": "Remissdebatt (kam-rd)",
  },
  {
    "kal-re": "Resa (kal-re)",
  },
  {
    rskr: "Riksdagsskrivelse (rskr)",
  },
  {
    "kam-ro": "Riksmötets öppnande (kam-ro)",
  },
  {
    rir: "Riksrevisionens granskningsrapport (rir)",
  },
  {
    "kal-se": "Seminarium (Ej öppet) (kal-se)",
  },
  {
    "sam-ss": "Session (sam-ss)",
  },
  {
    fr: "Skriftlig fråga (fr)",
  },
  {
    sou: "Statens offentliga utredning (sou)",
  },
  {
    "kam-sf": "Statsministerns frågestund (kam-sf)",
  },
  {
    frs: "Svar på skriftlig fråga (frs)",
  },
  {
    SFS: "Svensk författningssamling (SFS)",
  },
  {
    "kam-sd": "Särskild debatt (kam-sd)",
  },
  {
    skflista: "Särskild kallelse- och föredragningslista (skflista)",
  },
  {
    "t-lista": "Talarlista (t-lista)",
  },
  {
    "kal-tl": "Träffa ledamöter (kal-tl)",
  },
  {
    "kal-ur": "Ungdomens riksdag (kal-ur)",
  },
  {
    "kam-up": "Upprop (kam-up)",
  },
  {
    urf: "Utredning från Riksdagsförvaltningen (urf)",
  },
  {
    "kam-ud": "Utrikespolitisk debatt (kam-ud)",
  },
  {
    utskottsmöte: "Utskottens kallelse- och föredragningslista (utskottsmöte)",
  },
  {
    uprotokoll: "Utskottens protokoll (uprotokoll)",
  },
  {
    uverkber: "Utskottens verksamhetsberättelse (uverkber)",
  },
  {
    utskdok: "Utskottsdokument (utskdok)",
  },
  {
    utskottsmöte: "Utskottsmöte (utskottsmöte)",
  },
  {
    "kam-va": "Val (kam-va)",
  },
  {
    vpnbeslut: "Valprövningsnämndens beslut (vpnbeslut)",
  },
  {
    "kal-vi": "Visning (kal-vi)",
  },
  {
    votering: "Votering (votering)",
  },
  {
    yttr: "Yttrande (yttr)",
  },
  {
    "sam-ar": "Återrapportering (EJ kammaren) (sam-ar)",
  },
  {
    "sam-ko": "Öppen konferens (sam-ko)",
  },
  {
    "sam-ou": "Öppen utfrågning (sam-ou)",
  },
  {
    "sam-be": "Öppet besök (sam-be)",
  },
  {
    "kal-oh": "Öppet hus (kal-oh)",
  },
  {
    "sam-st": "Öppet sammanträde (sam-st)",
  },
  {
    "sam-os": "Öppet samråd (sam-os)",
  },
  {
    "sam-se": "Öppet seminarium (sam-se)",
  },
  {
    "kal-zz": "Övrig händelse (kal-zz)",
  },
  {
    zz: " Övrigt(zz)",
  },
];

const filter_organ_data = [
  { AU: "Arbetsmarknadsutskottet" },
  { CU: "Civilutskottet" },
  { FiU: "Finansutskottet" },
  { FöU: "Försvarsutskottet" },
  { JuU: "Justitieutskottet" },
  { KU: "Konstitutionsutskottet" },
  { KrU: "Kulturutskottet" },
  { MJU: "Miljö-ochjordbruksutskottet" },
  { NU: "Näringsutskottet" },
  { SkU: "Skatteutskottet" },
  { SfU: "Socialförsäkringsutskottet" },
  { SoU: "Socialutskottet" },
  { TU: "Trafikutskottet" },
  { UbU: "Utbildningsutskottet" },
  { UU: "Utrikesutskottet" },
  { JuSoU: "JuSoU" },
  { KUU: "KUU" },
  { UFöU: "UFöU" },
  { UMJU: "UMJU" },
  { USoU: "USoU" },
  { JoU: "Jordbruksutskottet-1997/98" },
  { BoU: "Bostadsutskottet-2005/06" },
  { LU: "Lagutskottet-2005/06" },
  { EUN: "EU-nämnden" },
];

const filter_datum_data = [
  {
    Datum: "Senaste",
  },
];
export {
  filter_sort_data,
  filter_doc_types_data,
  filter_organ_data,
  filter_datum_data,
};
