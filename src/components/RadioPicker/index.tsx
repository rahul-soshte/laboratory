import React from "react";
import { Label } from "@stellar/design-system";
import "./styles.scss";

interface RadioPickerProps<TOptionValue = string> {
  id: string;
  selectedOption: string | undefined;
  label?: string | React.ReactNode;
  labelSuffix?: string | React.ReactNode;
  onChange: (optionId: any | undefined, optionValue?: TOptionValue) => void;
  options: {
    id: string;
    label: string;
    value?: TOptionValue;
  }[];
  fitContent?: boolean;
  infoLink?: string;
  infoText?: string | React.ReactNode;
}

export const RadioPicker = <TOptionValue,>({
  id,
  selectedOption,
  label,
  labelSuffix,
  onChange,
  options,
  fitContent,
  infoLink,
  infoText,
}: RadioPickerProps<TOptionValue>) => {
  const customStyle = {
    ...(fitContent ? { "--RadioPicker-width": "fit-content" } : {}),
  } as React.CSSProperties;

  return (
    <div className="RadioPicker" style={customStyle}>
      {label ? (
        <Label
          size="md"
          htmlFor=""
          labelSuffix={labelSuffix}
          infoLink={infoLink}
          infoText={infoText}
        >
          {label}
        </Label>
      ) : null}
      <div className="RadioPicker__options">
        {options.map((o) => {
          const opId = `${o.id}-${id}`;
          const curId = opId.split("-")[0];

          return (
            <div key={o.id} className="RadioPicker__item">
              <input
                type="radio"
                id={opId}
                checked={curId === selectedOption}
                onChange={() => {
                  onChange(o.id, o.value);
                }}
                onClick={() => {
                  if (curId === selectedOption) {
                    // Clear selection if selected the same
                    onChange(undefined);
                  }
                }}
              />
              <label htmlFor={opId}>{o.label}</label>
            </div>
          );
        })}
      </div>
    </div>
  );
};
