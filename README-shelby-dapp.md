## Shelby Storage DApp

Bu proje, [`https://docs.shelby.xyz/`](https://docs.shelby.xyz/) ekosistemi üzerinde çalışan örnek bir web uygulamasıdır. Kullanıcılar:

- Dosyalarını tarayıcı üzerinden Shelby ağına yükleyebilir
- **Görsel yükleyip Aptos üzerinde NFT olarak mint edebilir** (Shelby'de depolama + Aptos on-chain)
- Yükledikleri içerikleri temel olarak herkese açık şekilde listeleyebilir
- Test token almak için faucet alanını kullanabilir (şimdilik placeholder)

### Teknolojiler

- **Vite + React + TypeScript**
- **@shelby-protocol/react** ve **@shelby-protocol/sdk**
- **@tanstack/react-query**

### Geliştirme

```bash
npm install
npm run dev
```

Ardından tarayıcınızda `http://localhost:5173` adresini açın.

### Notlar

- `src/shelby-app.tsx` dosyasında dosya yükleme, ürün oluşturma ve faucet placeholder mantığı bulunur.
- Gerçek bir dApp için:
  - Aptos cüzdan entegrasyonu (`@aptos-labs/wallet-adapter-react`) ile gerçek `signer` nesnesi sağlayın.
  - Shelby veya Aptos faucet API'lerini kullanarak faucet butonunu gerçek token claim akışına bağlayın.
  - Herkese açık ürün/dosya listesini on-chain verilerle doldurmak için Shelby React SDK sorgularını (`useAccountBlobs`, `useBlobMetadata` vb.) kullanın. 

