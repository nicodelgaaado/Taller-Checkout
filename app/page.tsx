import {
  ArrowLeft,
  Check,
  Headphones,
  LockKeyhole,
  Pencil,
  Plus,
  ShieldCheck,
} from "lucide-react";
import AnimatedYear from "./components/animated-year";

type Product = {
  id: number;
  name: string;
  details: string;
  quantity: string;
  total: string;
  unit: string;
  image: "case" | "phone";
};

const products: Product[] = [
  {
    id: 1,
    name: "Silicone Case for iPhone 7",
    details: "Product color: Midnight Blue, Turquoise Blue",
    quantity: "Quantity: 2 items",
    total: "€ 36.40",
    unit: "€ 18.20 per item",
    image: "case",
  },
  {
    id: 2,
    name: "Tempered glass for Iphone",
    details: "Size: Iphone 7, Iphone 8",
    quantity: "Quantity: 4 items",
    total: "€ 20.00",
    unit: "€ 5.00 per item",
    image: "phone",
  },
  {
    id: 3,
    name: "Tempered glass for Iphone",
    details: "Size: Iphone 7, Iphone 8",
    quantity: "Quantity: 4 items",
    total: "€ 20.00",
    unit: "€ 5.00 per item",
    image: "phone",
  },
];

const summaryRows = [
  { label: "Subtotal", value: "€ 56.40" },
  { label: "Delivery", value: "FREE" },
  { label: "Tax", value: "€ 11.84" },
  { label: "Insurance", value: "€ 7.00" },
];

function ProductThumb({ type }: { type: Product["image"] }) {
  if (type === "case") {
    return (
      <div className="relative h-[4.5rem] w-[4.5rem] overflow-hidden rounded-2xl border border-[#e5e8f3] bg-white p-2">
        <div className="absolute inset-2 rounded-xl border border-[#e9ecf5] bg-[#fafbfd]" />
        <div className="absolute left-4 top-4 h-8 w-8 rotate-[-15deg] rounded-sm bg-[#9ddadd]" />
        <div className="absolute bottom-4 left-4 h-8 w-8 rotate-[20deg] rounded-sm bg-[#1d3665]" />
        <div className="absolute right-4 top-5 h-8 w-7 rotate-[40deg] rounded-sm bg-[#e6e3e1]" />
        <div className="absolute right-6 top-10 h-1.5 w-1.5 rounded-full bg-[#c8c4c2]" />
      </div>
    );
  }

  return (
    <div className="relative h-[4.5rem] w-[4.5rem] overflow-hidden rounded-2xl border border-[#e5e8f3] bg-white p-2">
      <div className="absolute inset-2 rounded-xl border border-[#e9ecf5] bg-[#fafbfd]" />
      <div className="absolute left-5 top-3 h-12 w-8 rounded-[7px] bg-[#101215] shadow-inner shadow-[#30363f]" />
      <div className="absolute left-[1.92rem] top-[1.72rem] h-5 w-5 rotate-45 rounded-sm bg-[#2a4fff]" />
      <div className="absolute left-[2.35rem] top-[2.15rem] h-3 w-3 rounded-full bg-[#82a3ff]" />
    </div>
  );
}

const stepCircleClass =
  "inline-flex h-8 w-8 items-center justify-center rounded-full text-sm font-extrabold leading-none";

function TwoLineMenuIcon() {
  return (
    <span aria-hidden className="inline-flex h-5 w-6 flex-col justify-between">
      <span className="block h-0.5 w-full rounded-full bg-current" />
      <span className="block h-0.5 w-full rounded-full bg-current" />
    </span>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#eef1f7] text-[#1c2956]">
      <section className="bg-[#121f8f] pb-36">
        <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-10">
          <header className="flex items-center justify-between pb-8 pt-8 text-white">
            <button className="inline-flex items-center gap-2 text-sm font-bold text-white/90">
              <ArrowLeft size={16} />
              Go Back
            </button>
            <AnimatedYear />
            <button className="rounded-md p-2 text-white/90" aria-label="Open menu">
              <TwoLineMenuIcon />
            </button>
          </header>

          <div className="rounded-md bg-[#25329b] px-5 py-5 shadow-[0_12px_25px_rgba(8,14,67,0.2)] sm:px-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="no-scrollbar flex min-w-0 flex-1 touch-pan-x items-center gap-6 overflow-x-auto">
                <div className="flex shrink-0 items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f2b345] text-white">
                    <Check size={16} strokeWidth={3} />
                  </span>
                  <span className="text-sm font-bold text-white/95">
                    Personal details
                  </span>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className={`${stepCircleClass} bg-white text-[#26318f]`}>
                    2
                  </span>
                  <span className="text-sm font-bold text-white/95">Order details</span>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className={`${stepCircleClass} bg-[#152584] text-white`}>
                    3
                  </span>
                  <span className="text-sm font-bold text-white/95">Payment</span>
                </div>

                <div className="flex shrink-0 items-center gap-3">
                  <span className={`${stepCircleClass} bg-[#152584] text-white`}>
                    4
                  </span>
                  <span className="text-sm font-bold text-white/95">Confirmation</span>
                </div>
              </div>

              <button className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-white/90">
                <ArrowLeft size={14} />
                Previous step
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="-mt-24 pb-20">
        <div className="mx-auto grid w-full max-w-[1120px] grid-cols-1 gap-6 px-4 sm:px-6 lg:grid-cols-[1.7fr_0.8fr] lg:px-10">
          <article className="overflow-hidden rounded-md bg-white shadow-[0_14px_34px_rgba(16,26,88,0.1)]">
            <div className="flex flex-col items-start justify-between gap-3 px-6 pb-5 pt-8 sm:flex-row sm:items-center sm:px-10">
              <h2 className="text-xl font-extrabold leading-none text-[#192654] sm:text-[1.45rem] lg:text-[1.3rem]">
                Order items
              </h2>
              <button className="inline-flex items-center gap-2 text-sm font-bold text-[#222f73] sm:text-[0.95rem]">
                <Pencil size={16} />
                Edit shopping cart
              </button>
            </div>

            <div className="px-6 sm:px-10">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`flex flex-col items-start gap-4 py-5 sm:flex-row sm:items-center sm:gap-5 ${
                    index < products.length - 1 ? "border-b border-[#e9edf6]" : ""
                  }`}
                >
                  <ProductThumb type={product.image} />

                  <div className="min-w-0 flex-1">
                    <h3 className="text-lg font-extrabold leading-tight text-[#1f2f71] sm:text-[1.2rem] lg:text-[1.1rem]">
                      {product.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#54607e] sm:text-[0.93rem] lg:whitespace-nowrap">
                      {product.details}
                    </p>
                    <p className="mt-1 text-sm font-bold text-[#3f4d73] sm:text-[0.93rem]">
                      {product.quantity}
                    </p>
                  </div>

                  <div className="text-left sm:text-right">
                    <p className="text-3xl font-extrabold leading-none text-[#1f2f70] sm:text-[1.7rem] lg:text-[1.55rem]">
                      {product.total}
                    </p>
                    <p className="mt-2 text-base font-bold leading-none text-[#626d8c] sm:mt-3 sm:text-[1rem] lg:text-[0.95rem]">
                      {product.unit}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-3 border-t border-[#e9edf6] bg-[#f6f7fb] px-6 py-6 text-center sm:px-10">
              <button className="text-sm font-bold text-[#222f73] sm:text-[1rem]">
                Have discount code? Click to enter it.
              </button>
            </div>
          </article>

          <aside className="space-y-6">
            <article className="rounded-md bg-white px-6 pb-7 pt-8 shadow-[0_14px_34px_rgba(16,26,88,0.1)] sm:px-8">
              <h2 className="text-xl font-extrabold leading-none text-[#192654] sm:text-[1.45rem] lg:text-[1.3rem]">
                Summary
              </h2>
              <p className="mt-4 max-w-[260px] text-sm font-semibold leading-6 text-[#5a6484] sm:text-[0.95rem]">
                <span className="block">The total cost consist of the tax,</span>
                <span className="block">insurance and the delivery charge.</span>
              </p>

              <div className="mt-5 space-y-4">
                {summaryRows.map((row) => (
                  <div
                    key={row.label}
                    className="flex items-center justify-between gap-3 text-base sm:text-[1.05rem]"
                  >
                    <span className="font-bold text-[#4f5b7f]">{row.label}</span>
                    <span className="font-extrabold text-[#24317a]">{row.value}</span>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-[#e9edf6]" />
              <div className="flex items-center justify-between text-xl font-extrabold text-[#1a2652] sm:text-[1.25rem]">
                <span>TOTAL:</span>
                <span>€ 75.24</span>
              </div>
            </article>

            <article className="flex items-center justify-between rounded-md bg-white px-6 py-7 shadow-[0_14px_34px_rgba(16,26,88,0.1)] sm:px-8">
              <h2 className="text-xl font-extrabold text-[#192654] sm:text-[1.45rem] lg:text-[1.3rem]">
                Delivery
              </h2>
              <button className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d6dced] text-[#24317a]">
                <Plus size={18} />
              </button>
            </article>

            <button className="h-16 w-full rounded-md bg-[#121f8f] text-lg font-bold text-white shadow-[0_10px_24px_rgba(14,28,131,0.3)] transition hover:bg-[#0e1978] sm:text-[1.1rem]">
              Next step
            </button>
          </aside>
        </div>
      </section>

      <section className="pb-16">
        <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6 lg:px-10">
          <div className="border-t border-dashed border-[#d9ddea] pt-14" />

          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3 sm:gap-8">
            <article>
              <span className="mx-auto inline-flex h-10 w-10 items-center justify-center text-[#efb347]">
                <LockKeyhole size={32} strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-[#1c2956] sm:text-[1.45rem]">
                Your information is Safe
              </h3>
              <p className="mx-auto mt-3 max-w-[310px] text-sm font-semibold leading-6 text-[#5a6484] sm:text-[0.95rem]">
                <span className="block whitespace-nowrap">
                  The total cost consist of the tax, insurance and
                </span>
                <span className="block">the delivery charge.</span>
              </p>
            </article>

            <article>
              <span className="mx-auto inline-flex h-10 w-10 items-center justify-center text-[#efb347]">
                <ShieldCheck size={32} strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-[#1c2956] sm:text-[1.45rem]">
                Secure checkout
              </h3>
              <p className="mx-auto mt-3 max-w-[310px] text-sm font-semibold leading-6 text-[#5a6484] sm:text-[0.95rem]">
                <span className="block whitespace-nowrap">
                  The total cost consist of the tax, insurance and
                </span>
                <span className="block">the delivery charge.</span>
              </p>
            </article>

            <article>
              <span className="mx-auto inline-flex h-10 w-10 items-center justify-center text-[#efb347]">
                <Headphones size={32} strokeWidth={1.7} />
              </span>
              <h3 className="mt-4 text-2xl font-extrabold text-[#1c2956] sm:text-[1.45rem]">
                24/7 Support
              </h3>
              <p className="mx-auto mt-3 max-w-[310px] text-sm font-semibold leading-6 text-[#5a6484] sm:text-[0.95rem]">
                <span className="block whitespace-nowrap">
                  The total cost consist of the tax, insurance and
                </span>
                <span className="block">the delivery charge.</span>
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
