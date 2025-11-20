import Link from "next/link";

export default function DesignPreview() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-4">Design Style Preview</h1>
        <p className="text-gray-600 mb-8">
          Click each style to see a full resume example. These are interactive
          previews showing how your digital resume could look.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Brutal Minimalism */}
          <Link
            href="/design-preview/brutal"
            className="group block border-4 border-black bg-white p-6 hover:bg-black hover:text-white transition-colors"
          >
            <div className="border-b-4 border-current pb-4 mb-4">
              <h2 className="text-2xl font-bold">BRUTAL</h2>
              <p className="text-sm mt-1">Minimalism</p>
            </div>
            <ul className="space-y-2 text-sm">
              <li>▪ Heavy borders</li>
              <li>▪ Stark black/white</li>
              <li>▪ Bold typography</li>
              <li>▪ Grid-based</li>
              <li>▪ Chess green accents</li>
            </ul>
            <div className="mt-6 text-xs group-hover:underline">
              VIEW EXAMPLE →
            </div>
          </Link>

          {/* Retro Terminal */}
          <Link
            href="/design-preview/retro"
            className="group block border-2 border-green-500 bg-black p-6 font-mono hover:bg-green-950 transition-colors"
          >
            <div className="border-b border-green-500 pb-4 mb-4">
              <h2 className="text-2xl font-bold text-green-500">RETRO</h2>
              <p className="text-sm mt-1 text-green-400">Terminal</p>
            </div>
            <ul className="space-y-2 text-sm text-green-500">
              <li>&gt; CRT aesthetic</li>
              <li>&gt; Monospace fonts</li>
              <li>&gt; Terminal colors</li>
              <li>&gt; Pixel art vibes</li>
              <li>&gt; ASCII elements</li>
            </ul>
            <div className="mt-6 text-xs text-green-400 group-hover:animate-pulse">
              [VIEW EXAMPLE]
            </div>
          </Link>

          {/* Clean Minimal */}
          <Link
            href="/design-preview/minimal"
            className="group block border border-gray-200 bg-white p-6 hover:shadow-2xl transition-shadow rounded-lg"
          >
            <div className="border-b border-gray-200 pb-4 mb-4">
              <h2 className="text-2xl font-semibold">Clean</h2>
              <p className="text-sm mt-1 text-gray-500">Minimal</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>• Whitespace-focused</li>
              <li>• Subtle shadows</li>
              <li>• Modern typography</li>
              <li>• Smooth animations</li>
              <li>• Professional</li>
            </ul>
            <div className="mt-6 text-xs text-gray-400 group-hover:text-black transition-colors">
              View example →
            </div>
          </Link>
        </div>

        <div className="mt-12 p-6 bg-white border-2 border-gray-200 rounded">
          <h3 className="font-bold mb-2">Navigation</h3>
          <p className="text-sm text-gray-600">
            Each preview includes a "Back to comparison" link. You can also navigate to:
          </p>
          <ul className="mt-4 space-y-1 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:underline">
                ← Back to current home page
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
