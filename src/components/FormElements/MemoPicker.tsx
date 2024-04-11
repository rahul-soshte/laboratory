import React from "react";
import { MemoType, MemoValue } from "@stellar/stellar-sdk";
import { Input } from "@stellar/design-system";

import { RadioPicker } from "@/components/RadioPicker";
import { ExpandBox } from "@/components/ExpandBox";

type MemoPickerValue = { type: MemoType; value: MemoValue | undefined };

type MemoPickerProps = {
  id: string;
  value: MemoPickerValue | undefined;
  onChange: (
    optionId: string | undefined,
    optionValue?: MemoPickerValue,
  ) => void;
  labelSuffix?: string | React.ReactNode;
  error: string | undefined;
};

export const MemoPicker = ({
  id,
  value,
  onChange,
  labelSuffix,
  error,
}: MemoPickerProps) => {
  const memoValuePlaceholder = (type?: MemoType) => {
    if (!type) {
      return "";
    }

    switch (type) {
      case "id":
        return "Unsigned 64-bit integer";
      case "hash":
      case "return":
        return "32-byte hash in hexadecimal format (64 [0-9a-f] characters)";
      case "text":
        return "UTF-8 string of up to 28 bytes";
      case "none":
      default:
        return "";
    }
  };

  return (
    <div className="RadioPicker__inset">
      <RadioPicker
        id={id}
        selectedOption={value?.type}
        label="Memo"
        labelSuffix={labelSuffix}
        onChange={onChange}
        options={[
          { id: "none", label: "None", value: { type: "none", value: "" } },
          { id: "text", label: "Text", value: { type: "text", value: "" } },
          { id: "id", label: "ID", value: { type: "id", value: "" } },
          { id: "hash", label: "Hash", value: { type: "hash", value: "" } },
          {
            id: "return",
            label: "Return",
            value: { type: "return", value: "" },
          },
        ]}
      />

      <ExpandBox
        isExpanded={Boolean(value?.type && value.type !== "none")}
        offsetTop="sm"
      >
        <Input
          fieldSize="md"
          id="memo_value"
          placeholder={memoValuePlaceholder(value?.type)}
          value={value?.value?.toString() || ""}
          onChange={(e) => {
            if (value?.type) {
              onChange(value.type, { type: value.type, value: e.target.value });
            }
          }}
          error={error}
        />
      </ExpandBox>
    </div>
  );
};
