import React from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'

interface AppHeaderProps {
  title: string
  showBack?: boolean
  onBack?: () => void
  rightAction?: {
    label: string
    onPress: () => void
  }
}

export const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  showBack,
  onBack,
  rightAction,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.side}>
        {showBack && (
          <Pressable onPress={onBack}>
            <Text style={styles.back}>‹ Back</Text>
          </Pressable>
        )}
      </View>

      <Text style={styles.title}>{title}</Text>

      <View style={styles.side}>
        {rightAction && (
          <Pressable onPress={rightAction.onPress}>
            <Text style={styles.action}>{rightAction.label}</Text>
          </Pressable>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  side: {
    width: 80,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  back: {
    fontSize: 16,
    color: '#007AFF',
  },
  action: {
    fontSize: 16,
    color: '#007AFF',
    textAlign: 'right',
  },
})
