<div align="center">

# 🌿 EthioHerbalAI

**AI-Powered Ethiopian Medicinal Plant Identification & Knowledge Platform**

[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-4.1-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.115-009688?style=for-the-badge&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com/)
[![TensorFlow](https://img.shields.io/badge/TensorFlow-2.x-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white)](https://www.tensorflow.org/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

<p align="center">
  <img src="public/favicon.svg" alt="EthioHerbalAI Logo" width="120" />
</p>

*Bridging traditional Ethiopian herbal medicine with modern artificial intelligence*

[🚀 Live Demo](#-getting-started) · [📖 Documentation](#-features) · [🐛 Report Bug](https://github.com/YosephAwoke/EthioHerbalAI/issues) · [✨ Request Feature](https://github.com/YosephAwoke/EthioHerbalAI/issues)

---

</div>

## 📋 Table of Contents

- [About](#-about)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Architecture](#-architecture)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Plant Database](#-plant-database)
- [Model Details](#-model-details)
- [Screenshots](#-screenshots)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🌍 About

**EthioHerbalAI** is an intelligent web platform that identifies Ethiopian medicinal plants from leaf images using deep learning. Upload a photo of a plant leaf, and the AI instantly predicts the species and provides rich ethnobotanical information — including traditional medicinal uses, preparation methods, and the specific plant parts used in treatments.

Ethiopia is home to an extraordinary diversity of medicinal plants, with centuries of indigenous knowledge passed down through generations. This project digitizes and preserves that knowledge, making it accessible to researchers, herbalists, students, and anyone curious about Ethiopian herbal medicine.

### 🎯 Key Highlights

- 🔬 **64 Ethiopian medicinal plant species** recognized by the AI model
- 🖼️ **~24,000 leaf images** used for training across all classes (~400 per species)
- 🧠 **InceptionResNetV2** deep learning architecture for high-accuracy classification
- 📚 **Comprehensive ethnobotanical database** with traditional uses and preparations
- ⚡ **Real-time inference** — upload a leaf photo and get results in seconds

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🔍 **AI Leaf Scanner** | Upload or drag-and-drop a leaf image for instant plant identification with confidence scores |
| 📖 **Plant Encyclopedia** | Browse all 64 medicinal plants with detailed profiles — scientific names, families, uses & parts |
| 🧪 **Medicinal Info** | Traditional preparation methods, dosage guidance, and therapeutic applications |
| 🎨 **Premium Dark UI** | Stunning Ethiopian-themed design with Abyssinian green & gold color palette |
| 📱 **Fully Responsive** | Optimized for desktop, tablet, and mobile devices |
| ⚡ **Fast & Modern** | Built with Vite for lightning-fast HMR and optimized production builds |
| 🔄 **Real-time Results** | Instant predictions with top-5 confidence breakdown |
| 🌐 **RESTful API** | Clean FastAPI backend ready for integration with mobile apps or other services |

---

## 🛠 Tech Stack

<div align="center">

### Frontend
| Technology | Purpose |
|:---:|:---:|
| ![React](https://img.shields.io/badge/-React_19-61DAFB?style=flat-square&logo=react&logoColor=black) | UI Components & State Management |
| ![TailwindCSS](https://img.shields.io/badge/-Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-First Styling |
| ![Vite](https://img.shields.io/badge/-Vite_8-646CFF?style=flat-square&logo=vite&logoColor=white) | Build Tool & Dev Server |
| ![JavaScript](https://img.shields.io/badge/-JavaScript_ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black) | Application Logic |

### Backend
| Technology | Purpose |
|:---:|:---:|
| ![Python](https://img.shields.io/badge/-Python_3.11-3776AB?style=flat-square&logo=python&logoColor=white) | Server Runtime |
| ![FastAPI](https://img.shields.io/badge/-FastAPI-009688?style=flat-square&logo=fastapi&logoColor=white) | REST API Framework |
| ![TensorFlow](https://img.shields.io/badge/-TensorFlow_2.x-FF6F00?style=flat-square&logo=tensorflow&logoColor=white) | Deep Learning Inference |
| ![Uvicorn](https://img.shields.io/badge/-Uvicorn-2C2C2C?style=flat-square&logo=gunicorn&logoColor=white) | ASGI Server |

</div>

---

## 🏗 Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    Client Browser                        │
│  ┌─────────────────────────────────────────────────┐    │
│  │          React + Tailwind CSS Frontend           │    │
│  │  ┌──────────┐ ┌───────────┐ ┌────────────────┐  │    │
│  │  │  Scanner  │ │Encyclopedia│ │  Medicinal DB  │  │    │
│  │  │  (Upload) │ │ (64 Plants)│ │  (Uses/Parts)  │  │    │
│  │  └─────┬─────┘ └───────────┘ └────────────────┘  │    │
│  └────────┼──────────────────────────────────────────┘    │
│           │ POST /predict (image)                         │
│  ┌────────▼──────────────────────────────────────────┐    │
│  │           FastAPI Backend (Port 8000)              │    │
│  │  ┌──────────────┐  ┌───────────────────────────┐  │    │
│  │  │  Image Pre-   │  │  InceptionResNetV2 Model  │  │    │
│  │  │  processing   │──│  (299×299 input)          │  │    │
│  │  │  (PIL/Pillow) │  │  64-class softmax output  │  │    │
│  │  └──────────────┘  └───────────────────────────┘  │    │
│  └───────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────┘
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x — [Download](https://nodejs.org/)
- **Python** ≥ 3.10 — [Download](https://www.python.org/)
- **Git** — [Download](https://git-scm.com/)

### Installation

```bash
# 1️⃣ Clone the repository
git clone https://github.com/YosephAwoke/EthioHerbalAI.git
cd EthioHerbalAI

# 2️⃣ Install frontend dependencies
npm install

# 3️⃣ Set up Python virtual environment
python -m venv .venv

# Windows
.\.venv\Scripts\activate

# macOS/Linux
source .venv/bin/activate

# 4️⃣ Install backend dependencies
pip install fastapi uvicorn pydantic pillow python-multipart tensorflow

# 5️⃣ (Optional) Place your trained model
# Copy your model.h5 file to the project root directory
# Without it, the server runs in simulation mode
```

### Running the Application

```bash
# Terminal 1 — Start the Frontend (port 5173)
npm run dev

# Terminal 2 — Start the Backend (port 8000)
python server.py
```

Then open **http://localhost:5173** in your browser 🎉

---

## 📁 Project Structure

```
EthioHerbalAI/
├── 📄 index.html              # Entry HTML file
├── 📄 package.json             # Node.js dependencies & scripts
├── 📄 vite.config.js           # Vite build configuration
├── 📄 tailwind.config.js       # Tailwind CSS theme & tokens
├── 📄 postcss.config.js        # PostCSS configuration
├── 📄 eslint.config.js         # ESLint code quality rules
├── 📄 server.py                # FastAPI backend server
├── 📄 .gitignore               # Git ignore rules
│
├── 📂 public/                  # Static assets
│   ├── 🖼️ favicon.svg          # Site favicon
│   ├── 🖼️ icons.svg            # SVG icon sprite
│   ├── 🖼️ damakesse.png        # Featured plant image
│   ├── 🖼️ kosso.png            # Featured plant image
│   ├── 🖼️ grawa.png            # Featured plant image
│   └── 🖼️ tena_adam.png        # Featured plant image
│
├── 📂 src/                     # Source code
│   ├── 📄 main.jsx             # React entry point
│   ├── 📄 App.jsx              # Main application (1600+ lines)
│   ├── 📄 App.css              # Component-specific styles
│   ├── 📄 index.css            # Global styles & animations
│   │
│   ├── 📂 assets/              # Bundled assets
│   │   └── 🖼️ hero.png         # Hero section background
│   │
│   └── 📂 data/                # Data files
│       ├── 📄 plants.js        # 64 plant definitions (JS)
│       ├── 📄 plantsData.json  # Full botanical database (JSON)
│       └── 📄 thesis_summary.txt
│
└── 📂 .venv/                   # Python virtual environment (git-ignored)
```

---

## 🌱 Plant Database

The platform includes a curated database of **64 Ethiopian medicinal plant species**. Each entry contains:

| Field | Description |
|-------|-------------|
| **Common Name** | Local Ethiopian name (Amharic) |
| **Scientific Name** | Botanical Latin binomial |
| **Family** | Taxonomic plant family |
| **Medicinal Uses** | Traditional therapeutic applications |
| **Parts Used** | Specific plant organs used (leaves, roots, bark, seeds, etc.) |

<details>
<summary>📋 <b>Click to view all 64 plant species</b></summary>

| # | Common Name | Scientific Name |
|---|------------|----------------|
| 1 | Abish | *Trigonella foenum-graecum* |
| 2 | Akorma | *Ferula communis* |
| 3 | Ameja | *Hypericum quartinianum* |
| 4 | Ard | *Curcuma longa* |
| 5 | Aserkush | *Achyranthes aspera* |
| 6 | Asta | *Jasminum abyssinicum* |
| 7 | Atsefaris | *Dovyalis abyssinica* |
| 8 | Avocado | *Persea americana* |
| 9 | Bamboo | *Yushania alpina* |
| 10 | Banana | *Musa acuminata* |
| 11 | Berbere | *Capsicum annuum* |
| 12 | Besobela | *Ocimum basilicum* |
| 13 | Bisana | *Croton macrostachyus* |
| 14 | Chat | *Catha edulis* |
| 15 | Coffee | *Coffea arabica* |
| 16 | Damakesse | *Ocimum lamiifolium* |
| 17 | Datura | *Datura stramonium* |
| 18 | Dingetegna | *Taverniera abyssinica* |
| 19 | Dog weed | *Bidens pilosa* |
| 20 | Endod | *Phytolacca dodecandra* |
| 21 | Eucalyptus | *Eucalyptus globulus* |
| 22 | Feto | *Lepidium sativum* |
| 23 | Filafilto | *Caylusea abyssinica* |
| 24 | Gesho | *Rhamnus prinoides* |
| 25 | Geteme | *Schinus molle* |
| 26 | Gishta | *Annona squamosa* |
| 27 | Grawa | *Vernonia amygdalina* |
| 28 | Guava | *Psidium guajava* |
| 29 | Gulo | *Ricinus communis* |
| 30 | Hagenia | *Hagenia abyssinica* |
| 31 | Henna | *Lawsonia inermis* |
| 32 | Khat | *Catha edulis* |
| 33 | Kinchi | *Euphorbia tirucalli* |
| 34 | Kosso | *Hagenia abyssinica* |
| 35 | Lemon | *Citrus limon* |
| 36 | Linseed | *Linum usitatissimum* |
| 37 | Mango | *Mangifera indica* |
| 38 | Moringa | *Moringa oleifera* |
| 39 | Myrrh | *Commiphora myrrha* |
| 40 | Neem | *Azadirachta indica* |
| 41 | Niger seed | *Guizotia abyssinica* |
| 42 | Noug | *Guizotia abyssinica* |
| 43 | Olive | *Olea europaea* |
| 44 | Ong | *Justicia schimperiana* |
| 45 | Osole | *Clausena anisata* |
| 46 | Papaya | *Carica papaya* |
| 47 | Sesa | *Plectranthus ornatus* |
| 48 | Shiferaw | *Moringa stenopetala* |
| 49 | Suf | *Carthamus tinctorius* |
| 50 | Tej sar | *Cymbopogon citratus* |
| 51 | Tena adam | *Ruta chalepensis* |
| 52 | Timatim | *Solanum lycopersicum* |
| 53 | Timiz | *Piper capense* |
| 54 | Tinjut | *Otostegia integrifolia* |
| 55 | Tosign | *Thymus serrulatus* |
| 56 | Tsedal | *Citrus medica* |
| 57 | Tult | *Justicia ladanoides* |
| 58 | Tunjo | *Ximenia caffra* |
| 59 | Wanza | *Cordia africana* |
| 60 | Woira | *Olea europaea subsp. cuspidata* |
| 61 | Yeabesha gomen | *Brassica carinata* |
| 62 | Yebere zaf | *Millettia ferruginea* |
| 63 | Zikita | *Calpurnia aurea* |
| 64 | Zingiber | *Zingiber officinale* |

</details>

---

## 🧠 Model Details

| Property | Value |
|----------|-------|
| **Architecture** | InceptionResNetV2 (Transfer Learning) |
| **Input Size** | 299 × 299 × 3 (RGB) |
| **Output** | 64-class softmax |
| **Training Images** | ~24,000 (~400 per class) |
| **Layers** | 164 |
| **Parameters** | ~55 Million |
| **Framework** | TensorFlow / Keras |

The model uses **transfer learning** with ImageNet pre-trained weights, fine-tuned on the Ethiopian medicinal plant leaf dataset for optimal accuracy.

---

## 🖼 Screenshots

<div align="center">

| Home Page | AI Scanner | Plant Encyclopedia |
|:---------:|:----------:|:------------------:|
| Dark-themed hero with animated particles | Drag & drop leaf upload with live predictions | Searchable grid of 64 medicinal plants |

</div>

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. 🍴 **Fork** the repository
2. 🌿 **Create** a feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 **Commit** your changes (`git commit -m 'Add amazing feature'`)
4. 📤 **Push** to the branch (`git push origin feature/amazing-feature`)
5. 🔃 **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

## 📬 Contact

**Yoseph Awoke** — [yosephawoke8@gmail.com](mailto:yosephawoke8@gmail.com)

🔗 **Project Link**: [https://github.com/YosephAwoke/EthioHerbalAI](https://github.com/YosephAwoke/EthioHerbalAI)

---

<div align="center">

**⭐ Star this repository if you found it useful!**

Made with 💚 for Ethiopian Traditional Medicine

</div>
