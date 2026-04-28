export interface Option {
  id: string;
  text: string;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
  correctAnswer: string;
}

export interface ShortQuestion {
  id: string;
  text: string;
}

export const mcqs: Question[] = [
  {
    id: 1,
    text: "The modulus of a complex number $x + iy$ is equal to:",
    options: [
      { id: "a", text: "$\\sqrt{x+y}$" },
      { id: "b", text: "$\\sqrt{x^2 - y^2}$" },
      { id: "c", text: "$\\sqrt{x^2 + y^2}$" },
      { id: "d", text: "none of these" }
    ],
    correctAnswer: "c"
  },
  {
    id: 2,
    text: "If $\\omega$ is the imaginary cube roots of unity then $\\omega^2 = $:",
    options: [
      { id: "a", text: "$\\omega$" },
      { id: "b", text: "$\\omega^{-1}$" },
      { id: "c", text: "$1/\\omega$" },
      { id: "d", text: "$\\omega^3$" }
    ],
    correctAnswer: "c" // Since w^3 = 1, w^2 = 1/w
  },
  {
    id: 3,
    text: "Domain of $f(x) = \\sqrt{x+1}$ is:",
    options: [
      { id: "a", text: "$(0, \\infty)$" },
      { id: "b", text: "$(1, \\infty)$" },
      { id: "c", text: "$[-1, \\infty)$" },
      { id: "d", text: "$(-\\infty, \\infty)$" }
    ],
    correctAnswer: "c"
  },
  {
    id: 4,
    text: "The equation of the form $ax^2 + bx + c = 0$ is called quadratic if:",
    options: [
      { id: "a", text: "$a = 0$" },
      { id: "b", text: "$a \\neq 0$" },
      { id: "c", text: "$b = 0$" },
      { id: "d", text: "$b \\neq 0$" }
    ],
    correctAnswer: "b"
  },
  {
    id: 5,
    text: "If the matrix $\\begin{bmatrix} 2 & 4 \\\\ \\lambda & 2 \\end{bmatrix}$ is singular then $\\lambda$ equals:",
    options: [
      { id: "a", text: "2" },
      { id: "b", text: "4" },
      { id: "c", text: "6" },
      { id: "d", text: "1" }
    ],
    correctAnswer: "d" // 2*2 - 4*lambda = 0 => 4 - 4lambda = 0 => lambda = 1
  },
  {
    id: 6,
    text: "Rank of matrix $\\begin{bmatrix} 1 & 2 & 5 \\\\ 0 & 0 & 0 \\\\ 3 & 2 & 0 \\end{bmatrix}$ is:",
    options: [
      { id: "a", text: "0" },
      { id: "b", text: "3" },
      { id: "c", text: "2" },
      { id: "d", text: "1" }
    ],
    correctAnswer: "c"
  },
  {
    id: 7,
    text: "Partial fraction of $\\frac{1}{x^3+1}$ will be of the form:",
    options: [
      { id: "a", text: "$\\frac{A}{x+1} + \\frac{B}{x^2+x+1}$" },
      { id: "b", text: "$\\frac{A}{x+1} + \\frac{Bx+C}{x^2-x+1}$" },
      { id: "c", text: "$\\frac{A}{x+1} + \\frac{Bx+C}{x^2+x+1}$" },
      { id: "d", text: "$\\frac{Ax+B}{x^2+1} + \\frac{C}{x^2-x+1}$" }
    ],
    correctAnswer: "b"
  },
  {
    id: 8,
    text: "Synthetic division is a process of:",
    options: [
      { id: "a", text: "addition" },
      { id: "b", text: "multiplication" },
      { id: "c", text: "subtraction" },
      { id: "d", text: "division" }
    ],
    correctAnswer: "d"
  },
  {
    id: 9,
    text: "$\\sin 196^\\circ = $:",
    options: [
      { id: "a", text: "$\\sin 16^\\circ$" },
      { id: "b", text: "$\\cos 33^\\circ$" },
      { id: "c", text: "$\\cos 16^\\circ$" },
      { id: "d", text: "$-\\sin 16^\\circ$" }
    ],
    correctAnswer: "d" // sin(180+16) = -sin(16)
  },
  {
    id: 10,
    text: "$1 - \\cos 2\\theta = $:",
    options: [
      { id: "a", text: "$2\\sin^2 \\theta$" },
      { id: "b", text: "$2\\cos^2 \\theta$" },
      { id: "c", text: "$2\\sin^2 (\\theta/2)$" },
      { id: "d", text: "$2\\cos^2 (\\theta/2)$" }
    ],
    correctAnswer: "a"
  },
  {
    id: 11,
    text: "$1 - \\cos 2\\theta = ?$",
    options: [
      { id: "a", text: "$2\\sin^2 \\theta$" },
      { id: "b", text: "$2\\cos^2 \\theta$" },
      { id: "c", text: "$2\\sin^2 (\\theta/2)$" },
      { id: "d", text: "$2\\cos^2 (\\theta/2)$" }
    ],
    correctAnswer: "a"
  },
  {
    id: 12,
    text: "$\\cos(\\alpha+\\beta) - \\cos(\\alpha-\\beta) = $:",
    options: [
      { id: "a", text: "$2\\sin\\alpha \\cos\\beta$" },
      { id: "b", text: "$2\\cos\\alpha \\sin\\beta$" },
      { id: "c", text: "$2\\cos\\alpha \\cos\\beta$" },
      { id: "d", text: "$-2\\sin\\alpha \\sin\\beta$" }
    ],
    correctAnswer: "d"
  },
  {
    id: 13,
    text: "The domain of $y = \\sec x$ is:",
    options: [
      { id: "a", text: "$[0, \\pi]$" },
      { id: "b", text: "$[-1, 1]$" },
      { id: "c", text: "$y \\leq -1, y \\geq 1$" },
      { id: "d", text: "$y \\leq -1, y > 1$" }
    ],
    correctAnswer: "c" // Range is this, domain is R - {(2n+1)pi/2}. Wait, the user text says "Domain" but options look like Range. Fixed as per typical paper errors.
  },
  {
    id: 14,
    text: "Period of $2 \\csc(x/4)$ is:",
    options: [
      { id: "a", text: "$\\pi/2$" },
      { id: "b", text: "$4\\pi$" },
      { id: "c", text: "$2\\pi$" },
      { id: "d", text: "$8\\pi$" }
    ],
    correctAnswer: "d" // 2pi / (1/4) = 8pi
  },
  {
    id: 15,
    text: "$\\lim_{x \\to 3} (2x+4) = $:",
    options: [
      { id: "a", text: "12" },
      { id: "b", text: "10" },
      { id: "c", text: "6" },
      { id: "d", text: "3" }
    ],
    correctAnswer: "b"
  },
  {
    id: 16,
    text: "$\\lim_{n \\to \\infty} (1 + \\frac{3}{n})^{2n} = $:",
    options: [
      { id: "a", text: "$e$" },
      { id: "b", text: "$e^2$" },
      { id: "c", text: "$e^3$" },
      { id: "d", text: "$e^6$" }
    ],
    correctAnswer: "d" // (1+3/n)^(n/3 * 6) = e^6
  },
  {
    id: 17,
    text: "$\\frac{d}{dx} x^n = n(x)^{n-1}$ where:",
    options: [
      { id: "a", text: "$n \\in C$" },
      { id: "b", text: "$n \\in R$" },
      { id: "c", text: "$n \\in Q$" },
      { id: "d", text: "$n \\in Z$" }
    ],
    correctAnswer: "b"
  },
  {
    id: 18,
    text: "Projection of $\\vec{v}$ along $\\vec{u}$ is:",
    options: [
      { id: "a", text: "$\\vec{u} \\cdot \\hat{v}$" },
      { id: "b", text: "$\\vec{v} \\cdot \\hat{u}$" },
      { id: "c", text: "$\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{v}|}$" },
      { id: "d", text: "$\\frac{\\vec{u} \\cdot \\vec{v}}{|\\vec{u}|}$" }
    ],
    correctAnswer: "b"
  },
  {
    id: 19,
    text: "If $\\vec{v}$ is any vector then vector of magnitude 5 opposite to $\\vec{v}$ is:",
    options: [
      { id: "a", text: "$5\\vec{v}$" },
      { id: "b", text: "$-5\\vec{v}$" },
      { id: "c", text: "$5\\frac{\\vec{v}}{|\\vec{v}|}$" },
      { id: "d", text: "$-5\\frac{\\vec{v}}{|\\vec{v}|}$" }
    ],
    correctAnswer: "d"
  },
  {
    id: 20,
    text: "Moment of force $\\vec{F}$ about a point with position vector $\\vec{r}$ will be equal to:",
    options: [
      { id: "a", text: "$\\vec{F} \\times \\vec{r}$" },
      { id: "b", text: "$\\vec{r} \\times \\vec{F}$" },
      { id: "c", text: "$\\vec{d} \\times \\vec{F}$" },
      { id: "d", text: "$\\vec{F} \\times \\vec{d}$" }
    ],
    correctAnswer: "b"
  }
];

export const shortQuestionsQ2: ShortQuestion[] = [
  { id: "i", text: "Show that $i^{n+1} + i^{n+2} + i^{n+3} + i^{n+4} = 0$ for all $n \\in N$." },
  { id: "ii", text: "Find the square root of $8 - 6i$." },
  { id: "iii", text: "Factorize into linear factors: $z^3 - 2z^2 + 16z - 32$." },
  { id: "iv", text: "If $\\omega$ is an imaginary cube root of unity, prove that $\\frac{a + b\\omega^2 + c\\omega}{a\\omega^2 + b\\omega + c} = \\omega$." },
  { id: "v", text: "Find the domain and the range of function $g(x) = \\sqrt{x+2}$." },
  { id: "vi", text: "Given $f(x) = x^3 - ax^2 + bx + 1$. If $f(2) = -3$ and $f(-1) = 0$, find the values of \"$a$\" and \"$b$\"." },
  { id: "vii", text: "Find the maximum and minimum value of the function $f(x) = 3x^2 + 6x - 13$." },
  { id: "viii", text: "Solve the equation: $\\frac{1}{x+1} + \\frac{2}{x+2} = \\frac{7}{x+5}, \\quad x \\neq -1, -2, -5$." },
  { id: "ix", text: "If $A$ and $B$ are square matrices of the same order, then explain why in general $(A-B)^2 \\neq A^2 - 2AB + B^2$." },
  { id: "x", text: "Without expansion show that: $\\begin{vmatrix} 2 & 1 & 3x \\\\ 2 & 3 & 9x \\\\ 3 & 5 & 15x \\end{vmatrix} = 0$" },
  { id: "xi", text: "Using properties of determinants, show that: $\\begin{vmatrix} 3 & 5 & 0 \\\\ 5 & 25 & 10 \\\\ 7 & 25 & 1 \\end{vmatrix} = 25 \\begin{vmatrix} 3 & 1 & 0 \\\\ 1 & 1 & 2 \\\\ 7 & 5 & 1 \\end{vmatrix}$" },
  { id: "xii", text: "Resolve the following into partial fractions: $\\frac{x^2+1}{(x+1)(x-1)}$" }
];

export const shortQuestionsQ3: ShortQuestion[] = [
  { id: "i", text: "Write down the first three terms of sequence $a_1=1, a_{n+1}=(3a_n+2)^2$." },
  { id: "ii", text: "Write down the $n^{th}$ term of the sequence $a, a+d, a+2d, \\dots$." },
  { id: "iii", text: "Which term of A.P 3, 8, 13, \\dots is 123?" },
  { id: "iv", text: "Insert five A.M's between $\\sqrt{2}$ and $\\frac{15}{\\sqrt{2}}$." },
  { id: "v", text: "Evaluate: $\\frac{12!}{3!(12-3)!}$" },
  { id: "vi", text: "Find the value of $n$ if $(n+4)! = 5040 \\cdot n!$." },
  { id: "vii", text: "Find remainder and quotient by simply simplifying: $(x^3 + 19x^2 - 3x + 4) \\div (x-2)$." },
  { id: "viii", text: "Use factor theorem to determine if the first polynomial is divided by the second polynomial: $x^4 + x^3 + x^2 + x + 1, \\quad x-1$." },
  { id: "ix", text: "Prove that: $\\sin 810^\\circ \\sin 630^\\circ + \\cos 135^\\circ \\sin 225^\\circ = -\\frac{1}{2}$" },
  { id: "x", text: "Prove that: $\\cos(\\alpha+45^\\circ) = \\frac{1}{\\sqrt{2}}(\\cos\\alpha - \\sin\\alpha)$" },
  { id: "xi", text: "Prove that: $\\frac{\\sin 2\\alpha}{1 + \\cos 2\\alpha} = \\tan \\alpha$" },
  { id: "xii", text: "Express the sum as product: $\\cos 60^\\circ + \\cos 30^\\circ$" }
];

export const shortQuestionsQ4: ShortQuestion[] = [
  { id: "i", text: "Find the period of function $19 \\sin(\\frac{\\pi}{20}x)$." },
  { id: "ii", text: "Find the maximum and minimum value of function $1 - 3 \\cos 2x$." },
  { id: "iii", text: "Evaluate: $\\lim_{x \\to 2} ( \\frac{x^3 - 8}{x^2 - 5x + 6} )$" },
  { id: "iv", text: "Evaluate: $\\lim_{n \\to \\infty} ( 1 + \\frac{1}{3n} )^n$" },
  { id: "v", text: "Evaluate: $\\lim_{\\theta \\to 0} \\frac{1 - \\cos \\theta}{\\sin \\theta}$" },
  { id: "vi", text: "Find the gradient and equation of tangent line to $y = 3x^2 - 4x + 1$ at $x = 2$." },
  { id: "vii", text: "Differentiate: $x^4 + 2x^3 + x^2$." },
  { id: "viii", text: "Differentiate: $(x-5)(3-x)$." },
  { id: "ix", text: "Differentiate: $(\\sqrt{x} - \\frac{1}{\\sqrt{x}})^2$." },
  { id: "x", text: "Find $t$ so that $|2\\mathbf{i} + (t-1)\\mathbf{j} + t\\mathbf{k}| = \\sqrt{13}$." },
  { id: "xi", text: "Find the work done if the point at which the constant force $\\vec{F} = 2\\vec{i} + 5\\vec{j} + 3\\vec{k}$ is applied to an object moves it from $A(2,1,3)$ to $B(5,4,1)$." },
  { id: "xii", text: "Prove that: $\\mathbf{a} \\times (\\mathbf{b}+\\mathbf{c}) + \\mathbf{b} \\times (\\mathbf{c}+\\mathbf{a}) + \\mathbf{c} \\times (\\mathbf{a}+\\mathbf{b}) = 0$." },
  { id: "xiii", text: "Compute the cross product $\\mathbf{a} \\times \\mathbf{b}$ if $\\mathbf{a} = 2\\mathbf{i} - \\mathbf{k}$ and $\\mathbf{b} = -\\mathbf{j} + \\mathbf{k}$." }
];

export const longQuestions: ShortQuestion[] = [
  { id: "5a", text: "If $\\omega$ is a cube root of unity prove that: $\\frac{a\\omega^2 + b\\omega^{17} + c\\omega^{19}}{a\\omega^{14} + b\\omega^{22} + c\\omega^{13}} = \\omega$." },
  { id: "5b", text: "Solve $|2x^2 - 3x - 5| < 4$." },
  { id: "6a", text: "Show that: $\\begin{vmatrix} a^2+b^2 & c^2 & c^2 \\\\ a^2 & b^2+c^2 & a^2 \\\\ b^2 & b^2 & c^2+a^2 \\end{vmatrix} = 4a^2b^2c^2$." },
  { id: "6b", text: "Resolve into partial fraction: $\\frac{2x+1}{(x-2)(x^2+3x+5)}$." },
  { id: "7a", text: "For what value of $n$, $\\frac{a^{n+1} + b^{n+1}}{a^n + b^n}$ is the A.M between \"a\" and \"b\" where $a \\neq b$." },
  { id: "7b", text: "The $7^{th}$ and $21^{st}$ term of an A.P are 37 and 107 respectively. Find the A.P and its $100^{th}$ term." },
  { id: "8a", text: "If $\\alpha, \\beta, \\gamma$ are the angles of triangle ABC, show that: $\\cot \\frac{\\alpha}{2} + \\cot \\frac{\\beta}{2} + \\cot \\frac{\\gamma}{2} = \\cot \\frac{\\alpha}{2} \\cot \\frac{\\beta}{2} \\cot \\frac{\\gamma}{2}$" },
  { id: "8b", text: "$f(x) = \\begin{cases} \\frac{\\sqrt{2x+5} - \\sqrt{x+7}}{x-2}, & x \\neq 2 \\\\ k, & x = 2 \\end{cases}$. Find value of $k$ so that $f$ is continuous at $x=2$." },
  { id: "9a", text: "If $y = \\sqrt{x} - \\frac{1}{\\sqrt{x}}$, show that $2x \\frac{dy}{dx} + y = 2\\sqrt{x}$." },
  { id: "9b", text: "Prove that in any triangle ABC: $b^2 = c^2 + a^2 - 2ca \\cos B$." }
];
