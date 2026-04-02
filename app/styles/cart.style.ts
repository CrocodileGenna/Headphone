export const s = {
  overlay: "fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[60] transition-opacity duration-300",
  
  drawer: "fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-2xl z-[70] flex flex-col transition-transform duration-500 ease-out",
  
  header: "p-5 border-b border-slate-100 flex justify-between items-center bg-white",
  title: "text-xl font-bold text-slate-900 flex items-center gap-2",
  closeBtn: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-900 transition",
  
  content: "flex-grow overflow-y-auto p-5 space-y-4 scrollbar-thin",
  item: "flex gap-4 p-3 rounded-xl border border-transparent hover:border-slate-100 transition-colors",
  itemImg: "w-16 h-16 bg-slate-50 rounded-lg object-contain p-1 border border-slate-100",
  itemInfo: "flex-grow py-1",
  itemName: "font-bold text-slate-900 text-sm leading-tight mb-1",
  itemPrice: "text-blue-600 font-bold text-sm",
  removeBtn: "text-slate-300 hover:text-red-500 transition-colors self-start p-1",
  
  footer: "p-6 border-t border-slate-100 bg-slate-50/80 backdrop-blur-md",
  totalRow: "flex justify-between items-center mb-6",
  totalLabel: "text-slate-500 font-medium",
  totalAmount: "text-2xl font-black text-slate-900",
  checkoutBtn: "w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-blue-200 flex justify-center items-center gap-3 active:scale-[0.98] disabled:opacity-50 disabled:grayscale"
};