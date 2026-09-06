import { FlatList, StyleSheet, Text, View } from "react-native";
import BackButton from "../components/BackButton";
import SizedBox from "../components/SizedBox";
import { s, ms, vs } from "react-native-size-matters";
import PaymentMethodCard from "../components/PaymentMethodCard";
import { paymentMethods } from "../models/PaymentMethod";
import { PaymentMethodListProps } from "../models/PaymentMethod";
import { useState } from "react";
import AddPaymentMethodContainer from "../components/AddPaymentMethodContainer";
import AddPaymentMethodButton from "../components/AddPaymentMethodButton";

const PaymentScreen = () => {
  return (
    <View style={styles.container}>
      <SizedBox height={vs(50)} />
      <PaymentScreenHeader />
      <SizedBox height={vs(30)} />
      <PaymentMethodList paymentMethods={paymentMethods} />
      <SizedBox height={vs(30)} />
      <AddPaymentMethodContainer />
      <SizedBox height={vs(30)} />
      <AddPaymentMethodButton />
    </View>
  );
};

const PaymentScreenHeader = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <BackButton />
      <SizedBox width={s(16)} />
      <Text style={styles.title}>Payment</Text>
    </View>
  );
};

const PaymentMethodList = ({ paymentMethods }: PaymentMethodListProps) => {
  const [selectedMethod, setSelectedMethod] = useState<string>("Live");
  return (
    <View
      style={{
        backgroundColor: "red",
      }}
    >
      <FlatList
        horizontal
        contentContainerStyle={{
          gap: s(12),
          paddingTop: s(12),
        }}
        data={paymentMethods}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <PaymentMethodCard
            isSelected={selectedMethod == item.label}
            paymentMethodName={item.label}
            paymentMethodIcon={<item.icon />}
            onPress={() => {
              setSelectedMethod(item.label);
            }}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: s(16),
  },
  title: {
    fontSize: ms(17),
    fontWeight: "400",
  },
});

export default PaymentScreen;
