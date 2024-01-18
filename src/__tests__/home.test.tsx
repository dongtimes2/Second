import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import Page from '@/app/page';

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
  }),
}));

describe('Home 페이지 테스트', () => {
  test('주문 페이지로 이동하는 버튼이 있어야 합니다.', () => {
    render(<Page />);
    const button = screen.getByRole('button', {
      name: '주문하러 가기',
    });
    expect(button).toBeInTheDocument();
  });
});
