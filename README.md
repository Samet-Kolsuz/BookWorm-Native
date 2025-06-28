# 📚 BookWorm - Kitap Yönetim Uygulaması

BookWorm, React Native ile geliştirilmiş modern bir kitap koleksiyonu yönetim uygulamasıdır. Kitaplarınızı kolayca ekleyebilir, düzenleyebilir ve silebilirsiniz.

## ✨ Özellikler

- 📖 **Kitap Listesi**: Tüm kitaplarınızı güzel bir arayüzde görüntüleyin
- ➕ **Kitap Ekleme**: Yeni kitapları koleksiyonunuza ekleyin
- ✏️ **Kitap Düzenleme**: Mevcut kitap bilgilerini güncelleyin
- 🗑️ **Kitap Silme**: İstemediğiniz kitapları koleksiyondan çıkarın
- 📱 **Responsive Tasarım**: Modern ve kullanıcı dostu arayüz
- 🔄 **Real-time Güncellemeler**: Redux ile anlık veri yönetimi

## 🛠️ Kullanılan Teknolojiler

### Frontend
- **React Native** `0.80.0` - Cross-platform mobil uygulama geliştirme
- **React** `18.3.1` - UI kütüphanesi
- **TypeScript** - Tip güvenli JavaScript

### State Management
- **Redux Toolkit** - Modern Redux state yönetimi
- **React Redux** - React-Redux entegrasyonu

### Navigation
- **React Navigation** `v6` - Ekranlar arası geçiş yönetimi
- **React Navigation Native Stack** - Native stack navigator

### UI & Icons
- **React Native Vector Icons** - Güzel iconlar
- **Custom Emoji Icons** - 🗑️ ✏️ şeklinde emoji iconları

### Development Tools
- **Metro** - JavaScript bundler
- **Babel** - JavaScript transpiler
- **ESLint** - Code linting
- **Jest** - Test framework

## 📁 Proje Yapısı

```
src/
├── components/          # Yeniden kullanılabilir bileşenler
│   └── Card.jsx        # Kitap kartı bileşeni
├── screens/            # Uygulama ekranları
│   ├── HomePage.jsx    # Ana sayfa - kitap listesi
│   ├── BookDetail.jsx  # Kitap detay sayfası
│   └── CreatePage.jsx  # Kitap ekleme/düzenleme sayfası
├── redux/              # State yönetimi
│   ├── store.js        # Redux store konfigürasyonu
│   └── slices/
│       └── bookSlice.js # Kitap işlemleri için Redux slice
├── navigators/         # Navigation yapılandırması
│   └── RootNavigator.jsx
└── constants.js        # Sabit değerler
```

## 🚀 Kurulum ve Çalıştırma

### Gereksinimler
- Node.js (v16 veya üzeri)
- React Native CLI
- iOS için: Xcode ve CocoaPods
- Android için: Android Studio

### 1. Projeyi Klonlayın
```bash
git clone https://github.com/Samet-Kolsuz/BookWorm-Native.git
cd bookworm
```

### 2. Bağımlılıkları Yükleyin
```bash
npm install
```

### 3. iOS için Pod Kurulumu
```bash
cd ios && pod install && cd ..
```

### 4. Metro Server'ı Başlatın
```bash
npm start
```

### 5. Uygulamayı Çalıştırın

#### iOS
```bash
npm run ios
```

#### Android
```bash
npm run android
```

## 📱 Kullanım

### Ana Sayfa
- Kitap koleksiyonunuzun tamamını görüntüleyin
- Kitaplara tıklayarak detay sayfasına gidin
- Yeni kitap eklemek için "+" butonunu kullanın

### Kitap Detayı
- Kitap bilgilerini detaylı olarak görüntüleyin
- 🗑️ **Silme**: Kitabı koleksiyondan çıkarın
- ✏️ **Düzenleme**: Kitap bilgilerini güncelleyin

### Kitap Ekleme/Düzenleme
- **Kitap Adı**: Kitabın başlığı
- **Yazar**: Kitabın yazarı
- **Tür**: Kitabın kategorisi
- **Yıl**: Yayın yılı
- **Resim URL**: Kitap kapağının URL'si

## 🏗️ Mimari

Uygulama **Redux Toolkit** kullanarak modern state yönetimi patterns'ını takip eder:

- **Actions**: `addBook`, `updateBook`, `deleteBook`
- **Reducers**: Immutable state güncellemeleri
- **Store**: Merkezi state yönetimi
- **Selectors**: State'ten veri çekme

## 🎨 UI/UX Özellikleri

- **Modern Tasarım**: Clean ve minimalist arayüz
- **Emoji Icons**: 🗑️ ve ✏️ gibi anlaşılır iconlar
- **Responsive Layout**: Farklı ekran boyutlarına uyum
- **Touch Feedback**: Butona dokunma geri bildirimleri
- **Alert Dialogs**: Kullanıcı bilgilendirmeleri

## 🔧 Geliştirme

### Test Çalıştırma
```bash
npm test
```

### Code Linting
```bash
npm run lint
```

### Build
```bash
# iOS
npm run build:ios

# Android
npm run build:android
```

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 🤝 Katkıda Bulunma

1. Fork yapın
2. Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Pull Request oluşturun

---

📚 **BookWorm** ile kitap koleksiyonunuzu dijital ortamda kolayca yönetin!
