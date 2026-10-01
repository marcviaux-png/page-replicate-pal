import { Head, ViteReactSSG } from "vite-react-ssg";
import * as React from "react";
import { useState, useEffect, Suspense, useRef } from "react";
import * as ReactJSXDevRuntime from "react/jsx-dev-runtime";
import { useLocation, Link, Outlet, useSearchParams } from "react-router-dom";
import * as ToastPrimitives from "@radix-ui/react-toast";
import { cva } from "class-variance-authority";
import { X, ChevronRight, Check, Circle, ChevronDown, Menu, Phone, Mail, MapPin, Facebook, Linkedin, Instagram, Sparkles, ArrowRight, Eye, TrendingUp, CheckCircle, Compass, Palette, Monitor, Rocket, Heart, BadgeCheck, GraduationCap, Trophy, Building2, Landmark, Building, BookOpen, Search, Shield, Users, Send, DollarSign, Lightbulb, Target, Wrench, Code, Clock, Zap, BarChart3, Bot, MessageSquare, FileText, Calendar, LayoutDashboard, ExternalLink, ArrowLeft, Award } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { useTheme } from "next-themes";
import { Toaster as Toaster$2 } from "sonner";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { Helmet } from "react-helmet-async";
import { Slot } from "@radix-ui/react-slot";
import * as LabelPrimitive from "@radix-ui/react-label";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
const _jsxDEV = ReactJSXDevRuntime.jsxDEV;
const Fragment = ReactJSXDevRuntime.Fragment;
const SOURCE_KEY = Symbol.for("__jsxSource__");
const cleanFileName = (fileName) => {
  if (!fileName) return "";
  if (fileName.includes("dev_server")) {
    fileName = fileName.split("dev_server")[1].slice(1);
  }
  if (fileName.includes("sandbox-scheduler/sandbox")) {
    const sandboxPart = fileName.split("sandbox-scheduler/")[1];
    fileName = sandboxPart.split("/").slice(1).join("/");
  }
  return fileName.replace(/^\/dev-server\//, "");
};
const sourceElementMap = /* @__PURE__ */ new Map();
window.sourceElementMap = sourceElementMap;
function getSourceKey(sourceInfo) {
  return `${cleanFileName(sourceInfo.fileName)}:${sourceInfo.lineNumber}:${sourceInfo.columnNumber}`;
}
function unregisterElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  const refs = sourceElementMap.get(key);
  if (refs) {
    for (const ref of refs) {
      if (ref.deref() === node) {
        refs.delete(ref);
        break;
      }
    }
    if (refs.size === 0) {
      sourceElementMap.delete(key);
    }
  }
}
function registerElement(node, sourceInfo) {
  const key = getSourceKey(sourceInfo);
  if (!sourceElementMap.has(key)) {
    sourceElementMap.set(key, /* @__PURE__ */ new Set());
  }
  sourceElementMap.get(key).add(new WeakRef(node));
}
function getTypeName(type) {
  var _a, _b;
  if (typeof type === "string") return type;
  if (typeof type === "function") return type.displayName || type.name || "Unknown";
  if (typeof type === "object" && type !== null) {
    return type.displayName || ((_a = type.render) == null ? void 0 : _a.displayName) || ((_b = type.render) == null ? void 0 : _b.name) || "Unknown";
  }
  return "Unknown";
}
function jsxDEV(type, props, key, isStatic, source, self) {
  if ((source == null ? void 0 : source.fileName) && typeof type !== "string" && type !== Fragment) {
    const typeName = getTypeName(type);
    const jsxSourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: typeName
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          if (!node[SOURCE_KEY]) {
            node[SOURCE_KEY] = jsxSourceInfo;
            registerElement(node, jsxSourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  if ((source == null ? void 0 : source.fileName) && typeof type === "string") {
    const sourceInfo = {
      fileName: cleanFileName(source.fileName),
      lineNumber: source.lineNumber,
      columnNumber: source.columnNumber,
      displayName: type
    };
    const originalRef = props == null ? void 0 : props.ref;
    const enhancedProps = {
      ...props,
      ref: (node) => {
        if (node) {
          const existingSource = node[SOURCE_KEY];
          if (existingSource) {
            if (getSourceKey(existingSource) !== getSourceKey(sourceInfo)) {
              unregisterElement(node, existingSource);
              node[SOURCE_KEY] = sourceInfo;
              registerElement(node, sourceInfo);
            }
          } else {
            node[SOURCE_KEY] = sourceInfo;
            registerElement(node, sourceInfo);
          }
        }
        if (typeof originalRef === "function") {
          originalRef(node);
        } else if (originalRef && typeof originalRef === "object") {
          originalRef.current = node;
        }
      }
    };
    return _jsxDEV(type, enhancedProps, key, isStatic, source, self);
  }
  return _jsxDEV(type, props, key, isStatic, source, self);
}
const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1e6;
let count = 0;
function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}
const toastTimeouts = /* @__PURE__ */ new Map();
const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }
  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: "REMOVE_TOAST",
      toastId
    });
  }, TOAST_REMOVE_DELAY);
  toastTimeouts.set(toastId, timeout);
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TOAST":
      return {
        ...state,
        toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT)
      };
    case "UPDATE_TOAST":
      return {
        ...state,
        toasts: state.toasts.map((t) => t.id === action.toast.id ? { ...t, ...action.toast } : t)
      };
    case "DISMISS_TOAST": {
      const { toastId } = action;
      if (toastId) {
        addToRemoveQueue(toastId);
      } else {
        state.toasts.forEach((toast2) => {
          addToRemoveQueue(toast2.id);
        });
      }
      return {
        ...state,
        toasts: state.toasts.map(
          (t) => t.id === toastId || toastId === void 0 ? {
            ...t,
            open: false
          } : t
        )
      };
    }
    case "REMOVE_TOAST":
      if (action.toastId === void 0) {
        return {
          ...state,
          toasts: []
        };
      }
      return {
        ...state,
        toasts: state.toasts.filter((t) => t.id !== action.toastId)
      };
  }
};
const listeners = [];
let memoryState = { toasts: [] };
function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => {
    listener(memoryState);
  });
}
function toast({ ...props }) {
  const id = genId();
  const update = (props2) => dispatch({
    type: "UPDATE_TOAST",
    toast: { ...props2, id }
  });
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({
    type: "ADD_TOAST",
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      }
    }
  });
  return {
    id,
    dismiss,
    update
  };
}
function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, [state]);
  return {
    ...state,
    toast,
    dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId })
  };
}
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const ToastProvider = ToastPrimitives.Provider;
const ToastViewport = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Viewport,
  {
    ref,
    className: cn(
      "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 14,
    columnNumber: 3
  },
  void 0
));
ToastViewport.displayName = ToastPrimitives.Viewport.displayName;
const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
const Toast = React.forwardRef(({ className, variant, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(ToastPrimitives.Root, { ref, className: cn(toastVariants({ variant }), className), ...props }, void 0, false, {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 44,
    columnNumber: 10
  }, void 0);
});
Toast.displayName = ToastPrimitives.Root.displayName;
const ToastAction = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Action,
  {
    ref,
    className: cn(
      "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors group-[.destructive]:border-muted/40 hover:bg-secondary group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 group-[.destructive]:focus:ring-destructive disabled:pointer-events-none disabled:opacity-50",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 52,
    columnNumber: 3
  },
  void 0
));
ToastAction.displayName = ToastPrimitives.Action.displayName;
const ToastClose = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  ToastPrimitives.Close,
  {
    ref,
    className: cn(
      "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity group-hover:opacity-100 group-[.destructive]:text-red-300 hover:text-foreground group-[.destructive]:hover:text-red-50 focus:opacity-100 focus:outline-none focus:ring-2 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
      className
    ),
    "toast-close": "",
    ...props,
    children: /* @__PURE__ */ jsxDEV(X, { className: "h-4 w-4" }, void 0, false, {
      fileName: "/dev-server/src/components/ui/toast.tsx",
      lineNumber: 76,
      columnNumber: 5
    }, void 0)
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/toast.tsx",
    lineNumber: 67,
    columnNumber: 3
  },
  void 0
));
ToastClose.displayName = ToastPrimitives.Close.displayName;
const ToastTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Title, { ref, className: cn("text-sm font-semibold", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 85,
  columnNumber: 3
}, void 0));
ToastTitle.displayName = ToastPrimitives.Title.displayName;
const ToastDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(ToastPrimitives.Description, { ref, className: cn("text-sm opacity-90", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/toast.tsx",
  lineNumber: 93,
  columnNumber: 3
}, void 0));
ToastDescription.displayName = ToastPrimitives.Description.displayName;
function Toaster$1() {
  const { toasts } = useToast();
  return /* @__PURE__ */ jsxDEV(ToastProvider, { children: [
    toasts.map(function({ id, title, description, action, ...props }) {
      return /* @__PURE__ */ jsxDEV(Toast, { ...props, children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid gap-1", children: [
          title && /* @__PURE__ */ jsxDEV(ToastTitle, { children: title }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 13,
            columnNumber: 25
          }, this),
          description && /* @__PURE__ */ jsxDEV(ToastDescription, { children: description }, void 0, false, {
            fileName: "/dev-server/src/components/ui/toaster.tsx",
            lineNumber: 14,
            columnNumber: 31
          }, this)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, this),
        action,
        /* @__PURE__ */ jsxDEV(ToastClose, {}, void 0, false, {
          fileName: "/dev-server/src/components/ui/toaster.tsx",
          lineNumber: 17,
          columnNumber: 13
        }, this)
      ] }, id, true, {
        fileName: "/dev-server/src/components/ui/toaster.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, this);
    }),
    /* @__PURE__ */ jsxDEV(ToastViewport, {}, void 0, false, {
      fileName: "/dev-server/src/components/ui/toaster.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/ui/toaster.tsx",
    lineNumber: 8,
    columnNumber: 5
  }, this);
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsxDEV(
    Toaster$2,
    {
      theme,
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/sonner.tsx",
      lineNumber: 10,
      columnNumber: 5
    },
    void 0
  );
};
const TooltipProvider = TooltipPrimitive.Provider;
const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  TooltipPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/tooltip.tsx",
    lineNumber: 16,
    columnNumber: 3
  },
  void 0
));
TooltipContent.displayName = TooltipPrimitive.Content.displayName;
const leapuxLogo = "/assets/leapux-logo-DmAquqBq.png";
const leapuxLogoDark = "/assets/leapux-logo-dark-BD7IAqvt.png";
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[state=open]:bg-accent focus:bg-accent",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxDEV(ChevronRight, { className: "ml-auto h-4 w-4" }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 35,
        columnNumber: 5
      }, void 0)
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
    lineNumber: 25,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
    lineNumber: 44,
    columnNumber: 3
  },
  void 0
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
    lineNumber: 60,
    columnNumber: 5
  },
  void 0
) }, void 0, false, {
  fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
  lineNumber: 59,
  columnNumber: 3
}, void 0));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      inset && "pl-8",
      className
    ),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
    lineNumber: 79,
    columnNumber: 3
  },
  void 0
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(Check, { className: "h-4 w-4" }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 105,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 104,
        columnNumber: 5
      }, void 0),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
    lineNumber: 95,
    columnNumber: 3
  },
  void 0
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors data-[disabled]:pointer-events-none data-[disabled]:opacity-50 focus:bg-accent focus:text-accent-foreground",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxDEV("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsxDEV(Circle, { className: "h-2 w-2 fill-current" }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 9
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 127,
        columnNumber: 7
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
        lineNumber: 126,
        columnNumber: 5
      }, void 0),
      children
    ]
  },
  void 0,
  true,
  {
    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
    lineNumber: 118,
    columnNumber: 3
  },
  void 0
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxDEV(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
    lineNumber: 142,
    columnNumber: 3
  },
  void 0
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(DropdownMenuPrimitive.Separator, { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/dropdown-menu.tsx",
  lineNumber: 154,
  columnNumber: 3
}, void 0));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
const LeapNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [aiExpanded, setAiExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  useEffect(() => {
    if (!isOpen) setAiExpanded(false);
  }, [isOpen]);
  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Capabilities", path: "/capabilities" },
    { name: "About", path: "/about" },
    { name: "Our Work", path: "/portfolio" }
  ];
  const aiLinks = [
    { name: "AI Services", path: "/ai-services" },
    { name: "AI Training & Enablement", path: "/ai-training" },
    { name: "Generative Engine Optimization", path: "/geo" }
  ];
  const isActive = (path) => location.pathname === path;
  const isAiActive = aiLinks.some((link) => isActive(link.path));
  const getLinkClasses = (path) => {
    const active = isActive(path);
    if (active) return "text-leap-orange underline underline-offset-8 decoration-2";
    if (scrolled) return "text-leap-black hover:text-leap-orange opacity-80";
    return "text-leap-white hover:text-leap-orange opacity-90";
  };
  const getAiTriggerClasses = () => {
    if (isAiActive) return "text-leap-orange underline underline-offset-8 decoration-2";
    if (scrolled) return "text-leap-black hover:text-leap-orange opacity-80";
    return "text-leap-white hover:text-leap-orange opacity-90";
  };
  return /* @__PURE__ */ jsxDEV("nav", { className: `fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "bg-leap-white shadow-sm py-4 border-b border-border" : "bg-transparent py-8"}`, children: [
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex justify-between items-center", children: [
      /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center group", children: /* @__PURE__ */ jsxDEV(
        "img",
        {
          src: scrolled ? leapuxLogoDark : leapuxLogo,
          alt: "LeapUX",
          className: "h-8 sm:h-10 w-auto transition-all duration-300"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/LeapNavbar.tsx",
          lineNumber: 66,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/LeapNavbar.tsx",
        lineNumber: 65,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "hidden md:flex items-center space-x-10", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/services",
            className: `text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses("/services")}`,
            children: "Services"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 75,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/capabilities",
            className: `text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses("/capabilities")}`,
            children: "Capabilities"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 83,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(DropdownMenu, { children: [
          /* @__PURE__ */ jsxDEV(DropdownMenuTrigger, { className: `text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 flex items-center gap-1 outline-none ${getAiTriggerClasses()}`, children: [
            "AI",
            /* @__PURE__ */ jsxDEV(ChevronDown, { className: "h-3 w-3" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 94,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 92,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV(DropdownMenuContent, { className: "bg-leap-white border border-gray-200 shadow-lg z-[100]", children: aiLinks.map((link) => /* @__PURE__ */ jsxDEV(DropdownMenuItem, { asChild: true, children: /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: link.path,
              className: `text-xs font-bold uppercase tracking-[0.15em] px-4 py-3 cursor-pointer ${isActive(link.path) ? "text-leap-orange" : "text-leap-black hover:text-leap-orange"}`,
              children: link.name
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 99,
              columnNumber: 21
            },
            void 0
          ) }, link.path, false, {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 98,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 96,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/LeapNavbar.tsx",
          lineNumber: 91,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/portfolio",
            className: `text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses("/portfolio")}`,
            children: "Our Work"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 113,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/about",
            className: `text-xs font-bold uppercase tracking-[0.2em] transition-all py-2 ${getLinkClasses("/about")}`,
            children: "About"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 121,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/contact",
            className: "bg-leap-orange text-leap-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:brightness-110 transition-all shadow-lg active:scale-95",
            children: "Contact Us"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 129,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/LeapNavbar.tsx",
        lineNumber: 73,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "md:hidden", children: /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setIsOpen(!isOpen),
          className: scrolled ? "text-leap-black" : "text-leap-white",
          children: isOpen ? /* @__PURE__ */ jsxDEV(X, { className: "h-6 w-6" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 142,
            columnNumber: 25
          }, void 0) : /* @__PURE__ */ jsxDEV(Menu, { className: "h-6 w-6" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapNavbar.tsx",
            lineNumber: 142,
            columnNumber: 53
          }, void 0)
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/LeapNavbar.tsx",
          lineNumber: 138,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/components/LeapNavbar.tsx",
        lineNumber: 137,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/LeapNavbar.tsx",
      lineNumber: 64,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/LeapNavbar.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, void 0),
    isOpen && /* @__PURE__ */ jsxDEV("div", { className: "md:hidden fixed inset-x-0 top-[64px] bottom-0 bg-leap-white shadow-2xl animate-slide-in-from-top overflow-y-auto overscroll-contain", children: /* @__PURE__ */ jsxDEV("div", { className: "px-6 py-4 pb-10", children: [
      navLinks.map((link) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: link.path,
          onClick: () => setIsOpen(false),
          className: "flex items-center justify-between text-sm font-bold uppercase tracking-[0.2em] text-leap-black py-4 border-b border-gray-100 hover:text-leap-orange transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV("span", { children: link.name }, void 0, false, {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 158,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange opacity-60", children: "→" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 159,
              columnNumber: 17
            }, void 0)
          ]
        },
        link.path,
        true,
        {
          fileName: "/dev-server/src/components/LeapNavbar.tsx",
          lineNumber: 152,
          columnNumber: 15
        },
        void 0
      )),
      /* @__PURE__ */ jsxDEV(
        "button",
        {
          onClick: () => setAiExpanded(!aiExpanded),
          className: "flex items-center justify-between w-full text-sm font-bold uppercase tracking-[0.2em] text-leap-black py-4 border-b border-gray-100 hover:text-leap-orange transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV("span", { children: "AI" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 166,
              columnNumber: 15
            }, void 0),
            /* @__PURE__ */ jsxDEV(ChevronDown, { className: `h-4 w-4 text-leap-orange opacity-60 transition-transform ${aiExpanded ? "rotate-180" : ""}` }, void 0, false, {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 167,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/components/LeapNavbar.tsx",
          lineNumber: 162,
          columnNumber: 13
        },
        void 0
      ),
      aiExpanded && /* @__PURE__ */ jsxDEV("div", { className: "bg-gray-50", children: aiLinks.map((link) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: link.path,
          onClick: () => setIsOpen(false),
          className: "flex items-center justify-between text-sm font-bold uppercase tracking-[0.2em] text-leap-black py-3 px-4 border-b border-gray-100 hover:text-leap-orange transition-colors",
          children: [
            /* @__PURE__ */ jsxDEV("span", { children: link.name }, void 0, false, {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 178,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange opacity-60", children: "→" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapNavbar.tsx",
              lineNumber: 179,
              columnNumber: 21
            }, void 0)
          ]
        },
        link.path,
        true,
        {
          fileName: "/dev-server/src/components/LeapNavbar.tsx",
          lineNumber: 172,
          columnNumber: 19
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/components/LeapNavbar.tsx",
        lineNumber: 170,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/contact",
          onClick: () => setIsOpen(false),
          className: "block w-full text-center bg-leap-orange text-leap-white py-4 rounded-full font-bold uppercase text-xs tracking-[0.2em] mt-8 shadow-lg active:scale-95 transition-transform",
          children: "Contact Us"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/components/LeapNavbar.tsx",
          lineNumber: 184,
          columnNumber: 13
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/LeapNavbar.tsx",
      lineNumber: 150,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/LeapNavbar.tsx",
      lineNumber: 149,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/LeapNavbar.tsx",
    lineNumber: 60,
    columnNumber: 5
  }, void 0);
};
const LeapFooter = () => {
  return /* @__PURE__ */ jsxDEV("footer", { className: "bg-leap-black text-leap-white pt-24 pb-12 overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-20", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-1", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "flex items-center mb-8 group", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: leapuxLogo,
            alt: "LeapUX",
            className: "h-8 w-auto"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 13,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 12,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 text-slate-400", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "tel:1-888-553-2789", className: "flex items-center gap-3 hover:text-leap-orange transition-colors", children: [
            /* @__PURE__ */ jsxDEV(Phone, { className: "w-4 h-4 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 21,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "1-888-553-2789" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 22,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 20,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("a", { href: "mailto:contact@leapux.com", className: "flex items-center gap-3 hover:text-leap-orange transition-colors", children: [
            /* @__PURE__ */ jsxDEV(Mail, { className: "w-4 h-4 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 25,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "contact@leapux.com" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 26,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 24,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV(MapPin, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 29,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: [
              "1554 Carling Ave. Unit 42,",
              /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
                fileName: "/dev-server/src/components/LeapFooter.tsx",
                lineNumber: 30,
                columnNumber: 49
              }, void 0),
              "Ottawa, ON K1Z 7M4"
            ] }, void 0, true, {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 30,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 28,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/LeapFooter.tsx",
        lineNumber: 11,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500", children: "Quick Links" }, void 0, false, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-5 text-slate-400 font-medium", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/", className: "hover:text-leap-orange transition-colors", children: "Home" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 39,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 39,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/about", className: "hover:text-leap-orange transition-colors", children: "About Us" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 40,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 40,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services", className: "hover:text-leap-orange transition-colors", children: "Services" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 41,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 41,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/portfolio", className: "hover:text-leap-orange transition-colors", children: "Our Work" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 42,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 42,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", className: "hover:text-leap-orange transition-colors", children: "Contact" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 43,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 43,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/LeapFooter.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500", children: "Services" }, void 0, false, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-5 text-slate-400 font-medium", children: [
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services#strategic-advisory", className: "hover:text-leap-orange transition-colors", children: "Strategic Advisory" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 51,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 51,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services#service-experience-design", className: "hover:text-leap-orange transition-colors", children: "Service & Experience Design" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 52,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 52,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services#digital-technology-transformation", className: "hover:text-leap-orange transition-colors", children: "Digital & Technology Transformation" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 53,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { children: /* @__PURE__ */ jsxDEV(Link, { to: "/services#delivery-adoption", className: "hover:text-leap-orange transition-colors", children: "Delivery & Adoption" }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/components/LeapFooter.tsx",
            lineNumber: 54,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 50,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/LeapFooter.tsx",
        lineNumber: 48,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-xs font-black uppercase tracking-[0.2em] mb-8 text-slate-500", children: "Follow Us" }, void 0, false, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4 mb-8", children: [
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://www.facebook.com/leapux",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-leap-orange hover:border-leap-orange transition-all",
              children: /* @__PURE__ */ jsxDEV(Facebook, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/components/LeapFooter.tsx",
                lineNumber: 68,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 62,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://www.linkedin.com/company/leapux/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-leap-orange hover:border-leap-orange transition-all",
              children: /* @__PURE__ */ jsxDEV(Linkedin, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/components/LeapFooter.tsx",
                lineNumber: 76,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 70,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            "a",
            {
              href: "https://www.instagram.com/leapux/",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-leap-orange hover:border-leap-orange transition-all",
              children: /* @__PURE__ */ jsxDEV(Instagram, { className: "w-5 h-5" }, void 0, false, {
                fileName: "/dev-server/src/components/LeapFooter.tsx",
                lineNumber: 84,
                columnNumber: 17
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/components/LeapFooter.tsx",
              lineNumber: 78,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 61,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-3 px-4 py-2 bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-widest text-leap-orange", children: "National Support • EN / FR" }, void 0, false, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 87,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/LeapFooter.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/LeapFooter.tsx",
      lineNumber: 9,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-[10px] font-black uppercase tracking-widest", children: [
      /* @__PURE__ */ jsxDEV("p", { children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " LeapUX. Operational since 2012."
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/LeapFooter.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex gap-10", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "hover:text-leap-white transition-colors cursor-pointer", children: "Privacy Policy" }, void 0, false, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 96,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "hover:text-leap-white transition-colors cursor-pointer", children: "Terms of Service" }, void 0, false, {
          fileName: "/dev-server/src/components/LeapFooter.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/LeapFooter.tsx",
        lineNumber: 95,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/LeapFooter.tsx",
      lineNumber: 93,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/LeapFooter.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, void 0) }, void 0, false, {
    fileName: "/dev-server/src/components/LeapFooter.tsx",
    lineNumber: 7,
    columnNumber: 5
  }, void 0);
};
const queryClient = new QueryClient();
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (hash) {
      setTimeout(() => {
        const el = document.querySelector(hash);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
  return null;
};
const Layout = () => /* @__PURE__ */ jsxDEV(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsxDEV(TooltipProvider, { children: [
  /* @__PURE__ */ jsxDEV(Toaster$1, {}, void 0, false, {
    fileName: "/dev-server/src/Layout.tsx",
    lineNumber: 31,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV(Toaster, {}, void 0, false, {
    fileName: "/dev-server/src/Layout.tsx",
    lineNumber: 32,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV(ScrollToTop, {}, void 0, false, {
    fileName: "/dev-server/src/Layout.tsx",
    lineNumber: 33,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col min-h-screen", children: [
    /* @__PURE__ */ jsxDEV(LeapNavbar, {}, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("main", { className: "flex-grow", children: /* @__PURE__ */ jsxDEV(Suspense, { fallback: null, children: /* @__PURE__ */ jsxDEV(Outlet, {}, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 38,
      columnNumber: 13
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 37,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 36,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV(LeapFooter, {}, void 0, false, {
      fileName: "/dev-server/src/Layout.tsx",
      lineNumber: 41,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/Layout.tsx",
    lineNumber: 34,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/Layout.tsx",
  lineNumber: 30,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/Layout.tsx",
  lineNumber: 29,
  columnNumber: 3
}, void 0);
const heroImage = "/assets/hero-ux-design-DSDIAwN2.jpg";
const teamCollaboration = "/assets/team-collaboration-DCgv5FBL.jpg";
const logoSJA = "/assets/logo-sja-BM61efFr.png";
const logoIJC = "/assets/logo-ijc-C4zkmM2_.png";
const logoBeneva = "/assets/logo-beneva-DCEFxJ1x.png";
const logoGoC = "/assets/logo-goc-C7N0NEEq.png";
const logoSHS = "/assets/logo-shs-DOEjk5zS.png";
const GeoFeatureSection = () => {
  return /* @__PURE__ */ jsxDEV("section", { className: "relative py-32 bg-leap-black overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-[0.03]", style: {
      backgroundImage: "linear-gradient(hsl(var(--leap-orange)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--leap-orange)) 1px, transparent 1px)",
      backgroundSize: "60px 60px"
    } }, void 0, false, {
      fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
      lineNumber: 8,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col lg:flex-row gap-16 lg:gap-24 items-start", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:w-1/2", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-8 rounded-full", children: [
          /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-3.5 h-3.5" }, void 0, false, {
            fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
            lineNumber: 19,
            columnNumber: 15
          }, void 0),
          "New Service"
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
          lineNumber: 18,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl sm:text-5xl font-bold text-leap-white mb-6 leading-[1.05] tracking-tight", children: [
          "Your next customer won't Google you.",
          " ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "They'll ask AI." }, void 0, false, {
            fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
            lineNumber: 25,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
          lineNumber: 23,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-400 leading-relaxed mb-10 max-w-lg", children: "Generative Engine Optimization (GEO) ensures your brand is visible, trusted, and cited by AI platforms like ChatGPT, Gemini, and Perplexity — where your audience is already searching." }, void 0, false, {
          fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
          lineNumber: 28,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 mb-12", children: /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/geo",
            className: "inline-flex justify-center items-center gap-3 px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl group",
            children: [
              "Explore GEO",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
                lineNumber: 38,
                columnNumber: 17
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
            lineNumber: 33,
            columnNumber: 15
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
          lineNumber: 32,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
        lineNumber: 17,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:w-1/2 space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-3 gap-4 mb-8", children: [
          { value: "527%", label: "Growth in AI search traffic in 2025" },
          { value: "65%", label: "Google searches ending with zero clicks" },
          { value: "84%", label: "Businesses not tracking AI visibility" }
        ].map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: "text-center p-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-3xl sm:text-4xl font-bold text-leap-orange mb-2", children: stat.value }, void 0, false, {
            fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
            lineNumber: 53,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-xs text-slate-500 leading-relaxed uppercase tracking-wider", children: stat.label }, void 0, false, {
            fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
            lineNumber: 54,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
          lineNumber: 52,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
          lineNumber: 46,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
          {
            icon: Eye,
            title: "AI Visibility",
            description: "Get your brand cited when AI answers questions in your industry."
          },
          {
            icon: TrendingUp,
            title: "Competitive Advantage",
            description: "Be the authority AI recommends — before your competitors are."
          }
        ].map((feature, i) => /* @__PURE__ */ jsxDEV(
          "div",
          {
            className: "group flex items-start gap-5 p-5 rounded-2xl border transition-all border-white/5 bg-white/[0.02] hover:border-white/10",
            children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl flex items-center justify-center shrink-0 bg-white/5", children: /* @__PURE__ */ jsxDEV(feature.icon, { className: "w-5 h-5 text-slate-400" }, void 0, false, {
                fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
                lineNumber: 78,
                columnNumber: 21
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
                lineNumber: 77,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-leap-white mb-1", children: feature.title }, void 0, false, {
                  fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
                  lineNumber: 81,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500 leading-relaxed", children: feature.description }, void 0, false, {
                  fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
                  lineNumber: 82,
                  columnNumber: 21
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
                lineNumber: 80,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
            lineNumber: 73,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
          lineNumber: 60,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
        lineNumber: 44,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
      lineNumber: 15,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
      lineNumber: 13,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/home/GeoFeatureSection.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, void 0);
};
const SITE_URL = "https://leapux.com";
const SITE_NAME = "LeapUX";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const Seo = ({ title, description, path, ogType = "website", image, ogTitle, ogDescription }) => {
  const finalOgTitle = ogTitle ?? title;
  const finalOgDescription = ogDescription ?? description;
  const url = `${SITE_URL}${path}`;
  const imageUrl = image ? image.startsWith("http") ? image : `${SITE_URL}${image}` : DEFAULT_OG_IMAGE;
  return /* @__PURE__ */ jsxDEV(Head, { children: [
    /* @__PURE__ */ jsxDEV("title", { children: title }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 28,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "description", content: description }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 29,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("link", { rel: "canonical", href: url }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 30,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:site_name", content: SITE_NAME }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 31,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:title", content: finalOgTitle }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 32,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:description", content: finalOgDescription }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 33,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:url", content: url }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 34,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:type", content: ogType }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 35,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:image", content: imageUrl }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 36,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:image:width", content: "1200" }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 37,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:image:height", content: "630" }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 38,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { property: "og:image:alt", content: `${SITE_NAME} — ${finalOgTitle}` }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 39,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:card", content: "summary_large_image" }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 40,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:title", content: finalOgTitle }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 41,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:description", content: finalOgDescription }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("meta", { name: "twitter:image", content: imageUrl }, void 0, false, {
      fileName: "/dev-server/src/components/Seo.tsx",
      lineNumber: 43,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/components/Seo.tsx",
    lineNumber: 27,
    columnNumber: 5
  }, void 0);
};
const Home = () => {
  const approachPoints = [
    "Start with what's real",
    "Let insights lead",
    "Strategize with intent",
    "Design for reality",
    "Leave teams stronger"
  ];
  const services = [
    {
      icon: Compass,
      title: "Strategic Advisory",
      description: "We work with leadership to make sense of complexity, align stakeholders, and build a clear case for change before solutions are designed."
    },
    {
      icon: Palette,
      title: "Service & Experience Design",
      description: "We research, design, and validate services that meet real user needs — grounded in accessibility, evidence-based discovery, and human-centred design."
    },
    {
      icon: Monitor,
      title: "Digital & Technology Transformation",
      description: "We help organizations evaluate digital opportunities, modernize systems, and align technology investments with clear strategic outcomes."
    },
    {
      icon: Rocket,
      title: "Delivery & Adoption",
      description: "We support implementation, change management, and stakeholder engagement — building your team's capability to sustain transformation."
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in", children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: "Service Design & Digital Transformation Consulting Ottawa | LeapUX",
        description: "LeapUX is a senior-led consultancy delivering service design, UX, and digital transformation for governments, public agencies, and mission-driven organizations across Canada.",
        path: "/",
        ogDescription: "Senior-led consultancy delivering UX, service design, and complex digital delivery for governments and mission-driven organizations across Canada."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 48,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Helmet, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": ["ProfessionalService", "Organization"],
  "name": "LeapUX",
  "url": "https://leapux.com",
  "logo": "https://leapux.com/og-image.jpg",
  "description": "Senior-led service design and digital transformation consultancy in Ottawa, Canada, serving government, crown corporations, and mission-driven organizations.",
  "telephone": "1-888-553-2789",
  "email": "contact@leapux.com",
  "foundingDate": "2012",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "1554 Carling Ave, Unit 42",
    "addressLocality": "Ottawa",
    "addressRegion": "ON",
    "postalCode": "K1Z 7M4",
    "addressCountry": "CA"
  },
  "areaServed": "Canada",
  "knowsAbout": ["service design", "UX research", "digital transformation", "government consulting", "generative engine optimization", "AI consulting", "human-centred design", "change management"],
  "sameAs": ["https://www.linkedin.com/company/leapux/", "https://www.facebook.com/leapux", "https://www.instagram.com/leapux/"]
}` }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 55,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 54,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative min-h-[85vh] sm:min-h-screen flex items-center overflow-hidden bg-leap-black", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: heroImage,
            alt: "Senior LeapUX consultants collaborating on a government service design project in Ottawa, Canada",
            width: 1920,
            height: 1080,
            loading: "eager",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 81,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 89,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 80,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-20 pb-12", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-6 sm:mb-12 rounded-full", children: "Senior-Led Digital Consultancy" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-leap-white mb-6 sm:mb-8 leading-[0.95] text-balance", children: [
          "Delivering services for ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "the real world." }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 98,
            columnNumber: 39
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 97,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-base sm:text-xl text-slate-300 mb-8 sm:mb-12 leading-relaxed font-light max-w-xl", children: "We help organizations understand real needs and deliver services that work." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/contact",
              className: "inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl",
              children: "Start a conversation"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 104,
              columnNumber: 15
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV(
            Link,
            {
              to: "/services",
              className: "inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full border border-leap-white/20 text-leap-white hover:bg-leap-white/10 transition-all",
              children: "Our services"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 110,
              columnNumber: 15
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 103,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 92,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 79,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-leap-light border-b border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-24 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "order-2 lg:order-1 relative", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "absolute -inset-4 bg-leap-brand/5 rounded-3xl -z-10" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 126,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
            alt: "Strategy Planning",
            width: 1200,
            height: 800,
            loading: "lazy",
            className: "rounded-3xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-1000"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 127,
            columnNumber: 15
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 125,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "order-1 lg:order-2", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-brand uppercase tracking-[0.2em] mb-4 italic", children: "How We Think" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 137,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight", children: "Build it right. Build it for the right people." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 138,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 leading-relaxed mb-10", children: "Great digital services balance business goals, operational realities, and real human needs. We help organizations bring these together to create services that are effective, usable, and built to perform in the real world." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 139,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-8", children: [
          { label: "Grounded in real user and organizational needs", iconColor: "bg-leap-brand" },
          { label: "Driven by evidence, not assumptions", iconColor: "bg-leap-orange" },
          { label: "Designed for real-world conditions", iconColor: "bg-leap-red" },
          { label: "Focused on outcomes and measurable impact", iconColor: "bg-leap-black" }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex gap-4", children: [
          /* @__PURE__ */ jsxDEV("div", { className: `w-1.5 h-12 ${item.iconColor} shrink-0 rounded-full` }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 150,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center", children: /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-leap-black uppercase tracking-wider text-sm", children: item.label }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 152,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 151,
            columnNumber: 21
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 149,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 136,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 124,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 123,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "How We Work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 167,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight", children: "From understanding to real-world outcomes." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 168,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 leading-relaxed mb-10", children: "Our delivery model moves from insight to strategy, design, and execution, grounded in evidence, shaped by collaboration, and built to deliver lasting impact." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 171,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-5", children: approachPoints.map((point, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-6 h-6 text-leap-orange shrink-0", strokeWidth: 2 }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 177,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-black font-medium", children: point }, void 0, false, {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 178,
            columnNumber: 21
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 176,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 174,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 166,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: teamCollaboration,
            alt: "LeapUX team collaborating on a service design strategy session for a Canadian government client",
            width: 1200,
            height: 800,
            loading: "lazy",
            className: "rounded-3xl shadow-2xl w-full grayscale group-hover:grayscale-0 transition-all duration-1000"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 184,
            columnNumber: 15
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-6 right-6 left-6 sm:left-auto sm:max-w-xs bg-leap-white p-6 rounded-2xl shadow-xl", children: /* @__PURE__ */ jsxDEV("p", { className: "text-leap-black font-medium leading-relaxed italic", children: '"Good strategy means nothing without the ability to deliver it in the real world."' }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 193,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 192,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 183,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 165,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 164,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 163,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-[#F6F7F9]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "What We Do" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 206,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight", children: "Consulting services for every stage of transformation" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 207,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 max-w-2xl mx-auto", children: "From strategy and user experience to technology, operations, and change management — we help organizations deliver with clarity and confidence." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 210,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 205,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: services.map((service, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "group bg-white p-8 rounded-2xl border border-slate-200 hover:border-leap-orange/30 hover:shadow-lg transition-all",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-leap-orange/20 transition-colors", children: /* @__PURE__ */ jsxDEV(service.icon, { className: "w-6 h-6 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 222,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 221,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-leap-black mb-3", children: service.title }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 224,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed", children: service.description }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 225,
              columnNumber: 17
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 217,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 215,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mt-12", children: /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/services",
          className: "inline-flex items-center gap-3 px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-colors group",
          children: [
            "View services",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" }, void 0, false, {
              fileName: "/dev-server/src/pages/Home.tsx",
              lineNumber: 236,
              columnNumber: 15
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 231,
          columnNumber: 13
        },
        void 0
      ) }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 230,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 204,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 203,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV(GeoFeatureSection, {}, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 243,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Who We Work With" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight", children: "Helping Organizations Deliver Services That Work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 250,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 max-w-2xl mx-auto", children: "We partner with governments, regulated industries, and mission-driven organizations to build and improve critical services for the people they serve." }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 253,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 248,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap justify-center items-center gap-12 md:gap-16 lg:gap-20", children: [
        /* @__PURE__ */ jsxDEV("img", { src: logoGoC, alt: "Government of Canada — LeapUX client", width: 200, height: 128, loading: "lazy", className: "h-32 md:h-40 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 259,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoSJA, alt: "St. John Ambulance — LeapUX client", width: 200, height: 128, loading: "lazy", className: "h-32 md:h-40 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 260,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoIJC, alt: "International Joint Commission — LeapUX client", width: 200, height: 128, loading: "lazy", className: "h-32 md:h-40 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 261,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoBeneva, alt: "Beneva — LeapUX client", width: 200, height: 112, loading: "lazy", className: "h-28 md:h-32 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoSHS, alt: "Soldiers Helping Soldiers — LeapUX client", width: 200, height: 112, loading: "lazy", className: "h-28 md:h-32 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/Home.tsx",
          lineNumber: 263,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 258,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 247,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 246,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-gradient-to-br from-leap-orange to-leap-red text-leap-white text-center overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-4", children: "Work with us" }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 271,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl sm:text-5xl font-bold mb-6 leading-tight text-balance tracking-tight", children: "Ready to improve how your service works in the real world?" }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 272,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-white/90 mb-10", children: "Tell us about your challenge and we'll set up a conversation about how we can help." }, void 0, false, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 275,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/contact",
            className: "inline-flex justify-center items-center px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full bg-white text-leap-black hover:bg-slate-100 transition-all",
            children: "Book a Consultation"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 279,
            columnNumber: 13
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/contact",
            className: "inline-flex justify-center items-center px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full border-2 border-white text-white hover:bg-white hover:text-leap-black transition-all",
            children: "Contact Us"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Home.tsx",
            lineNumber: 285,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Home.tsx",
        lineNumber: 278,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 270,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Home.tsx",
      lineNumber: 269,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Home.tsx",
    lineNumber: 47,
    columnNumber: 5
  }, void 0);
};
const About = () => {
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in", children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: "About LeapUX — Senior-Led Digital Consultancy in Ottawa, Canada",
        description: "Meet the LeapUX team — senior practitioners with 12+ years delivering UX, service design, and digital transformation for federal government, crown corporations, and nonprofits across Canada.",
        path: "/about",
        ogTitle: "About LeapUX — Ottawa's Senior-Led Service Design Consultancy",
        ogDescription: "LeapUX has delivered evidence-based UX and digital transformation for the Government of Canada, St. John Ambulance, Beneva, and mission-driven organizations since 2012."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 14,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000",
            alt: "Office Environment",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 26,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 31,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8", children: "About Us" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 34,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 max-w-3xl font-light leading-relaxed", children: "We started LeapUX because we knew there was a better way to do this work." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 33,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 24,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "pt-24 lg:pt-32 pb-16 lg:pb-20 bg-background overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-7 lg:pr-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6", children: "Our Story" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 49,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-4xl sm:text-5xl lg:text-6xl font-black text-foreground leading-[1.1] mb-10", children: [
          "Built for",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 51,
            columnNumber: 26
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "Complexity." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 52,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 50,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 text-lg text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Early on, we worked with small businesses making critical digital decisions—often without the guidance or support they actually needed. The stakes were real. The margin for error was small." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 55,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "As we grew, so did the complexity of the work. Today, we partner with government and enterprise organizations to design and deliver systems at scale." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 58,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "font-semibold text-foreground", children: "But our perspective hasn't changed." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "We still see the people behind the work—the teams responsible for delivery, the users relying on these systems, and the real-world impact when things don't go as planned." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 64,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 54,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 48,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-5 flex flex-col gap-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative rounded-2xl overflow-hidden group", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: teamCollaboration,
              alt: "Team collaborating on digital strategy",
              className: "w-full h-56 lg:h-64 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 74,
              columnNumber: 17
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 79,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 73,
          columnNumber: 15
        }, void 0),
        [
          { value: "15+", label: "Years of Industry Experience", color: "border-leap-orange" },
          { value: "2012", label: "Founded & Delivering Ever Since", color: "border-leap-brand" },
          { value: "EN/FR", label: "Fully Bilingual Delivery", color: "border-leap-orange" }
        ].map((stat, i) => /* @__PURE__ */ jsxDEV("div", { className: `border-l-4 ${stat.color} pl-8 py-4`, children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl lg:text-5xl font-black text-foreground", children: stat.value }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 88,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm font-medium text-muted-foreground mt-1", children: stat.label }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 89,
            columnNumber: 19
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 87,
          columnNumber: 17
        }, void 0))
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 71,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 46,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 45,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 44,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative text-leap-white py-24 lg:py-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
            alt: "Modern office environment",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 103,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-leap-black/85" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-8 right-0 text-[12rem] lg:text-[20rem] font-black text-white/[0.02] leading-none select-none pointer-events-none tracking-tighter z-[1]", children: "WHY" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 111,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6", children: "Why We Exist" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 116,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.15] mb-12", children: [
          "Because too much of this work",
          /* @__PURE__ */ jsxDEV("br", { className: "hidden sm:block" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 118,
            columnNumber: 42
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "still misses the mark." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 119,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 117,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-400 leading-relaxed mb-10", children: "We've seen what happens when projects are built on assumptions." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 122,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4 mb-16 pl-4 border-l-2 border-white/10", children: [
          "Systems that don't reflect real needs.",
          "Services that are difficult to use.",
          "Teams left managing the fallout of decisions they didn't fully control."
        ].map((line, i) => /* @__PURE__ */ jsxDEV("p", { className: "text-slate-300 text-lg lg:text-xl font-medium", children: line }, i, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 133,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 127,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-400 leading-relaxed mb-6", children: "There's often a gap between what's promised—and what actually works." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 139,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-12 pt-12 border-t border-white/10", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-2xl lg:text-3xl font-black text-leap-white leading-tight", children: "We exist to close that gap." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 145,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "w-16 h-1 bg-leap-orange mt-6" }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 144,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 100,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 bg-background overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6", children: "What We Believe" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 159,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-2xl sm:text-3xl lg:text-4xl font-black text-foreground leading-tight max-w-3xl mx-auto", children: [
          "Start with people.",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 161,
            columnNumber: 33
          }, void 0),
          "Prove it with evidence.",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 162,
            columnNumber: 38
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "Deliver it properly." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 163,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 160,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 158,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-0 max-w-5xl mx-auto", children: [
        {
          number: "01",
          heading: "Understand",
          body: "Good work comes from understanding real needs—not guessing."
        },
        {
          number: "02",
          heading: "Prove",
          body: "Making decisions based on evidence—not opinion."
        },
        {
          number: "03",
          heading: "Deliver",
          body: "Following through—not stopping at strategy."
        }
      ].map((belief, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: `p-8 lg:p-10 ${i < 2 ? "md:border-r border-b md:border-b-0 border-border" : ""}`,
          children: [
            /* @__PURE__ */ jsxDEV("span", { className: "text-5xl font-black text-leap-orange/20 block mb-4", children: belief.number }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 190,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-foreground mb-3", children: belief.heading }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 191,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: belief.body }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 192,
              columnNumber: 17
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 186,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 168,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto mt-16 text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "Because in complex environments, ideas aren't enough." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 199,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-bold text-foreground mt-2", children: "Execution is what creates impact." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 202,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 198,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 157,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 156,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 bg-muted overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-start", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:sticky lg:top-32", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6", children: "How We Work" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 220,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-black text-foreground leading-tight mb-6", children: [
          "Clear, accountable,",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 222,
            columnNumber: 36
          }, void 0),
          "and ",
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "built to last." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 223,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground leading-relaxed", children: "With over 15 years of experience, our work spans from discovery through to long-term operation." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 225,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground leading-relaxed mt-4 mb-8", children: "We focus on clarity from the start." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 228,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "rounded-xl overflow-hidden group hidden lg:block", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1531538606174-e1ed98789c4a?auto=format&fit=crop&q=80&w=800",
            alt: "Focused delivery workshop",
            className: "w-full h-48 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 234,
            columnNumber: 17
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 233,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 219,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-0", children: [
        [
          {
            title: "Defining outcomes early",
            desc: "We align on what success looks like before the first sprint begins."
          },
          {
            title: "Aligning on what success looks like",
            desc: "Shared understanding prevents misalignment and costly rework."
          },
          {
            title: "Taking shared ownership throughout",
            desc: "Your project is our project. We stay accountable from start to finish."
          }
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "group py-8 border-b border-border last:border-b-0", children: /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-5", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-3xl font-black text-leap-orange/30 shrink-0 mt-[-4px]", children: String(i + 1).padStart(2, "0") }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 260,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-foreground mb-2", children: item.title }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 264,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: item.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 265,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 263,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 259,
          columnNumber: 19
        }, void 0) }, i, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 258,
          columnNumber: 17
        }, void 0)),
        /* @__PURE__ */ jsxDEV("div", { className: "pt-10", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-bold text-foreground leading-relaxed", children: "No ambiguity. No disappearing after delivery." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground mt-1", children: "Just work that holds up in the real world." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 276,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 272,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 243,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 217,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 216,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 215,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 bg-background overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6", children: "What Makes Us Different" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 290,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-5", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-2xl sm:text-3xl font-black text-foreground leading-tight mb-8", children: [
            "We care—about the work,",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 296,
              columnNumber: 40
            }, void 0),
            "and about the people",
            /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 297,
              columnNumber: 37
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "responsible for it." }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 298,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-5 text-lg text-muted-foreground leading-relaxed", children: [
            /* @__PURE__ */ jsxDEV("p", { children: "We know what it feels like to be accountable for a high-stakes project. To navigate competing priorities. To be expected to deliver—no matter what." }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 301,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { children: "That's why we approach our work differently." }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 304,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 300,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-3 hidden lg:flex items-center", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-2xl overflow-hidden group w-full", children: /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=600",
            alt: "Team working together on a project",
            className: "w-full h-80 object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 313,
            columnNumber: 17
          },
          void 0
        ) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 312,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 311,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-4 flex flex-col justify-center", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            "We're honest, even when it's uncomfortable.",
            "We recommend what's right, not what's easy to sell.",
            "We stay involved until things are working as they should."
          ].map((commitment, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 rounded-full bg-leap-orange shrink-0 mt-2.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 330,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-medium leading-relaxed", children: commitment }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 331,
              columnNumber: 21
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 329,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 323,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-10 pt-8 border-t border-border", children: [
            /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground italic", children: "We're not here to hand off deliverables." }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 337,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-bold mt-1", children: "We're here to help make things work." }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 340,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 336,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 322,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 292,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 289,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 bg-muted overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-leap-orange/10 mb-6", children: /* @__PURE__ */ jsxDEV(Heart, { className: "w-7 h-7 text-leap-orange" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 356,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 355,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6", children: "Community" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 358,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-black text-foreground leading-tight mb-4", children: [
          "Supporting people",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 360,
            columnNumber: 32
          }, void 0),
          "beyond the work."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 359,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Our focus on people doesn't stop at our projects. We support organizations making a real difference." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 362,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 354,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [
        {
          name: "Shelter Movers Ottawa",
          mission: "Helping women and children safely leave violence.",
          image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&q=80&w=600"
        },
        {
          name: "Paint Jam Charity Events",
          mission: "Supporting children's health and community initiatives.",
          image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=600"
        },
        {
          name: "St. John Ambulance",
          mission: "Empowering Canadians to save lives through first aid.",
          image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600"
        }
      ].map((org, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "relative bg-background rounded-2xl overflow-hidden border border-border hover:border-leap-orange/40 transition-colors duration-300 group",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "h-40 overflow-hidden", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: org.image,
                alt: org.name,
                className: "w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 391,
                columnNumber: 19
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 390,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-8", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-1 bg-leap-orange mb-6 rounded-full" }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 398,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-foreground mb-3", children: org.name }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 399,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed", children: org.mission }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 400,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 397,
              columnNumber: 17
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 385,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 367,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 353,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 352,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative py-28 lg:py-40 bg-background overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-leap-orange via-leap-orange/60 to-transparent" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 413,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-leap-orange/[0.04] blur-3xl pointer-events-none" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 414,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-8", children: "Why It Matters" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 417,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-3xl sm:text-4xl lg:text-5xl font-black text-foreground leading-[1.15] mb-8", children: [
          "Because this work affects",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 419,
            columnNumber: 38
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "real people." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 420,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 418,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed", children: [
          /* @__PURE__ */ jsxDEV("p", { children: "Organizations invest heavily in digital transformation. But too often, those efforts don't translate into meaningful outcomes." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 423,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-foreground font-semibold", children: "We believe they should." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 426,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { children: "By combining evidence, discipline, and accountability, we help turn complex initiatives into systems that actually work—for the people who rely on them." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 427,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 422,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mt-12 pt-10 border-t border-border inline-block", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground text-lg", children: "Not just in theory." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 434,
            columnNumber: 13
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-black text-foreground mt-1", children: "In practice." }, void 0, false, {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 435,
            columnNumber: 13
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 433,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 416,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 411,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 bg-leap-black text-leap-white overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-6", children: "Sector Experience" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 446,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 max-w-4xl mx-auto", children: "LeapUX supports organizations delivering complex services across Canada." }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 447,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-400", children: "Our work spans multiple sectors, including:" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 450,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 445,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 mb-10", children: [
        { title: "Enterprise & Professional Services", desc: "Helping organizations improve operations, automation, and client experience." },
        { title: "Federal & Provincial Government", desc: "Modernizing services for citizens, businesses, and public sector teams." },
        { title: "Municipal & Regional Government", desc: "Improving digital services, engagement, and operational efficiency." },
        { title: "Crown Corporations", desc: "Supporting public mandates with modern platforms, data systems, and governance-aligned services." },
        { title: "Non-Profit & Mission-Driven Organizations", desc: "Strengthening platforms and tools that support communities and social impact." },
        { title: "Education & Research", desc: "Modernizing learning platforms, research infrastructure, and institutional services." }
      ].map((sector, i) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "rounded-xl bg-white/[0.04] border border-white/[0.08] p-8 hover:border-leap-orange/30 transition-colors duration-300 group",
          children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-8 group-hover:w-14 h-1 bg-leap-orange rounded-full mb-6 transition-all duration-300" }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 466,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-leap-white mb-3", children: sector.title }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 467,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 leading-relaxed text-sm", children: sector.desc }, void 0, false, {
              fileName: "/dev-server/src/pages/About.tsx",
              lineNumber: 468,
              columnNumber: 17
            }, void 0)
          ]
        },
        i,
        true,
        {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 462,
          columnNumber: 15
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 453,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-slate-400 text-lg italic max-w-3xl mx-auto", children: "Across sectors, our focus remains the same: deliver services that are secure, accessible, and built to last." }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 473,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 444,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 443,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 lg:py-32 bg-background overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-16 text-center", children: "Select Clients" }, void 0, false, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 484,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex justify-center items-center gap-8 md:gap-12 lg:gap-16", children: [
        /* @__PURE__ */ jsxDEV("img", { src: logoGoC, alt: "Government of Canada", loading: "lazy", className: "h-20 md:h-24 lg:h-28 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 487,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoSJA, alt: "St. John Ambulance", loading: "lazy", className: "h-20 md:h-24 lg:h-28 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 488,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoIJC, alt: "International Joint Commission", loading: "lazy", className: "h-20 md:h-24 lg:h-28 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 489,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoBeneva, alt: "Beneva", loading: "lazy", className: "h-16 md:h-20 lg:h-24 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 490,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("img", { src: logoSHS, alt: "Soldiers Helping Soldiers", loading: "lazy", className: "h-16 md:h-20 lg:h-24 w-auto grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 491,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 486,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 483,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 482,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative py-24 lg:py-32 text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000",
            alt: "Modern architecture",
            className: "w-full h-full object-cover"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 501,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-background/90" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 506,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 500,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-10 leading-tight text-balance", children: "Ready to work with a team that cares about getting it right?" }, void 0, false, {
          fileName: "/dev-server/src/pages/About.tsx",
          lineNumber: 509,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/contact",
            className: "group inline-flex justify-center items-center gap-3 px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-all shadow-xl",
            children: [
              "Talk to LeapUX",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 group-hover:translate-x-1 transition-transform" }, void 0, false, {
                fileName: "/dev-server/src/pages/About.tsx",
                lineNumber: 517,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/About.tsx",
            lineNumber: 512,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/About.tsx",
        lineNumber: 508,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/About.tsx",
      lineNumber: 499,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/About.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, void 0);
};
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxDEV(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props }, void 0, false, {
      fileName: "/dev-server/src/components/ui/button.tsx",
      lineNumber: 42,
      columnNumber: 12
    }, void 0);
  }
);
Button.displayName = "Button";
function useScrollAnimation(options = {}) {
  const { threshold = 0.15, rootMargin = "0px 0px -60px 0px", once = true } = options;
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);
  return [ref, isVisible];
}
const ScrollReveal = ({
  children,
  className = "",
  delay = 0,
  direction = "up",
  distance = 30,
  duration = 0.7,
  once = true
}) => {
  const [ref, isVisible] = useScrollAnimation({ once });
  const directionMap = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 }
  };
  const offset = directionMap[direction];
  const style = {
    transform: isVisible ? "translate3d(0, 0, 0)" : `translate3d(${offset.x}px, ${offset.y}px, 0)`,
    opacity: isVisible ? 1 : 0,
    transition: `transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: "transform, opacity"
  };
  return /* @__PURE__ */ jsxDEV("div", { ref, className, style, children }, void 0, false, {
    fileName: "/dev-server/src/components/ScrollReveal.tsx",
    lineNumber: 44,
    columnNumber: 5
  }, void 0);
};
const Services$1 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const whatWeDoItems = [
    {
      icon: Compass,
      label: "Strategic advisory",
      headline: "Set direction before you build.",
      body: "We work with leadership teams to make sense of complexity, align stakeholders, and build a clear case for change. This is the work that happens before a solution is designed: understanding the landscape, defining the right problem, and establishing a shared direction that holds up under scrutiny.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Palette,
      label: "Service & experience design",
      headline: "Design services that work for people.",
      body: "We research, design, and validate services that meet real user needs and that your team can actually deliver. Our work blends evidence-based discovery with human-centred design to create experiences that are intuitive, accessible, and built around how people actually behave, not how we assume they do.",
      image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Monitor,
      label: "Digital & technology transformation",
      headline: "Align technology with real outcomes.",
      body: "We help organizations evaluate digital opportunities, modernize legacy systems, and make technology investments that serve a clear strategic purpose. Our role is to ensure technology supports your service and organizational goals, not the other way around.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
    },
    {
      icon: Rocket,
      label: "Delivery & adoption",
      headline: "Make change stick.",
      body: "Transformation only succeeds when people understand, trust, and adopt what's been built. We support organizations through implementation, change management, and stakeholder engagement, and we stay focused on building your team's capability to sustain the work long after we're gone.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
    }
  ];
  const howWeWorkSteps = [
    {
      num: "01",
      title: "Start with what's real",
      body: "We take time to understand your users, constraints, systems, and organizational context before designing anything. Assumptions get tested early. Evidence drives what comes next.",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800"
    },
    {
      num: "02",
      title: "Let insights lead",
      body: "We surface the patterns, risks, and opportunities buried in what we find. Every strategic and design decision that follows is more confident because of this work.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800"
    },
    {
      num: "03",
      title: "Strategize with intent",
      body: "We align actions to your goals, governance frameworks, and organizational capacity, not just to industry best practice. Direction is only useful if it's achievable in your context.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
    },
    {
      num: "04",
      title: "Design for reality",
      body: "We build for how things actually work, technically, operationally, and humanly. Solutions that don't account for real-world constraints don't survive contact with them.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800"
    },
    {
      num: "05",
      title: "Leave teams stronger",
      body: "We deliver capability and continuity, not just deliverables. Every project is structured so your team finishes with more clarity, confidence, and ownership than when we started.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800"
    }
  ];
  const sectors = [
    { icon: Building2, title: "Enterprise & professional services", desc: "Helping organizations improve operations, automation, and client experience." },
    { icon: Landmark, title: "Federal & provincial government", desc: "Modernizing services for citizens, businesses, and public sector teams." },
    { icon: MapPin, title: "Municipal & regional government", desc: "Improving digital services, engagement, and operational efficiency." },
    { icon: Building, title: "Crown corporations", desc: "Supporting public mandates with modern platforms, data systems, and governance-aligned services." },
    { icon: Heart, title: "Non-profit & mission-driven organizations", desc: "Strengthening platforms and tools that support communities and social impact." },
    { icon: BookOpen, title: "Education & research", desc: "Modernizing learning platforms, research infrastructure, and institutional services." }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in bg-leap-light", children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: "UX, Service Design & Digital Transformation Services | LeapUX Ottawa",
        description: "LeapUX offers strategic advisory, service & experience design, digital transformation, and delivery & adoption consulting for governments and mission-driven organizations in Canada.",
        path: "/services",
        ogTitle: "Digital Transformation & Service Design Services | LeapUX",
        ogDescription: "From strategic advisory to hands-on delivery — LeapUX consulting services help governments and public organizations transform how they design and deliver services."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 87,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Helmet, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "LeapUX Consulting Services",
  "description": "Consulting services for government, public agencies, and mission-driven organizations in Canada.",
  "provider": {
    "@type": "Organization",
    "name": "LeapUX",
    "url": "https://leapux.com"
  },
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Service",
        "name": "Strategic Advisory",
        "description": "We work with leadership teams to make sense of complexity, align stakeholders, and build a clear case for change before solutions are designed.",
        "provider": { "@type": "Organization", "name": "LeapUX" },
        "areaServed": "Canada"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Service",
        "name": "Service & Experience Design",
        "description": "We research, design, and validate services that meet real user needs — grounded in accessibility, evidence-based discovery, and human-centred design.",
        "provider": { "@type": "Organization", "name": "LeapUX" },
        "areaServed": "Canada"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Service",
        "name": "Digital & Technology Transformation",
        "description": "We help organizations evaluate digital opportunities, modernize systems, and align technology investments with clear strategic outcomes.",
        "provider": { "@type": "Organization", "name": "LeapUX" },
        "areaServed": "Canada"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Service",
        "name": "Delivery & Adoption",
        "description": "We support implementation, change management, and stakeholder engagement — building your team's capability to sustain transformation.",
        "provider": { "@type": "Organization", "name": "LeapUX" },
        "areaServed": "Canada"
      }
    }
  ]
}` }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 94,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=2000",
            alt: "Strategic Consulting Background",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 156,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 161,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8", children: "Services" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 165,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 leading-relaxed font-light", children: "We help governments and mission-driven organizations understand real needs, navigate complexity, and deliver services that actually work, for the people using them and the teams responsible for them." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 164,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 154,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-28 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "mb-20", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "What we do" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl", children: "Whether you need strategic direction, hands-on design, technology guidance, or help managing change, we scope our work around what you actually need to move forward." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 178,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: whatWeDoItems.map((item, i) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxDEV("div", { id: item.label.toLowerCase().replace(/[&]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-"), className: "group relative rounded-2xl border border-border bg-white hover:border-leap-orange/30 transition-all duration-500 overflow-hidden h-full flex flex-col", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative h-48 overflow-hidden", children: [
          /* @__PURE__ */ jsxDEV(
            "img",
            {
              src: item.image,
              alt: item.label,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 193,
              columnNumber: 21
            },
            void 0
          ),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 198,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "absolute bottom-4 left-4", children: /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-xl bg-white/90 backdrop-blur-sm flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 201,
            columnNumber: 25
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 200,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 199,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 192,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "p-8 flex flex-col flex-1", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-foreground mb-1 group-hover:text-leap-orange transition-colors duration-300", children: item.label }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 208,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-semibold text-leap-orange/80 italic mb-4", children: item.headline }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 209,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed text-[15px]", children: item.body }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 210,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 207,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 190,
        columnNumber: 17
      }, void 0) }, i, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 189,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 0.3, children: /* @__PURE__ */ jsxDEV("div", { className: "mt-16 text-center", children: /* @__PURE__ */ jsxDEV(Link, { to: "/capabilities", children: /* @__PURE__ */ jsxDEV(Button, { className: "bg-leap-orange hover:bg-leap-red text-white px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full transition-colors duration-300 group", children: [
        "See our full capabilities",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 222,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 220,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 219,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 218,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 217,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 176,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "how-we-work", className: "py-32 bg-leap-black text-leap-white overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mb-24", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "How we work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 236,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] mb-8", children: "We don't start by designing. We start by understanding." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 237,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-300 leading-relaxed", children: "Every project follows the same progression, grounded in evidence, shaped by collaboration, and built so your team can sustain it long after we're gone. We bring rigour to complex problems without losing sight of what has to work in practice." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 240,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 235,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 234,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "hidden lg:grid lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden border border-white/[0.08]", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-5 bg-white/[0.02]", children: howWeWorkSteps.map((step, i) => /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: () => setActiveStep(i),
            className: `w-full text-left px-8 py-7 flex items-center gap-6 border-b border-white/[0.06] transition-all duration-300 group cursor-pointer ${activeStep === i ? "bg-white/[0.06]" : "hover:bg-white/[0.03]"}`,
            children: [
              /* @__PURE__ */ jsxDEV("span", { className: `text-2xl font-black transition-colors duration-300 ${activeStep === i ? "text-leap-orange" : "text-white/20 group-hover:text-white/40"}`, children: step.num }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 260,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: `text-lg font-bold transition-colors duration-300 ${activeStep === i ? "text-white" : "text-white/50 group-hover:text-white/70"}`, children: step.title }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 265,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: `w-4 h-4 ml-auto transition-all duration-300 ${activeStep === i ? "text-leap-orange opacity-100 translate-x-0" : "opacity-0 -translate-x-2"}` }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 270,
                columnNumber: 19
              }, void 0)
            ]
          },
          i,
          true,
          {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 251,
            columnNumber: 17
          },
          void 0
        )) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 249,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-7 flex flex-col", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "relative h-56 overflow-hidden", children: [
            /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: howWeWorkSteps[activeStep].image,
                alt: howWeWorkSteps[activeStep].title,
                className: "w-full h-full object-cover transition-opacity duration-500"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 280,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-leap-black via-leap-black/40 to-transparent" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 285,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "absolute bottom-4 right-6 text-[5rem] font-black leading-none text-white/[0.08] select-none", children: howWeWorkSteps[activeStep].num }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 286,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 279,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "p-12 flex-1 flex flex-col justify-center", children: [
            /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl font-bold text-white mb-6", children: howWeWorkSteps[activeStep].title }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 291,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 leading-relaxed", children: howWeWorkSteps[activeStep].body }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 294,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 290,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 278,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 247,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "lg:hidden space-y-4", children: howWeWorkSteps.map((step, i) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxDEV("div", { className: "relative p-8 rounded-2xl bg-white/[0.04] border border-white/[0.08]", children: [
        /* @__PURE__ */ jsxDEV("span", { className: "text-5xl font-black text-leap-orange/15 select-none absolute top-4 right-6", children: step.num }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 306,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
          /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-black text-leap-orange mb-2 block", children: step.num }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 310,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-white mb-4", children: step.title }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 311,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 leading-relaxed", children: step.body }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 312,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 309,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 305,
        columnNumber: 17
      }, void 0) }, i, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 304,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 302,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 232,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 231,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-28 bg-white overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-5 gap-8 mb-20", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Our Credentials" }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 326,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl lg:text-5xl font-bold text-leap-black leading-[1.1]", children: "Depth of expertise, grounded in practice." }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 327,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 325,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-3 flex items-end", children: /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-500 leading-relaxed max-w-2xl", children: "Our team brings professional certifications, academic training, and real-world experience across user experience, digital strategy, development, and delivery." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 332,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 331,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 324,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-slate-200", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "relative p-10 lg:p-12 bg-slate-50 group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(BadgeCheck, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 343,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 342,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-leap-black", children: "Certifications" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 345,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 341,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: [
            "Akendi UX Certified",
            "Nielsen Norman Group UX Certified",
            "Google Certified Professionals",
            "UX Land Certified",
            "Hootsuite Social Media Certified",
            "Project Management Professional (PMP)®",
            "AWS Partner",
            "Google AI Professional Certificate"
          ].map((cert, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm text-slate-600 leading-relaxed", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-leap-orange shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 359,
              columnNumber: 21
            }, void 0),
            cert
          ] }, i, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 358,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 347,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 340,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative p-10 lg:p-12 bg-white border-x border-slate-200 group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(GraduationCap, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 370,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 369,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-leap-black", children: "Education" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 372,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 368,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500 mb-6 leading-relaxed", children: "Our team's backgrounds span design, technology, and business — a strong foundation for complex digital work." }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 374,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: [
            "UX/UI Design & Digital Strategy",
            "Applied Arts & Interactive Media",
            "Commerce & Business Administration",
            "Computer Engineering & Software Development",
            "AI Certifications & Applied Experience"
          ].map((edu, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm text-slate-600 leading-relaxed", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "mt-1.5 w-1.5 h-1.5 rounded-full bg-leap-orange shrink-0" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 386,
              columnNumber: 21
            }, void 0),
            edu
          ] }, i, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 385,
            columnNumber: 19
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 377,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 367,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "relative p-10 lg:p-12 bg-slate-50 group", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-8", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 rounded-full bg-leap-orange/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Trophy, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 397,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 396,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-leap-black", children: "Awards & Recognition" }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 399,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 395,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "pb-6 border-b border-slate-200", children: [
              /* @__PURE__ */ jsxDEV("p", { className: "text-2xl font-bold text-leap-black mb-1", children: "Top Consultant" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 403,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500", children: "Ottawa, 2022" }, void 0, false, {
                fileName: "/dev-server/src/pages/Services.tsx",
                lineNumber: 404,
                columnNumber: 19
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 402,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "pb-6 border-b border-slate-200", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-600 leading-relaxed", children: [
              "Featured in the",
              " ",
              /* @__PURE__ */ jsxDEV(
                "a",
                {
                  href: "https://obj.ca/ottawa-digital-agency-opin-driving-st-john-ambulance-into-the-digital-age/",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "font-semibold text-leap-black underline decoration-leap-orange/40 underline-offset-4 hover:decoration-leap-orange transition-colors",
                  children: "Ottawa Business Journal"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/Services.tsx",
                  lineNumber: 409,
                  columnNumber: 21
                },
                void 0
              ),
              " ",
              "for digital transformation work with St. John Ambulance."
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 407,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 406,
              columnNumber: 17
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-600 leading-relaxed", children: "Ongoing contributions to UX research, design, and industry thought leadership." }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 421,
              columnNumber: 19
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Services.tsx",
              lineNumber: 420,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Services.tsx",
            lineNumber: 401,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 394,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 338,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 323,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 322,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-[#F6F7F9] text-foreground overflow-hidden", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Sectors we work in" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 436,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed", children: "We work in environments where the stakes are high, the constraints are real, and the margin for error is low." }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 437,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 435,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 434,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 rounded-[2rem] overflow-hidden border border-slate-200", children: sectors.map((sector, i) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-10 flex flex-col gap-4 group hover:bg-leap-orange/[0.03] transition-colors h-full", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 rounded-full bg-leap-orange/10 flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(sector.icon, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 447,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 446,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-foreground", children: sector.title }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 449,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500 leading-relaxed", children: sector.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 450,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 445,
        columnNumber: 17
      }, void 0) }, i, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 444,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 442,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 433,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 432,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-gradient-to-br from-leap-orange to-leap-red text-white text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-black uppercase tracking-[0.2em] text-white/70 mb-4", children: "Work with us" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 461,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-bold mb-6", children: "Ready to get started?" }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 462,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-white/90 mb-10", children: "Tell us about your challenge and we'll set up a conversation about how we can help." }, void 0, false, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 463,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { className: "bg-white hover:bg-slate-100 text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full", children: "Book a Consultation" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 468,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 467,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: /* @__PURE__ */ jsxDEV(Button, { className: "bg-transparent border-2 border-white text-white hover:bg-white hover:text-leap-black px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full", children: "Contact Us" }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 473,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/Services.tsx",
          lineNumber: 472,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Services.tsx",
        lineNumber: 466,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 460,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Services.tsx",
      lineNumber: 459,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Services.tsx",
    lineNumber: 86,
    columnNumber: 5
  }, void 0);
};
const ServiceCard = ({ title, tagline, description, includes, bestFor, image, id }) => /* @__PURE__ */ jsxDEV("div", { id, className: "group bg-leap-white border border-border rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-xl transition-all mb-16 scroll-mt-24", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-12", children: [
  /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-5 h-72 lg:h-auto relative overflow-hidden", children: [
    /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: image,
        alt: title,
        className: "absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-transform duration-1000"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 20,
        columnNumber: 9
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-leap-brand/10" }, void 0, false, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 25,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Capabilities.tsx",
    lineNumber: 19,
    columnNumber: 7
  }, void 0),
  /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-7 flex flex-col", children: [
    /* @__PURE__ */ jsxDEV("div", { className: "p-10 lg:p-14 border-b border-border flex-grow text-balance", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl sm:text-3xl font-bold text-leap-black mb-3", children: title }, void 0, false, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 29,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-leap-brand font-black text-xs mb-8 uppercase tracking-[0.2em]", children: tagline }, void 0, false, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 30,
        columnNumber: 11
      }, void 0),
      description.split("\n\n").map((para, i) => /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-lg leading-relaxed mb-3 last:mb-0", children: para }, i, false, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 32,
        columnNumber: 13
      }, void 0))
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 bg-slate-50/80", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "p-10 border-b sm:border-b-0 sm:border-r border-border", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6", children: "What's Included" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 37,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: includes.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm text-slate-700 font-medium", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-leap-brand mt-1.5 shrink-0 rounded-full" }, void 0, false, {
            fileName: "/dev-server/src/pages/Capabilities.tsx",
            lineNumber: 41,
            columnNumber: 19
          }, void 0),
          item
        ] }, i, true, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 40,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 38,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 36,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "p-10", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6", children: "When to use" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 48,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: bestFor.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-sm text-slate-700 font-medium", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "w-2 h-2 bg-leap-orange mt-1.5 shrink-0 rounded-full" }, void 0, false, {
            fileName: "/dev-server/src/pages/Capabilities.tsx",
            lineNumber: 52,
            columnNumber: 19
          }, void 0),
          item
        ] }, i, true, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 51,
          columnNumber: 17
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 49,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 47,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 35,
      columnNumber: 9
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Capabilities.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, void 0)
] }, void 0, true, {
  fileName: "/dev-server/src/pages/Capabilities.tsx",
  lineNumber: 18,
  columnNumber: 5
}, void 0) }, void 0, false, {
  fileName: "/dev-server/src/pages/Capabilities.tsx",
  lineNumber: 17,
  columnNumber: 3
}, void 0);
const Services = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const scrollToHash = () => {
        const el = document.getElementById(location.hash.slice(1));
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      };
      scrollToHash();
      const t1 = setTimeout(scrollToHash, 300);
      const t2 = setTimeout(scrollToHash, 800);
      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
      };
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.hash, location.key]);
  const serviceAreas = [
    {
      title: "Discovery & Research",
      tagline: "Understand the problem before designing the solution.",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
      description: "We help organizations uncover the real needs, constraints, and opportunities behind complex initiatives. Through structured research and discovery, we generate the insights required to guide strategy, design, and implementation decisions with confidence.\n\nBy grounding transformation efforts in evidence, we reduce risk and ensure solutions address real user and organizational needs.",
      includes: ["User and stakeholder research", "Service and journey mapping", "Experience audits", "Opportunity and risk identification", "Evidence-based insights and recommendations"],
      bestFor: ["Early-stage transformation initiatives", "Digital service redesign", "Complex or unclear problem spaces", "Public sector or high-impact services"]
    },
    {
      title: "Strategy & Planning",
      tagline: "Turn insights into clear direction and actionable plans.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      description: "We work with leadership teams to translate research and organizational goals into strategic direction. Our approach aligns stakeholders, prioritizes initiatives, and creates practical roadmaps for transformation.\n\nThe result is a shared understanding of priorities, investments, and measurable outcomes.",
      includes: ["Strategic planning and alignment", "Transformation roadmaps", "Governance and decision frameworks", "Initiative prioritization", "Program and delivery planning"],
      bestFor: ["Organizational transformation initiatives", "Digital modernization programs", "Multi-team or multi-department projects", "Strategic planning cycles"]
    },
    {
      title: "CX & UX Design",
      tagline: "Design experiences that work for people and organizations.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
      description: "We create customer and user experiences that are intuitive, accessible, and aligned with business objectives. By combining human-centered design with service thinking, we ensure solutions support both user needs and operational realities.\n\nOur design approach improves usability, engagement, and service effectiveness across digital and service channels.",
      includes: ["User experience design", "Customer journey mapping", "Service design", "Interaction and interface design", "Usability testing and validation"],
      bestFor: ["Digital service redesign", "New product or platform development", "Experience improvement initiatives", "Complex service ecosystems"]
    },
    {
      title: "Accessibility & Inclusive Design",
      tagline: "Ensure services are usable by everyone.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800",
      description: "Accessibility is not just compliance—it's about creating equitable experiences for all users. We help organizations design and deliver digital services that meet accessibility standards while improving usability for diverse audiences.\n\nOur work supports regulatory compliance while strengthening trust, reach, and service effectiveness.",
      includes: ["Accessibility audits and assessments", "WCAG compliance guidance", "Inclusive design practices", "Accessible UX design", "Accessibility remediation strategies"],
      bestFor: ["Public sector digital services", "Regulatory compliance initiatives", "Website or platform redesigns", "Accessibility remediation programs"]
    },
    {
      title: "Findability & Growth",
      tagline: "Help the right people find you and understand what you offer.",
      image: "https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800",
      description: "A great website only creates value if people can find it. We improve how your organization shows up across search engines and AI-driven platforms, through technical SEO, content structure, and generative search optimization (GEO), so your digital presence attracts the right traffic, not just more of it.",
      includes: ["Technical SEO", "Content and information architecture", "On-page and metadata strategy", "Generative search optimization (GEO)", "Analytics and performance tracking"],
      bestFor: ["Launching or redesigning a site", "Improving search visibility and traffic quality", "Reaching new markets or audiences", "Aligning content with business growth goals"]
    },
    {
      title: "AI & Automation",
      tagline: "Improve efficiency and insight through intelligent systems.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      description: "We help organizations identify opportunities to apply AI and automation in ways that enhance services, streamline operations, and support better decision-making.\n\nOur approach focuses on practical implementation—ensuring emerging technologies create real value rather than unnecessary complexity.",
      includes: ["AI opportunity assessments", "Process automation strategies", "Intelligent workflow design", "Operational optimization", "AI governance and responsible use guidance"],
      bestFor: ["Operational efficiency initiatives", "Digital modernization programs", "Data-driven service improvements", "Emerging technology exploration"]
    },
    {
      title: "Implementation & Delivery",
      tagline: "Turn strategy and design into working solutions.",
      image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
      description: "Successful transformation requires disciplined execution. We support organizations through implementation and delivery to ensure solutions are built effectively, integrated into existing systems, and capable of scaling.\n\nOur approach bridges strategy, design, and technical delivery to move initiatives from concept to impact.",
      includes: ["Agile program delivery", "Digital implementation support", "Cross-team coordination", "Solution integration", "Performance monitoring and optimization"],
      bestFor: ["Platform or service implementation", "Multi-vendor delivery environments", "Complex digital programs", "Technology transformation initiatives"]
    },
    {
      title: "Change & Adoption",
      tagline: "Help people successfully adopt new ways of working.",
      image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80&w=800",
      description: "Transformation succeeds when people understand, support, and adopt new systems and processes. We help organizations manage change by aligning leadership, engaging stakeholders, and enabling teams to adapt confidently.\n\nOur change management approach supports both organizational readiness and long-term sustainability.",
      includes: ["Organizational change management", "Stakeholder engagement strategies", "Training and adoption planning", "Change readiness assessments", "Transformation communications"],
      bestFor: ["Large transformation initiatives", "Technology implementations", "Organizational restructuring", "Culture or process change programs"]
    },
    {
      title: "Marketing & Communications",
      tagline: "Communicate transformation clearly and effectively.",
      image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
      description: "Clear communication is essential for building understanding, trust, and engagement. We help organizations develop communication strategies that support transformation initiatives and strengthen connections with internal and external audiences.",
      includes: ["Communications strategy", "Stakeholder messaging", "Campaign planning", "Internal engagement programs", "Content and narrative development"],
      bestFor: ["Organizational change initiatives", "Public sector service launches", "Stakeholder engagement programs", "Transformation communications"]
    },
    {
      title: "Brand & Experience Identity",
      tagline: "Align brand, service, and experience.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
      description: "We help organizations develop brand and experience systems that ensure consistency across digital products, services, and communications.\n\nBy aligning brand with strategy and user experience, organizations strengthen recognition, trust, and long-term engagement.",
      includes: ["Brand strategy", "Identity systems", "Experience guidelines", "Design systems", "Cross-channel experience alignment"],
      bestFor: ["Organizational rebranding", "Digital ecosystem redesign", "Service modernization initiatives", "Experience consistency challenges"]
    }
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in bg-leap-light", children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: "Digital Consulting Capabilities for Government & Public Sector | LeapUX",
        description: "LeapUX capabilities span UX research, service blueprinting, AI readiness, accessibility, change management, and evidence-based delivery for complex government mandates in Canada.",
        path: "/capabilities",
        ogTitle: "LeapUX Capabilities — UX, AI Readiness & Government Service Design",
        ogDescription: "From research and service blueprinting to AI integration and change management — explore LeapUX's full range of consulting capabilities for public sector mandates."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 170,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000",
            alt: "Consultancy Background",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Capabilities.tsx",
            lineNumber: 179,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 184,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 178,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8", children: "Our Capabilities" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 188,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 leading-relaxed font-light", children: "From strategy to delivery, we bring the expertise your team needs to design and build services that work in the real world." }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 189,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 187,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 177,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black leading-tight mb-6", children: "How Our Capabilities Work Together" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 198,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed", children: "Our capabilities work together to turn insight into strategy, design into solutions, and transformation into measurable impact." }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 201,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 197,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-12", children: serviceAreas.map((service, i) => {
        const slug = service.title.toLowerCase().replace(/[&]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-");
        return /* @__PURE__ */ jsxDEV(ServiceCard, { ...service, id: slug }, i, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 208,
          columnNumber: 20
        }, void 0);
      }) }, void 0, false, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 205,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 196,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-leap-black text-leap-white", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Why LeapUX" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 217,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-white mb-6 leading-tight", children: "Evidence, discipline, and real-world impact" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 218,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-300 leading-relaxed", children: "We bring rigour and clarity to complex challenges, helping teams move from uncertainty to confident delivery." }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 221,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 216,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
        { icon: Search, text: "Research-driven by default — evidence before assumptions" },
        { icon: Building, text: "Strategy and execution under one roof" },
        { icon: Shield, text: "Proven delivery in complex, high-stakes environments" },
        { icon: Users, text: "Senior-led, cross-disciplinary teams" },
        { icon: Rocket, text: "Focused on adoption and long-term impact" }
      ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 bg-white/[0.05] p-5 rounded-xl border border-white/[0.08]", children: [
        /* @__PURE__ */ jsxDEV(item.icon, { className: "w-5 h-5 text-leap-orange shrink-0" }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 234,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-leap-white font-medium", children: item.text }, void 0, false, {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 235,
          columnNumber: 19
        }, void 0)
      ] }, i, true, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 233,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 225,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 215,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 214,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 213,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-[#F6F7F9] text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl font-bold text-leap-black mb-8", children: "Ready to design a service that works?" }, void 0, false, {
        fileName: "/dev-server/src/pages/Capabilities.tsx",
        lineNumber: 245,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/contact",
          className: "inline-flex justify-center items-center px-12 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:bg-leap-red transition-all shadow-xl",
          children: "Contact Us"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/Capabilities.tsx",
          lineNumber: 246,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 244,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Capabilities.tsx",
      lineNumber: 243,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Capabilities.tsx",
    lineNumber: 169,
    columnNumber: 5
  }, void 0);
};
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxDEV(
      "input",
      {
        type,
        className: cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/components/ui/input.tsx",
        lineNumber: 8,
        columnNumber: 7
      },
      void 0
    );
  }
);
Input.displayName = "Input";
const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsxDEV(
    "textarea",
    {
      className: cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ref,
      ...props
    },
    void 0,
    false,
    {
      fileName: "/dev-server/src/components/ui/textarea.tsx",
      lineNumber: 9,
      columnNumber: 5
    },
    void 0
  );
});
Textarea.displayName = "Textarea";
const labelVariants = cva("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70");
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxDEV(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }, void 0, false, {
  fileName: "/dev-server/src/components/ui/label.tsx",
  lineNumber: 13,
  columnNumber: 3
}, void 0));
Label.displayName = LabelPrimitive.Root.displayName;
const SUPABASE_URL = "https://ujovfvvgcdjxrjnxnhes.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqb3ZmdnZnY2RqeHJqbnhuaGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5OTA1MzUsImV4cCI6MjA5OTU2NjUzNX0._xvkBx0xuYGWkjsVr5AUW8_EbPED9KoJ0b0QmtOUs8c";
function isNewSupabaseApiKey(value) {
  return value.startsWith("sb_publishable_") || value.startsWith("sb_secret_");
}
function createSupabaseFetch(supabaseKey) {
  return (input, init) => {
    const headers = new Headers(
      typeof Request !== "undefined" && input instanceof Request ? input.headers : void 0
    );
    if (init == null ? void 0 : init.headers) {
      new Headers(init.headers).forEach((value, key) => headers.set(key, value));
    }
    if (isNewSupabaseApiKey(supabaseKey) && headers.get("Authorization") === `Bearer ${supabaseKey}`) {
      headers.delete("Authorization");
    }
    headers.set("apikey", supabaseKey);
    return fetch(input, { ...init, headers });
  };
}
const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  global: {
    fetch: createSupabaseFetch(SUPABASE_PUBLISHABLE_KEY)
  },
  auth: {
    storage: typeof window !== "undefined" ? window.localStorage : void 0,
    persistSession: typeof window !== "undefined",
    autoRefreshToken: typeof window !== "undefined"
  }
});
async function sendFormSubmission(formName, fields) {
  const { error } = await supabase.functions.invoke("send-transactional-email", {
    body: {
      templateName: "form-submission",
      idempotencyKey: `${formName.toLowerCase().replace(/\s+/g, "-")}-${crypto.randomUUID()}`,
      templateData: { formName, fields }
    }
  });
  if (error) throw error;
}
const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(50, "First name must be less than 50 characters"),
  lastName: z.string().trim().min(1, "Last name is required").max(50, "Last name must be less than 50 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  organization: z.string().trim().max(100, "Organization name must be less than 100 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(2e3, "Message must be less than 2000 characters")
});
const Contact = () => {
  const { toast: toast2 } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    organization: "",
    message: ""
  });
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }
    const { firstName, lastName, email, organization, message } = result.data;
    try {
      await sendFormSubmission("Contact", [
        { label: "Name", value: `${firstName} ${lastName}` },
        { label: "Email", value: email },
        { label: "Organization", value: organization || "—" },
        { label: "Message", value: message }
      ]);
      toast2({
        title: "Message sent",
        description: "Thanks! We'll get back to you within 1–2 business days."
      });
      setFormData({ firstName: "", lastName: "", email: "", organization: "", message: "" });
    } catch (err) {
      console.error("Contact form submission failed", err);
      toast2({
        title: "Something went wrong",
        description: "Please try again or email contact@leapux.com directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const nextSteps = [
    "We'll review your message and get back to you within 1-2 business days.",
    "We'll schedule a call to understand your needs and context.",
    "We'll work with you to define an approach that fits your needs."
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in", children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: "Contact LeapUX — Ottawa Service Design & Digital Consulting",
        description: "Get in touch with LeapUX to discuss your service design, digital transformation, or AI consulting needs. Based in Ottawa. Serving government and mission-driven organizations across Canada.",
        path: "/contact",
        ogTitle: "Contact LeapUX | Ottawa Digital Consulting & Service Design",
        ogDescription: "Ready to improve how your service works? Contact LeapUX to book a consultation on service design, digital transformation, or GEO services."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 98,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Helmet, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact LeapUX",
  "url": "https://leapux.com/contact",
  "description": "Contact LeapUX to book a consultation on service design, digital transformation, or GEO services.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "1-888-553-2789",
    "email": "contact@leapux.com",
    "contactType": "customer service",
    "availableLanguage": ["English", "French"]
  }
}` }, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 106,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 105,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1423666639041-f56000c27a9a?auto=format&fit=crop&q=80&w=2000",
            alt: "Contact Background",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 124,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 129,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 123,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8", children: "Let's Talk" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 133,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 leading-relaxed font-light", children: "Ready to deliver a service that works? Get in touch and let's discuss how we can help your organization deliver with confidence." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 134,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 132,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 122,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-4 leading-tight", children: "Tell us about your project" }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 147,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 mb-10", children: "Share a few details and we'll reach out to schedule a conversation." }, void 0, false, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 150,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "space-y-6", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV(Label, { htmlFor: "firstName", children: "First name" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 157,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  id: "firstName",
                  name: "firstName",
                  value: formData.firstName,
                  onChange: handleChange,
                  placeholder: "Your first name",
                  className: `bg-white border-slate-200 ${errors.firstName ? "border-red-500" : ""}`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 158,
                  columnNumber: 21
                },
                void 0
              ),
              errors.firstName && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-red-500", children: errors.firstName }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 166,
                columnNumber: 42
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 156,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsxDEV(Label, { htmlFor: "lastName", children: "Last name" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 169,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                Input,
                {
                  id: "lastName",
                  name: "lastName",
                  value: formData.lastName,
                  onChange: handleChange,
                  placeholder: "Your last name",
                  className: `bg-white border-slate-200 ${errors.lastName ? "border-red-500" : ""}`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 170,
                  columnNumber: 21
                },
                void 0
              ),
              errors.lastName && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-red-500", children: errors.lastName }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 178,
                columnNumber: 41
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 168,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 155,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV(Label, { htmlFor: "email", children: "Email" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 183,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                id: "email",
                name: "email",
                type: "email",
                value: formData.email,
                onChange: handleChange,
                placeholder: "you@organization.com",
                className: `bg-white border-slate-200 ${errors.email ? "border-red-500" : ""}`
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 184,
                columnNumber: 19
              },
              void 0
            ),
            errors.email && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-red-500", children: errors.email }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 193,
              columnNumber: 36
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 182,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV(Label, { htmlFor: "organization", children: "Organization" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 197,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Input,
              {
                id: "organization",
                name: "organization",
                value: formData.organization,
                onChange: handleChange,
                placeholder: "Your organization name",
                className: `bg-white border-slate-200 ${errors.organization ? "border-red-500" : ""}`
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 198,
                columnNumber: 19
              },
              void 0
            ),
            errors.organization && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-red-500", children: errors.organization }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 206,
              columnNumber: 43
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 196,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxDEV(Label, { htmlFor: "message", children: "How can we help?" }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 210,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              Textarea,
              {
                id: "message",
                name: "message",
                value: formData.message,
                onChange: handleChange,
                placeholder: "Tell us about your challenge, project, or question...",
                rows: 6,
                className: `bg-white border-slate-200 resize-y ${errors.message ? "border-red-500" : ""}`
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 211,
                columnNumber: 19
              },
              void 0
            ),
            errors.message && /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-red-500", children: errors.message }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 220,
              columnNumber: 38
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 209,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            Button,
            {
              type: "submit",
              disabled: isSubmitting,
              className: "w-full sm:w-auto bg-leap-orange hover:bg-leap-red text-white px-12 py-6 text-sm font-bold uppercase tracking-widest rounded-full",
              children: isSubmitting ? "Sending..." : /* @__PURE__ */ jsxDEV(Fragment, { children: [
                "Send Message",
                /* @__PURE__ */ jsxDEV(Send, { className: "ml-2 h-4 w-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 233,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 231,
                columnNumber: 21
              }, void 0)
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 223,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 154,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 146,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl border border-slate-200", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-leap-black mb-6", children: "Other ways to reach us" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 244,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-5", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(Mail, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 248,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 247,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-leap-black font-medium mb-1", children: "Email us directly" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 251,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("a", { href: "mailto:contact@leapux.com", className: "text-leap-orange hover:text-leap-red transition-colors font-medium", children: "contact@leapux.com" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 252,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 250,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 246,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(Phone, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 259,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 258,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-leap-black font-medium mb-1", children: "Call us" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 262,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV("a", { href: "tel:1-888-553-2789", className: "text-leap-orange hover:text-leap-red transition-colors font-medium", children: "1-888-553-2789" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Contact.tsx",
                  lineNumber: 263,
                  columnNumber: 23
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Contact.tsx",
                lineNumber: 261,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 257,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 245,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 243,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl border border-slate-200", children: [
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-leap-black mb-6", children: "What happens next?" }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 273,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-5", children: nextSteps.map((step, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-7 h-7 bg-leap-orange/10 rounded-lg flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV("span", { className: "text-sm font-bold text-leap-orange", children: i + 1 }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 278,
              columnNumber: 25
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 277,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed", children: step }, void 0, false, {
              fileName: "/dev-server/src/pages/Contact.tsx",
              lineNumber: 280,
              columnNumber: 23
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 276,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/Contact.tsx",
            lineNumber: 274,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Contact.tsx",
          lineNumber: 272,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Contact.tsx",
        lineNumber: 241,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 144,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 143,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Contact.tsx",
      lineNumber: 142,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Contact.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, void 0);
};
const heroAiTraining = "/assets/hero-ai-training-pR-HkJS8.jpg";
const programOptions = [
  "AI Foundations: Understanding AI Today and Tomorrow",
  "AI Strategy & Readiness Assessment",
  "Applied AI Tools Training",
  "Building Your Own AI-Powered Applications",
  "Responsible & Ethical AI by Design"
];
const leadSchema$1 = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  jobTitle: z.string().trim().min(1, "Job title is required").max(100),
  workEmail: z.string().trim().email("Invalid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  organizationName: z.string().trim().min(1, "Organization name is required").max(100),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  organizationSize: z.string().min(1, "Organization size is required"),
  location: z.string().trim().min(1, "Location is required").max(200),
  primaryChallenge: z.string().trim().min(1, "Primary challenge is required").max(1e3),
  aiAdoptionLevel: z.string().min(1, "AI adoption level is required"),
  teamsToTrain: z.string().trim().min(1, "Teams to train is required").max(500),
  selectedPrograms: z.array(z.string()).min(1, "Please select at least one program"),
  timeline: z.string().optional(),
  fundingInterest: z.string().min(1, "Please select an option"),
  budgetRange: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted")
});
const AITraining = () => {
  const { toast: toast2 } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    jobTitle: "",
    workEmail: "",
    phone: "",
    organizationName: "",
    industry: "",
    organizationSize: "",
    location: "",
    primaryChallenge: "",
    aiAdoptionLevel: "",
    teamsToTrain: "",
    selectedPrograms: [],
    timeline: "",
    fundingInterest: "",
    budgetRange: "",
    consent: false
  });
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setErrors({});
    const result = leadSchema$1.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }
    const d = result.data;
    try {
      await sendFormSubmission("AI Training enquiry", [
        { label: "Name", value: d.fullName },
        { label: "Job title", value: d.jobTitle },
        { label: "Work email", value: d.workEmail },
        { label: "Phone", value: d.phone || "—" },
        { label: "Organization", value: d.organizationName },
        { label: "Industry", value: d.industry },
        { label: "Organization size", value: d.organizationSize },
        { label: "Location", value: d.location },
        { label: "AI adoption level", value: d.aiAdoptionLevel },
        { label: "Teams to train", value: d.teamsToTrain },
        { label: "Selected programs", value: d.selectedPrograms.join(", ") },
        { label: "Timeline", value: d.timeline || "—" },
        { label: "Funding interest", value: d.fundingInterest },
        { label: "Budget range", value: d.budgetRange || "—" },
        { label: "Primary challenge", value: d.primaryChallenge }
      ]);
      toast2({
        title: "Request sent",
        description: "Thanks! We'll be in touch shortly."
      });
      setSubmitMessage("Request sent. Thanks! We'll be in touch shortly.");
      setFormData({
        fullName: "",
        jobTitle: "",
        workEmail: "",
        phone: "",
        organizationName: "",
        industry: "",
        organizationSize: "",
        location: "",
        primaryChallenge: "",
        aiAdoptionLevel: "",
        teamsToTrain: "",
        selectedPrograms: [],
        timeline: "",
        fundingInterest: "",
        budgetRange: "",
        consent: false
      });
    } catch (err) {
      console.error("AI Training form submission failed", err);
      toast2({
        title: "Something went wrong",
        description: "Please try again or email contact@leapux.com directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const programs = [
    {
      icon: Lightbulb,
      title: "AI Foundations: Understanding AI Today and Tomorrow",
      subtitle: "Learn how AI works—and how to think about it strategically",
      description: "This foundational training demystifies AI for non-technical and technical audiences alike.",
      learnings: [
        "What AI is (and isn't): machine learning, generative AI, automation",
        "How AI systems learn, reason, and generate outputs",
        "Current capabilities and limitations",
        "Ethical, legal, and UX implications of AI",
        "How AI is expected to evolve in the next 3–5 years"
      ],
      value: "Builds AI literacy across your organization so teams can make informed decisions, ask better questions, and reduce risk."
    },
    {
      icon: Target,
      title: "AI Strategy & Readiness Assessment",
      subtitle: "Identify the right AI strategy for your organization",
      description: "Not every business needs the same AI solutions. We assess where AI makes sense—and where it doesn't.",
      assessments: [
        "Business goals and operational challenges",
        "Data maturity and infrastructure",
        "User and customer experience opportunities",
        "Risk, compliance, and governance considerations",
        "Organizational readiness and skill gaps"
      ],
      outputs: [
        "AI opportunity map",
        "Prioritized use cases",
        "Recommended tools, platforms, and approaches",
        "A realistic AI adoption roadmap"
      ],
      value: "Avoids wasted investment and ensures AI initiatives are aligned to real business and user needs."
    },
    {
      icon: Wrench,
      title: "Applied AI Tools Training",
      subtitle: "Hands-on training with the tools that matter most",
      description: "Based on your assessment, we deliver practical training on the AI tools your teams will actually use.",
      areas: [
        "Generative AI tools (e.g., copilots, content generation, research)",
        "Workflow automation and no-code/low-code AI platforms",
        "AI for design, research, and UX optimization",
        "AI for analytics, insights, and decision support"
      ],
      value: "Accelerates adoption, increases productivity, and ensures tools are used responsibly and effectively."
    },
    {
      icon: Code,
      title: "Building Your Own AI-Powered Applications",
      subtitle: "From idea to working prototype",
      description: "For teams ready to go deeper, we offer training on building custom AI-enabled solutions.",
      learnings: [
        "Designing AI-powered user experiences",
        "Prompt engineering and model interaction",
        "Using APIs and platforms to integrate AI",
        "Prototyping and testing AI features",
        "Governance, monitoring, and continuous improvement"
      ],
      formats: ["Workshops", "Team-based labs", "Guided pilots"],
      value: "Empowers internal teams to innovate faster while maintaining control over data, UX, and outcomes."
    },
    {
      icon: Shield,
      title: "Responsible & Ethical AI by Design",
      subtitle: "Build trust into every AI experience",
      description: "AI changes how users experience transparency, fairness, and control. We help teams design responsibly.",
      topics: [
        "Bias and fairness in AI systems",
        "Explainability and transparency",
        "Human-in-the-loop design",
        "Accessibility and inclusive AI",
        "Governance and accountability models"
      ],
      value: "Reduces risk, strengthens trust, and aligns AI use with organizational values and regulations."
    }
  ];
  const whyMatters = [
    "Making faster, more informed decisions",
    "Designing better digital experiences for customers and employees",
    "Automating low-value work while augmenting human expertise",
    "Attracting and retaining top talent",
    "Staying competitive as markets and expectations shift"
  ];
  const approach = [
    "Role-based (executives, managers, designers, developers, operations)",
    "Experience-driven (rooted in UX and service design principles)",
    "Strategic and practical (from vision to execution)",
    "Tool-agnostic (focused on outcomes, not vendors)"
  ];
  const audiences = [
    "Executives and leadership teams",
    "Digital, innovation, and transformation leaders",
    "UX, product, and design teams",
    "IT and engineering teams",
    "Operations, HR, marketing, and policy teams"
  ];
  const whyInvest = [
    "Get ahead of change instead of reacting to it",
    "Augment human skills, not replace them",
    "Increase ROI on digital and AI investments",
    "Reduce risk through better understanding and governance",
    "Design better experiences for customers and employees"
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in bg-leap-light", children: [
    /* @__PURE__ */ jsxDEV(Seo, { title: "AI Training for Teams | LeapUX", description: "Practical, hands-on AI training that helps teams use AI safely and effectively in their day-to-day work.", path: "/ai-training" }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 277,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: heroAiTraining,
            alt: "AI Training Background",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 281,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-leap-black/5" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 286,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 280,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8", children: "AI Training & Enablement" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 290,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 leading-relaxed font-light mb-8", children: "Design, Strategy, and AI—Working Better Together. We help businesses move beyond AI hype and into practical, human-centered AI adoption." }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 291,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { size: "lg", className: "bg-leap-orange hover:brightness-110 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full shadow-lg transition-all", children: [
            "Get Started",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 298,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 296,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 295,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("a", { href: "#programs", children: /* @__PURE__ */ jsxDEV(Button, { size: "lg", className: "border border-white/20 bg-transparent hover:bg-white/10 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full", children: "View Programs" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 302,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 301,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 294,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 289,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 288,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 279,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-16 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-700 leading-relaxed", children: [
      "Our AI training blends ",
      /* @__PURE__ */ jsxDEV("strong", { className: "text-leap-black", children: "UX, digital transformation, and applied AI" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 316,
        columnNumber: 38
      }, void 0),
      " to help teams think, design, and work differently."
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 315,
      columnNumber: 13
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 314,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 313,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 312,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-4", children: "Why AI Training Matters Now" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 327,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600", children: "Organizations that invest in AI capability today are:" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 330,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 326,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: whyMatters.map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 p-5 bg-slate-50 rounded-xl", children: [
        /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-6 h-6 text-leap-orange shrink-0 mt-0.5" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 337,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700", children: item }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 338,
          columnNumber: 19
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 336,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 334,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-leap-orange/10 to-leap-red/10 border border-leap-orange/20 rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-700 mb-4", children: [
          "Those that don't risk falling behind—not because AI replaces people, but because ",
          /* @__PURE__ */ jsxDEV("strong", { children: "people using AI will outperform those who don't." }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 344,
            columnNumber: 98
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 343,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl font-bold text-leap-black mb-6", children: "AI training is no longer optional. It's a core digital competency." }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 346,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { className: "bg-leap-orange hover:bg-leap-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-full", children: [
          "Build Your Team's AI Capabilities",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 352,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 350,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 349,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 342,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 325,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 324,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 323,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-6", children: "Our Approach: Human-Centered AI Enablement" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 366,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 mb-8", children: "Unlike generic AI courses, our training is:" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 369,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: approach.map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxDEV(Sparkles, { className: "w-5 h-5 text-leap-orange shrink-0 mt-1" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 375,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700", children: item }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 376,
            columnNumber: 23
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 374,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 372,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 365,
        columnNumber: 15
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-8 rounded-2xl border border-slate-200 shadow-lg", children: /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-700 leading-relaxed", children: [
        "We help teams understand not just ",
        /* @__PURE__ */ jsxDEV("strong", { className: "text-leap-black", children: "how" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 383,
          columnNumber: 53
        }, void 0),
        " to use AI—but ",
        /* @__PURE__ */ jsxDEV("strong", { className: "text-leap-black", children: "when" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 383,
          columnNumber: 116
        }, void 0),
        ", ",
        /* @__PURE__ */ jsxDEV("strong", { className: "text-leap-black", children: "why" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 383,
          columnNumber: 167
        }, void 0),
        ", and ",
        /* @__PURE__ */ jsxDEV("strong", { className: "text-leap-black", children: "where" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 383,
          columnNumber: 221
        }, void 0),
        " it creates real value."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 382,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 381,
        columnNumber: 15
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 364,
      columnNumber: 13
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 363,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 362,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 361,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "programs", className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-4", children: "AI Training Programs We Offer" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 396,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 395,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-12", children: [
        programs.map((program, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(program.icon, { className: "w-7 h-7 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 405,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 404,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange font-semibold text-sm", children: [
                "Program ",
                index + 1
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 408,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-leap-black", children: program.title }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 409,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 407,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 403,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-medium text-slate-700 mb-2", children: program.subtitle }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 412,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 mb-6", children: program.description }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 413,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
            program.learnings && /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-3", children: "What participants learn:" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 418,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: program.learnings.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-slate-600", children: [
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 422,
                  columnNumber: 31
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 423,
                  columnNumber: 31
                }, void 0)
              ] }, i, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 421,
                columnNumber: 29
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 419,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 417,
              columnNumber: 23
            }, void 0),
            program.assessments && /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-3", children: "What we assess:" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 431,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: program.assessments.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-slate-600", children: [
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 435,
                  columnNumber: 31
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 436,
                  columnNumber: 31
                }, void 0)
              ] }, i, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 434,
                columnNumber: 29
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 432,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 430,
              columnNumber: 23
            }, void 0),
            program.outputs && /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-3", children: "Outputs:" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 444,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: program.outputs.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-slate-600", children: [
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 448,
                  columnNumber: 31
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 449,
                  columnNumber: 31
                }, void 0)
              ] }, i, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 447,
                columnNumber: 29
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 445,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 443,
              columnNumber: 23
            }, void 0),
            program.areas && /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-3", children: "Common areas include:" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 457,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "grid md:grid-cols-2 gap-2", children: program.areas.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-slate-600", children: [
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 461,
                  columnNumber: 31
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 462,
                  columnNumber: 31
                }, void 0)
              ] }, i, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 460,
                columnNumber: 29
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 458,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 456,
              columnNumber: 23
            }, void 0),
            program.topics && /* @__PURE__ */ jsxDEV("div", { className: "md:col-span-2", children: [
              /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-3", children: "Topics include:" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 470,
                columnNumber: 25
              }, void 0),
              /* @__PURE__ */ jsxDEV("ul", { className: "grid md:grid-cols-2 gap-2", children: program.topics.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-slate-600", children: [
                /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 474,
                  columnNumber: 31
                }, void 0),
                /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 475,
                  columnNumber: 31
                }, void 0)
              ] }, i, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 473,
                columnNumber: 29
              }, void 0)) }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 471,
                columnNumber: 25
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 469,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 415,
            columnNumber: 19
          }, void 0),
          program.formats && /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-2", children: "Formats:" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 485,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2", children: program.formats.map((format, i) => /* @__PURE__ */ jsxDEV("span", { className: "bg-leap-orange/10 text-leap-orange px-3 py-1 rounded-full text-sm font-medium", children: format }, i, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 488,
              columnNumber: 27
            }, void 0)) }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 486,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 484,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "bg-white p-4 rounded-xl border border-leap-orange/20", children: /* @__PURE__ */ jsxDEV("p", { className: "text-slate-700", children: [
            /* @__PURE__ */ jsxDEV("strong", { className: "text-leap-black", children: "Value: " }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 498,
              columnNumber: 23
            }, void 0),
            program.value
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 497,
            columnNumber: 21
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 496,
            columnNumber: 19
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 402,
          columnNumber: 17
        }, void 0)),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center pt-8", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 mb-6", children: "Ready to explore which program is right for your organization?" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 506,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { size: "lg", className: "bg-leap-orange hover:bg-leap-red text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full", children: [
            "Find the Right Program",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 512,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 510,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 509,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 505,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 400,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 394,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 393,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 392,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-4", children: "Who This Training Is For" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 526,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 525,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8", children: audiences.map((audience, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 bg-white p-4 rounded-xl border border-slate-200", children: [
        /* @__PURE__ */ jsxDEV(Users, { className: "w-5 h-5 text-leap-orange shrink-0" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 533,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700", children: audience }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 534,
          columnNumber: 19
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 532,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 530,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-slate-600 italic mb-8", children: "Programs are customized for private sector, public sector, and non-profit organizations." }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 538,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { className: "bg-leap-black hover:bg-leap-black/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-full", children: [
        "Schedule a Consultation",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 545,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 543,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 542,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 541,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 524,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 523,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 522,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-leap-black", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Why Invest in AI Training with LeapUX" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 558,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 557,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12", children: whyInvest.map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-3 bg-white/5 border border-white/10 p-5 rounded-xl", children: [
        /* @__PURE__ */ jsxDEV(TrendingUp, { className: "w-5 h-5 text-leap-orange shrink-0 mt-0.5" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 565,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-slate-300", children: item }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 566,
          columnNumber: 19
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 564,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 562,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-center text-xl text-white mb-10", children: [
        "AI success isn't about technology alone—it's about ",
        /* @__PURE__ */ jsxDEV("strong", { className: "text-leap-orange", children: "people, processes, and experiences" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 571,
          columnNumber: 66
        }, void 0),
        " working together."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 570,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { size: "lg", className: "bg-leap-orange hover:bg-leap-red text-white px-14 py-6 text-sm font-bold uppercase tracking-[0.3em] rounded-full shadow-xl", children: [
        "Start Your AI Journey",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 577,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 575,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 574,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 573,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 556,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 555,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 554,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-gradient-to-r from-leap-orange to-leap-red", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV(DollarSign, { className: "w-16 h-16 text-white mx-auto mb-6" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 589,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Funding & Grants May Be Available" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 590,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-white/90 mb-6", children: "Did you know that provincial and federal grants may help cover the cost of AI training?" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 593,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-white/80 mb-8", children: "Many organizations qualify for workforce development, innovation, and digital adoption funding programs." }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 596,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-left max-w-xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-white mb-4", children: "We can help:" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 600,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("ul", { className: "space-y-3", children: [
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-white/90", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-white shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 603,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Assess your eligibility" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 604,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 602,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-white/90", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-white shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 607,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Align training with funding criteria" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 608,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 606,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-white/90", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-white shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 611,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: "Support documentation and justification" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 612,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 610,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 601,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 599,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-white/90 mt-8 text-lg", children: "Get in touch with us to see how your AI training investment could be funded." }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 616,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 588,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 587,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 586,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "get-started", className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-4", children: "Get Started: Talk to an AI Training Specialist" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 628,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600", children: "Fill out the form below and we'll contact you to discuss your goals, challenges, and next steps." }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 631,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500 mt-2", children: "Required fields are marked with *" }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 634,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 627,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200", children: "Contact Information" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 640,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "fullName", className: "block text-sm font-medium text-leap-black mb-2", children: "Full Name *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 645,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  id: "fullName",
                  name: "fullName",
                  value: formData.fullName,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 648,
                  columnNumber: 21
                },
                void 0
              ),
              errors.fullName && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.fullName }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 656,
                columnNumber: 41
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 644,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "jobTitle", className: "block text-sm font-medium text-leap-black mb-2", children: "Job Title *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 659,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  id: "jobTitle",
                  name: "jobTitle",
                  value: formData.jobTitle,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.jobTitle ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 662,
                  columnNumber: 21
                },
                void 0
              ),
              errors.jobTitle && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.jobTitle }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 670,
                columnNumber: 41
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 658,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "workEmail", className: "block text-sm font-medium text-leap-black mb-2", children: "Work Email Address *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 673,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "email",
                  id: "workEmail",
                  name: "workEmail",
                  value: formData.workEmail,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.workEmail ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 676,
                  columnNumber: 21
                },
                void 0
              ),
              errors.workEmail && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.workEmail }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 684,
                columnNumber: 42
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 672,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "phone", className: "block text-sm font-medium text-leap-black mb-2", children: "Phone Number" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 687,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "tel",
                  id: "phone",
                  name: "phone",
                  value: formData.phone,
                  onChange: handleChange,
                  className: "w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 690,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 686,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 643,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 639,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200", children: "Organization Information" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 704,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "organizationName", className: "block text-sm font-medium text-leap-black mb-2", children: "Organization Name *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 709,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  id: "organizationName",
                  name: "organizationName",
                  value: formData.organizationName,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.organizationName ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 712,
                  columnNumber: 21
                },
                void 0
              ),
              errors.organizationName && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.organizationName }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 720,
                columnNumber: 49
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 708,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "industry", className: "block text-sm font-medium text-leap-black mb-2", children: "Industry / Sector *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 723,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  id: "industry",
                  name: "industry",
                  value: formData.industry,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.industry ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 726,
                  columnNumber: 21
                },
                void 0
              ),
              errors.industry && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.industry }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 734,
                columnNumber: 41
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 722,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "organizationSize", className: "block text-sm font-medium text-leap-black mb-2", children: "Organization Size *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 737,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  id: "organizationSize",
                  name: "organizationSize",
                  value: formData.organizationSize,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.organizationSize ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white`,
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "", children: "Select size" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 747,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("option", { value: "1-10", children: "1–10" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 748,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("option", { value: "11-50", children: "11–50" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 749,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("option", { value: "51-200", children: "51–200" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 750,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("option", { value: "200+", children: "200+" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 751,
                      columnNumber: 23
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 740,
                  columnNumber: 21
                },
                void 0
              ),
              errors.organizationSize && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.organizationSize }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 753,
                columnNumber: 49
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 736,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "location", className: "block text-sm font-medium text-leap-black mb-2", children: "Location (City, Province/State, Country) *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 756,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  id: "location",
                  name: "location",
                  value: formData.location,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.location ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 759,
                  columnNumber: 21
                },
                void 0
              ),
              errors.location && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.location }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 767,
                columnNumber: 41
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 755,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 707,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 703,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200", children: "AI & Training Needs" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 774,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "primaryChallenge", className: "block text-sm font-medium text-leap-black mb-2", children: "Primary challenge or opportunity you want to address with AI *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 779,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "textarea",
                {
                  id: "primaryChallenge",
                  name: "primaryChallenge",
                  value: formData.primaryChallenge,
                  onChange: handleChange,
                  rows: 3,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.primaryChallenge ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent resize-none`
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 782,
                  columnNumber: 21
                },
                void 0
              ),
              errors.primaryChallenge && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.primaryChallenge }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 790,
                columnNumber: 49
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 778,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { htmlFor: "aiAdoptionLevel", className: "block text-sm font-medium text-leap-black mb-2", children: "Current level of AI adoption *" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 794,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "select",
                  {
                    id: "aiAdoptionLevel",
                    name: "aiAdoptionLevel",
                    value: formData.aiAdoptionLevel,
                    onChange: handleChange,
                    className: `w-full px-4 py-3 rounded-lg border ${errors.aiAdoptionLevel ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white`,
                    children: [
                      /* @__PURE__ */ jsxDEV("option", { value: "", children: "Select level" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 804,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "None", children: "None" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 805,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "Exploring", children: "Exploring" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 806,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "Piloting", children: "Piloting" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 807,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "Actively Using", children: "Actively Using" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 808,
                        columnNumber: 25
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/AITraining.tsx",
                    lineNumber: 797,
                    columnNumber: 23
                  },
                  void 0
                ),
                errors.aiAdoptionLevel && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.aiAdoptionLevel }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 810,
                  columnNumber: 50
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 793,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { htmlFor: "timeline", className: "block text-sm font-medium text-leap-black mb-2", children: "Desired timeline" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 813,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "select",
                  {
                    id: "timeline",
                    name: "timeline",
                    value: formData.timeline,
                    onChange: handleChange,
                    className: "w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white",
                    children: [
                      /* @__PURE__ */ jsxDEV("option", { value: "", children: "Select timeline" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 823,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "Immediate", children: "Immediate" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 824,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "3-6 months", children: "3–6 months" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 825,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("option", { value: "6-12 months", children: "6–12 months" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 826,
                        columnNumber: 25
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/AITraining.tsx",
                    lineNumber: 816,
                    columnNumber: 23
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 812,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 792,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { htmlFor: "teamsToTrain", className: "block text-sm font-medium text-leap-black mb-2", children: "Teams or roles you want trained *" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 832,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    type: "text",
                    id: "teamsToTrain",
                    name: "teamsToTrain",
                    value: formData.teamsToTrain,
                    onChange: handleChange,
                    placeholder: "e.g., Leadership, IT, Marketing, Product Design",
                    className: `w-full px-4 py-3 rounded-lg border ${errors.teamsToTrain ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/AITraining.tsx",
                    lineNumber: 835,
                    columnNumber: 23
                  },
                  void 0
                ),
                errors.teamsToTrain && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.teamsToTrain }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 844,
                  columnNumber: 47
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 831,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "relative", children: [
                /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-leap-black mb-2", children: "AI Training Programs *" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 847,
                  columnNumber: 23
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "button",
                  {
                    type: "button",
                    onClick: () => setProgramsDropdownOpen(!programsDropdownOpen),
                    className: `w-full px-4 py-3 rounded-lg border ${errors.selectedPrograms ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white text-left flex items-center justify-between`,
                    children: [
                      /* @__PURE__ */ jsxDEV("span", { className: formData.selectedPrograms.length === 0 ? "text-slate-400" : "text-leap-black", children: formData.selectedPrograms.length === 0 ? "Select programs" : `${formData.selectedPrograms.length} program${formData.selectedPrograms.length > 1 ? "s" : ""} selected` }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 855,
                        columnNumber: 25
                      }, void 0),
                      /* @__PURE__ */ jsxDEV("svg", { className: `w-4 h-4 transition-transform ${programsDropdownOpen ? "rotate-180" : ""}`, fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsxDEV("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 861,
                        columnNumber: 27
                      }, void 0) }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 860,
                        columnNumber: 25
                      }, void 0)
                    ]
                  },
                  void 0,
                  true,
                  {
                    fileName: "/dev-server/src/pages/AITraining.tsx",
                    lineNumber: 850,
                    columnNumber: 23
                  },
                  void 0
                ),
                programsDropdownOpen && /* @__PURE__ */ jsxDEV("div", { className: "absolute z-50 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg max-h-60 overflow-y-auto", children: programOptions.map((program, index) => /* @__PURE__ */ jsxDEV(
                  "label",
                  {
                    className: "flex items-start gap-3 px-4 py-3 hover:bg-slate-50 cursor-pointer border-b border-slate-100 last:border-b-0",
                    children: [
                      /* @__PURE__ */ jsxDEV(
                        "input",
                        {
                          type: "checkbox",
                          checked: formData.selectedPrograms.includes(program),
                          onChange: (e) => {
                            const newPrograms = e.target.checked ? [...formData.selectedPrograms, program] : formData.selectedPrograms.filter((p) => p !== program);
                            setFormData((prev) => ({ ...prev, selectedPrograms: newPrograms }));
                            if (errors.selectedPrograms) {
                              setErrors((prev) => ({ ...prev, selectedPrograms: void 0 }));
                            }
                          },
                          className: "mt-1 w-4 h-4 text-leap-orange border-slate-300 rounded focus:ring-leap-orange"
                        },
                        void 0,
                        false,
                        {
                          fileName: "/dev-server/src/pages/AITraining.tsx",
                          lineNumber: 871,
                          columnNumber: 31
                        },
                        void 0
                      ),
                      /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-slate-700", children: program }, void 0, false, {
                        fileName: "/dev-server/src/pages/AITraining.tsx",
                        lineNumber: 885,
                        columnNumber: 31
                      }, void 0)
                    ]
                  },
                  index,
                  true,
                  {
                    fileName: "/dev-server/src/pages/AITraining.tsx",
                    lineNumber: 867,
                    columnNumber: 29
                  },
                  void 0
                )) }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 865,
                  columnNumber: 25
                }, void 0),
                errors.selectedPrograms && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.selectedPrograms }, void 0, false, {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 890,
                  columnNumber: 51
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 846,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 830,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 777,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 773,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-10", children: [
          /* @__PURE__ */ jsxDEV("h3", { className: "text-xl font-bold text-leap-black mb-6 pb-2 border-b border-slate-200", children: "Funding & Budget" }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 898,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6", children: [
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "fundingInterest", className: "block text-sm font-medium text-leap-black mb-2", children: "Are you interested in exploring grants or funding options? *" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 903,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "select",
                {
                  id: "fundingInterest",
                  name: "fundingInterest",
                  value: formData.fundingInterest,
                  onChange: handleChange,
                  className: `w-full px-4 py-3 rounded-lg border ${errors.fundingInterest ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent bg-white`,
                  children: [
                    /* @__PURE__ */ jsxDEV("option", { value: "", children: "Select option" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 913,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("option", { value: "Yes", children: "Yes" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 914,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("option", { value: "Not sure", children: "Not sure" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 915,
                      columnNumber: 23
                    }, void 0),
                    /* @__PURE__ */ jsxDEV("option", { value: "No", children: "No" }, void 0, false, {
                      fileName: "/dev-server/src/pages/AITraining.tsx",
                      lineNumber: 916,
                      columnNumber: 23
                    }, void 0)
                  ]
                },
                void 0,
                true,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 906,
                  columnNumber: 21
                },
                void 0
              ),
              errors.fundingInterest && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.fundingInterest }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 918,
                columnNumber: 48
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 902,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("label", { htmlFor: "budgetRange", className: "block text-sm font-medium text-leap-black mb-2", children: "Estimated training budget range (Optional)" }, void 0, false, {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 921,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "input",
                {
                  type: "text",
                  id: "budgetRange",
                  name: "budgetRange",
                  value: formData.budgetRange,
                  onChange: handleChange,
                  placeholder: "e.g., $5,000 - $15,000",
                  className: "w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/AITraining.tsx",
                  lineNumber: 924,
                  columnNumber: 21
                },
                void 0
              )
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 920,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 901,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 897,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "flex items-start gap-3 cursor-pointer", children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "checkbox",
                name: "consent",
                checked: formData.consent,
                onChange: handleChange,
                className: "mt-1 w-5 h-5 rounded border-slate-300 text-leap-orange focus:ring-leap-orange"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/AITraining.tsx",
                lineNumber: 940,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700", children: "I agree to be contacted by LeapUX regarding AI training and related services *" }, void 0, false, {
              fileName: "/dev-server/src/pages/AITraining.tsx",
              lineNumber: 947,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 939,
            columnNumber: 17
          }, void 0),
          errors.consent && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.consent }, void 0, false, {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 951,
            columnNumber: 36
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 938,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            type: "button",
            onClick: handleSubmit,
            disabled: isSubmitting,
            className: "w-full bg-leap-orange hover:bg-leap-red text-white py-4 text-lg font-semibold",
            children: isSubmitting ? "Submitting..." : "Submit Request"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/AITraining.tsx",
            lineNumber: 954,
            columnNumber: 15
          },
          void 0
        ),
        submitMessage && /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm font-medium text-leap-black mt-4", role: "status", "aria-live": "polite", children: submitMessage }, void 0, false, {
          fileName: "/dev-server/src/pages/AITraining.tsx",
          lineNumber: 963,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 637,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 626,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 625,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 624,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-6", children: "Let's Build Your AI Capability—Together" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 976,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 mb-8", children: "AI is reshaping how organizations operate, design, and compete. With the right training, your teams can lead that change with confidence." }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 979,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(Button, { asChild: true, size: "lg", className: "bg-leap-orange hover:bg-leap-red text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full", children: /* @__PURE__ */ jsxDEV(Link, { to: "/contact", children: "Contact LeapUX Today" }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 983,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AITraining.tsx",
        lineNumber: 982,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 975,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 974,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AITraining.tsx",
      lineNumber: 973,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/AITraining.tsx",
    lineNumber: 276,
    columnNumber: 5
  }, void 0);
};
const heroAiServices = "/assets/hero-ai-services-En9RE8MN.jpg";
const leadSchema = z.object({
  fullName: z.string().trim().min(1, "Full name is required").max(100),
  workEmail: z.string().trim().email("Invalid email address").max(255),
  organization: z.string().trim().min(1, "Organization is required").max(100),
  role: z.string().trim().min(1, "Role is required").max(100),
  organizationType: z.string().min(1, "Organization type is required"),
  primaryGoals: z.array(z.string()).min(1, "Please select at least one goal"),
  serviceInterest: z.string().min(1, "Please select a service"),
  challenge: z.string().trim().max(1e3).optional(),
  consent: z.boolean().refine((val) => val === true, "You must agree to be contacted")
});
const AIServices = () => {
  const { toast: toast2 } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    fullName: "",
    workEmail: "",
    organization: "",
    role: "",
    organizationType: "",
    primaryGoals: [],
    serviceInterest: "",
    challenge: "",
    consent: false
  });
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const checked = e.target.checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: void 0 }));
    }
  };
  const handleGoalChange = (goal) => {
    setFormData((prev) => ({
      ...prev,
      primaryGoals: prev.primaryGoals.includes(goal) ? prev.primaryGoals.filter((g) => g !== goal) : [...prev.primaryGoals, goal]
    }));
    if (errors.primaryGoals) {
      setErrors((prev) => ({ ...prev, primaryGoals: void 0 }));
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");
    setErrors({});
    const result = leadSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          fieldErrors[err.path[0]] = err.message;
        }
      });
      setErrors(fieldErrors);
      setIsSubmitting(false);
      return;
    }
    const d = result.data;
    try {
      await sendFormSubmission("AI Services enquiry", [
        { label: "Name", value: d.fullName },
        { label: "Work email", value: d.workEmail },
        { label: "Organization", value: d.organization },
        { label: "Role", value: d.role },
        { label: "Organization type", value: d.organizationType },
        { label: "Primary goals", value: d.primaryGoals.join(", ") },
        { label: "Service interest", value: d.serviceInterest },
        { label: "Challenge", value: d.challenge || "—" }
      ]);
      toast2({
        title: "Request sent",
        description: "Thanks! We'll be in touch shortly."
      });
      setSubmitMessage("Request sent. Thanks! We'll be in touch shortly.");
      setFormData({
        fullName: "",
        workEmail: "",
        organization: "",
        role: "",
        organizationType: "",
        primaryGoals: [],
        serviceInterest: "",
        challenge: "",
        consent: false
      });
    } catch (err) {
      console.error("AI Services form submission failed", err);
      toast2({
        title: "Something went wrong",
        description: "Please try again or email contact@leapux.com directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  const howWeHelp = [
    "Identify usability issues before they impact adoption or revenue",
    "Automate high-friction workflows with AI-ready solutions",
    "Continuously improve digital experiences using real user data",
    "Introduce AI responsibly, transparently, and effectively"
  ];
  const productizedOffers = [
    {
      icon: Eye,
      name: "Usability Pulse™",
      tagline: "A High-Value UX Audit (7 Days)",
      description: "A fast, AI-assisted UX audit that finds the leaks before they cost you customers.",
      bestFor: "SaaS companies and enterprise teams with critical user flows (sign-up, checkout, submissions, onboarding).",
      whatWeReview: "One high-impact user journey where usability matters most.",
      howItWorks: [
        "AI-assisted heuristic evaluation",
        "5 remote user tests",
        "AI synthesis to identify patterns and friction points"
      ],
      whatYouGet: [
        "15–20 page findings deck",
        "10 prioritized UX fixes with impact estimates"
      ],
      timeline: "7 business days",
      investment: "$2,500 flat",
      cta: "Get a UX Pulse Assessment"
    },
    {
      icon: Zap,
      name: "FlowFix Blueprint™",
      tagline: "A Strategic AI & Automation Roadmap (2 Weeks)",
      description: "A clear, actionable roadmap to automate clunky workflows with AI—without guesswork.",
      bestFor: "Government and enterprise teams bogged down by manual, repetitive processes.",
      whatWeReview: "1–2 key workflows with high automation potential.",
      howItWorks: [
        "Stakeholder interviews",
        "AI-assisted workflow mapping",
        "Solution and feasibility evaluation"
      ],
      whatYouGet: [
        "Workflow maps highlighting bottlenecks",
        "Prioritized automation roadmap",
        "Estimated ROI and effort level"
      ],
      timeline: "2 weeks",
      investment: "$4,000 flat",
      cta: "Request a FlowFix Blueprint"
    },
    {
      icon: BarChart3,
      name: "UX Continuum™",
      tagline: "Always-On UX & AI Insights (Subscription)",
      description: "Ongoing usability monitoring, AI analysis, and actionable improvements—every month.",
      bestFor: "SaaS, public sector, or enterprise teams that want continuous UX improvement without hiring internally.",
      whatWeReview: "Top 3–5 user flows that drive adoption, efficiency, or revenue.",
      howItWorks: [
        "Monthly usability testing",
        "AI-powered sentiment analysis (support tickets, feedback, usage)",
        "Continuous insight synthesis"
      ],
      whatYouGet: [
        "Monthly UX Health Dashboard",
        "Short video summary with prioritized action items"
      ],
      timeline: "Rolling monthly",
      investment: "$3,500 / month",
      cta: "Start UX Continuum"
    }
  ];
  const bundledPlans = [
    {
      name: "Base AI Plan",
      price: "$49–$99 / month",
      features: ["AI Website Chatbot", "AI Lead Scoring", "Basic CRM Sync"]
    },
    {
      name: "Marketing AI Plan",
      price: "$149–$299 / month",
      features: ["AI Blog Strategy", "Social Media Auto-Posting", "Review Generation", "AI Nurture Emails"]
    },
    {
      name: "Growth Automation Plan",
      price: "$299–$699 / month",
      features: ["AI Appointment Setter", "AI Reporting Dashboard", "Advanced CRM Automations", "Document Generator"]
    },
    {
      name: "Full AI Ops Plan",
      price: "$899–$1,499 / month",
      features: ["Multi-system automations", "Custom LLM agents", "Full automation management"]
    }
  ];
  const individualAddOns = [
    { icon: Bot, name: "AI Website Chatbot", price: "$49 / month" },
    { icon: Target, name: "AI Lead Scoring", price: "$29 / month" },
    { icon: MessageSquare, name: "AI Smart Autoresponder", price: "$29 / month" },
    { icon: Sparkles, name: "AI Review Generator", price: "$49 / month" },
    { icon: TrendingUp, name: "AI Social Media Auto-Posting", price: "$129 / month" },
    { icon: FileText, name: "AI Blog & SEO Content Engine", price: "$199 / month" },
    { icon: Calendar, name: "AI Appointment Setter", price: "$99 / month" },
    { icon: Users, name: "AI CRM Updater", price: "$49 / month" },
    { icon: Phone, name: "AI Call Summaries", price: "$59 / month" },
    { icon: LayoutDashboard, name: "AI Analytics Dashboard", price: "$129 / month" }
  ];
  const whyWorkWithUs = [
    "UX-first, not tool-first",
    "Human-centered AI (ethical, explainable, practical)",
    "Fixed-scope offers with clear outcomes",
    "Designed for enterprise and public-sector realities"
  ];
  const goals = [
    "Improve usability",
    "Automate workflows",
    "Reduce manual effort",
    "Increase conversions",
    "Explore AI opportunities"
  ];
  const services = [
    "Usability Pulse™",
    "FlowFix Blueprint™",
    "UX Continuum™",
    "AI Add-Ons",
    "Not sure yet"
  ];
  return /* @__PURE__ */ jsxDEV("div", { className: "animate-in bg-leap-light", children: [
    /* @__PURE__ */ jsxDEV(Seo, { title: "AI Services | LeapUX", description: "From AI strategy to implementation — LeapUX helps organizations design and deliver AI-powered services that work in the real world.", path: "/ai-services" }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 278,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-48 pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: heroAiServices,
            alt: "AI Services Background",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 282,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 287,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 281,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-8", children: "AI-Powered UX & Digital Transformation" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 291,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 leading-relaxed font-light mb-8", children: "Turn complexity into clarity. We help organizations improve usability, streamline workflows, and scale smarter using practical, human-centered AI." }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 292,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4", children: [
          /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { size: "lg", className: "bg-leap-orange hover:brightness-110 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full shadow-lg transition-all", children: [
            "Get Started",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 299,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 297,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 296,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("a", { href: "#offers", children: /* @__PURE__ */ jsxDEV(Button, { size: "lg", className: "border border-white/20 bg-transparent hover:bg-white/10 text-white px-10 py-6 text-sm font-bold uppercase tracking-widest rounded-full", children: "View Services" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 303,
            columnNumber: 17
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 302,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 295,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 290,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 289,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 280,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-4", children: "How We Help" }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 317,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 316,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-12", children: howWeHelp.map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 p-6 bg-white rounded-xl border border-slate-200 shadow-sm", children: [
        /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-6 h-6 text-leap-orange shrink-0 mt-0.5" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 324,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700 text-lg", children: item }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 325,
          columnNumber: 19
        }, void 0)
      ] }, index, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 323,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 321,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "bg-gradient-to-r from-leap-orange/10 to-leap-red/10 border border-leap-orange/20 rounded-2xl p-8 text-center", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-700 mb-4", children: "Ready to see how AI can transform your organization's digital experience?" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 330,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { className: "bg-leap-orange hover:bg-leap-red text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-full", children: [
          "Explore Your AI Opportunity",
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 336,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 334,
          columnNumber: 17
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 333,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 329,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 315,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 314,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 313,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "offers", className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Productized AI Offers" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 349,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-bold text-leap-black", children: "Clear outcomes. Fixed scope. Fast results." }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 350,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 348,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-12", children: [
        productizedOffers.map((offer, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-slate-50 rounded-2xl p-8 md:p-10 border border-slate-200", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-start gap-4 mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-14 h-14 bg-leap-orange/10 rounded-xl flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxDEV(offer.icon, { className: "w-7 h-7 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 359,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 358,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { children: [
              /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange font-semibold text-sm", children: [
                index + 1,
                "."
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 362,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl font-bold text-leap-black", children: offer.name }, void 0, false, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 363,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 font-medium", children: offer.tagline }, void 0, false, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 364,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 361,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 357,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-700 mb-6", children: offer.description }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 367,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(Users, { className: "w-4 h-4 text-leap-orange" }, void 0, false, {
                    fileName: "/dev-server/src/pages/AIServices.tsx",
                    lineNumber: 373,
                    columnNumber: 27
                  }, void 0),
                  " Best for"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 372,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600", children: offer.bestFor }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 375,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 371,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-2 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxDEV(Target, { className: "w-4 h-4 text-leap-orange" }, void 0, false, {
                    fileName: "/dev-server/src/pages/AIServices.tsx",
                    lineNumber: 379,
                    columnNumber: 27
                  }, void 0),
                  " What we review"
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 378,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600", children: offer.whatWeReview }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 381,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 377,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 370,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-2", children: "How it works" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 386,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-1", children: offer.howItWorks.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-slate-600", children: [
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
                    fileName: "/dev-server/src/pages/AIServices.tsx",
                    lineNumber: 390,
                    columnNumber: 31
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                    fileName: "/dev-server/src/pages/AIServices.tsx",
                    lineNumber: 391,
                    columnNumber: 31
                  }, void 0)
                ] }, i, true, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 389,
                  columnNumber: 29
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 387,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 385,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("h4", { className: "font-semibold text-leap-black mb-2", children: "What you get" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 397,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("ul", { className: "space-y-1", children: offer.whatYouGet.map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-slate-600", children: [
                  /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-4 h-4 text-leap-orange shrink-0 mt-1" }, void 0, false, {
                    fileName: "/dev-server/src/pages/AIServices.tsx",
                    lineNumber: 401,
                    columnNumber: 31
                  }, void 0),
                  /* @__PURE__ */ jsxDEV("span", { children: item }, void 0, false, {
                    fileName: "/dev-server/src/pages/AIServices.tsx",
                    lineNumber: 402,
                    columnNumber: 31
                  }, void 0)
                ] }, i, true, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 400,
                  columnNumber: 29
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 398,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 396,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 384,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 369,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap items-center gap-6 pt-6 border-t border-slate-200", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxDEV(Clock, { className: "w-5 h-5 text-slate-400" }, void 0, false, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 412,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700 font-medium", children: offer.timeline }, void 0, false, {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 413,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 411,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV(Button, { asChild: true, className: "ml-auto bg-leap-orange hover:bg-leap-red text-white", children: /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: [
              "👉 ",
              offer.cta
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 416,
              columnNumber: 23
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 415,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 410,
            columnNumber: 19
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 356,
          columnNumber: 17
        }, void 0)),
        /* @__PURE__ */ jsxDEV("div", { className: "text-center pt-8", children: [
          /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 mb-6", children: "Not sure which service is right for you? Let's find out together." }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 424,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { size: "lg", className: "bg-leap-orange hover:bg-leap-red text-white px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full", children: [
            "Find the Right Service",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-5 h-5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 430,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 428,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 427,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 423,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 354,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 347,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 346,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 345,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-slate-50", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "AI Add-Ons" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 444,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-4", children: "Build Recurring Value, Only Where You Need It" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 445,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 text-lg", children: "Choose individual AI capabilities or bundle them into plans for simplicity." }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 448,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 443,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "mb-16", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-leap-black mb-6 text-center", children: "Bundled AI Plans" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 455,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: bundledPlans.map((plan, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-shadow", children: [
          /* @__PURE__ */ jsxDEV("h5", { className: "font-bold text-leap-black mb-2", children: plan.name }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 459,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-leap-orange font-bold text-lg mb-4", children: plan.price }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 460,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-2", children: plan.features.map((feature, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-2 text-sm text-slate-600", children: [
            /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-4 h-4 text-leap-orange shrink-0 mt-0.5" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 464,
              columnNumber: 27
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { children: feature }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 465,
              columnNumber: 27
            }, void 0)
          ] }, i, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 463,
            columnNumber: 25
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 461,
            columnNumber: 21
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 458,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 456,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 454,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-leap-black mb-6 text-center", children: "Individual AI Add-Ons" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 476,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4", children: individualAddOns.map((addon, index) => /* @__PURE__ */ jsxDEV("div", { className: "bg-white rounded-xl p-4 border border-slate-200 shadow-sm hover:shadow-md transition-shadow", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-2", children: [
            /* @__PURE__ */ jsxDEV(addon.icon, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 481,
              columnNumber: 23
            }, void 0),
            /* @__PURE__ */ jsxDEV("span", { className: "font-medium text-leap-black text-sm", children: addon.name }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 482,
              columnNumber: 23
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 480,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-leap-orange font-bold", children: addon.price }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 484,
            columnNumber: 21
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 479,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 477,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 475,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 442,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 441,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 440,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-white", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "grid lg:grid-cols-2 gap-12 items-center mb-12", children: [
        /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Why Work With Us" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 499,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl md:text-4xl font-bold text-leap-black mb-6", children: "Practical AI that delivers real results" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 500,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 498,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-4", children: whyWorkWithUs.map((item, index) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 bg-slate-50 p-5 rounded-xl border border-slate-200", children: [
          /* @__PURE__ */ jsxDEV(Shield, { className: "w-5 h-5 text-leap-orange shrink-0" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 507,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-black font-medium", children: item }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 508,
            columnNumber: 21
          }, void 0)
        ] }, index, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 506,
          columnNumber: 19
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 504,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 497,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: /* @__PURE__ */ jsxDEV("a", { href: "#get-started", children: /* @__PURE__ */ jsxDEV(Button, { className: "bg-leap-black hover:bg-leap-black/90 text-white px-8 py-4 text-sm font-bold uppercase tracking-widest rounded-full", children: [
        "Schedule a Consultation",
        /* @__PURE__ */ jsxDEV(ArrowRight, { className: "ml-2 w-4 h-4" }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 517,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 515,
        columnNumber: 17
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 514,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 513,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 496,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 495,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 494,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "get-started", className: "py-20 bg-gradient-to-r from-leap-orange to-leap-red", children: /* @__PURE__ */ jsxDEV("div", { className: "container mx-auto px-4", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Let's Talk About Your AI Opportunity" }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 530,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 529,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("form", { onSubmit: handleSubmit, className: "bg-white rounded-2xl p-8 md:p-10 shadow-2xl", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-2", children: "Full Name *" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 537,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                name: "fullName",
                value: formData.fullName,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg border ${errors.fullName ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`,
                placeholder: "Your name"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 538,
                columnNumber: 19
              },
              void 0
            ),
            errors.fullName && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.fullName }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 546,
              columnNumber: 39
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 536,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-2", children: "Work Email *" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 549,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "email",
                name: "workEmail",
                value: formData.workEmail,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg border ${errors.workEmail ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`,
                placeholder: "you@company.com"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 550,
                columnNumber: 19
              },
              void 0
            ),
            errors.workEmail && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.workEmail }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 558,
              columnNumber: 40
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 548,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 535,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-6 mb-6", children: [
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-2", children: "Organization *" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 564,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                name: "organization",
                value: formData.organization,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg border ${errors.organization ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`,
                placeholder: "Company name"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 565,
                columnNumber: 19
              },
              void 0
            ),
            errors.organization && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.organization }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 573,
              columnNumber: 43
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 563,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { children: [
            /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-2", children: "Role / Title *" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 576,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "text",
                name: "role",
                value: formData.role,
                onChange: handleChange,
                className: `w-full px-4 py-3 rounded-lg border ${errors.role ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`,
                placeholder: "Your role"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 577,
                columnNumber: 19
              },
              void 0
            ),
            errors.role && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.role }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 585,
              columnNumber: 35
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 575,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 562,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-2", children: "Organization Type *" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 590,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "select",
            {
              name: "organizationType",
              value: formData.organizationType,
              onChange: handleChange,
              className: `w-full px-4 py-3 rounded-lg border ${errors.organizationType ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`,
              children: [
                /* @__PURE__ */ jsxDEV("option", { value: "", children: "Select type" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 597,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("option", { value: "SaaS", children: "SaaS" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 598,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("option", { value: "Enterprise", children: "Enterprise" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 599,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("option", { value: "Government / Public Sector", children: "Government / Public Sector" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 600,
                  columnNumber: 19
                }, void 0),
                /* @__PURE__ */ jsxDEV("option", { value: "Non-profit", children: "Non-profit" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 601,
                  columnNumber: 19
                }, void 0)
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 591,
              columnNumber: 17
            },
            void 0
          ),
          errors.organizationType && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.organizationType }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 603,
            columnNumber: 45
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 589,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-3", children: "Primary Goal (select all that apply) *" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 607,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "grid md:grid-cols-2 gap-3", children: goals.map((goal) => /* @__PURE__ */ jsxDEV("label", { className: "flex items-center gap-3 p-3 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50", children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "checkbox",
                checked: formData.primaryGoals.includes(goal),
                onChange: () => handleGoalChange(goal),
                className: "w-4 h-4 text-leap-orange rounded focus:ring-leap-orange"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 611,
                columnNumber: 23
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700", children: goal }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 617,
              columnNumber: 23
            }, void 0)
          ] }, goal, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 610,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 608,
            columnNumber: 17
          }, void 0),
          errors.primaryGoals && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.primaryGoals }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 621,
            columnNumber: 41
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 606,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-2", children: "Which service are you interested in? *" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 625,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "select",
            {
              name: "serviceInterest",
              value: formData.serviceInterest,
              onChange: handleChange,
              className: `w-full px-4 py-3 rounded-lg border ${errors.serviceInterest ? "border-red-500" : "border-slate-300"} focus:ring-2 focus:ring-leap-orange focus:border-transparent`,
              children: [
                /* @__PURE__ */ jsxDEV("option", { value: "", children: "Select service" }, void 0, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 632,
                  columnNumber: 19
                }, void 0),
                services.map((service) => /* @__PURE__ */ jsxDEV("option", { value: service, children: service }, service, false, {
                  fileName: "/dev-server/src/pages/AIServices.tsx",
                  lineNumber: 634,
                  columnNumber: 21
                }, void 0))
              ]
            },
            void 0,
            true,
            {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 626,
              columnNumber: 17
            },
            void 0
          ),
          errors.serviceInterest && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.serviceInterest }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 637,
            columnNumber: 44
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 624,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-6", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "block text-sm font-medium text-slate-700 mb-2", children: "Brief description of your challenge (optional)" }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 641,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV(
            "textarea",
            {
              name: "challenge",
              value: formData.challenge,
              onChange: handleChange,
              rows: 4,
              className: "w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-leap-orange focus:border-transparent",
              placeholder: "Tell us about your current challenges or goals..."
            },
            void 0,
            false,
            {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 642,
              columnNumber: 17
            },
            void 0
          )
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 640,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxDEV("label", { className: "flex items-start gap-3 cursor-pointer", children: [
            /* @__PURE__ */ jsxDEV(
              "input",
              {
                type: "checkbox",
                name: "consent",
                checked: formData.consent,
                onChange: handleChange,
                className: "w-4 h-4 text-leap-orange rounded focus:ring-leap-orange mt-1"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/AIServices.tsx",
                lineNumber: 654,
                columnNumber: 19
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV("span", { className: "text-sm text-slate-600", children: "I agree to be contacted about my inquiry. *" }, void 0, false, {
              fileName: "/dev-server/src/pages/AIServices.tsx",
              lineNumber: 661,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 653,
            columnNumber: 17
          }, void 0),
          errors.consent && /* @__PURE__ */ jsxDEV("p", { className: "text-red-500 text-sm mt-1", children: errors.consent }, void 0, false, {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 665,
            columnNumber: 36
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 652,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Button,
          {
            type: "button",
            onClick: handleSubmit,
            disabled: isSubmitting,
            className: "w-full bg-leap-orange hover:bg-leap-red text-white py-6 text-lg font-bold",
            children: isSubmitting ? "Submitting..." : "👉 Request a Consultation"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/AIServices.tsx",
            lineNumber: 668,
            columnNumber: 15
          },
          void 0
        ),
        submitMessage && /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm font-medium text-leap-black mt-4", role: "status", "aria-live": "polite", children: submitMessage }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 678,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-center text-sm text-slate-500 mt-4", children: "No spam. No obligation. We'll review your needs and recommend the right next step." }, void 0, false, {
          fileName: "/dev-server/src/pages/AIServices.tsx",
          lineNumber: 683,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/AIServices.tsx",
        lineNumber: 534,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 528,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 527,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/AIServices.tsx",
      lineNumber: 526,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/AIServices.tsx",
    lineNumber: 277,
    columnNumber: 5
  }, void 0);
};
const pspcImg = "/assets/pspc-hero-B5BXWAoL.jpg";
const isedImg = "/assets/ised-hero-C-bKD0jg.jpg";
const sjaImg = "/assets/sja-hero-CmUCj-PO.jpg";
const ijcImg = "/assets/ijc-hero-BVbk-YnL.jpg";
const benevaImg = "/assets/beneva-hero-C_Jl0bQI.jpg";
const featured = [
  {
    client: "Beneva",
    headline: "Unifying brand and experience after a major merger",
    summary: "Following the merger of La Capitale and SSQ Insurance, we helped Beneva align its brand and user experience across apps, websites, service portals, and internal communications.",
    services: ["Design systems", "Brand integration", "Enterprise UX", "Governance"],
    path: "/portfolio/beneva",
    category: "business",
    image: benevaImg
  },
  {
    client: "Innovation, Science and Economic Development Canada",
    headline: "Improving digital identity, accessibility, and service delivery",
    summary: "We modernized identity management, regulatory tools, and internal support workflows—strengthening usability, reducing barriers, and improving service delivery at scale.",
    services: ["UX research", "Service design", "Accessibility", "Compliance support"],
    path: "/portfolio/ised",
    category: "government",
    image: isedImg
  },
  {
    client: "International Joint Commission",
    headline: "Creating a roadmap for a more usable and accessible platform",
    summary: "Through stakeholder engagement, user research, and content analysis, we developed a clear roadmap to improve discoverability of environmental and regulatory content.",
    services: ["UX research", "Usability testing", "Content audit", "Accessibility strategy"],
    path: "/portfolio/ijc",
    category: "government",
    image: ijcImg
  },
  {
    client: "St. John Ambulance",
    headline: "Expanding reach through digital transformation",
    summary: "We strengthened SJA's digital presence, improved operations, and expanded access to training and community programs through website modernization, SEO, analytics, and workflow automation.",
    services: ["Website strategy", "UX design", "SEO", "System integration"],
    path: "/portfolio/st-john-ambulance",
    category: "nonprofit",
    image: sjaImg
  },
  {
    client: "Public Services and Procurement Canada",
    headline: "Modernizing public engagement and research accessibility",
    summary: "We helped PSPC redesign research workflows and digital tools—improving transparency, discoverability, and long-term usability for researchers, policymakers, and the public.",
    services: ["UX strategy", "Workflow design", "Information architecture", "Accessibility"],
    path: "/portfolio/pspc",
    category: "government",
    image: pspcImg
  }
];
const secondary = [
  { client: "Hébergement BB", description: "Chalets, lodge, and group auberge in the Vallée-de-la-Gatineau — four seasonal properties near Lac Blue-Sea, under two hours from Ottawa and Gatineau.", category: "business", externalUrl: "https://hebergementbb.com/" },
  { client: "Transport Canada", description: "Transportation policy and program work, including drone registration and pilot certification systems.", category: "government" },
  { client: "Financial Consumer Agency of Canada", description: "Federal consumer protection and financial regulation digital services.", category: "government" },
  { client: "Employment and Social Development Canada", description: "Federal social programs and labour market initiatives.", category: "government" },
  { client: "Office of the Superintendent of Bankruptcy", description: "Federal regulatory and supervisory body within ISED.", category: "government" },
  { client: "Canada Gazette", description: "Official newspaper of the Government of Canada for regulations, board decisions, and public notices.", category: "government" },
  { client: "Tereposky & DeRose", description: "Law firm specializing in domestic and international trade law with federal government counsel experience.", category: "business" },
  { client: "Omniscient Wellness", description: "Healthcare and wellness organization offering a broad range of services and professional training.", category: "health" },
  { client: "Arctech Accelerate", description: "Grant writing, business development, and lobbying organization.", category: "business" },
  { client: "Auto Agents", description: "Online car dealership with personalized car-buying support.", category: "business" },
  { client: "NorthLend Financial", description: "Secured mortgage agreement management for partners.", category: "business" },
  { client: "Drive Thru Finance", description: "Vehicle financing support for Canadians with varied financial situations.", category: "business" },
  { client: "Selmar Group", description: "Ottawa real estate firm focused on military, RCMP, and government relocation.", category: "business" },
  { client: "Rob's Quality Roofing", description: "Residential roofing services.", category: "business" },
  { client: "Tourangeau Mechanical", description: "Commercial plumbing services in Ottawa.", category: "business" },
  { client: "Co-Auto", description: "Used car dealership and car loan financing in Ottawa.", category: "business" },
  { client: "Franco Langues", description: "French tutoring and federal public service language training.", category: "business" },
  { client: "Wind Concerns Ontario", description: "Information resource on industrial-scale wind power impacts.", category: "nonprofit" }
];
const filters = [
  { label: "All Work", value: "all" },
  { label: "Government", value: "government" },
  { label: "Nonprofit", value: "nonprofit" },
  { label: "Business", value: "business" },
  { label: "Health & Wellness", value: "health" }
];
const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const filteredFeatured = activeFilter === "all" ? featured : featured.filter((p) => p.category === activeFilter);
  const filteredSecondary = activeFilter === "all" ? secondary : secondary.filter((p) => p.category === activeFilter);
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: "Service Design & Digital Transformation Case Studies | LeapUX Ottawa",
        description: "LeapUX case studies: Government of Canada UX transformation, St. John Ambulance digital service redesign, Beneva insurance CX, and mission-driven organization digital delivery.",
        path: "/portfolio",
        ogTitle: "LeapUX Portfolio — Government & Mission-Driven Digital Case Studies",
        ogDescription: "Explore how LeapUX has delivered UX research, service design, and digital transformation for the Government of Canada, St. John Ambulance, Beneva, and more."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 118,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2000",
            alt: "Team collaboration background",
            className: "w-full h-full object-cover hero-image"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Portfolio.tsx",
            lineNumber: 128,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 133,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 127,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight mb-6 md:mb-8", children: "Our Work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 137,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg md:text-xl text-slate-300 leading-relaxed font-light mb-8 md:mb-10", children: "We help organizations modernize how they serve, communicate, and grow through accessible, bilingual, and scalable digital experiences." }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 140,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center gap-2 bg-leap-orange text-leap-white px-8 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all",
            children: [
              "Let's talk",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 148,
                columnNumber: 15
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/Portfolio.tsx",
            lineNumber: 143,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 136,
        columnNumber: 11
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "sticky top-[72px] z-40 bg-background/95 backdrop-blur-sm border-b border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "flex gap-1 overflow-x-auto py-4 -mx-4 px-4 scrollbar-hide", children: filters.map((filter) => /* @__PURE__ */ jsxDEV(
      "button",
      {
        onClick: () => setActiveFilter(filter.value),
        className: `flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${activeFilter === filter.value ? "bg-leap-black text-leap-white" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`,
        children: filter.label
      },
      filter.value,
      false,
      {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 159,
        columnNumber: 15
      },
      void 0
    )) }, void 0, false, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 157,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 156,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 155,
      columnNumber: 7
    }, void 0),
    filteredFeatured.length > 0 && /* @__PURE__ */ jsxDEV("section", { className: "py-14 md:py-24", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-10 md:mb-16", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-leap-orange mb-3", children: "Featured Work" }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-black text-foreground", children: "Case Studies" }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 181,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "space-y-6 md:space-y-10", children: filteredFeatured.map((project, i) => /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: project.path,
          className: "group block",
          children: /* @__PURE__ */ jsxDEV("div", { className: `relative rounded-2xl border border-border overflow-hidden transition-all duration-500 hover:border-leap-orange/30 hover:shadow-xl hover:shadow-leap-orange/5 ${i % 2 === 0 ? "bg-background" : "bg-muted/20"}`, children: [
            /* @__PURE__ */ jsxDEV("div", { className: "absolute top-0 left-0 w-1 h-full bg-leap-orange/0 group-hover:bg-leap-orange transition-all duration-500" }, void 0, false, {
              fileName: "/dev-server/src/pages/Portfolio.tsx",
              lineNumber: 194,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col lg:flex-row", children: [
              /* @__PURE__ */ jsxDEV("div", { className: `relative lg:w-[42%] shrink-0 overflow-hidden ${i % 2 !== 0 ? "lg:order-2" : ""}`, children: /* @__PURE__ */ jsxDEV("div", { className: "aspect-[16/10] lg:aspect-auto lg:absolute lg:inset-0", children: [
                /* @__PURE__ */ jsxDEV(
                  "img",
                  {
                    src: project.image,
                    alt: `${project.client} project screenshot`,
                    className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-700",
                    loading: "lazy"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/Portfolio.tsx",
                    lineNumber: 199,
                    columnNumber: 27
                  },
                  void 0
                ),
                /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 bg-gradient-to-t from-black/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 205,
                  columnNumber: 27
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 198,
                columnNumber: 25
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 197,
                columnNumber: 23
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: `flex-1 p-6 md:p-10 lg:p-12 ${i % 2 !== 0 ? "lg:order-1" : ""}`, children: [
                /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold uppercase tracking-[0.2em] text-leap-orange mb-4", children: project.client }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 210,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("h3", { className: "text-2xl md:text-3xl font-bold text-foreground mb-4 leading-tight group-hover:text-leap-orange transition-colors", children: project.headline }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 211,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground leading-relaxed mb-6", children: project.summary }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 214,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-2 mb-6", children: project.services.map((s) => /* @__PURE__ */ jsxDEV("span", { className: "px-3 py-1 text-xs font-medium bg-muted rounded-full text-muted-foreground", children: s }, s, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 217,
                  columnNumber: 29
                }, void 0)) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 215,
                  columnNumber: 25
                }, void 0),
                /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-2 text-sm font-bold text-leap-orange group-hover:gap-3 transition-all", children: [
                  "View case study",
                  /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
                    fileName: "/dev-server/src/pages/Portfolio.tsx",
                    lineNumber: 224,
                    columnNumber: 27
                  }, void 0)
                ] }, void 0, true, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 222,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 209,
                columnNumber: 23
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Portfolio.tsx",
              lineNumber: 195,
              columnNumber: 21
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/Portfolio.tsx",
            lineNumber: 191,
            columnNumber: 19
          }, void 0)
        },
        project.client,
        false,
        {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 186,
          columnNumber: 17
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 184,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 178,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, void 0),
    filteredSecondary.length > 0 && /* @__PURE__ */ jsxDEV("section", { className: "py-14 md:py-24 bg-muted/30 border-t border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "mb-10 md:mb-16", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm font-bold uppercase tracking-[0.2em] text-leap-orange mb-3", children: "Additional Experience" }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 241,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-black text-foreground mb-4", children: "More Organizations We've Worked With" }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 242,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-muted-foreground max-w-2xl", children: "A broader look at the organizations we've supported across government, business, health, and community sectors." }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 243,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 240,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredSecondary.map((project) => /* @__PURE__ */ jsxDEV(
        "div",
        {
          className: "group bg-background rounded-xl border border-border overflow-hidden hover:border-leap-orange/20 transition-all duration-300 hover:shadow-md",
          children: [
            project.imageUrl && /* @__PURE__ */ jsxDEV("div", { className: "aspect-[16/9] overflow-hidden bg-muted", children: /* @__PURE__ */ jsxDEV(
              "img",
              {
                src: project.imageUrl,
                alt: `${project.client} screenshot`,
                className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
                loading: "lazy"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 256,
                columnNumber: 23
              },
              void 0
            ) }, void 0, false, {
              fileName: "/dev-server/src/pages/Portfolio.tsx",
              lineNumber: 255,
              columnNumber: 21
            }, void 0),
            /* @__PURE__ */ jsxDEV("div", { className: "p-6", children: [
              /* @__PURE__ */ jsxDEV("div", { className: "flex items-start justify-between mb-3", children: [
                /* @__PURE__ */ jsxDEV("h3", { className: "text-lg font-bold text-foreground leading-snug", children: project.client }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 266,
                  columnNumber: 23
                }, void 0),
                project.externalUrl && /* @__PURE__ */ jsxDEV("a", { href: project.externalUrl, target: "_blank", rel: "noopener noreferrer", className: "text-muted-foreground hover:text-leap-orange transition-colors shrink-0 ml-2", children: /* @__PURE__ */ jsxDEV(ExternalLink, { className: "h-4 w-4" }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 269,
                  columnNumber: 27
                }, void 0) }, void 0, false, {
                  fileName: "/dev-server/src/pages/Portfolio.tsx",
                  lineNumber: 268,
                  columnNumber: 25
                }, void 0)
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 265,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-muted-foreground leading-relaxed", children: project.description }, void 0, false, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 273,
                columnNumber: 21
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { className: "mt-4", children: /* @__PURE__ */ jsxDEV("span", { className: "inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-muted rounded-full text-muted-foreground", children: project.category === "health" ? "Health & Wellness" : project.category.charAt(0).toUpperCase() + project.category.slice(1) }, void 0, false, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 275,
                columnNumber: 23
              }, void 0) }, void 0, false, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 274,
                columnNumber: 21
              }, void 0)
            ] }, void 0, true, {
              fileName: "/dev-server/src/pages/Portfolio.tsx",
              lineNumber: 264,
              columnNumber: 19
            }, void 0)
          ]
        },
        project.client,
        true,
        {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 250,
          columnNumber: 17
        },
        void 0
      )) }, void 0, false, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 248,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 239,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 238,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative py-16 md:py-28 bg-leap-black text-leap-white text-center overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-[0.04]", style: {
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "32px 32px"
      } }, void 0, false, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 289,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-leap-orange text-sm font-bold uppercase tracking-[0.3em] mb-6", children: "Ready to start?" }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 294,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-5xl font-black mb-6 leading-tight", children: [
          "Let's build something",
          /* @__PURE__ */ jsxDEV("br", {}, void 0, false, {
            fileName: "/dev-server/src/pages/Portfolio.tsx",
            lineNumber: 295,
            columnNumber: 99
          }, void 0),
          "that actually works"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 295,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-white/50 mb-10 max-w-lg mx-auto", children: "Whether you're modernizing a service, launching a platform, or tackling a complex challenge—we're here to help." }, void 0, false, {
          fileName: "/dev-server/src/pages/Portfolio.tsx",
          lineNumber: 296,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center gap-2 bg-leap-orange text-leap-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all",
            children: [
              "Start a conversation",
              /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
                fileName: "/dev-server/src/pages/Portfolio.tsx",
                lineNumber: 304,
                columnNumber: 13
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/Portfolio.tsx",
            lineNumber: 299,
            columnNumber: 11
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Portfolio.tsx",
        lineNumber: 293,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Portfolio.tsx",
      lineNumber: 288,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Portfolio.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, void 0);
};
const CaseStudyLayout = ({
  client,
  headline,
  intro,
  challenge,
  whatWeDid,
  impact,
  services,
  heroImage: heroImage2,
  nextProject,
  prevProject
}) => {
  const { pathname } = useLocation();
  return /* @__PURE__ */ jsxDEV("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: `${client} — Case Study | LeapUX`,
        description: intro.length > 160 ? intro.slice(0, 157) + "..." : intro,
        path: pathname,
        ogType: "article"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 34,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV("section", { className: "relative bg-leap-black text-leap-white pt-40 pb-24 overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 opacity-[0.03]", style: {
        backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
        backgroundSize: "40px 40px"
      } }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 43,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: [
        /* @__PURE__ */ jsxDEV(Link, { to: "/portfolio", className: "inline-flex items-center gap-2 text-sm text-leap-orange hover:text-leap-orange/80 transition-colors mb-12 group", children: [
          /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "h-4 w-4 group-hover:-translate-x-1 transition-transform" }, void 0, false, {
            fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
            lineNumber: 49,
            columnNumber: 13
          }, void 0),
          "Back to Portfolio"
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 48,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-leap-orange text-sm font-bold uppercase tracking-[0.2em] mb-6", children: client }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 52,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("h1", { className: "text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight", children: headline }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 53,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 47,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 42,
      columnNumber: 7
    }, void 0),
    heroImage2 && /* @__PURE__ */ jsxDEV("section", { className: "relative -mt-1", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20", children: /* @__PURE__ */ jsxDEV("div", { className: "rounded-xl overflow-hidden shadow-2xl border border-border", children: /* @__PURE__ */ jsxDEV(
      "img",
      {
        src: heroImage2,
        alt: `${client} project showcase`,
        className: "w-full h-auto object-cover"
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 62,
        columnNumber: 15
      },
      void 0
    ) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 61,
      columnNumber: 13
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 60,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 59,
      columnNumber: 9
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: `py-20 border-b border-border ${heroImage2 ? "pt-16" : ""}`, children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("p", { className: "text-xl md:text-2xl text-muted-foreground leading-relaxed", children: intro }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 75,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 74,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 73,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-[2px] bg-leap-orange" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 83,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-sm font-bold uppercase tracking-[0.2em] text-leap-orange", children: "The Challenge" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 84,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 82,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-foreground leading-relaxed", children: challenge }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 81,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 80,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-muted/30", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-[2px] bg-leap-orange" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 94,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-sm font-bold uppercase tracking-[0.2em] text-leap-orange", children: "What We Did" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 95,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 93,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-foreground leading-relaxed", children: whatWeDid }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 97,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 92,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 91,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-20 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4 mb-8", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-[2px] bg-leap-orange" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 105,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV("h2", { className: "text-sm font-bold uppercase tracking-[0.2em] text-leap-orange", children: "Impact" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 106,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-foreground leading-relaxed", children: impact }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 108,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 103,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 102,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-16 border-t border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("h3", { className: "text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-6", children: "Services Delivered" }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 115,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "flex flex-wrap gap-3", children: services.map((service) => /* @__PURE__ */ jsxDEV("span", { className: "px-4 py-2 text-sm font-medium bg-muted rounded-full text-foreground", children: service }, service, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 118,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 116,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 114,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 113,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "border-t border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2", children: [
      prevProject ? /* @__PURE__ */ jsxDEV(Link, { to: prevProject.path, className: "py-12 pr-8 group hover:bg-muted/30 transition-colors border-r border-border", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2", children: "Previous" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 132,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-bold text-foreground group-hover:text-leap-orange transition-colors flex items-center gap-2", children: [
          /* @__PURE__ */ jsxDEV(ArrowLeft, { className: "h-4 w-4 group-hover:-translate-x-1 transition-transform" }, void 0, false, {
            fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
            lineNumber: 134,
            columnNumber: 19
          }, void 0),
          prevProject.name
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 133,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 131,
        columnNumber: 15
      }, void 0) : /* @__PURE__ */ jsxDEV("div", { className: "border-r border-border" }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 138,
        columnNumber: 17
      }, void 0),
      nextProject ? /* @__PURE__ */ jsxDEV(Link, { to: nextProject.path, className: "py-12 pl-8 text-right group hover:bg-muted/30 transition-colors", children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-xs font-bold uppercase tracking-[0.15em] text-muted-foreground mb-2", children: "Next" }, void 0, false, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 141,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg font-bold text-foreground group-hover:text-leap-orange transition-colors flex items-center justify-end gap-2", children: [
          nextProject.name,
          /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform" }, void 0, false, {
            fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
            lineNumber: 144,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 142,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 140,
        columnNumber: 15
      }, void 0) : /* @__PURE__ */ jsxDEV("div", {}, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 147,
        columnNumber: 17
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 129,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 128,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 127,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-24 bg-leap-black text-leap-white text-center", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-3xl md:text-4xl font-black mb-6", children: "Have a project in mind?" }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-white/70 mb-10", children: "Let's talk about how we can help your organization deliver better outcomes." }, void 0, false, {
        fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
        lineNumber: 156,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        Link,
        {
          to: "/contact",
          className: "inline-flex items-center gap-2 bg-leap-orange text-leap-white px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:brightness-110 transition-all",
          children: [
            "Start a conversation",
            /* @__PURE__ */ jsxDEV(ArrowRight, { className: "h-4 w-4" }, void 0, false, {
              fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
              lineNumber: 162,
              columnNumber: 13
            }, void 0)
          ]
        },
        void 0,
        true,
        {
          fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
          lineNumber: 157,
          columnNumber: 11
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 154,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
      lineNumber: 153,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/portfolio/CaseStudyLayout.tsx",
    lineNumber: 33,
    columnNumber: 5
  }, void 0);
};
const PSPC = () => /* @__PURE__ */ jsxDEV(
  CaseStudyLayout,
  {
    client: "Public Services and Procurement Canada",
    headline: "Modernizing public engagement and research accessibility",
    intro: "Public Services and Procurement Canada partnered with LeapUX to improve how public opinion research and legislative feedback were managed, accessed, and shared. The goal was to create a more transparent, accessible, and efficient system that better supported both government teams and public participation.",
    challenge: "PSPC needed to modernize research workflows, improve accessibility, and create a clearer path for gathering and managing public input. Existing tools and content structures made it harder to locate information, support collaboration, and scale processes across departments.",
    whatWeDid: "LeapUX helped PSPC redesign the workflows and digital structure supporting public engagement and research. We developed a more effective feedback process for legislative consultation, restructured public opinion research workflows, improved usability and content discoverability, and introduced tools and documentation to support long-term adoption across teams.",
    impact: "The new approach made research tools easier to use, improved access to key information, and supported more efficient handling of public input. It also helped strengthen transparency by making engagement more structured, accessible, and scalable.",
    services: ["UX strategy", "Service design", "Workflow modernization", "Information architecture", "Accessibility", "Agile implementation", "Training"],
    heroImage: pspcImg,
    nextProject: { name: "ISED", path: "/portfolio/ised" }
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/portfolio/PSPC.tsx",
    lineNumber: 5,
    columnNumber: 3
  },
  void 0
);
const ISED = () => /* @__PURE__ */ jsxDEV(
  CaseStudyLayout,
  {
    client: "Innovation, Science and Economic Development Canada",
    headline: "Improving digital identity, accessibility, and service delivery",
    intro: "LeapUX partnered with ISED to modernize digital identity services, streamline internal support tools, and improve accessibility across key public-facing platforms. The work focused on making essential government services easier to access, easier to support, and easier to scale.",
    challenge: "ISED needed to strengthen authentication experiences, reduce friction for users, support regulatory compliance, and improve the usability of internal tools used by service teams. Accessibility and bilingual delivery were critical throughout.",
    whatWeDid: "LeapUX supported the modernization of identity and service systems by helping design a secure and scalable authentication experience, improving account management and sign-in journeys, redesigning internal administration tools based on UX research, optimizing navigation and content structure, and supporting accessibility and compliance requirements across major digital services.",
    impact: "The work improved usability for both the public and internal teams, reduced support barriers, and created a stronger foundation for accessible and efficient digital service delivery. It also supported more effective regulatory reporting and strengthened trust in public-facing digital tools.",
    services: ["UX research", "Service design", "Accessibility", "Interface design", "Content strategy", "Compliance support", "Digital transformation"],
    heroImage: isedImg,
    prevProject: { name: "PSPC", path: "/portfolio/pspc" },
    nextProject: { name: "St. John Ambulance", path: "/portfolio/st-john-ambulance" }
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/portfolio/ISED.tsx",
    lineNumber: 5,
    columnNumber: 3
  },
  void 0
);
const StJohnAmbulance = () => /* @__PURE__ */ jsxDEV(
  CaseStudyLayout,
  {
    client: "St. John Ambulance",
    headline: "Expanding reach through digital transformation",
    intro: "St. John Ambulance partnered with LeapUX to improve its digital ecosystem, strengthen national outreach, and make programs and training more accessible. From website modernization to campaign support and analytics, the work helped unify and scale digital efforts across the organization.",
    challenge: "SJA needed a more flexible platform, stronger visibility for key programs, better operational workflows, and more effective ways to track campaign and enrollment performance across audiences and regions.",
    whatWeDid: "LeapUX supported St. John Ambulance through website and user experience improvements, SEO and content optimization, analytics dashboards and performance reporting, digital campaign support for training and community programs, workflow automation, and key system integrations that improved efficiency behind the scenes.",
    impact: "The organization gained a stronger digital foundation, improved discoverability, and more efficient internal workflows. Users could more easily find resources and training, while teams benefited from better tools, better data, and better support for future growth.",
    services: ["Website strategy", "UX design", "SEO", "Analytics", "Digital campaigns", "System integration", "Automation"],
    heroImage: sjaImg,
    prevProject: { name: "ISED", path: "/portfolio/ised" },
    nextProject: { name: "IJC", path: "/portfolio/ijc" }
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/portfolio/StJohnAmbulance.tsx",
    lineNumber: 5,
    columnNumber: 3
  },
  void 0
);
const IJC = () => /* @__PURE__ */ jsxDEV(
  CaseStudyLayout,
  {
    client: "International Joint Commission",
    headline: "Creating a roadmap for a more usable and accessible research platform",
    intro: "The International Joint Commission engaged LeapUX to assess the usability, structure, and accessibility of its digital platform. Serving policymakers, scientists, and the public, the site needed a clearer framework to support discovery, transparency, and future growth.",
    challenge: "The platform contained complex, research-heavy content that was difficult to navigate and search. IJC needed a research-backed strategy to improve usability, content organization, accessibility, and readiness for a future redesign.",
    whatWeDid: "LeapUX conducted a comprehensive discovery and planning engagement that included stakeholder interviews, usability testing, navigation and search analysis, content audits, accessibility recommendations, technical guidance, and a phased roadmap to support redesign and vendor selection.",
    impact: "The engagement gave IJC a clear strategic foundation for modernization. It improved understanding of user needs, highlighted opportunities for better information access, and equipped the organization to move confidently into implementation.",
    services: ["UX research", "Usability testing", "Information architecture", "Accessibility strategy", "Content audit", "Digital roadmap"],
    heroImage: ijcImg,
    prevProject: { name: "St. John Ambulance", path: "/portfolio/st-john-ambulance" },
    nextProject: { name: "Soldiers Helping Soldiers", path: "/portfolio/soldiers-helping-soldiers" }
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/portfolio/IJC.tsx",
    lineNumber: 5,
    columnNumber: 3
  },
  void 0
);
const shsImg = "/assets/shs-hero-FQ_w0iRg.jpg";
const SHS = () => /* @__PURE__ */ jsxDEV(
  CaseStudyLayout,
  {
    client: "Soldiers Helping Soldiers",
    headline: "Designing a purpose-driven platform for veterans",
    intro: "LeapUX partnered with Soldiers Helping Soldiers to create a bilingual, accessible digital platform that better connects veterans to services and strengthens public support for the organization's mission.",
    challenge: "SHS needed a modern platform that would make it easier for veterans to access resources while also supporting donor engagement, volunteer participation, and future organizational growth.",
    whatWeDid: "LeapUX designed and delivered a platform that supports bilingual access in English and French, improves navigation to essential veteran services, creates clearer user journeys for donors and volunteers, integrates fundraising and engagement touchpoints, and equips the internal team with training and documentation for long-term independence.",
    impact: "The new platform made critical resources easier to find, improved engagement with supporters, and provided SHS with a stronger digital foundation for growth. It helped the organization better connect people to services while expanding awareness of its mission.",
    services: ["Website design", "Bilingual UX", "Accessibility", "Content strategy", "Fundraising flows", "Campaign support", "Training"],
    heroImage: shsImg,
    prevProject: { name: "IJC", path: "/portfolio/ijc" },
    nextProject: { name: "Beneva", path: "/portfolio/beneva" }
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/portfolio/SHS.tsx",
    lineNumber: 5,
    columnNumber: 3
  },
  void 0
);
const Beneva = () => /* @__PURE__ */ jsxDEV(
  CaseStudyLayout,
  {
    client: "Beneva",
    headline: "Unifying brand and experience after a major merger",
    intro: "LeapUX supported Beneva following the merger of La Capitale and SSQ Insurance, helping bring consistency to a large and complex digital and operational ecosystem.",
    challenge: "A successful merger required more than a visual refresh. Beneva needed a unified brand experience across systems, teams, templates, platforms, and customer touchpoints—while maintaining continuity, usability, and accessibility.",
    whatWeDid: "LeapUX helped establish alignment by developing a scalable design system and brand framework, standardizing templates and communication tools, reviewing digital touchpoints for consistency, supporting accessible documentation, and creating governance materials and onboarding resources for teams across the organization.",
    impact: "The work supported a more cohesive post-merger experience, reduced fragmentation, and helped teams across the organization apply the new brand with confidence and consistency.",
    services: ["Design systems", "Brand integration", "Enterprise UX", "Accessibility", "Governance", "Template development"],
    heroImage: benevaImg,
    prevProject: { name: "Soldiers Helping Soldiers", path: "/portfolio/soldiers-helping-soldiers" }
  },
  void 0,
  false,
  {
    fileName: "/dev-server/src/pages/portfolio/Beneva.tsx",
    lineNumber: 5,
    columnNumber: 3
  },
  void 0
);
const heroGeo = "/assets/hero-geo-DAXWmBDy.jpg";
const GEO = () => {
  const { toast: toast2 } = useToast();
  const [geoSubmitting, setGeoSubmitting] = useState(false);
  return /* @__PURE__ */ jsxDEV("div", { children: [
    /* @__PURE__ */ jsxDEV(
      Seo,
      {
        title: "Generative Engine Optimization (GEO) Services Canada | LeapUX",
        description: "LeapUX GEO services help Canadian organizations get cited by ChatGPT, Perplexity, and Gemini. AI visibility strategy, structured data, and content optimization for AI search.",
        path: "/geo",
        ogTitle: "GEO Services Canada — Get Cited by ChatGPT, Perplexity & Gemini | LeapUX",
        ogDescription: "LeapUX helps Canadian businesses and government organizations appear in AI-generated answers. Structured data, AI visibility files, and content strategy for AI search."
      },
      void 0,
      false,
      {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 15,
        columnNumber: 7
      },
      void 0
    ),
    /* @__PURE__ */ jsxDEV(Helmet, { children: /* @__PURE__ */ jsxDEV("script", { type: "application/ld+json", children: `{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "name": "Generative Engine Optimization (GEO)",
      "provider": { "@type": "Organization", "name": "LeapUX", "url": "https://leapux.com" },
      "description": "GEO services to make Canadian organizations visible and citable in AI search engines including ChatGPT, Perplexity, and Gemini.",
      "areaServed": "Canada",
      "url": "https://leapux.com/geo"
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is Generative Engine Optimization (GEO)?",
          "acceptedAnswer": { "@type": "Answer", "text": "Generative Engine Optimization (GEO) is the practice of structuring website content so AI engines like ChatGPT, Perplexity, and Gemini cite your brand when answering questions in your industry." }
        },
        {
          "@type": "Question",
          "name": "How is GEO different from SEO?",
          "acceptedAnswer": { "@type": "Answer", "text": "Traditional SEO optimizes for Google rankings and click-throughs. GEO optimizes for AI citation — ensuring your brand appears in AI-generated answers, not just search result lists." }
        },
        {
          "@type": "Question",
          "name": "Who offers GEO services in Canada?",
          "acceptedAnswer": { "@type": "Answer", "text": "LeapUX is a Canadian consultancy in Ottawa offering Generative Engine Optimization services for government, public sector, and mission-driven organizations across Canada." }
        },
        {
          "@type": "Question",
          "name": "How long does GEO take to show results?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most organizations see measurable AI citation improvements within 60 to 90 days of implementing GEO content and structured data changes." }
        }
      ]
    }
  ]
}` }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 23,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative min-h-screen flex items-center bg-leap-black overflow-hidden", children: [
      /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 z-0", children: [
        /* @__PURE__ */ jsxDEV(
          "img",
          {
            src: heroGeo,
            alt: "Person searching with AI on laptop",
            className: "w-full h-full object-cover",
            style: { filter: "grayscale(1) contrast(1.1) brightness(0.45)" }
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 65,
            columnNumber: 11
          },
          void 0
        ),
        /* @__PURE__ */ jsxDEV("div", { className: "absolute inset-0 image-overlay" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 71,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 64,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-32 pb-20", children: [
        /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-3xl", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "inline-flex items-center gap-2 px-4 py-1.5 bg-leap-orange/10 border border-leap-orange/30 text-leap-orange text-[10px] font-black uppercase tracking-[0.3em] mb-10 rounded-full", children: "Generative Engine Optimization" }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 77,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("h1", { className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-leap-white mb-8 leading-[0.95]", children: [
            "Be the answer AI",
            " ",
            /* @__PURE__ */ jsxDEV("span", { className: "text-leap-orange", children: "recommends." }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 83,
              columnNumber: 17
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 81,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light", children: "Traditional search is giving way to AI-powered discovery. Generative Engine Optimization (GEO) makes your brand the one that ChatGPT, Gemini, and Perplexity cite, trust, and recommend." }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 86,
            columnNumber: 15
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex flex-col sm:flex-row gap-4", children: [
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#contact",
                className: "inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl",
                children: "Get a Free GEO Audit"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/GEO.tsx",
                lineNumber: 91,
                columnNumber: 17
              },
              void 0
            ),
            /* @__PURE__ */ jsxDEV(
              "a",
              {
                href: "#how-it-works",
                className: "inline-flex justify-center items-center px-10 py-5 text-sm font-bold uppercase tracking-widest rounded-full border border-leap-white/20 text-leap-white hover:bg-leap-white/10 transition-all",
                children: "How It Works"
              },
              void 0,
              false,
              {
                fileName: "/dev-server/src/pages/GEO.tsx",
                lineNumber: 97,
                columnNumber: 17
              },
              void 0
            )
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 90,
            columnNumber: 15
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 76,
          columnNumber: 13
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 75,
          columnNumber: 11
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-8 mt-20 pt-16 border-t border-white/10", children: [
          { value: "527%", label: "Growth in AI search traffic in 2025" },
          { value: "65%", label: "Google searches ending with zero clicks" },
          { value: "84%", label: "Businesses not tracking AI visibility" }
        ].map((stat, i) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 0.1 + i * 0.15, direction: "up", children: /* @__PURE__ */ jsxDEV("div", { children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-4xl sm:text-5xl font-bold text-leap-orange mb-3", children: stat.value }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 116,
            columnNumber: 19
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "text-sm text-slate-500 uppercase tracking-wider", children: stat.label }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 117,
            columnNumber: 19
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 115,
          columnNumber: 17
        }, void 0) }, i, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 114,
          columnNumber: 15
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 108,
          columnNumber: 11
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 74,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 63,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-leap-light border-b border-border", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "The Shift" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 130,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight max-w-3xl mx-auto", children: "Search has changed. Most strategies haven't." }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 131,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 max-w-2xl mx-auto", children: "Users are no longer clicking through 10 blue links. They're asking AI for a single, trusted answer. If you're not the answer, you're invisible." }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 134,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 129,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 128,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto", children: [
        /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 0.1, direction: "left", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-background p-10 rounded-2xl border border-slate-200 h-full", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Search, { className: "w-5 h-5 text-slate-400" }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 145,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 144,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-slate-400 uppercase tracking-wider", children: "Traditional SEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 143,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: [
            "User types a keyword into Google",
            "Sees a page of ranked links",
            "Clicks through to multiple websites",
            "You compete for every single click"
          ].map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-slate-500", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-xs font-bold text-slate-400 mt-0.5", children: i + 1 }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 157,
              columnNumber: 23
            }, void 0),
            item
          ] }, i, true, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 156,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 149,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 pt-6 border-t border-slate-100", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-400 italic", children: "Declining relevance as AI-first search grows" }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 163,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 162,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 142,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 0.25, direction: "right", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-leap-black p-10 rounded-2xl border border-leap-orange/20 relative overflow-hidden h-full", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "absolute top-4 right-4 px-3 py-1 bg-leap-orange/20 text-leap-orange text-[10px] font-black uppercase tracking-widest rounded-full", children: "The Future" }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 170,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-3 mb-6", children: [
            /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-leap-orange/10 rounded-xl flex items-center justify-center", children: /* @__PURE__ */ jsxDEV(Bot, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 175,
              columnNumber: 21
            }, void 0) }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 174,
              columnNumber: 19
            }, void 0),
            /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-leap-orange uppercase tracking-wider", children: "GEO" }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 177,
              columnNumber: 19
            }, void 0)
          ] }, void 0, true, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 173,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("ul", { className: "space-y-4", children: [
            "User asks AI a question in natural language",
            "AI synthesizes one authoritative answer",
            "Cites 2–3 trusted sources",
            "If you're not cited, you don't exist"
          ].map((item, i) => /* @__PURE__ */ jsxDEV("li", { className: "flex items-start gap-3 text-slate-300", children: [
            /* @__PURE__ */ jsxDEV("span", { className: "w-6 h-6 rounded-full bg-leap-orange/20 flex items-center justify-center shrink-0 text-xs font-bold text-leap-orange mt-0.5", children: i + 1 }, void 0, false, {
              fileName: "/dev-server/src/pages/GEO.tsx",
              lineNumber: 187,
              columnNumber: 23
            }, void 0),
            item
          ] }, i, true, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 186,
            columnNumber: 21
          }, void 0)) }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 179,
            columnNumber: 17
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "mt-8 pt-6 border-t border-white/10", children: /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-leap-orange font-medium", children: "The brands AI trusts today compound authority tomorrow" }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 193,
            columnNumber: 19
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 192,
            columnNumber: 17
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 169,
          columnNumber: 15
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 168,
          columnNumber: 13
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 140,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 127,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 126,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { direction: "left", children: /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-brand uppercase tracking-[0.2em] mb-4", children: "What is GEO" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 207,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-8 leading-tight", children: "GEO is the new SEO — built for the AI era." }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 208,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 leading-relaxed mb-8", children: [
          "Generative Engine Optimization is the practice of making your content discoverable, citable, and authoritative to AI-powered search engines. While traditional SEO optimizes for ranking in link-based results, GEO optimizes for ",
          /* @__PURE__ */ jsxDEV("strong", { children: "being the answer" }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 212,
            columnNumber: 245
          }, void 0),
          "."
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 211,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-5", children: [
          "Structured, authoritative content that AI trusts",
          "Optimized for citation across ChatGPT, Gemini, Perplexity",
          "Schema markup and semantic clarity AI models prefer",
          "Ongoing monitoring of AI search presence"
        ].map((point, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-6 h-6 text-leap-orange shrink-0", strokeWidth: 2 }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 222,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-leap-black font-medium", children: point }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 223,
            columnNumber: 23
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 221,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 214,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 206,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 205,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-2 gap-4", children: [
        { icon: Eye, title: "Visibility", desc: "Be seen when AI answers industry questions" },
        { icon: Shield, title: "Authority", desc: "Build trust signals AI engines prioritize" },
        { icon: TrendingUp, title: "Growth", desc: "Compound citations over time" },
        { icon: Target, title: "Precision", desc: "Target the queries that matter most" }
      ].map((card, i) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 0.1 + i * 0.1, direction: "up", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-[#F6F7F9] p-6 rounded-2xl border border-slate-200 hover:border-leap-orange/30 hover:shadow-lg transition-all group h-full", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-10 h-10 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-leap-orange/20 transition-colors", children: /* @__PURE__ */ jsxDEV(card.icon, { className: "w-5 h-5 text-leap-orange" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 240,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 239,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("h4", { className: "font-bold text-leap-black mb-1", children: card.title }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 242,
          columnNumber: 21
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500 leading-relaxed", children: card.desc }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 243,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 238,
        columnNumber: 19
      }, void 0) }, i, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 237,
        columnNumber: 17
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 230,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 204,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 203,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 202,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "how-it-works", className: "py-32 bg-leap-black", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-20", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "How It Works" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 257,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-white mb-6 leading-tight", children: "Three steps to AI visibility" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 258,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-400 max-w-2xl mx-auto", children: "Our proven framework moves you from invisible to indispensable across every major AI platform." }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 261,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 256,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 255,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [
        {
          step: "01",
          icon: BarChart3,
          title: "Audit Your AI Presence",
          description: "We scan ChatGPT, Perplexity, Gemini, and Google AI Overviews to measure if and how your brand appears when people ask about your industry."
        },
        {
          step: "02",
          icon: Target,
          title: "Identify the Gap",
          description: "We reveal which competitors are being recommended instead of you — and why. You see exactly where the opportunity is."
        },
        {
          step: "03",
          icon: Zap,
          title: "Make You Citable",
          description: "We create structured, authoritative content that AI platforms trust and cite. Schema markup, semantic depth, and strategic positioning — all calibrated for AI discovery."
        }
      ].map((step, i) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: i * 0.15, direction: "up", children: /* @__PURE__ */ jsxDEV("div", { className: "relative group", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-leap-orange/20 transition-all h-full", children: [
          /* @__PURE__ */ jsxDEV("div", { className: "text-6xl font-black text-leap-orange/10 mb-4", children: step.step }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 291,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-6", children: /* @__PURE__ */ jsxDEV(step.icon, { className: "w-6 h-6 text-leap-orange" }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 293,
            columnNumber: 23
          }, void 0) }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 292,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-leap-white mb-3", children: step.title }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 295,
            columnNumber: 21
          }, void 0),
          /* @__PURE__ */ jsxDEV("p", { className: "text-slate-400 leading-relaxed", children: step.description }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 296,
            columnNumber: 21
          }, void 0)
        ] }, void 0, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 290,
          columnNumber: 19
        }, void 0),
        i < 2 && /* @__PURE__ */ jsxDEV("div", { className: "hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10", children: /* @__PURE__ */ jsxDEV(ArrowRight, { className: "w-6 h-6 text-leap-orange/30" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 300,
          columnNumber: 23
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 299,
          columnNumber: 21
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 289,
        columnNumber: 17
      }, void 0) }, i, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 288,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 267,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 254,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 253,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "py-32 bg-background", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Why GEO" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 316,
          columnNumber: 15
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight", children: "The outcomes that matter" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 317,
          columnNumber: 15
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 315,
        columnNumber: 13
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 314,
        columnNumber: 11
      }, void 0),
      /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: [
        {
          icon: Eye,
          title: "AI Citations",
          description: "Your brand appears when AI answers questions in your space."
        },
        {
          icon: Award,
          title: "Brand Authority",
          description: "Being cited by AI signals trust to your entire market."
        },
        {
          icon: Clock,
          title: "Early-Mover Advantage",
          description: "Authority in AI search compounds. Starting early means staying ahead."
        },
        {
          icon: TrendingUp,
          title: "Compounding Returns",
          description: "Each citation strengthens the next. Your visibility grows exponentially."
        }
      ].map((benefit, i) => /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: i * 0.1, direction: "up", children: /* @__PURE__ */ jsxDEV("div", { className: "group p-8 rounded-2xl border border-slate-200 hover:border-leap-orange/30 hover:shadow-lg transition-all bg-[#F6F7F9] h-full", children: [
        /* @__PURE__ */ jsxDEV("div", { className: "w-12 h-12 bg-leap-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-leap-orange/20 transition-colors", children: /* @__PURE__ */ jsxDEV(benefit.icon, { className: "w-6 h-6 text-leap-orange" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 349,
          columnNumber: 21
        }, void 0) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 348,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("h4", { className: "text-lg font-bold text-leap-black mb-2", children: benefit.title }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 351,
          columnNumber: 19
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 leading-relaxed text-sm", children: benefit.description }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 352,
          columnNumber: 19
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 347,
        columnNumber: 17
      }, void 0) }, i, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 346,
        columnNumber: 15
      }, void 0)) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 323,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 313,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 312,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { id: "contact", className: "py-32 bg-[#F6F7F9]", children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxDEV("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start", children: [
      /* @__PURE__ */ jsxDEV(ScrollReveal, { direction: "left", children: /* @__PURE__ */ jsxDEV("div", { children: [
        /* @__PURE__ */ jsxDEV("h2", { className: "text-xs font-black text-leap-orange uppercase tracking-[0.2em] mb-4", children: "Get Started" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 367,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("h3", { className: "text-3xl sm:text-4xl font-bold text-leap-black mb-6 leading-tight", children: "Get your free AI visibility audit." }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 368,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-lg text-slate-600 leading-relaxed mb-10", children: "Find out how visible your brand is across AI platforms — and where the biggest opportunities are. No commitment, no cost. Just clarity." }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 371,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("div", { className: "space-y-6", children: [
          "AI Visibility Score across 4 major platforms",
          "Competitor citation comparison",
          "Actionable recommendations to increase visibility",
          "Delivered within 48 hours"
        ].map((item, i) => /* @__PURE__ */ jsxDEV("div", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsxDEV(CheckCircle, { className: "w-5 h-5 text-leap-orange shrink-0", strokeWidth: 2 }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 382,
            columnNumber: 23
          }, void 0),
          /* @__PURE__ */ jsxDEV("span", { className: "text-slate-700 font-medium", children: item }, void 0, false, {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 383,
            columnNumber: 23
          }, void 0)
        ] }, i, true, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 381,
          columnNumber: 21
        }, void 0)) }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 374,
          columnNumber: 17
        }, void 0)
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 366,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 365,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(ScrollReveal, { delay: 0.2, direction: "right", children: /* @__PURE__ */ jsxDEV("div", { className: "bg-background p-10 rounded-2xl border border-slate-200 shadow-lg", children: [
        /* @__PURE__ */ jsxDEV("h4", { className: "text-xl font-bold text-leap-black mb-2", children: "Request Your Free Audit" }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 392,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV("p", { className: "text-sm text-slate-500 mb-8", children: "Takes 30 seconds. No obligation." }, void 0, false, {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 393,
          columnNumber: 17
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "form",
          {
            onSubmit: async (e) => {
              var _a, _b, _c;
              e.preventDefault();
              const form = e.currentTarget;
              const name = ((_a = form.elements.namedItem("geo-name")) == null ? void 0 : _a.value) || "";
              const email = ((_b = form.elements.namedItem("geo-email")) == null ? void 0 : _b.value) || "";
              const website = ((_c = form.elements.namedItem("geo-website")) == null ? void 0 : _c.value) || "";
              setGeoSubmitting(true);
              try {
                await sendFormSubmission("Free GEO Audit request", [
                  { label: "Name", value: name },
                  { label: "Email", value: email },
                  { label: "Website", value: website }
                ]);
                toast2({
                  title: "Request received",
                  description: "Thanks! We'll deliver your audit within 48 hours."
                });
                form.reset();
              } catch (err) {
                console.error("GEO form submission failed", err);
                toast2({
                  title: "Something went wrong",
                  description: "Please try again or email contact@leapux.com directly.",
                  variant: "destructive"
                });
              } finally {
                setGeoSubmitting(false);
              }
            },
            className: "space-y-5",
            children: [
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { htmlFor: "geo-name", className: "block text-sm font-medium text-leap-black mb-1.5", children: "Full Name" }, void 0, false, {
                  fileName: "/dev-server/src/pages/GEO.tsx",
                  lineNumber: 427,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    id: "geo-name",
                    type: "text",
                    required: true,
                    className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-foreground focus:ring-2 focus:ring-leap-orange focus:border-transparent outline-none transition-all text-sm",
                    placeholder: "Jane Smith"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/GEO.tsx",
                    lineNumber: 428,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/GEO.tsx",
                lineNumber: 426,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { htmlFor: "geo-email", className: "block text-sm font-medium text-leap-black mb-1.5", children: "Work Email" }, void 0, false, {
                  fileName: "/dev-server/src/pages/GEO.tsx",
                  lineNumber: 437,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    id: "geo-email",
                    type: "email",
                    required: true,
                    className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-foreground focus:ring-2 focus:ring-leap-orange focus:border-transparent outline-none transition-all text-sm",
                    placeholder: "jane@company.com"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/GEO.tsx",
                    lineNumber: 438,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/GEO.tsx",
                lineNumber: 436,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV("div", { children: [
                /* @__PURE__ */ jsxDEV("label", { htmlFor: "geo-website", className: "block text-sm font-medium text-leap-black mb-1.5", children: "Website URL" }, void 0, false, {
                  fileName: "/dev-server/src/pages/GEO.tsx",
                  lineNumber: 447,
                  columnNumber: 21
                }, void 0),
                /* @__PURE__ */ jsxDEV(
                  "input",
                  {
                    id: "geo-website",
                    type: "text",
                    inputMode: "url",
                    required: true,
                    className: "w-full px-4 py-3 rounded-xl border border-slate-200 bg-background text-foreground focus:ring-2 focus:ring-leap-orange focus:border-transparent outline-none transition-all text-sm",
                    placeholder: "yourcompany.com"
                  },
                  void 0,
                  false,
                  {
                    fileName: "/dev-server/src/pages/GEO.tsx",
                    lineNumber: 448,
                    columnNumber: 21
                  },
                  void 0
                )
              ] }, void 0, true, {
                fileName: "/dev-server/src/pages/GEO.tsx",
                lineNumber: 446,
                columnNumber: 19
              }, void 0),
              /* @__PURE__ */ jsxDEV(
                "button",
                {
                  type: "submit",
                  disabled: geoSubmitting,
                  className: "w-full px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all shadow-xl disabled:opacity-70",
                  children: geoSubmitting ? "Sending…" : "Get My Free Audit"
                },
                void 0,
                false,
                {
                  fileName: "/dev-server/src/pages/GEO.tsx",
                  lineNumber: 457,
                  columnNumber: 19
                },
                void 0
              ),
              /* @__PURE__ */ jsxDEV("p", { className: "text-xs text-slate-400 text-center", children: "No credit card required. Results within 48 hours." }, void 0, false, {
                fileName: "/dev-server/src/pages/GEO.tsx",
                lineNumber: 464,
                columnNumber: 19
              }, void 0)
            ]
          },
          void 0,
          true,
          {
            fileName: "/dev-server/src/pages/GEO.tsx",
            lineNumber: 394,
            columnNumber: 17
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 391,
        columnNumber: 15
      }, void 0) }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 390,
        columnNumber: 13
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 364,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 363,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 362,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("section", { className: "relative py-40 bg-leap-orange text-leap-white text-center overflow-hidden", children: /* @__PURE__ */ jsxDEV(ScrollReveal, { children: /* @__PURE__ */ jsxDEV("div", { className: "max-w-4xl mx-auto px-4 relative z-10", children: [
      /* @__PURE__ */ jsxDEV("h2", { className: "text-4xl sm:text-5xl font-bold mb-6 leading-tight text-balance tracking-tight", children: "Every month you wait, your competitors get stronger in AI search." }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 476,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "text-xl text-white/80 mb-12 max-w-2xl mx-auto", children: "AI platforms are learning right now. The brands that get cited today build compounding authority. Don't start from zero in 6 months." }, void 0, false, {
        fileName: "/dev-server/src/pages/GEO.tsx",
        lineNumber: 479,
        columnNumber: 13
      }, void 0),
      /* @__PURE__ */ jsxDEV(
        "a",
        {
          href: "#contact",
          className: "inline-flex justify-center items-center px-14 py-6 text-sm font-bold uppercase tracking-[0.3em] rounded-full bg-leap-black text-leap-white hover:brightness-125 transition-all shadow-[0_15px_35px_rgba(0,0,0,0.25)] active:scale-95",
          children: "Start Your GEO Strategy"
        },
        void 0,
        false,
        {
          fileName: "/dev-server/src/pages/GEO.tsx",
          lineNumber: 482,
          columnNumber: 13
        },
        void 0
      )
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 475,
      columnNumber: 11
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 474,
      columnNumber: 9
    }, void 0) }, void 0, false, {
      fileName: "/dev-server/src/pages/GEO.tsx",
      lineNumber: 473,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/GEO.tsx",
    lineNumber: 14,
    columnNumber: 5
  }, void 0);
};
const Unsubscribe = () => {
  const [params] = useSearchParams();
  const token = params.get("token");
  const [state, setState] = useState("loading");
  const [busy, setBusy] = useState(false);
  useEffect(() => {
    let cancelled = false;
    async function validate() {
      if (!token) {
        setState("invalid");
        return;
      }
      try {
        const url = `${"https://ujovfvvgcdjxrjnxnhes.supabase.co"}/functions/v1/handle-email-unsubscribe?token=${encodeURIComponent(token)}`;
        const res = await fetch(url, {
          headers: { apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqb3ZmdnZnY2RqeHJqbnhuaGVzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODM5OTA1MzUsImV4cCI6MjA5OTU2NjUzNX0._xvkBx0xuYGWkjsVr5AUW8_EbPED9KoJ0b0QmtOUs8c" }
        });
        const data = await res.json();
        if (cancelled) return;
        if (!res.ok) setState("invalid");
        else if (data.valid) setState("valid");
        else if (data.reason === "already_unsubscribed") setState("already");
        else setState("invalid");
      } catch {
        if (!cancelled) setState("error");
      }
    }
    validate();
    return () => {
      cancelled = true;
    };
  }, [token]);
  const confirm = async () => {
    if (!token) return;
    setBusy(true);
    try {
      const { data, error } = await supabase.functions.invoke("handle-email-unsubscribe", {
        body: { token }
      });
      if (error) throw error;
      if ((data == null ? void 0 : data.success) || (data == null ? void 0 : data.reason) === "already_unsubscribed") {
        setState("done");
      } else {
        setState("error");
      }
    } catch {
      setState("error");
    } finally {
      setBusy(false);
    }
  };
  return /* @__PURE__ */ jsxDEV("div", { className: "min-h-screen bg-background flex items-center justify-center px-4 py-24", children: [
    /* @__PURE__ */ jsxDEV(Seo, { title: "Unsubscribe — LeapUX", description: "Manage your email preferences", path: "/unsubscribe" }, void 0, false, {
      fileName: "/dev-server/src/pages/Unsubscribe.tsx",
      lineNumber: 64,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "max-w-lg w-full bg-white rounded-2xl border border-slate-200 p-10 shadow-sm", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "text-3xl font-bold text-leap-black mb-4", children: "Unsubscribe" }, void 0, false, {
        fileName: "/dev-server/src/pages/Unsubscribe.tsx",
        lineNumber: 66,
        columnNumber: 9
      }, void 0),
      state === "loading" && /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600", children: "Checking your link…" }, void 0, false, {
        fileName: "/dev-server/src/pages/Unsubscribe.tsx",
        lineNumber: 68,
        columnNumber: 33
      }, void 0),
      state === "valid" && /* @__PURE__ */ jsxDEV(Fragment, { children: [
        /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600 mb-8", children: "Click below to confirm and stop receiving emails from LeapUX at this address." }, void 0, false, {
          fileName: "/dev-server/src/pages/Unsubscribe.tsx",
          lineNumber: 72,
          columnNumber: 13
        }, void 0),
        /* @__PURE__ */ jsxDEV(
          "button",
          {
            onClick: confirm,
            disabled: busy,
            className: "px-10 py-4 text-sm font-bold uppercase tracking-widest rounded-full bg-leap-orange text-leap-white hover:brightness-110 transition-all disabled:opacity-70",
            children: busy ? "Processing…" : "Confirm unsubscribe"
          },
          void 0,
          false,
          {
            fileName: "/dev-server/src/pages/Unsubscribe.tsx",
            lineNumber: 75,
            columnNumber: 13
          },
          void 0
        )
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Unsubscribe.tsx",
        lineNumber: 71,
        columnNumber: 11
      }, void 0),
      state === "already" && /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600", children: "You're already unsubscribed. No further action needed." }, void 0, false, {
        fileName: "/dev-server/src/pages/Unsubscribe.tsx",
        lineNumber: 86,
        columnNumber: 11
      }, void 0),
      state === "done" && /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600", children: "You've been unsubscribed. Sorry to see you go." }, void 0, false, {
        fileName: "/dev-server/src/pages/Unsubscribe.tsx",
        lineNumber: 90,
        columnNumber: 11
      }, void 0),
      state === "invalid" && /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600", children: "This unsubscribe link is invalid or expired." }, void 0, false, {
        fileName: "/dev-server/src/pages/Unsubscribe.tsx",
        lineNumber: 94,
        columnNumber: 11
      }, void 0),
      state === "error" && /* @__PURE__ */ jsxDEV("p", { className: "text-slate-600", children: [
        "Something went wrong. Please try again, or email",
        " ",
        /* @__PURE__ */ jsxDEV("a", { href: "mailto:contact@leapux.com", className: "text-leap-orange font-medium", children: "contact@leapux.com" }, void 0, false, {
          fileName: "/dev-server/src/pages/Unsubscribe.tsx",
          lineNumber: 100,
          columnNumber: 13
        }, void 0),
        "."
      ] }, void 0, true, {
        fileName: "/dev-server/src/pages/Unsubscribe.tsx",
        lineNumber: 98,
        columnNumber: 11
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/Unsubscribe.tsx",
      lineNumber: 65,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/Unsubscribe.tsx",
    lineNumber: 63,
    columnNumber: 5
  }, void 0);
};
const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);
  return /* @__PURE__ */ jsxDEV("div", { className: "flex min-h-screen items-center justify-center bg-muted", children: [
    /* @__PURE__ */ jsxDEV(Seo, { title: "Page not found | LeapUX", description: "The page you were looking for doesn’t exist. Head back to the LeapUX home page.", path: "/404" }, void 0, false, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 14,
      columnNumber: 7
    }, void 0),
    /* @__PURE__ */ jsxDEV("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxDEV("h1", { className: "mb-4 text-4xl font-bold", children: "404" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("p", { className: "mb-4 text-xl text-muted-foreground", children: "Oops! Page not found" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, void 0),
      /* @__PURE__ */ jsxDEV("a", { href: "/", className: "text-primary underline hover:text-primary/90", children: "Return to Home" }, void 0, false, {
        fileName: "/dev-server/src/pages/NotFound.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, void 0)
    ] }, void 0, true, {
      fileName: "/dev-server/src/pages/NotFound.tsx",
      lineNumber: 15,
      columnNumber: 7
    }, void 0)
  ] }, void 0, true, {
    fileName: "/dev-server/src/pages/NotFound.tsx",
    lineNumber: 13,
    columnNumber: 5
  }, void 0);
};
const routes = [
  {
    path: "/",
    element: /* @__PURE__ */ jsxDEV(Layout, {}, void 0, false, {
      fileName: "/dev-server/src/App.tsx",
      lineNumber: 24,
      columnNumber: 14
    }, void 0),
    entry: "src/Layout.tsx",
    children: [
      { index: true, element: /* @__PURE__ */ jsxDEV(Home, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 27,
        columnNumber: 31
      }, void 0), entry: "src/pages/Home.tsx" },
      { path: "about", element: /* @__PURE__ */ jsxDEV(About, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 28,
        columnNumber: 33
      }, void 0), entry: "src/pages/About.tsx" },
      { path: "services", element: /* @__PURE__ */ jsxDEV(Services$1, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 29,
        columnNumber: 36
      }, void 0), entry: "src/pages/Services.tsx" },
      { path: "capabilities", element: /* @__PURE__ */ jsxDEV(Services, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 30,
        columnNumber: 40
      }, void 0), entry: "src/pages/Capabilities.tsx" },
      { path: "contact", element: /* @__PURE__ */ jsxDEV(Contact, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 31,
        columnNumber: 35
      }, void 0), entry: "src/pages/Contact.tsx" },
      { path: "ai-training", element: /* @__PURE__ */ jsxDEV(AITraining, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 32,
        columnNumber: 39
      }, void 0), entry: "src/pages/AITraining.tsx" },
      { path: "ai-services", element: /* @__PURE__ */ jsxDEV(AIServices, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 33,
        columnNumber: 39
      }, void 0), entry: "src/pages/AIServices.tsx" },
      { path: "geo", element: /* @__PURE__ */ jsxDEV(GEO, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 34,
        columnNumber: 31
      }, void 0), entry: "src/pages/GEO.tsx" },
      { path: "portfolio", element: /* @__PURE__ */ jsxDEV(Portfolio, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 35,
        columnNumber: 37
      }, void 0), entry: "src/pages/Portfolio.tsx" },
      { path: "portfolio/pspc", element: /* @__PURE__ */ jsxDEV(PSPC, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 36,
        columnNumber: 42
      }, void 0), entry: "src/pages/portfolio/PSPC.tsx" },
      { path: "portfolio/ised", element: /* @__PURE__ */ jsxDEV(ISED, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 37,
        columnNumber: 42
      }, void 0), entry: "src/pages/portfolio/ISED.tsx" },
      { path: "portfolio/st-john-ambulance", element: /* @__PURE__ */ jsxDEV(StJohnAmbulance, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 38,
        columnNumber: 55
      }, void 0), entry: "src/pages/portfolio/StJohnAmbulance.tsx" },
      { path: "portfolio/ijc", element: /* @__PURE__ */ jsxDEV(IJC, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 39,
        columnNumber: 41
      }, void 0), entry: "src/pages/portfolio/IJC.tsx" },
      { path: "portfolio/soldiers-helping-soldiers", element: /* @__PURE__ */ jsxDEV(SHS, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 40,
        columnNumber: 63
      }, void 0), entry: "src/pages/portfolio/SHS.tsx" },
      { path: "portfolio/beneva", element: /* @__PURE__ */ jsxDEV(Beneva, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 41,
        columnNumber: 44
      }, void 0), entry: "src/pages/portfolio/Beneva.tsx" },
      { path: "unsubscribe", element: /* @__PURE__ */ jsxDEV(Unsubscribe, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 42,
        columnNumber: 39
      }, void 0), entry: "src/pages/Unsubscribe.tsx" },
      { path: "*", element: /* @__PURE__ */ jsxDEV(NotFound, {}, void 0, false, {
        fileName: "/dev-server/src/App.tsx",
        lineNumber: 43,
        columnNumber: 29
      }, void 0), entry: "src/pages/NotFound.tsx" }
    ]
  }
];
const createRoot = ViteReactSSG({ routes });
export {
  createRoot
};
