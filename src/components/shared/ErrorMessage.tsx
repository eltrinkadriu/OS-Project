type Props = {
  message: string;
};

export const ErrorMessage = ({ message }: Props) => {
  return <p className="text-red-600 font-bold">{message}</p>;
};
