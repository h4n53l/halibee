import { Switch } from "@headlessui/react";

export default function ThemeToggle(props) {
    return (
        <Switch
      checked={props.toggled}
      onChange={props.switch}
      className={`${props.toggled ? 'bg-primary' : 'bg-secondary'} relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          props.toggled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
    );
}