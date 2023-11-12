import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import UserProfileHeader from '../../src/components/UserProfileHeader';

// Mocks
jest.mock('expo-router', () => ({
  ...jest.requireActual('expo-router'),
  useRouter: () => ({
    back: jest.fn(),
  }),
}));

jest.mock('react-native/Libraries/Share/Share', () => ({
  share: jest.fn(),
}));

// Test Data
const mockUser = {
  name: 'Test User',
  avatar: 'https://example.com/avatar.jpg',
  coverImage: 'https://example.com/cover.jpg',
  handle: 'testuser',
  bio: 'Test user bio.',
};

describe('UserProfileHeader component', () => {
  it('renders user information correctly', () => {
    const { getByText } = render(<UserProfileHeader user={mockUser} />);
    
    expect(getByText(mockUser.name)).toBeTruthy();
    expect(getByText(`@${mockUser.handle}`)).toBeTruthy();
    expect(getByText(mockUser.bio)).toBeTruthy();
  });

  it('handles back navigation correctly', () => {
    const { getByTestId } = render(<UserProfileHeader user={mockUser} />);
    const backButton = getByTestId('back-button');

    fireEvent.press(backButton);

    // Add assertions for your navigation logic
    expect(jest.requireMock('expo-router').useRouter().back).toHaveBeenCalled();
  });

  it('toggles image modal correctly', () => {
    const { getByTestId } = render(<UserProfileHeader user={mockUser} />);
    const imagePressable = getByTestId('image-pressable');

    fireEvent.press(imagePressable);

    // Add assertions for modal visibility
    // For example: expect(modalVisible).toBe(true);
  });

  it('handles share press correctly', async () => {
    const { getByTestId } = render(<UserProfileHeader user={mockUser} />);
    const shareButton = getByTestId('share-button');

    fireEvent.press(shareButton);

    // Add assertions for share functionality
    // For example: expect(shareFunctionCalled).toBe(true);
  });
});
