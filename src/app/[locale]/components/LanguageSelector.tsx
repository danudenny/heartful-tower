"use client";
import { useParams, useRouter } from "next/navigation";

export const LanguageSelector = () => {
  const router = useRouter();
  const params = useParams();

  const handleSelectChange = (event: { target: { value: any } }) => {
    const selectedValue = event.target.value;
    const newPath = `/${selectedValue}`;
    router.push(newPath);
  };

  const { locale } = params;

  return (
    <div>
      <select
        className="bg-transparent p-3 font-semibold"
        onChange={handleSelectChange}
        value={locale}
        aria-label="Select Language"
      >
        <option value="id">ID</option>
        <option value="en">EN</option>
        <option value="jp">JP</option>
      </select>
    </div>
  );
};
