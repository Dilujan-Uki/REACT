export default function Tailwind() {
  return (
    <>
      <h1 className="text-3xl font-bold underline bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
        Hello world!
      </h1>
      <h1 className="text-red-500">Beautiful</h1>
      <div class="bg-amber-500 text-white p-4 rounded-lg">Blue Box</div>
      <div class="bg-gradient-to-r from-purple-500 to-pink-500 to-red-500 p-6 rounded-xl"></div>
      <div class="p-4 m-2">Padding & Margin</div>
      <div class="px-10 py-4">Horizontal + Vertical padding</div>
      <h1 class="text-3xl font-bold bg-gradient-to-b from-green-400 to-blue-600 bg-clip-text text-transparent">
        Vertical Gradient
      </h1>
      <h1 class="text-3xl bg-gradient-to-r from-pink-500 via-yellow-500 to-green-500 bg-clip-text text-transparent">
        Multicolor Gradient
      </h1>



      <div class="grid grid-cols-3 gap-4 m-5">
        <div class="bg-gray-300 h-20"></div>
        <div class="bg-gray-300 h-20"></div>
        <div class="bg-gray-300 h-20"></div>
      </div>

      <nav class="flex items-center justify-between p-4 bg-gray-900 text-white">
        <h1 class="text-2xl font-bold">Logo</h1>
        <ul class="flex gap-6 text-lg">
          <li class="hover:text-gray-300 cursor-pointer">Home</li>
          <li class="hover:text-gray-300 cursor-pointer">About</li>
          <li class="hover:text-gray-300 cursor-pointer">Contact</li>
        </ul>
      </nav>




    </>
  )
}