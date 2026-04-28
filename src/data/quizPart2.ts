import { Question, ShortQuestion } from './quiz';

export const mcqsPart2: Question[] = [
  {
    id: 1,
    text: "If r = 0, the circle is called:",
    options: [
      { id: "a", text: "Unit circle" },
      { id: "b", text: "Circle" },
      { id: "c", text: "Ellipse" },
      { id: "d", text: "Point circle" }
    ],
    correctAnswer: "d"
  },
  {
    id: 2,
    text: "$[\\mathbf{i} \\ \\mathbf{i} \\ \\mathbf{k}] = $",
    options: [
      { id: "a", text: "$\\mathbf{i}$" },
      { id: "b", text: "$-\\mathbf{i}$" },
      { id: "c", text: "1" },
      { id: "d", text: "0" }
    ],
    correctAnswer: "d" // [i i k] = (i x i) . k = 0 . k = 0
  },
  {
    id: 3,
    text: "If $\\mathbf{u} = 2\\mathbf{i} - \\mathbf{j} + \\mathbf{k}$, $\\mathbf{v} = 4\\mathbf{i} + 2\\mathbf{j} - 2\\mathbf{k}$, then $\\mathbf{u} \\times \\mathbf{u} = $",
    options: [
      { id: "a", text: "$\\mathbf{u}^2$" },
      { id: "b", text: "0" },
      { id: "c", text: "1" },
      { id: "d", text: "2" }
    ],
    correctAnswer: "b"
  },
  {
    id: 4,
    text: "If \\mathbf{u} and \\mathbf{v} are two non-zero vectors, then area of parallelogram =",
    options: [
      { id: "a", text: "$|\\mathbf{u} \\times \\mathbf{v}|$" },
      { id: "b", text: "$\\frac{1}{2} |\\mathbf{u} \\times \\mathbf{v}|$" },
      { id: "c", text: "$\\frac{1}{6} |\\mathbf{u} \\times \\mathbf{v}|$" },
      { id: "d", text: "$\\frac{1}{2} (\\mathbf{u} \\times \\mathbf{v})$" }
    ],
    correctAnswer: "a"
  },
  {
    id: 5,
    text: "If k is any real number, $\\lim_{x \\to a} [k f(x)] = $",
    options: [
      { id: "a", text: "$\\lim_{x \\to a} f(x)$" },
      { id: "b", text: "$\\lim_{x \\to a} k$" },
      { id: "c", text: "$k \\lim_{x \\to a} f(x)$" },
      { id: "d", text: "$f(x)$" }
    ],
    correctAnswer: "c"
  },
  {
    id: 6,
    text: "If f(x) = x + 3 then $\\lim_{x \\to 3} f(x) = $",
    options: [
      { id: "a", text: "6" },
      { id: "b", text: "0" },
      { id: "c", text: "-3" },
      { id: "d", text: "3" }
    ],
    correctAnswer: "a"
  },
  {
    id: 7,
    text: "If $y = e^{f(x)}$ then $\\frac{dy}{dx} = $",
    options: [
      { id: "a", text: "$e^{f(x)}$" },
      { id: "b", text: "$f(x) e^{f(x)}$" },
      { id: "c", text: "$f'(x) e^{f(x)}$" },
      { id: "d", text: "$f'(x) e^{f'(x)}$" }
    ],
    correctAnswer: "c"
  },
  {
    id: 8,
    text: "Derivative of $x\\sqrt{x^2+3}$ w.r.t x is:",
    options: [
      { id: "a", text: "$\\frac{2x^2+3}{\\sqrt{x^2+3}}$" },
      { id: "b", text: "$\\frac{3x}{2\\sqrt{x^2+3}}$" },
      { id: "c", text: "$\\frac{3x^2+3}{x\\sqrt{x^2+3}}$" },
      { id: "d", text: "$\\frac{3x^2+3}{2x\\sqrt{x^2+3}}$" }
    ],
    correctAnswer: "a" // 1*sqrt(x^2+3) + x * (1/2sqrt(x^2+3)) * 2x = sqrt + x^2/sqrt = (x^2+3+x^2)/sqrt = (2x^2+3)/sqrt
  },
  {
    id: 9,
    text: "Derivative of $\\tanh(x^2)$ is:",
    options: [
      { id: "a", text: "$2x \\text{sech}^2 x$" },
      { id: "b", text: "$2 \\text{sech}^2 x^2$" },
      { id: "c", text: "$2x \\text{sech}^2 x^2$" },
      { id: "d", text: "$\\text{sech}^2 x^2$" }
    ],
    correctAnswer: "c"
  },
  {
    id: 10,
    text: "Derivative of \"$x^n$\" w.r.t \"$x^n$\" is:",
    options: [
      { id: "a", text: "$x^2$" },
      { id: "b", text: "2" },
      { id: "c", text: "0" },
      { id: "d", text: "1" }
    ],
    correctAnswer: "d"
  },
  {
    id: 11,
    text: "In integration, substitution of $\\sqrt{4-x^2}$ is:",
    options: [
      { id: "a", text: "$x = \\sin \\theta$" },
      { id: "b", text: "$x = 2 \\sin \\theta$" },
      { id: "c", text: "$x = \\sin 2\\theta$" },
      { id: "d", text: "$x = 2 \\cos \\theta$" }
    ],
    correctAnswer: "b"
  },
  {
    id: 12,
    text: "$\\int \\tan x \\ dx = $",
    options: [
      { id: "a", text: "$\\ln \\cos x + c$" },
      { id: "b", text: "$\\frac{1}{\\ln \\cos x} + c$" },
      { id: "c", text: "$-\\ln |\\cos x| + c$" },
      { id: "d", text: "$\\sec^2 x + c$" }
    ],
    correctAnswer: "c"
  },
  {
    id: 13,
    text: "Solution of differential equation $(e^x + e^{-x})\\frac{dy}{dx} = e^x - e^{-x}$ is:",
    options: [
      { id: "a", text: "$-\\ln(e^x + e^{-x}) + c$" },
      { id: "b", text: "$\\ln(e^x - e^{-x}) + c$" },
      { id: "c", text: "$\\ln(e^x + e^{-x}) + c$" },
      { id: "d", text: "$(e^x + e^{-x})^2$" }
    ],
    correctAnswer: "c"
  },
  {
    id: 14,
    text: "$\\int \\sin x \\cos x \\ dx = $",
    options: [
      { id: "a", text: "$\\frac{\\sin^2 x}{2} + c$" },
      { id: "b", text: "$\\frac{\\cos^2 x}{2} + c$" },
      { id: "c", text: "$-\\sin x + c$" },
      { id: "d", text: "$\\cos x + c$" }
    ],
    correctAnswer: "a"
  },
  {
    id: 15,
    text: "The line: ay + b = 0 is:",
    options: [
      { id: "a", text: "Parallel to y-axis" },
      { id: "b", text: "Parallel to x-axis" },
      { id: "c", text: "Passing through origin" },
      { id: "d", text: "Lies in Quad. I" }
    ],
    correctAnswer: "b"
  },
  {
    id: 16,
    text: "The slope of line joining the points (-2, 4); (5, 11) is:",
    options: [
      { id: "a", text: "7" },
      { id: "b", text: "1" },
      { id: "c", text: "$45^\\circ$" },
      { id: "d", text: "$-45^\\circ$" }
    ],
    correctAnswer: "b" // (11-4)/(5 - -2) = 7/7 = 1
  },
  {
    id: 17,
    text: "The location of the plane of the point P(x,y) for which y = 0 at:",
    options: [
      { id: "a", text: "Origin" },
      { id: "b", text: "y-axis" },
      { id: "c", text: "x-axis" },
      { id: "d", text: "1st Quad" }
    ],
    correctAnswer: "c"
  },
  {
    id: 18,
    text: "The maximum and minimum values occur at:",
    options: [
      { id: "a", text: "Corner point" },
      { id: "b", text: "Any point" },
      { id: "c", text: "Convex region" },
      { id: "d", text: "Corner points of feasible region" }
    ],
    correctAnswer: "d"
  },
  {
    id: 19,
    text: "The line intersect the circle at:",
    options: [
      { id: "a", text: "One point" },
      { id: "b", text: "Two points" },
      { id: "c", text: "Infinite points" },
      { id: "d", text: "More than two points" }
    ],
    correctAnswer: "b"
  },
  {
    id: 20,
    text: "Diameter of circle: $x^2 + y^2 = 16$ is:",
    options: [
      { id: "a", text: "8" },
      { id: "b", text: "4" },
      { id: "c", text: "16" },
      { id: "d", text: "32" }
    ],
    correctAnswer: "a" // radius = 4, diameter = 8
  }
];

export const shortQuestionsQ2Part2: ShortQuestion[] = [
  { id: "i", text: "Find $fog(x)$ if $f(x) = 2x + 1, g(x) = \\frac{3}{x-1}, x \\neq 1$." },
  { id: "ii", text: "Find $\\frac{dy}{dx}$ from first principles if $y = \\frac{1}{\\sqrt{x+a}}$." },
  { id: "iii", text: "Prove that $\\sinh 2x = 2 \\sinh x \\cosh x$." },
  { id: "iv", text: "Evaluate $\\lim_{x \\to 2} \\frac{\\sqrt{x} - \\sqrt{2}}{x - 2}$." },
  { id: "v", text: "Evaluate $\\lim_{n \\to \\infty} (1 + \\frac{1}{n})^{\\frac{n}{2}}$." },
  { id: "vi", text: "Differentiate $\\frac{(x^2+1)^2}{x^2-1}$." },
  { id: "vii", text: "Find $\\frac{dy}{dx}$ if $x^2 - 4xy - 5y = 0$." },
  { id: "viii", text: "Differentiate w.r.t $\\theta$: $\\tan^2 \\theta \\sec^2 \\theta$." },
  { id: "ix", text: "Apply Maclaurin Series expansion to prove that $\\cos x = 1 - \\frac{x^2}{2!} + \\frac{x^4}{4!} - \\frac{x^6}{6!} + \\dots$." },
  { id: "x", text: "Find $f'(x)$ if $x^2 e^{1/x}$." },
  { id: "xi", text: "Find $y_2$ if $y = 2x^5 - 3x^4 + 4x^3 + x - 2$." },
  { id: "xii", text: "Differentiate $\\frac{2x-3}{2x+1}$." }
];

export const shortQuestionsQ3Part2: ShortQuestion[] = [
  { id: "i", text: "Evaluate $\\int x\\sqrt{x^2-1} \\ dx$." },
  { id: "ii", text: "Evaluate $\\int \\frac{x}{\\sqrt{4+x^2}} \\ dx$." },
  { id: "iii", text: "Evaluate $\\int \\frac{e^{\\tan^{-1} x}}{1+x^2} \\ dx$." },
  { id: "iv", text: "Evaluate $\\int \\frac{x}{x^2+2} \\ dx$." },
  { id: "v", text: "Find the area between x-axis and the curve $y = 4x - x^2$." },
  { id: "vi", text: "Solve the differential equation $\\frac{1}{x}\\frac{dy}{dx} = \\frac{1}{2}(1+y^2)$." },
  { id: "vii", text: "The Point A(-5,-2) and B(5,-4) are ends of a circle. Find the center and radius of circle." },
  { id: "ix", text: "Show that the points A(0,2), B($\\sqrt{3}$,-1) and C(0,-2) are vertices of right triangle." },
  { id: "x", text: "Find the point trisecting the join of A(-1,4) and B(6,2)$." },
  { id: "xi", text: "Find the equation of the line through A(-6,5) having slope 7." },
  { id: "xii", text: "Evaluate $\\int_{-2}^{0} \\frac{1}{(2x-1)^2} \\ dx$." }
];

export const shortQuestionsQ4Part2: ShortQuestion[] = [
  { id: "i", text: "Graph the solution set of $3y-4 \\leq 0$ in xy-plane." },
  { id: "ii", text: "Find the center and radius of circle $5x^2 + 5y^2 + 24x + 36y + 10 = 0$." },
  { id: "iii", text: "Find a vector of magnitude 4 and is parallel to $2\\mathbf{i} - 3\\mathbf{j} + 6\\mathbf{k}$." },
  { id: "iv", text: "Find direction cosines of $\\vec{PQ}$ where P=(2,1,5) and Q=(1,3,1)." },
  { id: "v", text: "Find volume of parallelepiped whose edges are $\\mathbf{u} = \\mathbf{i} - 2\\mathbf{j} + 3\\mathbf{k}, \\mathbf{v} = 2\\mathbf{i} - \\mathbf{j} - \\mathbf{k}, \\mathbf{w} = \\mathbf{j} + \\mathbf{k}$." },
  { id: "vi", text: "Find the value of $[\\mathbf{i} \\ \\mathbf{k} \\ \\mathbf{j}]$." },
  { id: "vii", text: "Find the value of $\\alpha$ so that $\\mathbf{u} = 2\\alpha\\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}, \\mathbf{v} = \\mathbf{i} - \\alpha\\mathbf{j} + 3\\mathbf{k}$ are perpendicular." },
  { id: "viii", text: "Prove that $\\mathbf{a} \\times (\\mathbf{b}+\\mathbf{c}) + \\mathbf{b} \\times (\\mathbf{c}+\\mathbf{a}) + \\mathbf{c} \\times (\\mathbf{a}+\\mathbf{b}) = 0$." },
  { id: "ix", text: "Find $\\alpha$ so that $|\\alpha\\mathbf{i} + (\\alpha+1)\\mathbf{j} + 2\\mathbf{k}| = 3$." },
  { id: "x", text: "Find $\\mathbf{a} \\times \\mathbf{b}$ if $\\mathbf{a} = 2\\mathbf{i} + \\mathbf{j} - \\mathbf{k}, \\mathbf{b} = \\mathbf{i} - \\mathbf{j} + \\mathbf{k}$." },
  { id: "xi", text: "Find work done if the point at which the constant force $\\mathbf{F} = 4\\mathbf{i} + 3\\mathbf{j} + 5\\mathbf{k}$ is applied to an object moves from P_1(3, 1, -2) to P_2(2, 4, 6)." },
  { id: "xii", text: "Calculate the projection of $\\mathbf{b}$ along $\\mathbf{a}$ when $\\mathbf{a} = \\mathbf{i} - \\mathbf{k}, \\mathbf{b} = \\mathbf{j} + \\mathbf{k}$." },
  { id: "xiii", text: "Let $\\mathbf{u} = \\mathbf{i} + 2\\mathbf{j} - \\mathbf{k}, \\mathbf{v} = 3\\mathbf{i} - 2\\mathbf{j} + 2\\mathbf{k}, \\mathbf{w} = 5\\mathbf{i} - \\mathbf{j} + 3\\mathbf{k}$. Find the vector $\\mathbf{v} - 3\\mathbf{w}$." }
];

export const longQuestionsPart2: ShortQuestion[] = [
  { id: "5a", text: "Find the values of \"m\" and \"n\" if $f$ is continuous at $x = 3$. $f(x) = \\begin{cases} mx & \\text{if } x < 3 \\\\ n & \\text{if } x = 3 \\\\ -2x + 9 & \\text{if } x > 3 \\end{cases}$" },
  { id: "5b", text: "Find $\\frac{dy}{dx}$ when $x = \\frac{a(1-t^2)}{1+t^2}, y = \\frac{2bt}{1+t^2}$." },
  { id: "6a", text: "If $y = \\sin(m \\sin^{-1} x)$, show that $(1-x^2)y_2 - xy_1 + m^2y = 0$." },
  { id: "6b", text: "Evaluate $\\int \\frac{dx}{\\frac{1}{2}\\sin x + \\frac{\\sqrt{3}}{2}\\cos x}$." },
  { id: "7a", text: "Solve the differential equation $y - x\\frac{dy}{dx} = 3(1 + x\\frac{dy}{dx})$." },
  { id: "7b", text: "Maximize $f(x,y) = 2x + 5y$ subject to the constraints: $2y - x \\leq 8; \\quad x - y \\leq 4; \\quad x \\geq 0; \\quad y \\geq 0$" },
  { id: "8a", text: "Convert the equation into normal form: $15y - 8x + 3 = 0$." },
  { id: "8b", text: "Using vector method for any triangle ABC prove that $c^2 = a^2 + b^2 - 2ab \\cos C$." },
  { id: "9a", text: "Prove that $\\cos(\\alpha+\\beta) = \\cos \\alpha \\cos \\beta - \\sin \\alpha \\sin \\beta$." },
  { id: "9b", text: "A force $\\mathbf{F} = 4\\mathbf{i} - 3\\mathbf{k}$ passes through the point A(2, -2, 5). Find the moment of force about point B(1, -3, 1)." }
];
