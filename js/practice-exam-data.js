/* 80 practice MCQs for the FA1 final, Parts 1–4. Generated and answer-checked by a script. */
window.PRACTICE_QUESTIONS = [
 {
  "part": 1,
  "kind": "concept",
  "q": "On a bank reconciliation, outstanding checks are:",
  "opts": [
   "Added to the balance per books",
   "Deducted from the balance per bank",
   "Deducted from the balance per books",
   "Added to the balance per bank"
  ],
  "ans": 1,
  "expl": "Outstanding checks are already deducted in the company’s books but have not cleared the bank yet. They are a timing difference on the <b>bank</b> side, so subtract them from the bank balance. No journal entry is needed.",
  "id": 1
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "Which reconciling item requires a journal entry in the company’s books?",
  "opts": [
   "An outstanding check",
   "A customer’s NSF check returned by the bank",
   "A deposit in transit",
   "A bank error that charged another company’s check to our account"
  ],
  "ans": 1,
  "expl": "Only book-side items (service charges, NSF checks, interest, direct deposits, bank transfers, and company errors) are journalized. An NSF check: Dr Accounts receivable, Cr Cash. Deposits in transit, outstanding checks and bank errors are adjusted on the bank side only.",
  "id": 2
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "The bank statement shows $8,500. There is a deposit in transit of $1,200 and outstanding checks of $1,950. What is the correct (adjusted) cash balance?",
  "opts": [
   "$11,650",
   "$9,250",
   "$5,350",
   "$7,750"
  ],
  "ans": 3,
  "expl": "Bank side: 8,500 + deposit in transit 1,200 − outstanding checks 1,950 = <b>7,750</b>.",
  "id": 3
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Cash per books is $6,300. The bank statement shows a service charge of $25, an NSF customer check of $480, interest earned of $15, and a direct deposit from a customer of $1,000. The company also recorded a $520 check paid to a supplier as $250. What is the correct cash balance?",
  "opts": [
   "$6,540",
   "$7,500",
   "$7,080",
   "$6,810"
  ],
  "ans": 0,
  "expl": "Book side: 6,300 − 25 − 480 + 15 + 1,000 − 270 = <b>6,540</b>. The check was recorded $270 too low (520 − 250), so cash is overstated by 270 and must be reduced.",
  "id": 4
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "Which of the following is NOT one of the cash-management responsibilities in the lecture?",
  "opts": [
   "Accurate accounting so that reports of cash flows and balances can be prepared",
   "Holding as much idle cash as possible to reduce risk",
   "Preventing the accumulation of excess idle cash",
   "Controls to ensure enough cash is available for operating needs, maturing liabilities and emergencies"
  ],
  "ans": 1,
  "expl": "The three responsibilities are accurate accounting, ensuring enough cash is available, and <b>preventing</b> excess idle cash, because idle cash earns no revenue.",
  "id": 5
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "Sales Discounts is best described as:",
  "opts": [
   "A current liability",
   "A contra-asset deducted from accounts receivable",
   "An expense reported in selling, general and administrative expenses",
   "A contra-revenue account deducted from sales"
  ],
  "ans": 3,
  "expl": "Sales discounts (e.g. 2/10, n/30) reduce revenue. They are a contra-revenue, deducted from gross sales to get net sales.",
  "id": 6
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "A $5,000 credit sale is made on terms 2/10, n/30. Before paying, the customer returns $1,000 of goods. The customer pays within the discount period. How much cash is collected?",
  "opts": [
   "$4,900",
   "$3,920",
   "$4,000",
   "$3,900"
  ],
  "ans": 1,
  "expl": "The discount applies to the amount owed after the return: (5,000 − 1,000) × 98% = <b>3,920</b>. Sales discount = 80.",
  "id": 7
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Gross sales are $200,000, sales returns and allowances $8,000, sales discounts $3,000, and credit card discounts $2,000. As in the lecture exercises, credit card discounts are part of SG&A expense. What are net sales?",
  "opts": [
   "$187,000",
   "$192,000",
   "$197,000",
   "$189,000"
  ],
  "ans": 3,
  "expl": "Net sales = 200,000 − 8,000 − 3,000 = <b>189,000</b>. The credit card discount is an expense, not a deduction from sales.",
  "id": 8
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "Under the allowance method, writing off a specific customer’s account as uncollectible:",
  "opts": [
   "Has no effect on net accounts receivable or on expenses",
   "Decreases net accounts receivable only",
   "Increases bad debt expense only",
   "Decreases net accounts receivable and increases bad debt expense"
  ],
  "ans": 0,
  "expl": "Write-off: Dr Allowance for doubtful accounts, Cr Accounts receivable. Both the receivable and its contra-account fall by the same amount, so net receivables don’t change. The expense was already recorded when the estimate was made.",
  "id": 9
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Credit sales for the year are $1,300,000. The company estimates bad debts at 1% of credit sales (percentage of credit sales method). Before adjustment, the allowance has a $2,000 debit balance. What is bad debt expense for the year?",
  "opts": [
   "$15,000",
   "$11,000",
   "$2,000",
   "$13,000"
  ],
  "ans": 3,
  "expl": "Under the percentage of credit sales method the expense is computed directly: 1,300,000 × 1% = <b>13,000</b>. The existing allowance balance does not change the expense.",
  "id": 10
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Aging of accounts receivable shows estimated uncollectible accounts of $9,000. Before adjustment, the Allowance for Doubtful Accounts has a $1,500 <b>credit</b> balance. What is bad debt expense?",
  "opts": [
   "$7,500",
   "$10,500",
   "$1,500",
   "$9,000"
  ],
  "ans": 0,
  "expl": "Aging gives the target ending allowance (9,000). The adjustment is the amount needed to reach it: 9,000 − 1,500 = <b>7,500</b>.",
  "id": 11
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Aging shows that the allowance should be $6,400. Before adjustment, the allowance has an $800 <b>debit</b> balance. What is bad debt expense?",
  "opts": [
   "$800",
   "$6,400",
   "$7,200",
   "$5,600"
  ],
  "ans": 2,
  "expl": "A debit balance means write-offs exceeded the earlier estimate. To reach a 6,400 credit balance: 6,400 + 800 = <b>7,200</b>.",
  "id": 12
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Aging schedule: 0–30 days $40,000 (2% uncollectible), 31–60 days $12,000 (10%), over 60 days $5,000 (30%). What is the required ending balance of the allowance?",
  "opts": [
   "$5,700",
   "$2,000",
   "$3,500",
   "$1,140"
  ],
  "ans": 2,
  "expl": "40,000 × 2% = 800; 12,000 × 10% = 1,200; 5,000 × 30% = 1,500. Total = <b>3,500</b>. Apply each age group’s own rate, not a single rate to the total.",
  "id": 13
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "A customer account of $600 written off last year is unexpectedly collected this year. Which entries are recorded?",
  "opts": [
   "Dr Cash, Cr Bad debt expense",
   "Dr Allowance, Cr Accounts receivable; then Dr Cash, Cr Allowance",
   "Dr Accounts receivable, Cr Allowance (reinstate); then Dr Cash, Cr Accounts receivable",
   "Dr Cash, Cr Sales revenue"
  ],
  "ans": 2,
  "expl": "A recovery first reverses the write-off (Dr AR, Cr Allowance), then records the collection (Dr Cash, Cr AR). Neither revenue nor bad debt expense is credited.",
  "id": 14
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Accounts receivable is $80,000 and the allowance has a $3,000 credit balance. A $1,200 account is then written off. What is net accounts receivable after the write-off?",
  "opts": [
   "$77,000",
   "$80,000",
   "$78,800",
   "$75,800"
  ],
  "ans": 0,
  "expl": "After the write-off, AR = 78,800 and Allowance = 1,800, so net AR = <b>77,000</b>, the same as before. Write-offs don’t change net receivables.",
  "id": 15
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "On October 1, a company receives a $10,000, 6-month, 9% note receivable from a customer. The year ends December 31. How much interest receivable is accrued on December 31?",
  "opts": [
   "$900",
   "$225",
   "$150",
   "$450"
  ],
  "ans": 1,
  "expl": "Interest = Principal × Rate × Time = 10,000 × 9% × 3/12 = <b>225</b> (October, November, December).",
  "id": 16
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "In the lecture’s net-sales exercises, credit card discounts are treated as:",
  "opts": [
   "A contra-revenue deducted from sales",
   "A loss reported below operating income",
   "A reduction of accounts receivable only",
   "Part of selling, general and administrative expense"
  ],
  "ans": 3,
  "expl": "The exercises (Hancock, OceanView, Bennett) treat sales discounts and returns as contra-revenues, while credit card discounts go to SG&A expense.",
  "id": 17
 },
 {
  "part": 1,
  "kind": "calc",
  "q": "Net sales revenue is $600,000. Accounts receivable was $45,000 at the beginning of the year and $55,000 at the end. What is the receivables turnover?",
  "opts": [
   "13.3 times",
   "30.4 times",
   "12.0 times",
   "10.9 times"
  ],
  "ans": 2,
  "expl": "Average AR = (45,000 + 55,000) / 2 = 50,000. Turnover = 600,000 / 50,000 = <b>12.0</b> times. (Average collection period = 365 / 12 = 30.4 days.)",
  "id": 18
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "An increase in the receivables turnover ratio, holding other things constant, generally means the company is:",
  "opts": [
   "Writing off more bad debts",
   "Extending longer credit terms to customers",
   "Collecting its receivables faster",
   "Collecting its receivables more slowly"
  ],
  "ans": 2,
  "expl": "Higher turnover = more collection cycles per year = a shorter average collection period (365 ÷ turnover).",
  "id": 19
 },
 {
  "part": 1,
  "kind": "concept",
  "q": "Which statement about estimating bad debts is correct?",
  "opts": [
   "The aging (percentage of receivables) method estimates the ending allowance; the adjustment is the difference from the unadjusted balance",
   "The aging method ignores the existing balance in the allowance account",
   "The percentage of credit sales method estimates the ending allowance balance",
   "The direct write-off method is the required approach when losses are expected"
  ],
  "ans": 0,
  "expl": "Credit sales % → computes the expense directly. Aging / % of receivables → computes the target allowance, then records the difference. The lecture requires the allowance (expected-loss) method, not direct write-off.",
  "id": 20
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "Under a perpetual inventory system, freight-in paid on merchandise purchases is debited to:",
  "opts": [
   "Inventory",
   "Cost of goods sold",
   "Freight-in",
   "Delivery (freight-out) expense"
  ],
  "ans": 0,
  "expl": "In the Grantsville example the perpetual entry is Dr Inventory 970, Cr Cash 970. A separate Freight-in account is used under the <b>periodic</b> system.",
  "id": 21
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "A store buys 1,000 shirts at $10 each on account (terms 2/10, n/30), pays $970 freight on them, returns 30 stained shirts, and pays the remaining bill within the discount period. Under a perpetual system, what is the total cost of the shirts in inventory?",
  "opts": [
   "$9,506",
   "$10,776",
   "$10,670",
   "$10,476"
  ],
  "ans": 3,
  "expl": "10,000 + 970 freight − 300 returned − 194 discount (2% × 9,700) = <b>10,476</b>.",
  "id": 22
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "Under a periodic inventory system, cost of goods sold is determined:",
  "opts": [
   "At the end of the period: beginning inventory + net purchases − ending inventory",
   "At the time of each sale, from the inventory records",
   "Only when the perpetual records disagree with the count",
   "By multiplying sales by the gross profit percentage each day"
  ],
  "ans": 0,
  "expl": "Periodic: no COGS entry at each sale. A physical count gives ending inventory, and COGS = goods available for sale − ending inventory.",
  "id": 23
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Beginning inventory $20,000, net purchases $85,000, ending inventory $25,000. What is cost of goods sold?",
  "opts": [
   "$90,000",
   "$60,000",
   "$130,000",
   "$80,000"
  ],
  "ans": 3,
  "expl": "COGS = 20,000 + 85,000 − 25,000 = <b>80,000</b>.",
  "id": 24
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Beginning inventory 100 units @ $10; purchase #1 200 units @ $12; purchase #2 100 units @ $15. 250 units were sold. Periodic system. What is ending inventory under <b>FIFO</b>?",
  "opts": [
   "$1,837.50",
   "$2,100",
   "$1,600",
   "$2,800"
  ],
  "ans": 1,
  "expl": "150 units remain. FIFO leaves the newest costs: 100 × 15 + 50 × 12 = <b>2,100</b>.",
  "id": 25
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Beginning inventory 100 units @ $10; purchase #1 200 units @ $12; purchase #2 100 units @ $15. 250 units were sold. Periodic system. What is cost of goods sold under <b>LIFO</b>?",
  "opts": [
   "$3,062.50",
   "$1,600",
   "$2,800",
   "$3,300"
  ],
  "ans": 3,
  "expl": "LIFO sells the newest units first: 100 × 15 + 150 × 12 = <b>3,300</b>. (Goods available 4,900 − LIFO ending inventory 1,600.)",
  "id": 26
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Beginning inventory 100 units @ $10; purchase #1 200 units @ $12; purchase #2 100 units @ $15. 250 units were sold. Periodic system. What is cost of goods sold under the <b>weighted-average</b> method?",
  "opts": [
   "$2,800.00",
   "$3,083.33",
   "$1,837.50",
   "$3,062.50"
  ],
  "ans": 3,
  "expl": "Average cost = 4,900 / 400 = 12.25 per unit. COGS = 250 × 12.25 = <b>3,062.50</b>. Weight by units; don’t take a simple average of the unit costs.",
  "id": 27
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "When purchase costs are rising, FIFO (compared with LIFO) reports:",
  "opts": [
   "Higher cost of goods sold and lower net income",
   "Higher ending inventory and higher net income",
   "Lower ending inventory and lower net income",
   "The same net income, because only the balance sheet differs"
  ],
  "ans": 1,
  "expl": "FIFO charges the older, cheaper costs to COGS, so COGS is lower, net income is higher, and the newer, higher costs stay in ending inventory.",
  "id": 28
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "Which inventory costing method is NOT permitted under IFRS?",
  "opts": [
   "FIFO",
   "LIFO",
   "Specific identification",
   "Weighted average"
  ],
  "ans": 1,
  "expl": "The slides teach LIFO but point out that IFRS does not allow it.",
  "id": 29
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "The specific identification method is most appropriate for:",
  "opts": [
   "Large quantities of identical low-cost items",
   "Any business that uses a periodic system",
   "Unique, high-value items such as cars or jewelry",
   "Companies that want to minimize income taxes"
  ],
  "ans": 2,
  "expl": "Specific identification traces the actual cost of each unit sold, which is practical only for distinguishable, high-value items.",
  "id": 30
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Item-by-item lower of cost or NRV: Item A cost $5,000, NRV $4,200; Item B cost $3,000, NRV $3,600; Item C cost $2,000, NRV $1,500. What write-down is required?",
  "opts": [
   "$1,300",
   "$800",
   "$1,900",
   "$700"
  ],
  "ans": 0,
  "expl": "A: 5,000 − 4,200 = 800; B: NRV above cost, no change (never write up); C: 2,000 − 1,500 = 500. Total = <b>1,300</b>. Carrying amount = 4,200 + 3,000 + 1,500 = 8,700.",
  "id": 31
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "In the lecture, the journal entry to record a write-down of inventory to net realizable value is:",
  "opts": [
   "No entry; the write-down is disclosed only",
   "Dr Allowance for inventory write-down, Cr Cost of goods sold",
   "Dr Inventory, Cr Gain on inventory",
   "Dr Cost of goods sold, Cr Allowance for inventory write-down"
  ],
  "ans": 3,
  "expl": "The slides record the loss in COGS: Dr Cost of goods sold, Cr Allowance for inventory write-down (which reduces the reported inventory).",
  "id": 32
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "Net realizable value (NRV) of inventory is:",
  "opts": [
   "Estimated selling price less estimated costs to complete and sell",
   "The current cost to replace the item",
   "Estimated selling price plus selling costs",
   "The original purchase cost plus freight-in"
  ],
  "ans": 0,
  "expl": "NRV = expected selling price − costs to complete and sell. Inventory is reported at the lower of cost or NRV.",
  "id": 33
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "Ending inventory for Year 1 is overstated by $5,000 and the error is never corrected (it reverses automatically). What is the effect on net income for <b>Year 2</b>?",
  "opts": [
   "Understated by $5,000",
   "Understated by $10,000",
   "No effect",
   "Overstated by $5,000"
  ],
  "ans": 0,
  "expl": "Year 1 EI overstated → Year 1 COGS understated → Year 1 NI overstated. Year 1 EI becomes Year 2 BI, so Year 2 COGS is overstated and Year 2 NI is <b>understated</b> by 5,000. The errors cancel over the two years.",
  "id": 34
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Year 1 ending inventory was overstated by $4,000. Reported net income was $50,000 in Year 1 and $60,000 in Year 2. What is the corrected net income for Year 2?",
  "opts": [
   "$60,000",
   "$64,000",
   "$56,000",
   "$68,000"
  ],
  "ans": 1,
  "expl": "Overstated Year 2 beginning inventory overstated Year 2 COGS, so Year 2 NI was understated. Corrected = 60,000 + 4,000 = <b>64,000</b>. (Year 1 corrected = 46,000.)",
  "id": 35
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Cost of goods sold is $360,000. Inventory was $40,000 at the start of the year and $50,000 at the end. What is the number of days’ sales in inventory?",
  "opts": [
   "40.6 days",
   "45.6 days",
   "50.7 days",
   "8.0 days"
  ],
  "ans": 1,
  "expl": "Inventory turnover = 360,000 / 45,000 = 8.0. Days’ sales in inventory = 365 / 8 = <b>45.6</b> days.",
  "id": 36
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "Under a perpetual system, inventory shrinkage (theft, damage, errors) is identified by:",
  "opts": [
   "Reviewing the bank reconciliation",
   "It cannot be identified under a perpetual system",
   "Comparing a physical count with the perpetual inventory records",
   "Comparing sales with purchases"
  ],
  "ans": 2,
  "expl": "The perpetual records show what <i>should</i> be on hand. A physical count shows what <i>is</i> on hand, and the difference is shrinkage, which is added to COGS.",
  "id": 37
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "Which cost is NOT included in the cost of inventory?",
  "opts": [
   "Purchase price net of discounts",
   "Freight-in to bring goods to the store",
   "Freight-out to deliver goods to customers",
   "Costs to get goods ready for sale"
  ],
  "ans": 2,
  "expl": "Inventory cost = all costs to get the goods into a condition and location ready for sale. Freight-out is a selling expense.",
  "id": 38
 },
 {
  "part": 2,
  "kind": "concept",
  "q": "For a manufacturer, goods that are in production but not yet complete are classified as:",
  "opts": [
   "Merchandise inventory",
   "Raw materials inventory",
   "Work in process inventory",
   "Finished goods inventory"
  ],
  "ans": 2,
  "expl": "Raw materials → work in process → finished goods. Merchandise inventory belongs to retailers and wholesalers.",
  "id": 39
 },
 {
  "part": 2,
  "kind": "calc",
  "q": "Sales $120,000, gross profit $45,000, beginning inventory $18,000, purchases $70,000. What is ending inventory?",
  "opts": [
   "$23,000",
   "$3,000",
   "$13,000",
   "$43,000"
  ],
  "ans": 2,
  "expl": "COGS = 120,000 − 45,000 = 75,000. EI = 18,000 + 70,000 − 75,000 = <b>13,000</b>.",
  "id": 40
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "A company buys a machine: price $40,000, non-refundable import tax $2,400, transport to the factory $600, installation and testing $400, and first-year insurance $1,200. What is the acquisition cost of the machine?",
  "opts": [
   "$44,600",
   "$40,000",
   "$43,400",
   "$42,400"
  ],
  "ans": 2,
  "expl": "Capitalize all costs needed to acquire the asset and get it ready for use: 40,000 + 2,400 + 600 + 400 = <b>43,400</b>. Insurance for the operating period is an expense.",
  "id": 41
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "Land and a building are bought together for $900,000. Appraised values are land $300,000 and building $700,000. What cost is recorded for the land?",
  "opts": [
   "$270,000",
   "$300,000",
   "$200,000",
   "$630,000"
  ],
  "ans": 0,
  "expl": "Allocate the lump-sum price by relative fair values: 900,000 × 300/1,000 = <b>270,000</b> (building 630,000).",
  "id": 42
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "A company replaces the engine of a delivery truck, which extends its useful life by 3 years. The cost should be:",
  "opts": [
   "Expensed as an ordinary repair",
   "Debited to Accumulated depreciation and never depreciated",
   "Recorded as a separate intangible asset",
   "Added to the asset account (capitalized) as an improvement"
  ],
  "ans": 3,
  "expl": "Improvements increase life, efficiency or capacity → capital expenditure, added to the asset. Ordinary repairs and maintenance only keep the asset working → expense.",
  "id": 43
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "Which long-lived asset is NOT depreciated?",
  "opts": [
   "Buildings",
   "Delivery vehicles",
   "Land",
   "Equipment"
  ],
  "ans": 2,
  "expl": "Land is considered to have an unlimited life, so it is not depreciated.",
  "id": 44
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "A machine costs $50,000, has a residual value of $5,000 and a 5-year useful life. What is annual straight-line depreciation?",
  "opts": [
   "$20,000",
   "$9,000",
   "$10,000",
   "$18,000"
  ],
  "ans": 1,
  "expl": "(50,000 − 5,000) / 5 = <b>9,000</b> per year.",
  "id": 45
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "Same machine ($50,000 cost, $5,000 residual), expected to produce 90,000 units in total. It produces 21,000 units in Year 1. What is Year 1 depreciation under units of production?",
  "opts": [
   "$9,000",
   "$11,667",
   "$21,000",
   "$10,500"
  ],
  "ans": 3,
  "expl": "Rate = (50,000 − 5,000) / 90,000 = 0.50 per unit. 21,000 × 0.50 = <b>10,500</b>.",
  "id": 46
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "Same machine ($50,000 cost, $5,000 residual, 5 years) under double-declining-balance. What is depreciation in <b>Year 2</b>?",
  "opts": [
   "$10,800",
   "$20,000",
   "$12,000",
   "$9,000"
  ],
  "ans": 2,
  "expl": "Rate = 2 × 1/5 = 40%, applied to book value (ignore residual). Year 1: 50,000 × 40% = 20,000. Year 2: (50,000 − 20,000) × 40% = <b>12,000</b>.",
  "id": 47
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "An asset costs $100,000, residual value $10,000, 4-year life, double-declining-balance. Years 1–3 depreciation is 50,000, 25,000 and 12,500. What is depreciation in <b>Year 4</b>?",
  "opts": [
   "$12,500",
   "$6,250",
   "$2,500",
   "$22,500"
  ],
  "ans": 2,
  "expl": "Book value after Year 3 = 12,500. The asset cannot be depreciated below its residual value, so Year 4 = 12,500 − 10,000 = <b>2,500</b>.",
  "id": 48
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "Under double-declining-balance, residual value is:",
  "opts": [
   "Added to cost before applying the rate",
   "Ignored completely, so book value can reach zero",
   "Subtracted from cost before applying the rate each year",
   "Ignored in the rate calculation, but book value may not fall below it"
  ],
  "ans": 3,
  "expl": "DDB applies 2 × straight-line rate to book value (cost − accumulated depreciation). Residual value only limits the final year(s).",
  "id": 49
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "Accumulated depreciation is classified as:",
  "opts": [
   "An expense account",
   "A liability",
   "Part of owners’ equity",
   "A contra-asset account deducted from the asset’s cost"
  ],
  "ans": 3,
  "expl": "Book value (carrying amount) = Cost − Accumulated depreciation.",
  "id": 50
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "Depreciation, in accounting, is best described as:",
  "opts": [
   "A process of allocating an asset’s cost over its useful life",
   "A process of measuring the asset’s market value each year",
   "A method of recording the asset at fair value",
   "Cash set aside to replace the asset"
  ],
  "ans": 0,
  "expl": "Depreciation is cost allocation (matching), not valuation, and it involves no cash.",
  "id": 51
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "The $50,000 machine (residual $5,000, 5 years, straight-line) has been used for 3 years. What is its book value?",
  "opts": [
   "$27,000",
   "$23,000",
   "$20,000",
   "$18,000"
  ],
  "ans": 1,
  "expl": "Accumulated depreciation = 9,000 × 3 = 27,000. Book value = 50,000 − 27,000 = <b>23,000</b>.",
  "id": 52
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "Equipment costing $80,000 with accumulated depreciation of $62,000 is sold for $15,000 cash. What is the result?",
  "opts": [
   "Loss of $3,000",
   "Gain of $15,000",
   "Gain of $3,000",
   "Loss of $18,000"
  ],
  "ans": 0,
  "expl": "Book value = 80,000 − 62,000 = 18,000. Proceeds 15,000 − 18,000 = <b>loss of 3,000</b>. Entry: Dr Cash 15,000, Dr Acc. dep. 62,000, Dr Loss 3,000, Cr Equipment 80,000.",
  "id": 53
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "Equipment bought on January 1, Year 1 for $120,000 (no residual, 10-year life, straight-line) is sold on December 31, Year 4 for $70,000, after Year 4 depreciation is recorded. What is the result?",
  "opts": [
   "Gain of $2,000",
   "Loss of $2,000",
   "Gain of $10,000",
   "Loss of $50,000"
  ],
  "ans": 1,
  "expl": "Accumulated depreciation = 12,000 × 4 = 48,000. Book value = 72,000. 70,000 − 72,000 = <b>loss of 2,000</b>.",
  "id": 54
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "According to the lecture, an impairment loss exists when:",
  "opts": [
   "Carrying amount exceeds the lower of fair value less costs of disposal and value in use",
   "Carrying amount exceeds recoverable amount (the higher of fair value less costs of disposal and value in use)",
   "Market value rises above carrying amount",
   "Accumulated depreciation exceeds half of cost"
  ],
  "ans": 1,
  "expl": "Recoverable amount is the <b>higher</b> of fair value less costs of disposal and value in use. Impairment loss = carrying amount − recoverable amount.",
  "id": 55
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "A building’s carrying amount is $500,000. Its fair value less costs of disposal is $380,000 and its value in use is $420,000. What impairment loss is recognized?",
  "opts": [
   "$80,000",
   "$0",
   "$120,000",
   "$40,000"
  ],
  "ans": 0,
  "expl": "Recoverable amount = higher of 380,000 and 420,000 = 420,000. Loss = 500,000 − 420,000 = <b>80,000</b>.",
  "id": 56
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "A company buys another business for $400,000. The fair value of its identifiable assets is $340,000 and its liabilities are $20,000. How much goodwill is recorded?",
  "opts": [
   "$40,000",
   "$0",
   "$60,000",
   "$80,000"
  ],
  "ans": 3,
  "expl": "Goodwill = price − fair value of identifiable net assets = 400,000 − (340,000 − 20,000) = <b>80,000</b>.",
  "id": 57
 },
 {
  "part": 3,
  "kind": "calc",
  "q": "A patent with a 20-year legal life is bought for $200,000 after 7 years have passed. Its useful life to the company is expected to be 8 years. What is annual amortization (straight-line, no residual)?",
  "opts": [
   "$25,000",
   "$15,385",
   "$28,571",
   "$10,000"
  ],
  "ans": 0,
  "expl": "Amortize over the shorter of the remaining legal life (13 years) and useful life (8 years): 200,000 / 8 = <b>25,000</b>.",
  "id": 58
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "Goodwill and other intangible assets with indefinite lives are:",
  "opts": [
   "Expensed immediately when acquired",
   "Amortized straight-line over 40 years",
   "Not amortized, but tested for impairment at least annually",
   "Amortized using double-declining-balance"
  ],
  "ans": 2,
  "expl": "Definite-life intangibles are amortized straight-line. Indefinite-life intangibles (including goodwill) are not amortized; they are reviewed for impairment at least once a year.",
  "id": 59
 },
 {
  "part": 3,
  "kind": "concept",
  "q": "On a statement of cash flows prepared using the indirect method, depreciation expense is:",
  "opts": [
   "Reported as a cash outflow in investing activities",
   "Added back to net income in operating activities because it is a noncash expense",
   "Subtracted from net income in operating activities",
   "Reported as a financing activity"
  ],
  "ans": 1,
  "expl": "Depreciation reduces net income but uses no cash, so it is added back. Cash paid to buy PPE is an investing outflow.",
  "id": 60
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "According to the lecture, buying inventory on account is a relatively inexpensive way to finance purchases because:",
  "opts": [
   "Accounts payable are long-term liabilities",
   "Interest does not normally accrue on accounts payable",
   "Suppliers always grant discounts",
   "Accounts payable are not reported on the balance sheet"
  ],
  "ans": 1,
  "expl": "Trade payables normally carry no interest, and generous credit terms can let the buyer resell and collect before paying.",
  "id": 61
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "Cost of goods sold is $730,000. Accounts payable was $90,000 at the start of the year and $110,000 at the end. What is the average number of days to pay suppliers?",
  "opts": [
   "55.0 days",
   "7.3 days",
   "45.0 days",
   "50.0 days"
  ],
  "ans": 3,
  "expl": "AP turnover = 730,000 / 100,000 = 7.3. Days = 365 / 7.3 = <b>50.0</b> days.",
  "id": 62
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "On September 1, a company borrows $60,000 on a 9-month, 10% note payable. Principal and interest are due June 1 of next year. What interest expense is accrued at December 31?",
  "opts": [
   "$2,000",
   "$1,500",
   "$4,500",
   "$6,000"
  ],
  "ans": 0,
  "expl": "60,000 × 10% × 4/12 (Sep–Dec) = <b>2,000</b>. Dr Interest expense, Cr Interest payable.",
  "id": 63
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "Same note ($60,000, 10%, Sept 1 to June 1). How much interest expense is recognized in the following year, up to the June 1 payment?",
  "opts": [
   "$2,000",
   "$4,500",
   "$2,500",
   "$6,000"
  ],
  "ans": 2,
  "expl": "Total interest = 60,000 × 10% × 9/12 = 4,500. 2,000 was accrued last year, so this year’s expense = 60,000 × 10% × 5/12 = <b>2,500</b>.",
  "id": 64
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "Which condition is NOT required to recognize a provision?",
  "opts": [
   "The exact amount of the obligation must be known with certainty",
   "An outflow of resources is probable",
   "A reliable estimate of the amount can be made",
   "A present obligation (legal or constructive) from a past event"
  ],
  "ans": 0,
  "expl": "A provision is a liability of <b>uncertain</b> timing or amount. The three conditions: present obligation, probable outflow, reliable estimate.",
  "id": 65
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "In the lecture’s provision rules, “probable” means:",
  "opts": [
   "A likelihood of at least 90%",
   "Any chance greater than remote",
   "More likely than not, a likelihood greater than 50%",
   "Certain to occur"
  ],
  "ans": 2,
  "expl": "The slides define probable outflow as more likely than not (greater than 50%).",
  "id": 66
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "A company faces a lawsuit. A loss is reasonably possible (not probable) and the amount can be estimated. How is it reported?",
  "opts": [
   "Disclosed in the notes to the financial statements only",
   "Recorded as a liability on the balance sheet",
   "Recorded as an expense and disclosed",
   "Neither recorded nor disclosed"
  ],
  "ans": 0,
  "expl": "Reasonably possible contingent liabilities go in the notes, not on the balance sheet. Probable + estimable → record a liability.",
  "id": 67
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "If the chance of a loss from a contingency is remote, the company should:",
  "opts": [
   "Record it only if the amount can be estimated",
   "Neither record nor disclose it",
   "Record a liability",
   "Disclose it in the notes"
  ],
  "ans": 1,
  "expl": "Remote = the chance is slight. No liability is recorded and normally no disclosure is needed.",
  "id": 68
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "During July a company sells appliances for $80,000 with a one-year warranty. Warranty costs are estimated at 3% of sales. In December it replaces a part costing $900 and pays $150 of labor under the warranty. What is the warranty liability balance after the repair (no other warranty activity)?",
  "opts": [
   "$1,050",
   "$2,400",
   "$3,450",
   "$1,350"
  ],
  "ans": 3,
  "expl": "Estimated warranty expense = 80,000 × 3% = 2,400 (Dr Warranty expense, Cr Warranty liability). Repair: Dr Warranty liability 1,050. Balance = 2,400 − 1,050 = <b>1,350</b>.",
  "id": 69
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "Warranty expense should be recognized:",
  "opts": [
   "Only when customers return products for repair",
   "In the period the product is sold, based on an estimate",
   "Only if repair costs exceed the estimate",
   "When the warranty period expires"
  ],
  "ans": 1,
  "expl": "Matching: estimate and record warranty expense (and the liability) in the period of sale. Later repairs reduce the liability, not expense.",
  "id": 70
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "A company borrows $150,000 on a 30-year, 6% mortgage with a monthly payment of $899.33 (given). How much of the first monthly payment reduces the principal?",
  "opts": [
   "$899.33",
   "$750.00",
   "$149.33",
   "$1,649.33"
  ],
  "ans": 2,
  "expl": "Interest for the first month = 150,000 × 6% × 1/12 = 750.00. Principal = 899.33 − 750.00 = <b>149.33</b>. (You won’t compute the payment itself; it’s given.)",
  "id": 71
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "At year-end, a mortgage payable is reported on the balance sheet:",
  "opts": [
   "Entirely as a current liability",
   "In the notes only, because the property is collateral",
   "Entirely as a long-term liability",
   "Split: the principal due within the next year is current; the rest is long-term"
  ],
  "ans": 3,
  "expl": "The slides: the principal to be paid during the next year is a current liability, and the remaining balance is a long-term liability.",
  "id": 72
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "A bond with a 10% coupon rate is issued when the market interest rate is 12%. The bond is issued:",
  "opts": [
   "At par",
   "At a discount",
   "At face value plus accrued interest",
   "At a premium"
  ],
  "ans": 1,
  "expl": "Coupon < market rate → investors pay less than face value → discount. Coupon > market → premium. Equal → par.",
  "id": 73
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "After a bond has been issued, if market interest rates rise, the bond’s market price will:",
  "opts": [
   "Equal the carrying amount on the issuer’s books",
   "Fall",
   "Rise",
   "Stay at face value"
  ],
  "ans": 1,
  "expl": "Bond prices move inversely to market interest rates. (The issuer’s accounting still uses the coupon rate and the market rate on the issue date.)",
  "id": 74
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "A company issues $500,000 of bonds with an 8% coupon rate, paying interest semiannually, when the market rate is 12%. What is each cash interest payment?",
  "opts": [
   "$20,000",
   "$40,000",
   "$10,000",
   "$30,000"
  ],
  "ans": 0,
  "expl": "Cash interest = face × coupon rate per period = 500,000 × 8% / 2 = <b>20,000</b>. The market rate affects the issue price and interest expense, not the cash paid.",
  "id": 75
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "$100,000 face-value bonds with a 10% coupon (paid semiannually) are issued for $95,000 (given) when the market rate is 12%. Using the effective-interest method, what is the bonds’ carrying amount after the first interest payment?",
  "opts": [
   "$95,700",
   "$95,000",
   "$94,300",
   "$100,000"
  ],
  "ans": 0,
  "expl": "Interest expense = 95,000 × 6% = 5,700. Cash = 100,000 × 5% = 5,000. Discount amortized = 700. Carrying amount = 95,000 + 700 = <b>95,700</b>.",
  "id": 76
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "$100,000 face-value bonds with a 10% coupon (paid semiannually) are issued for $103,630 (given) when the market rate is 8%. Using the effective-interest method, what is interest expense for the first six months?",
  "opts": [
   "$8,290.40",
   "$4,000.00",
   "$4,145.20",
   "$5,000.00"
  ],
  "ans": 2,
  "expl": "Interest expense = carrying amount × market rate per period = 103,630 × 4% = <b>4,145.20</b>. Cash paid = 5,000, so premium amortized = 854.80.",
  "id": 77
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "Under the effective-interest method, amortizing a bond premium:",
  "opts": [
   "Increases the carrying amount of the bonds",
   "Makes interest expense greater than the cash interest paid",
   "Has no effect on interest expense",
   "Decreases the carrying amount of the bonds toward face value"
  ],
  "ans": 3,
  "expl": "Premium: expense < cash paid, and the carrying amount falls toward face value. Discount: expense > cash paid, and the carrying amount rises toward face value.",
  "id": 78
 },
 {
  "part": 4,
  "kind": "concept",
  "q": "When bonds are retired at maturity, the journal entry is:",
  "opts": [
   "Dr Cash, Cr Bonds payable",
   "Dr Bonds payable, Cr Cash and Cr Gain on retirement",
   "Dr Bonds payable and Dr Discount on bonds, Cr Cash",
   "Dr Bonds payable (face value), Cr Cash — the same whether issued at par, a discount or a premium"
  ],
  "ans": 3,
  "expl": "By maturity the discount or premium is fully amortized, so the carrying amount equals face value: Dr Bonds payable, Cr Cash.",
  "id": 79
 },
 {
  "part": 4,
  "kind": "calc",
  "q": "Net income is $120,000, interest expense $30,000 and income tax expense $50,000. What is the times interest earned ratio?",
  "opts": [
   "5.00 times",
   "5.67 times",
   "6.67 times",
   "4.00 times"
  ],
  "ans": 2,
  "expl": "TIE = (Net income + Interest expense + Income tax expense) / Interest expense = 200,000 / 30,000 = <b>6.67</b> times.",
  "id": 80
 }
];
