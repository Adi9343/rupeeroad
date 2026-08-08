export const theme = {
  colors: {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-slate-100",
    success: "bg-emerald-100 text-emerald-700",
    warning: "bg-amber-100 text-amber-700",
    danger: "bg-red-100 text-red-700",
    info: "bg-blue-100 text-blue-700",
  },

  text: {
    heading: "text-slate-900",
    body: "text-slate-600",
    muted: "text-slate-500",
  },

  radius: {
    card: "rounded-3xl",
    input: "rounded-2xl",
    button: "rounded-xl",
  },

  shadow: {
    card: "shadow-xl",
    light: "shadow-sm",
  },

  spacing: {
    section: "py-12 px-6",
    container: "max-w-4xl mx-auto",
  },
} as const;