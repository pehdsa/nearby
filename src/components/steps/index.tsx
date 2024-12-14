import { View, Text } from "react-native";
import { IconQrcode, IconMapPin, IconTicket } from "@tabler/icons-react-native";

import { styles } from "./styles";
import { Step } from "@/components/step";

export function Steps() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Veja como funciona:</Text>
      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description={`Veja locais perto de você que são \n parceiros Nearby`}
      />
      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description={`Escaneie o código no estabelecimento \n para usar o benefício`}
      />
      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description={`Ative cupons onde estiver, em \n diferentes tipos de estabelecimento `}
      />
    </View>
  );
}
