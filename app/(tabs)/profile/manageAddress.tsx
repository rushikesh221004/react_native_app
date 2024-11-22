import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

interface Address {
  id: number;
  address: string;
  type: string;
}

const ManageAddress: React.FC = () => {
  const router = useRouter();

  const [addresses, setAddresses] = useState<Address[]>([]);
  const [showNewAddressInput, setShowNewAddressInput] = useState<boolean>(false);
  const [newAddress, setNewAddress] = useState<string>("");
  const [addressType, setAddressType] = useState<string>("");

  // Handle Adding Address
  const handleAddAddress = (): void => {
    if (newAddress.trim() && addressType.trim()) {
      setAddresses([
        ...addresses,
        { id: Date.now(), address: newAddress, type: addressType },
      ]);
      setNewAddress("");
      setAddressType("");
      setShowNewAddressInput(false);
    } else {
      alert("Please fill in both fields.");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 20 }}>
        {/* Header */}
        <View className="relative top-5 flex flex-row items-center justify-center px-5">
          <View className="absolute left-5 w-[30px] h-[30px] flex justify-center">
            <TouchableOpacity onPress={() => router.push("./")}>
              <Ionicons name="chevron-back-outline" size={25} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <Text className="font-semibold text-2xl text-center">
              Manage Address
            </Text>
          </View>
        </View>

        {/* Instructions */}
        <View className="px-5 mt-14">
          <Text className="font-medium text-gray-800 text-[14px]">
            Add multiple locations where you can travel to donate blood.
          </Text>
        </View>

        {/* Existing Addresses */}
        <View className="px-5 mt-5">
          {addresses.length > 0 ? (
            addresses.map((item) => (
              <View
                key={item.id}
                className="bg-gray-100 border border-gray-300 rounded-lg px-4 py-3 mb-3"
              >
                <Text className="font-bold text-lg text-gray-800">
                  {item.type}
                </Text>
                <Text className="text-gray-600">{item.address}</Text>
              </View>
            ))
          ) : (
            <Text className="text-gray-500 text-center">
              No addresses added yet.
            </Text>
          )}
        </View>

        {/* Add New Address Section */}
        <View className="px-5 mt-5">
          {!showNewAddressInput && (
            <TouchableOpacity
              onPress={() => setShowNewAddressInput(true)}
              className="bg-[#800000] w-full text-center py-3 rounded-lg"
            >
              <Text className="text-white text-center font-medium text-[15px]">
                Add New Address
              </Text>
            </TouchableOpacity>
          )}

          {showNewAddressInput && (
            <View>
              <Text className="font-semibold text-lg mt-5">New Address</Text>
              <TextInput
                placeholder="Enter new address"
                value={newAddress}
                onChangeText={(text) => setNewAddress(text)}
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              />

              <Text className="font-semibold text-lg mt-5">
                Address Type (e.g., Home, Office)
              </Text>
              <TextInput
                placeholder="Enter address type"
                value={addressType}
                onChangeText={(text) => setAddressType(text)}
                className="w-full h-[40px] px-2 mt-2 border-2 border-[#800000] rounded-lg font-semibold text-gray-800 text-[14px]"
              />

              <TouchableOpacity
                onPress={handleAddAddress}
                className="bg-[#800000] w-full text-center py-3 rounded-lg mt-5"
              >
                <Text className="text-white text-center font-medium text-[15px]">
                  Save Address
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setShowNewAddressInput(false)}
                className="w-full text-center py-2 mt-3 rounded-lg bg-gray-200"
              >
                <Text className="text-gray-700 text-center font-medium text-[15px]">
                  Cancel
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ManageAddress;
