export default function Footer() {
  return (
    <div className="absolute flex w-full flex-col items-center justify-center gap-3 border-t border-gray-200 bg-white py-5 text-center text-xs text-gray-400 sm:flex-row sm:gap-6">
      <p>@2023 TikTok</p>
      <div className="flex items-center sm:flex-row flex-col justify-center gap-3 sm:gap-2">
        <a href="#">TikTok Creator Marketplace Brand Terms of Service</a>
        <p className="sm:inline-block hidden">|</p>
        <a href="#">Privacy Policy</a>
        <p className="sm:inline-block hidden">|</p>
        <a href="#">Code of Conduct</a>
      </div>
    </div>
  );
}
