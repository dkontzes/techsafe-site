import { useState } from "react";

const translations = {
  gr: {
    contactTitle: "Επικοινωνήστε μαζί μας",
    contactName: "Όνομα",
    contactEmail: "Email",
    contactMessage: "Μήνυμα",
    contactSend: "Αποστολή",
    languageToggle: "English",
  },
  en: {
    contactTitle: "Contact Us",
    contactName: "Name",
    contactEmail: "Email",
    contactMessage: "Message",
    contactSend: "Send",
    languageToggle: "Ελληνικά",
  },
};

const services = [
  {
    title: {
      gr: "Συστήματα Συναγερμού",
      en: "Alarm Systems",
    },
    description: {
      gr: "Προστατέψτε την περιουσία σας με αξιόπιστα συστήματα συναγερμού από εταιρείες όπως Artec, Ajax, Paradox και Onyyx. Προσφέρουμε καλωδιωμένα και ασύρματα συστήματα, με δυνατότητα σύνδεσης σε εφαρμογή κινητού και ειδοποιήσεις σε πραγματικό χρόνο.",
      en: "Protect your property with reliable alarm systems from Artec, Ajax, Paradox and Onyyx. Wired and wireless systems available with mobile app connectivity and real-time alerts.",
    },
    image: ["/images/artec.png", "/images/ajax.png", "/images/paradox.png", "/images/onyyx.png"],
  },
  {
    title: {
      gr: "CCTV",
      en: "CCTV",
    },
    description: {
      gr: "Παρακολουθήστε κάθε χώρο σας με συστήματα κάμερας υψηλής ανάλυσης από Dahua και TVT. Υποστηρίζονται εγγραφές με ανίχνευση κίνησης, νυχτερινή όραση και παρακολούθηση μέσω εφαρμογής από κινητό.",
      en: "Monitor every space with high-resolution camera systems from Dahua and TVT. Motion detection, night vision and mobile app monitoring supported.",
    },
    image: ["/images/dahua.png", "/images/tvt.png"],
  },
  {
    title: {
      gr: "Access Control",
      en: "Access Control",
    },
    description: {
      gr: "Διαχειριστείτε την πρόσβαση με ασφάλεια μέσω λύσεων από την ZKTeco. Υποστήριξη καρτών RFID, δακτυλικών αποτυπωμάτων, προσωποανίχνευσης και ενσωμάτωσης με θυροτηλεοράσεις.",
      en: "Manage access securely with solutions from ZKTeco. Supports RFID cards, fingerprint and face recognition, and integration with intercom systems.",
    },
    image: ["/images/zkteco.png"],
  },
  {
    title: {
      gr: "Δίκτυα",
      en: "Networks",
    },
    description: {
      gr: "Αξιόπιστα δικτυακά συστήματα για κάθε επιχείρηση και σπίτι με εξοπλισμό TP-Link. Σχεδιάζουμε και υλοποιούμε ενσύρματες και ασύρματες υποδομές, switches, routers και access points.",
      en: "Reliable networking systems for businesses and homes using TP-Link equipment. We design and implement wired and wireless networks, switches, routers and access points.",
    },
    image: ["/images/tplink.png"],
  },
  {
    title: {
      gr: "Τηλεφωνικά Κέντρα",
      en: "PBX Systems",
    },
    description: {
      gr: "Επαγγελματική επικοινωνία με τηλεφωνικά συστήματα Yeastar. Συστήματα VoIP, αναγνώριση κλήσεων, αυτόματη δρομολόγηση και υποστήριξη πολλών χρηστών με ευκολία στη διαχείριση.",
      en: "Professional communication with Yeastar PBX systems. VoIP, call recognition, automatic routing and support for multiple users with easy management.",
    },
    image: ["/images/yeastar.png"],
  },
  {
    title: {
      gr: "Πυρανίχνευση",
      en: "Fire Detection",
    },
    description: {
      gr: "Άμεση ανίχνευση φωτιάς και καπνού για την ασφάλεια ανθρώπων και χώρων. Τοποθέτηση αισθητήρων καπνού και θερμοκρασίας, αυτόματες ειδοποιήσεις και σύνδεση με συναγερμό.",
      en: "Instant detection of smoke and fire for the safety of people and spaces. Installation of smoke and heat sensors, automatic alerts and alarm system connection.",
    },
    image: ["/images/maxfire.png"],
  },
  {
    title: {
      gr: "Θυροτηλεοράσεις",
      en: "Video Intercoms",
    },
    description: {
      gr: "Ελέγξτε ποιος βρίσκεται στην είσοδό σας με προηγμένα συστήματα θυροτηλεόρασης της Artec. Υποστήριξη πολλών οθονών, απομακρυσμένο άνοιγμα πόρτας και νυχτερινή λήψη.",
      en: "Monitor your entrance with advanced video intercom systems by Artec. Supports multiple indoor screens, remote door unlock and night vision.",
    },
    image: ["/images/artectv.png"],
  },
  {
    title: {
      gr: "Αυτοματισμοί KNX",
      en: "KNX Automations",
    },
    description: {
      gr: "Πλήρης αυτοματισμός και ευκολία χρήσης με την τεχνολογία KNX. Φωτισμός, ρολά, θερμοκρασία και σενάρια λειτουργίας με απόλυτο έλεγχο μέσω κινητού ή tablet.",
      en: "Complete automation and user-friendly control with KNX technology. Lighting, shutters, temperature and scenario control via mobile or tablet.",
    },
    image: ["/images/knx.png"],
  },
  {
    title: {
      gr: "Starlink",
      en: "Starlink",
    },
    description: {
      gr: "Υψηλής ταχύτητας δορυφορικό internet σε απομακρυσμένες περιοχές. Εγκατάσταση Starlink για επιχειρήσεις και κατοικίες χωρίς πρόσβαση σε σταθερά δίκτυα, με σταθερό latency και απρόσκοπτη σύνδεση.",
      en: "High-speed satellite internet in remote areas. Starlink installation for businesses and homes with no access to wired networks, offering low latency and stable connection.",
    },
    image: ["/images/starlink.png"],
  },
];

function App() {
  const [selectedService, setSelectedService] = useState(services[0]);
  const [lang, setLang] = useState("gr");
  const t = translations[lang];

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, black, #0d47a1)", color: "white", textAlign: "center" }}>
      <header style={{ padding: "30px" }}>
        <img src="/images/logo.png" alt="Techsafe Logo" style={{ width: "400px", marginBottom: "20px" }} />
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}></h1>
        <p style={{ fontSize: "18px" }}></p>
        <button onClick={() => setLang(lang === "gr" ? "en" : "gr")} style={{ marginTop: "10px", backgroundColor: "#1976d2", color: "white", border: "none", borderRadius: "5px", padding: "5px 10px", cursor: "pointer" }}>{t.languageToggle}</button>
      </header>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "10px", padding: "20px" }}>
        {services.map((service, idx) => (
          <button
            key={idx}
            onClick={() => setSelectedService(service)}
            style={{ padding: "10px 20px", backgroundColor: "#1976d2", border: "none", borderRadius: "5px", color: "white", cursor: "pointer" }}
          >
            {service.title[lang]}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px", padding: "20px" }}>
        <h2 style={{ fontSize: "28px" }}>{selectedService.title[lang]}</h2>
        <p style={{ maxWidth: "600px", margin: "10px auto 30px" }}>{selectedService.description[lang]}</p>
        <div style={{ display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" }}>
          {selectedService.image.map((img, idx) => (
            <img key={idx} src={img} alt="" style={{ width: "220px", borderRadius: "8px" }}
            />
          ))}
        </div>
      </div>

      <section style={{ marginTop: "40px", padding: "20px", background: "#111", borderRadius: "10px", margin: "40px 20px" }}>
        <h3 style={{ fontSize: "24px", marginBottom: "20px" }}>{t.contactTitle}</h3>
        <form style={{ display: "flex", flexDirection: "column", gap: "10px", alignItems: "center" }}>
          <input type="text" placeholder={t.contactName} style={{ padding: "10px", width: "300px", borderRadius: "5px" }} />
          <input type="email" placeholder={t.contactEmail} style={{ padding: "10px", width: "300px", borderRadius: "5px" }} />
          <textarea placeholder={t.contactMessage} rows="4" style={{ padding: "10px", width: "300px", borderRadius: "5px" }} />
          <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#1976d2", border: "none", borderRadius: "5px", color: "white", cursor: "pointer" }}>
            {t.contactSend}
          </button>
        </form>
      </section>

      <footer style={{ marginTop: "40px", padding: "20px", fontSize: "14px" }}>
        <div style={{ marginBottom: "10px" }}>
          <a href="#"><span style={{ margin: "0 10px" }}>Facebook</span></a>
          <a href="#"><span style={{ margin: "0 10px" }}>Instagram</span></a>
          <a href="#"><span style={{ margin: "0 10px" }}>LinkedIn</span></a>
        </div>
        <p>© 2025 TECHSAFE - All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
