export default function ValueIsInEnum(Value, Enum) {
    return Object.values(Enum).includes(Value);
}