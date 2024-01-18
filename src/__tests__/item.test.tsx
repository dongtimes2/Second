import '@testing-library/jest-dom';
import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Item from '@/app/order/components/Item/Item';
import { useOrderStore } from '@/store/order';

describe('Item 컴포넌트 테스트', () => {
  beforeAll(() => {
    act(() => {
      useOrderStore.setState({
        totalPrice: 0,
        totalAmount: 0,
      });
    });
  });

  afterEach(() => {
    act(() => {
      useOrderStore.getState().reset();
    });
  });

  test("Item 컴포넌트에 prop으로 주어진 '이름' 정보가 정확하게 표시되어야 합니다.", () => {
    render(<Item name="테스트" price={1000} event={0} materialType={0} />);
    expect(screen.getByText('테스트')).toBeInTheDocument();
  });

  test("Item 컴포넌트에 prop으로 주어진 'price' 정보가 정확하게 표시되어야 합니다.", () => {
    render(<Item name="테스트" price={1000} event={0} materialType={0} />);
    expect(screen.getByText('1,000원')).toBeInTheDocument();
  });

  test("Item 컴포넌트에 prop으로 주어진 'event'가 0일 때 '이벤트' 텍스트가 화면에 표시되면 안 됩니다.", () => {
    render(<Item name="테스트" price={1000} event={0} materialType={0} />);
    expect(screen.queryByTestId('event-mark')).not.toBeInTheDocument();
  });

  test("Item 컴포넌트에 prop으로 주어진 'event'가 1일 때 '이벤트' 텍스트가 화면에 표시되어야 합니다.", () => {
    render(<Item name="테스트" price={1000} event={1} materialType={0} />);
    expect(screen.getByTestId('event-mark')).toBeInTheDocument();
  });

  test('+ 및 - 버튼을 눌렀을 때 각각 수량이 1 증감되어 표시되어야 합니다.', async () => {
    render(<Item name="테스트" price={1000} event={1} materialType={0} />);
    const plusButton = screen.getByRole('button', {
      name: '+',
    });
    const minusButton = screen.getByRole('button', {
      name: '-',
    });

    await userEvent.click(plusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('1');
    await userEvent.click(plusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('2');
    await userEvent.click(plusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('3');
    await userEvent.click(minusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('2');
    await userEvent.click(minusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('1');
    await userEvent.click(minusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  test('수량이 0인 경우 -버튼을 눌렀을 때에도 수량이 0으로 유지되어야 합니다..', async () => {
    render(<Item name="테스트" price={1000} event={1} materialType={0} />);
    const minusButton = screen.getByRole('button', {
      name: '-',
    });

    await userEvent.click(minusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
    await userEvent.click(minusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
    await userEvent.click(minusButton);
    expect(screen.getByTestId('count')).toHaveTextContent('0');
  });

  test('수량이 999인 상황에서 +버튼을 눌렀을 때에도 수량이 999로 유지되어야 합니다.', async () => {
    render(<Item name="테스트" price={1000} event={1} materialType={0} />);
    const plusButton = screen.getByRole('button', {
      name: '+',
    });

    for (let i = 0; i < 1000; i++) {
      await userEvent.click(plusButton);
    }
    expect(screen.getByTestId('count')).toHaveTextContent('999');
  }, 11000);
});
