import React from "react";
import { View, Text, ScrollView } from "react-native";

type Props = { children: React.ReactNode };
type State = { hasError: boolean; error: Error | null };

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = { hasError: false, error: null };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("ErrorBoundary caught:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FFF0F0",
            padding: 20,
            paddingTop: 60,
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "bold", color: "#D32F2F", marginBottom: 12 }}>
            App Crashed
          </Text>
          <ScrollView>
            <Text style={{ fontSize: 14, color: "#333", fontFamily: "monospace" }}>
              {this.state.error?.message}
            </Text>
            <Text style={{ fontSize: 12, color: "#666", fontFamily: "monospace", marginTop: 12 }}>
              {this.state.error?.stack}
            </Text>
          </ScrollView>
        </View>
      );
    }
    return this.props.children;
  }
}
