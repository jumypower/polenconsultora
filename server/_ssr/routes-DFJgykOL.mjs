import { n as __toESM } from "../_runtime.mjs";
import { a as performance_default, n as useTransform, r as useScroll, t as useReducedMotion } from "../_libs/framer-motion+[...].mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { a as BrainCircuit, i as CodeXml, n as LayoutDashboard, r as Compass, t as MessageCircle } from "../_libs/lucide-react.mjs";
import { n as stringType, t as objectType } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DFJgykOL.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var polen_logo_png_asset_default = {
	version: 1,
	asset_id: "ba80b8f2-1811-4071-92c5-b6721c9bff61",
	project_id: "4713cc86-2c86-447b-96c0-da636be5f041",
	url: "/__l5e/assets-v1/ba80b8f2-1811-4071-92c5-b6721c9bff61/polen-logo.png",
	r2_key: "a/v1/4713cc86-2c86-447b-96c0-da636be5f041/ba80b8f2-1811-4071-92c5-b6721c9bff61/polen-logo.png",
	original_filename: "polen-logo.png",
	size: 408383,
	content_type: "image/png",
	created_at: "2026-08-07T21:28:06Z"
};
var LINKS = [
	{
		href: "#caos",
		label: "Enfoque"
	},
	{
		href: "#servicios",
		label: "Servicios"
	},
	{
		href: "#diferencial",
		label: "Por qué POLEN"
	}
];
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.header, {
		initial: {
			y: -30,
			opacity: 0
		},
		animate: {
			y: 0,
			opacity: 1
		},
		transition: { duration: .5 },
		className: cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled ? "bg-background/85 shadow-soft backdrop-blur-md" : "bg-transparent"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 sm:flex sm:justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#top",
					className: "flex min-w-0 items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: polen_logo_png_asset_default.url,
						alt: "POLEN — Inteligencia en movimiento",
						className: "h-9 w-auto sm:h-10"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex",
					children: LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: link.href,
						className: "transition-colors hover:text-foreground",
						children: link.label
					}, link.href))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: "#contacto",
					className: "rounded-full bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105",
					children: "Contactános"
				})
			]
		})
	});
}
var patagonia_default = "/assets/patagonia-UKpoCCJh.jpg";
function MagneticButton({ href, children, className, variant = "solid", target, rel }) {
	const ref = (0, import_react.useRef)(null);
	const reduce = useReducedMotion();
	const [offset, setOffset] = (0, import_react.useState)({
		x: 0,
		y: 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		ref,
		href,
		target,
		rel,
		onPointerMove: (event) => {
			if (reduce || event.pointerType !== "mouse") return;
			const rect = ref.current?.getBoundingClientRect();
			if (!rect) return;
			setOffset({
				x: (event.clientX - (rect.left + rect.width / 2)) * .25,
				y: (event.clientY - (rect.top + rect.height / 2)) * .35
			});
		},
		onPointerLeave: () => setOffset({
			x: 0,
			y: 0
		}),
		animate: {
			x: offset.x,
			y: offset.y
		},
		transition: {
			type: "spring",
			stiffness: 260,
			damping: 18
		},
		whileTap: { scale: .96 },
		className: cn("inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 text-sm font-bold tracking-tight transition-colors", variant === "solid" ? "bg-primary text-primary-foreground shadow-soft hover:bg-primary/90" : "border border-ink/20 text-foreground hover:border-ink/50", className),
		children
	});
}
var WHATSAPP_NUMBER = "5492944999091";
var WHATSAPP_DISPLAY = "+54 9 2944 99-9091";
var EMAIL = "hola@polen.ai";
function whatsappLink(message) {
	return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
function Hero() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start start", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
	const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
	const fade = useTransform(scrollYProgress, [0, .8], [1, 0]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "top",
		ref,
		className: "relative isolate overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: patagonia_default,
				alt: "Cordillera y lagos de Bariloche al amanecer",
				width: 1920,
				height: 1080,
				style: { y: bgY },
				className: "absolute inset-0 -z-20 size-full scale-110 object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-background/80 backdrop-blur-[2px]" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute -right-24 top-24 -z-10 size-72 rounded-full bg-primary/40 blur-3xl sm:size-96" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				style: {
					y: titleY,
					opacity: fade
				},
				className: "mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-5 pb-20 pt-32",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
						initial: {
							opacity: 0,
							y: 12
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: { delay: .1 },
						className: "w-fit rounded-full border border-ink/15 bg-background/70 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground",
						children: "Agencia digital integral · Diseño, producto e IA"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.h1, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .15,
							duration: .6
						},
						className: "mt-6 text-[2.4rem] font-black leading-[1.08] sm:text-6xl lg:text-7xl",
						children: [
							"Productos digitales que nacen",
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "box-decoration-clone bg-primary px-2 py-0.5 leading-[1.2]",
								children: [
									"de una estrategia,",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"no de un pedido"
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .25,
							duration: .6
						},
						className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg",
						children: "Discovery estratégico, diseño UX/UI, desarrollo a medida y consultoría en inteligencia artificial aplicada: un solo equipo de punta a punta, con AI-mindset."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 24
						},
						animate: {
							opacity: 1,
							y: 0
						},
						transition: {
							delay: .35,
							duration: .6
						},
						className: "mt-9 flex flex-wrap items-center gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MagneticButton, {
							href: whatsappLink("Hola POLEN, quiero agendar un análisis previo."),
							target: "_blank",
							rel: "noreferrer",
							children: "Polinizamos tus ideas"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#servicios",
							className: "text-sm font-bold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
							children: "Ver servicios"
						})]
					})
				]
			})
		]
	});
}
var caos_default = "/assets/caos-DbwI6GkS.jpg";
var orden_default = "/assets/orden-CIQh3TSA.jpg";
var CAOS = [
	"Se pide 'una app' sin haber definido el problema de negocio",
	"Procesos manuales y datos dispersos en planillas sueltas",
	"Interfaces heredadas que nadie quiere usar",
	"Pilotos de IA que nunca llegan a producción"
];
var ORDEN = [
	"Discovery con KPIs claros y oportunidades priorizadas",
	"Arquitectura de datos ordenada y lista para escalar",
	"Diseño UX/UI validado con usuarios reales antes de construir",
	"Modelos e integraciones funcionando dentro del proceso diario"
];
function CaosOrden() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "caos",
		className: "mx-auto max-w-6xl px-5 py-24 sm:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
			initial: {
				opacity: 0,
				y: 24
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			className: "max-w-3xl text-3xl font-black leading-tight sm:text-5xl",
			children: "De ejecutar pedidos a construir productos que mueven el negocio"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-14 grid gap-6 md:grid-cols-2",
			children: [{
				img: caos_default,
				alt: "Equipo de trabajo desbordado por procesos manuales",
				title: "Software factory tradicional",
				items: CAOS,
				tone: "caos"
			}, {
				img: orden_default,
				alt: "Equipo trabajando con un producto digital ordenado",
				title: "Socio estratégico de producto",
				items: ORDEN,
				tone: "orden"
			}].map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
				initial: {
					opacity: 0,
					y: 40
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-60px"
				},
				transition: {
					duration: .6,
					delay: index * .12
				},
				className: block.tone === "orden" ? "overflow-hidden rounded-3xl bg-primary/15 shadow-soft" : "overflow-hidden rounded-3xl bg-card shadow-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: block.img,
					alt: block.alt,
					loading: "lazy",
					width: 1200,
					height: 1200,
					className: block.tone === "caos" ? "h-56 w-full object-cover grayscale sm:h-64" : "h-56 w-full object-cover sm:h-64"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-7",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-black",
						children: block.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-5 space-y-3 text-sm leading-relaxed text-muted-foreground",
						children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: block.tone === "orden" ? "mt-2 size-1.5 shrink-0 rounded-full bg-ink" : "mt-2 size-1.5 shrink-0 rounded-full bg-muted-foreground/50" }), item]
						}, item))
					})]
				})]
			}, block.title))
		})]
	});
}
var SERVICIOS = [
	{
		icon: Compass,
		title: "Análisis previo y discovery",
		resumen: "Diagnóstico del negocio antes de escribir la primera línea de código.",
		detalle: "Investigación de usuarios, análisis heurístico, definición de KPIs y mapa de oportunidades. Identificamos los puntos de fricción operativos que conviene optimizar con tecnología e IA, y los priorizamos por impacto."
	},
	{
		icon: LayoutDashboard,
		title: "Diseño UX/UI y product design",
		resumen: "Interfaces intuitivas y design systems pensados para convertir.",
		detalle: "Arquitectura de la información, prototipado interactivo y testeos de usabilidad para web y mobile. Diseñamos también la interacción humano-IA: conversational UX y copilotos que la gente realmente entiende y usa."
	},
	{
		icon: CodeXml,
		title: "Desarrollo a medida",
		resumen: "Ingeniería robusta, escalable y segura, de punta a punta.",
		detalle: "Frontend, backend, APIs e integración cloud con buenas prácticas de ingeniería. Modernizamos plataformas legacy e integramos microservicios con entrega continua, sin frenar la operación en marcha."
	},
	{
		icon: BrainCircuit,
		title: "Consultoría e integración de IA",
		resumen: "IA generativa y automatización dentro de tus procesos reales.",
		detalle: "Implementación de modelos LLM, analítica predictiva, automatización inteligente (RPA + IA) y agentes autónomos. Sumamos estrategia de datos, gobernanza y arquitectura para una adopción segura."
	}
];
function Servicios() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "servicios",
		className: "bg-ink py-24 text-ink-foreground sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
				initial: {
					opacity: 0,
					y: 24
				},
				whileInView: {
					opacity: 1,
					y: 0
				},
				viewport: {
					once: true,
					margin: "-80px"
				},
				className: "max-w-3xl text-3xl font-black leading-tight sm:text-5xl",
				children: "Un servicio integral: del discovery al producto en producción"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-14 grid gap-5 sm:grid-cols-2",
				children: SERVICIOS.map((servicio, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.article, {
					initial: {
						opacity: 0,
						y: 40
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-60px"
					},
					transition: {
						duration: .5,
						delay: index * .08
					},
					whileHover: { y: -10 },
					className: "group relative overflow-hidden rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-8 transition-colors hover:border-primary/60",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(servicio.icon, { className: "size-9 text-primary" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-6 text-xl font-black",
							children: servicio.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-foreground/70",
							children: servicio.resumen
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-h-0 overflow-hidden text-sm leading-relaxed text-ink-foreground/80 opacity-0 transition-all duration-500 group-hover:max-h-44 group-hover:opacity-100 group-focus-within:max-h-44 group-focus-within:opacity-100",
							children: servicio.detalle
						})
					]
				}, servicio.title))
			})]
		})
	});
}
var PILARES = [
	{
		title: "End-to-end",
		text: "Discovery, diseño, ingeniería e IA en un mismo equipo: sin traspasos que diluyan la estrategia entre proveedores."
	},
	{
		title: "AI-mindset",
		text: "La inteligencia artificial no se agrega al final: atraviesa el análisis, el diseño de la experiencia y la arquitectura desde el día uno."
	},
	{
		title: "Análisis antes que herramienta",
		text: "Primero entendemos dónde se pierde tiempo y margen. Recién después elegimos tecnología. Nunca al revés."
	}
];
function Diferencial() {
	const ref = (0, import_react.useRef)(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["start end", "end start"]
	});
	const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
	const wordY = useTransform(scrollYProgress, [0, 1], ["30%", "-30%"]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "diferencial",
		ref,
		className: "relative isolate overflow-hidden py-28 sm:py-36",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.img, {
				src: patagonia_default,
				alt: "",
				"aria-hidden": "true",
				loading: "lazy",
				width: 1920,
				height: 1080,
				style: { y: bgY },
				className: "absolute inset-0 -z-20 size-full scale-125 object-cover"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 -z-10 bg-ink/85" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
				style: { y: wordY },
				"aria-hidden": "true",
				className: "pointer-events-none absolute inset-x-0 top-1/2 -z-10 text-center font-display text-[22vw] font-black leading-none text-ink-foreground/5",
				children: "PRODUCTO"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 text-ink-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
					initial: {
						opacity: 0,
						y: 24
					},
					whileInView: {
						opacity: 1,
						y: 0
					},
					viewport: {
						once: true,
						margin: "-80px"
					},
					className: "max-w-3xl text-3xl font-black leading-tight sm:text-5xl",
					children: "Un socio estratégico de producto, no una fábrica de software"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-14 grid gap-10 sm:grid-cols-3",
					children: PILARES.map((pilar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						initial: {
							opacity: 0,
							y: 40
						},
						whileInView: {
							opacity: 1,
							y: 0
						},
						viewport: {
							once: true,
							margin: "-60px"
						},
						transition: {
							duration: .5,
							delay: index * .1
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-1 w-12 rounded-full bg-primary" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-5 text-lg font-black",
								children: pilar.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-sm leading-relaxed text-ink-foreground/75",
								children: pilar.text
							})
						]
					}, pilar.title))
				})]
			})
		]
	});
}
var schema = objectType({
	nombre: stringType().trim().min(2, "Contanos tu nombre").max(80, "Máximo 80 caracteres"),
	negocio: stringType().trim().min(2, "¿Cómo se llama tu negocio?").max(80, "Máximo 80 caracteres"),
	rubro: stringType().trim().min(2, "Contanos tu rubro").max(60, "Máximo 60 caracteres"),
	email: stringType().trim().min(1, "Dejanos un mail").email("Mail inválido").max(120, "Máximo 120 caracteres"),
	telefono: stringType().trim().min(6, "Dejanos un teléfono").max(30, "Máximo 30 caracteres").regex(/^[0-9+()\s-]+$/, "Solo números, espacios y +"),
	mensaje: stringType().trim().min(10, "Contanos un poco más").max(600, "Máximo 600 caracteres")
});
var FIELDS = [
	{
		name: "nombre",
		label: "Tu nombre",
		placeholder: "Ana Pérez",
		type: "text",
		full: false
	},
	{
		name: "negocio",
		label: "Empresa",
		placeholder: "Nombre de tu empresa",
		type: "text",
		full: false
	},
	{
		name: "email",
		label: "Mail",
		placeholder: "ana@empresa.com",
		type: "email",
		full: false
	},
	{
		name: "telefono",
		label: "Teléfono",
		placeholder: "+54 9 294 ...",
		type: "tel",
		full: false
	},
	{
		name: "rubro",
		label: "Industria",
		placeholder: "Retail, salud, logística, fintech...",
		type: "text",
		full: true
	}
];
function Contacto() {
	const [values, setValues] = (0, import_react.useState)({
		nombre: "",
		negocio: "",
		rubro: "",
		email: "",
		telefono: "",
		mensaje: ""
	});
	const [errors, setErrors] = (0, import_react.useState)({});
	const buildMessage = (data) => `Hola POLEN, soy ${data.nombre} de ${data.negocio} (${data.rubro}).\n\nMail: ${data.email}\nTel: ${data.telefono}\n\n${data.mensaje}`;
	const handleSubmit = (event) => {
		event.preventDefault();
		const result = schema.safeParse(values);
		if (!result.success) {
			const next = {};
			for (const issue of result.error.issues) next[issue.path[0]] = issue.message;
			setErrors(next);
			return;
		}
		setErrors({});
		window.open(whatsappLink(buildMessage(result.data)), "_blank", "noopener");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contacto",
		className: "mx-auto max-w-4xl px-5 py-24 sm:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: 30
			},
			whileInView: {
				opacity: 1,
				y: 0
			},
			viewport: {
				once: true,
				margin: "-80px"
			},
			className: "rounded-[2rem] bg-card p-7 shadow-lift sm:p-12",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "text-3xl font-black leading-tight sm:text-4xl",
					children: [
						"Empecemos por el análisis previo,",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"no por la herramienta"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: "Contanos qué producto o proceso querés transformar. Volvemos con un mapa inicial de oportunidades y el enfoque técnico que recomendamos, sin compromiso."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
					onSubmit: handleSubmit,
					noValidate: true,
					className: "mt-9 space-y-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-5 sm:grid-cols-2",
							children: FIELDS.map((field) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: field.full ? "sm:col-span-2" : void 0,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										htmlFor: field.name,
										className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
										children: field.label
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										id: field.name,
										name: field.name,
										type: field.type,
										value: values[field.name],
										maxLength: 120,
										onChange: (event) => setValues((prev) => ({
											...prev,
											[field.name]: event.target.value
										})),
										placeholder: field.placeholder,
										className: "mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
									}),
									errors[field.name] ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-1.5 text-xs font-medium text-destructive",
										children: errors[field.name]
									}) : null
								]
							}, field.name))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								htmlFor: "mensaje",
								className: "text-xs font-bold uppercase tracking-wider text-muted-foreground",
								children: "¿Qué te está costando más?"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "mensaje",
								name: "mensaje",
								rows: 4,
								maxLength: 600,
								value: values.mensaje,
								onChange: (event) => setValues((prev) => ({
									...prev,
									mensaje: event.target.value
								})),
								placeholder: "Queremos rediseñar nuestra plataforma e integrar IA en la atención...",
								className: "mt-2 w-full resize-none rounded-2xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
							}),
							errors.mensaje ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-xs font-medium text-destructive",
								children: errors.mensaje
							}) : null
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center gap-4 pt-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
								type: "submit",
								whileHover: { scale: 1.04 },
								whileTap: { scale: .96 },
								className: "rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-soft",
								children: "Enviar por WhatsApp"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: `mailto:${EMAIL}`,
								className: "text-sm font-bold text-muted-foreground underline-offset-4 hover:text-foreground hover:underline",
								children: ["o escribinos a ", EMAIL]
							})]
						})
					]
				})
			]
		})
	});
}
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:flex sm:items-center sm:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex min-w-0 items-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: polen_logo_png_asset_default.url,
					alt: "POLEN",
					className: "h-9 w-auto"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-sm text-muted-foreground",
					children: "· Bariloche, Patagonia"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-6 text-sm text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: whatsappLink("Hola POLEN!"),
					target: "_blank",
					rel: "noreferrer",
					className: "hover:text-foreground",
					children: WHATSAPP_DISPLAY
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `mailto:${EMAIL}`,
					className: "hover:text-foreground",
					children: EMAIL
				})]
			})]
		})
	});
}
function WhatsappFab() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.a, {
		href: whatsappLink("Hola POLEN, quiero ordenar la operación de mi negocio en Bariloche."),
		target: "_blank",
		rel: "noreferrer",
		"aria-label": "Escribinos por WhatsApp",
		initial: {
			scale: 0,
			opacity: 0
		},
		animate: {
			scale: 1,
			opacity: 1
		},
		transition: {
			delay: .8,
			type: "spring",
			stiffness: 200,
			damping: 16
		},
		whileHover: { scale: 1.08 },
		whileTap: { scale: .94 },
		className: "fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-ink text-ink-foreground shadow-lift",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircle, { className: "size-6" })
	});
}
var DURATION = 1100;
var easeInOutCubic = (t) => t < .5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
/**
* Scroll suave y prolongado al hacer click en anclas internas,
* para que el parallax de cada sección se anime durante el recorrido.
*/
function useSmoothAnchors(offset = 72) {
	(0, import_react.useEffect)(() => {
		const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
		let frame = 0;
		const scrollTo = (target) => {
			const start = window.scrollY;
			const distance = target - start;
			if (Math.abs(distance) < 2) return;
			const startTime = performance_default.now();
			const step = (now) => {
				const progress = Math.min((now - startTime) / DURATION, 1);
				window.scrollTo(0, start + distance * easeInOutCubic(progress));
				if (progress < 1) frame = requestAnimationFrame(step);
			};
			cancelAnimationFrame(frame);
			frame = requestAnimationFrame(step);
		};
		const onClick = (event) => {
			if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey) return;
			const anchor = event.target?.closest?.("a[href^='#']");
			if (!anchor) return;
			const hash = anchor.getAttribute("href");
			if (!hash || hash === "#") return;
			const el = document.querySelector(hash);
			if (!el) return;
			event.preventDefault();
			const top = el.getBoundingClientRect().top + window.scrollY - offset;
			if (reduced) window.scrollTo(0, top);
			else scrollTo(top);
			history.replaceState(null, "", hash);
		};
		const cancel = () => cancelAnimationFrame(frame);
		document.addEventListener("click", onClick);
		window.addEventListener("wheel", cancel, { passive: true });
		window.addEventListener("touchstart", cancel, { passive: true });
		return () => {
			cancelAnimationFrame(frame);
			document.removeEventListener("click", onClick);
			window.removeEventListener("wheel", cancel);
			window.removeEventListener("touchstart", cancel);
		};
	}, [offset]);
}
function Index() {
	useSmoothAnchors();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen overflow-x-hidden bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CaosOrden, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Servicios, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Diferencial, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contacto, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatsappFab, {})
		]
	});
}
//#endregion
export { Index as component };
