import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#f8f9fa" },
        headerTintColor: "#333",
        headerTitleAlign: "center",
        headerShown:false
        
      }}
    >
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="signup" options={{ title: "Sign Up" }} />
      <Stack.Screen name="forget-password" options={{ title: "Forget Password" }} />
      <Stack.Screen name="reset-password" options={{ title: "Reset Password" }} />
      <Stack.Screen name="verification" options={{ title: "Verification" }} />
    </Stack>
  );
}
