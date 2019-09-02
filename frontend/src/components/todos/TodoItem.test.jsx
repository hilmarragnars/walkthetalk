import TodoItem from './TodoItem';


const props = {
  todo: {
    id: 1,
    title: "Test todo items",
    description: "This is a short description about a todo item",
    completed: false,
  },
  onDelete: jest.fn()
}

describe('TodoItem rendering correctly', () => {
  it("Renders correctly empty", () => {
    const wrapper = shallow(
      <TodoItem todo={{}} onDelete={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it("Renders correctly with a todo item", () => {
    const wrapper = shallow(
      <TodoItem todo={props.todo} onDelete={props.onDelete} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Delete button working correctly', () => {
  it("Clicking delete button once works", () => {
    const spy = sinon.spy();
    const wrapper = mount(
      <TodoItem todo={props.todo} onDelete={spy} />
    );

    wrapper
      .find("button")
      .first()
      .simulate("click");

    expect(spy.calledOnce).toBe(true);
  });
});
