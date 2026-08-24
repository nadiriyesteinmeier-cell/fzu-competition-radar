window.PAPER_DATA_UPDATED_AT = "2026-08-24";
window.PAPER_ITEMS = [
  {
    "id": "2608.21360",
    "title": "OmniAssistBench: Assistant-style Interaction Benchmark for Omni-LLMs",
    "authors": [
      "Xianyun Sun",
      "Chaoyou Fu",
      "Zhengye Zhang",
      "Feiyang Duan",
      "Qingyuan Cao",
      "Yonghui Niu",
      "Sihang Yuan",
      "Ge Zhang",
      "Caifeng Shan"
    ],
    "abstract": "Recent omni-modal large language models (Omni-LLMs) show great potential as real-time video assistants, which continuously perceive environments and guide users to achieve specific goals. Unlike traditional passive video understanding, interactive assistants should actively combine visual states, user goals, and prior knowledge to provide effective help. Evaluating this is rather challenging, as the model's unpredictable response dynamically changes the user's subsequent actions, which static offline datasets cannot accommodate. To address this bottleneck, we introduce OmniAssistBench. To solve the issue of diverging interaction paths where the same user goal can be achieved through various methods, we provide models with predefined priors derived from the source video, requiring them to guide users along the exact same routes. Since real interaction videos are rare, we construct the dataset by reverse-engineering existing Internet videos. We deduce logical user goals and segment the videos into multi-turn clips to simulate continuous interactions. This rigorous pipeline required over 1000 expert person-hours to build the dataset. Results show that the proprietary Gemini-3-Pro reaches 66.4 out of the max point of 100, while the open-source Qwen3-Omni-Instruct achieves 51.2. Although current models generally understand user inputs, they frequently provide incorrect or incomplete answers. Specifically, they struggle with visual prompts (e.g., hand gestures), fail to maintain historical context during multi-turn interactions, and fail to delay response until the target event. Results indicate substantial room for improvement before models can become reliable assistants.",
    "published": "2026-08-21T17:59:52Z",
    "updated": "2026-08-21T17:59:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21360"
  },
  {
    "id": "2608.21359",
    "title": "Primal Acceleration of Newton's Method",
    "authors": [
      "Nikita Doikov"
    ],
    "abstract": "We develop a new direct accelerated Newton method for minimizing convex functions with Lipschitz continuous Hessian. The algorithm uses only primal variables and performs just one linear solve per iteration. With a simple predetermined choice of parameters, it achieves the global convergence rate of $O(1/k^3)$ in terms of the functional residual. To the best of our knowledge, this is the first second-order method for this problem class attaining this rate while relying solely on one linear system solve per iteration (without solving auxiliary nonlinear regularized subproblems, such as cubic regularization, performing nonlinear parameter searches, or using dual extragradient corrections). Our method can be implemented in a Hessian-free way, using an inexact linear system solver, while preserving the fast global rate. We further extend our construction to arbitrary geometry through Bregman divergence, and to composite optimization problems.",
    "published": "2026-08-21T17:59:37Z",
    "updated": "2026-08-21T17:59:37Z",
    "categories": [
      "math.OC",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.21359"
  },
  {
    "id": "2608.21357",
    "title": "VIALS: A Benchmark for Visual Interpretation of Artifacts in the Life Sciences",
    "authors": [
      "Elaine Lau",
      "Thanuka Udumulla",
      "Lee Izhaki-Tavor",
      "Francisco Guzmán",
      "Nicholas Magazine",
      "Jonas Mueller"
    ],
    "abstract": "In professional life sciences workflows, scientists routinely interpret visual artifacts (gel blots, microscopy images, plasmid maps, flow cytometry plots, molecular structures, ...) to inform research decisions. We introduce VIALS, a visual question-answering benchmark with 161 such interpretation tasks, spanning the types of artifacts examined throughout experimental workflows in the biotech industry (rather than polished figures from publications and textbooks). While frontier vision-language models can now fluently describe natural images, we find that they are unable to accurately interpret these scientific images, reflecting limitations in domain knowledge and domain-specific visual reasoning capabilities. In contrast, scientists with relevant domain expertise find these visual interpretation tasks straightforward. AI that cannot similarly interpret such images will have limited utility in professional life sciences workflows, where such artifacts are central to how scientists reason, communicate, and make decisions.",
    "published": "2026-08-21T17:59:26Z",
    "updated": "2026-08-21T17:59:26Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21357"
  },
  {
    "id": "2608.21356",
    "title": "AI with Authority, from Application to Silicon",
    "authors": [
      "Jason Hickey"
    ],
    "abstract": "For sixty years, machine verification has been a major cost overhead, affordable only for exceptional artifacts. Here we report that generative AI inverts this relationship: at AI speed, machine verification is not only economical but essential to productivity --- it is the incorruptible referee that lets one person safely direct autonomous machine work at scale. In five weeks, one researcher on consumer AI subscriptions directed a small fleet of AI agents from application code, through a verified compiler and executive, to a RISC-V processor taped out on a community silicon shuttle; no proof passed through human review, and no RTL was written by a human. The working discipline --- the Salt method --- rests on a proof kernel no hallucinated proof can pass: mathematical claims travel between agents as kernel-checked artifacts, and human attention is reserved for statements, designs, and rulings. Verification is stated link by link, from the Lean 4 kernel to SAT-checked equivalence at the silicon boundary. We publish the complete accounting: theorem provenance, a pre-registered token meter, floor-bounded human time, and an error ledger whose catch numbering runs to #256 --- a monotone counter over the mathematics campaign's append-only flags ledger, maintained 2026-07-07 to 2026-07-20 (one number, #79, was never assigned; later catches are recorded un-numbered) --- against zero incorrect proofs reaching the record.",
    "published": "2026-08-21T17:59:16Z",
    "updated": "2026-08-21T17:59:16Z",
    "categories": [
      "cs.SE",
      "cs.AI",
      "cs.AR",
      "cs.LO"
    ],
    "url": "https://arxiv.org/abs/2608.21356"
  },
  {
    "id": "2608.21343",
    "title": "TurboBias 2.0: Streaming Context-Biasing for Production-Efficient ASR Systems",
    "authors": [
      "Vladimir Bataev",
      "Lilit Grigoryan",
      "Andrei Andrusenko",
      "Nikolay Karpov",
      "Vitaly Lavrukhin",
      "Boris Ginsburg"
    ],
    "abstract": "Contextualization is essential for production automatic speech recognition (ASR) systems, where user-provided phrases must be recognized accurately under strict latency constraints. Although many context-biasing methods improve recognition accuracy, they often do not address the practical requirements of modern production ASR systems: streaming inference, efficient batched decoding, user-specific context lists, and low runtime overhead. We propose TurboBias 2.0, a production-oriented framework for efficient phrase boosting in Transducer-based ASR systems. The framework extends GPU-accelerated TurboBias with a case-insensitive boosting graph and per-stream batched decoding, allowing each utterance in a batch to use an independent context-biasing configuration. This enables personalized context biasing for multiple simultaneous users without sharing or mixing their context lists. The proposed framework supports both offline and streaming inference and can be used with greedy and beam-search decoding. Experiments show that TurboBias 2.0 improves contextual phrase recognition while preserving low latency and high throughput.",
    "published": "2026-08-21T17:50:00Z",
    "updated": "2026-08-21T17:50:00Z",
    "categories": [
      "eess.AS",
      "cs.AI",
      "cs.CL",
      "cs.LG",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2608.21343"
  },
  {
    "id": "2608.21332",
    "title": "Anatomy-Informed Neural Networks: Encoding Anatomic Priors in Loss and Architecture, with an SE(3) Formulation of Guidewire-Induced Aortoiliac Deformation",
    "authors": [
      "David P. Stonko"
    ],
    "abstract": "Deep-learning models of anatomy can be numerically plausible yet anatomically impossible, and they generalize poorly when data are scarce. We introduce Anatomy-Informed Neural Networks (AINN), in which soft anatomic priors enter as penalty terms in the loss (e.g., a branching penalty that treats a renal transplant artery off the iliac instead of the aorta as unexpected rather than impossible), in direct analogy to a physics-informed neural network, and hard anatomic priors (e.g., continuity of the vessel) are built into the architecture and state representation, making such invalid predictions impossible by construction wherever the prior admits architectural enforcement. We develop it on a clinical test case with limited data: how the aortoiliac tree deforms when a stiff wire is introduced endoluminally. This is important to contemporary aortic surgery and will matter to autonomous endovascular navigation. We lift the vessel centerline and the wire path from R^3 to curves of frames in the Lie group SE(3), and couple a Cosserat-rod wire to a tortuosity-modulated, anatomically anchored vessel through a unilateral lumen-contact inequality. The prediction is a constrained minimizer of the coupled elastic energy, with contact forces as its Lagrange multipliers. Supervision is a Wasserstein-2 optimal-transport loss between the predicted projection through the C-arm geometry and the observed angiogram, so a 2D angiogram can train a 3D prediction. The kinematics, loss and projection are verified against known ground truth; the mechanics solver only against its own optimality conditions, and predicted displacement is not yet mesh-converged. Here, no network is trained. Future work will transfer this in silico model to real CT scans and test whether it improves predictive accuracy and reduces the training data required.",
    "published": "2026-08-21T17:38:42Z",
    "updated": "2026-08-21T17:38:42Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.21332"
  },
  {
    "id": "2608.21319",
    "title": "Unified Branch-and-Bound Search for the Steiner Traveling Salesman Problem on Graphs of Convex Sets",
    "authors": [
      "Jingtao Tang",
      "Hang Ma"
    ],
    "abstract": "We formalize the Steiner Traveling Salesman Problem (Steiner-TSP) on Graphs of Convex Sets (GCS), which seeks a minimum-cost closed trajectory through required convex sets while allowing optional transit vertices and revisits. To explore the resulting infinite solution space, we propose a unified branch-and-bound search over rooted walk prefixes. Additive lower-bound-graph costs bound committed prefixes, while a cut-separated connected-flow relaxation lower-bounds the residual cost of visiting every remaining target and returning to the root. Under a uniform positive-cost assumption, best-first traversal terminates after finitely many expansions on every feasible instance without an initial incumbent, whereas depth-first traversal does so once a finite incumbent is available. For a user-specified factor $ε\\geq1$, a global lower bound certifies that either strategy's incumbent cost is at most $ε$ times the global optimum. We further demonstrate joint sensing-mode, visitation-order, and continuous-trajectory selection for a mobile-manipulator inspection task, including action precedences expressed in linear temporal logic over finite traces (LTL$_f$). Both traversal strategies find feasible solutions on all benchmark instances within 30s with mean certified optimality gaps of 28.1% and 29.7%, respectively, whereas two recent baselines succeed on only about half of the instances",
    "published": "2026-08-21T17:28:03Z",
    "updated": "2026-08-21T17:28:03Z",
    "categories": [
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.21319"
  },
  {
    "id": "2608.21317",
    "title": "From Regulation to Implementation: A Critical Evaluation of LLM-Assisted Regulatory Compliance in Industry",
    "authors": [
      "Adriana Watson",
      "Marco Bücheler",
      "Grant Richards"
    ],
    "abstract": "The European Union (EU) has emerged as a leading regulatory body in the development of sustainability and privacy regulations. While new regulation requirements vary, many include a documentation artifact to ensure compliance. Notably, the Ecodesign for Sustainable Products Regulation (ESPR) introduces Digital Product Passports (DPPs) for life cycle transparency, while the General Data Protection Regulation (GDPR) mandates Data Protection Impact Assessments (DPIAs) to mitigate privacy risks. Creating these compliance artifacts, however, is challenging. Industrial data, which often exists in heterogeneous formats and is scattered across company and supplier systems, is required for DPPs and can be difficult to extract into compliant DPP formatting. Furthermore, DPIA documents require interdisciplinary expertise and follow no standardized format, making development difficult for novel systems. To address the particular complexity of compliance artifact creation for both regulations, researchers have proposed the use of LLMs in the generation process; however, the impact of the aforementioned problems on the output of these systems is largely unaddressed. This work investigates the existing research gap by exploring how data extraction instructions and regulatory vagueness impact the quality and consistency of LLM-produced compliance artifacts. The resulting artifacts are evaluated by benchmarking different models against manually created ground-truth schemas. The results reveal that less strict guidelines, such as DPIA formatting, require higher context prompts to maintain consistency and completeness. Stricter guidelines, such as formatting for Digital Battery Passports (DBP), result in consistent results regardless of prompt context, but may lead to more hallucinations in the output",
    "published": "2026-08-21T17:27:13Z",
    "updated": "2026-08-21T17:27:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21317"
  },
  {
    "id": "2608.21305",
    "title": "Re$^3$Cap: Retrieval-Guided Refinement for Image Captioning Enhancement via Reinforcement Learning",
    "authors": [
      "Haonan Jia",
      "Shichao Dong",
      "Zenghui Sun",
      "Jiawen Zheng",
      "Ziqi Miao",
      "Gege Shi",
      "Qiuyu Zhao",
      "Jinsong Lan",
      "Xiaoyong Zhu",
      "Bo Zheng"
    ],
    "abstract": "Reinforcement Learning (RL) has demonstrated significant gains in image captioning, yet it is still limited in encouraging Large Vision-Language Models (LVLMs) to explore novel reasoning strategies. This limitation leads to a performance gap between RL and Supervised Fine-Tuning (SFT). In this paper, we argue that multi-modal retrieval can serve as an effective reasoning signal for caption refinement. Based on this insight, we present the Retrieval-Guided Refinement for Image Captioning (Re$^3$Cap), a retrieval-guided reasoning strategy that enhances image captioning without requiring additional annotations. Instantiated by Caption Refinement Suggester (CRS) and Caption Quality Assessor (CQA), this strategy identifies hallucinations and omissions in image captions, leading to more accurate and detailed descriptions. Extensive experiments demonstrate the superiority of our method in image captioning, even compared with Supervised Fine-Tuning. Especially, Re$^3$Cap outperforms GRPO with an average improvement of 8.64% in relation reasoning on the COCO-LN500 benchmark.",
    "published": "2026-08-21T17:07:41Z",
    "updated": "2026-08-21T17:07:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21305"
  },
  {
    "id": "2608.21300",
    "title": "When Adaptation Hurts: Connecting Representational Drift to OOD Failures in MedSAM Fine-Tuning",
    "authors": [
      "Marko Haralović",
      "Sounic Akkaraju",
      "Carlo Baretta",
      "Vasil Zapryanov",
      "Alexia Briassouli"
    ],
    "abstract": "Foundation models for medical image segmentation, like prompt-based MedSAM, generalize well across domains and modalities, often in zero or few-shot setups. However, their performance depends on the quality of prompts and the adaptation of the models to custom datasets. This work systematically examines how MedSAM generalizes across diverse medical imaging benchmarks, with six adaptation strategies: full-model and encoder-only LoRA, shallow and deep visual prompt tuning (VPT), and decoder-only and full fine-tuning. Models are trained on the International Skin Imaging Collaboration Challenge (ISIC 2018) dataset and evaluated under clean and increasingly noisy prompts on IN and Out-of-Distribution (OOD) datasets: close-OOD PH2 (dermoscopy), far-OOD BUSI (Breast Ultrasound Images Dataset) and CBIS-DDSM (Curated Breast Imaging Subset of the Digital Database for Screening Mammography). We show that adaptation improves performance on IN and close-OOD data but often reduces performance on far-OOD data. Full fine-tuning provides the best tradeoff, while encoder-only LoRA is the strongest parameter-efficient alternative, outperforming standard LoRA and VPT under far-OOD shifts. Using Centered Kernel Alignment (CKA), we show that far-OOD degradation is strongly associated with drift in decoder representations, whereas encoder similarity alone does not explain robustness. This suggests encoder-only LoRA provides stronger robustness than standard LoRA by adapting the encoder to distribution shift in visual features, while preserving the decoder pathway. We further show that random 0-100 pixel jitter on prompts produces more robust and better performing models. We thus conclude that robust MedSAM adaptation requires the combined consideration of prompt noise exposure, domain shift, and representation preservation. We release our code: https://github.com/ImSounic/medsam-vpt",
    "published": "2026-08-21T17:01:10Z",
    "updated": "2026-08-21T17:01:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21300"
  },
  {
    "id": "2608.21294",
    "title": "Event-Time Confounding Under Bursty Human Dynamics",
    "authors": [
      "Michael Iannelli",
      "Alan Ai"
    ],
    "abstract": "Studies of digital behavior often align users at moments they choose, such as opening an AI assistant, clicking a recommendation, or visiting a product page, and interpret higher activity afterward as an event effect. We show how this creates an endogenous time zero: the event occurs during an ongoing task episode, so the aligned curve can trace episode continuation rather than a response to the event. In same-user, cross-surface web logs, AI, shopping, news, coding, and reference events are all preceded by broad activity increases that peak before time zero. Our strongest test uses known-null timestamps that cause nothing. Among the 5.8% of AI responses meeting strict pre-event activity and washout criteria, these timestamps show 3.42 times the post-event search activity of a within-user placebo, compared with 4.32 times for real events. The fraction of excess reproduced by the known null falls from 0.56 at detectably active moments to -0.04 at quiet moments, where the design detects none. We formalize this episode-selection bias, prove that a single-surface event window cannot separate it from a genuine effect without additional assumptions, and show in zero-effect simulations why user fixed effects and coarse activity matching can fail: the confound is within-user and time-varying. We provide a diagnostic protocol, public-data benchmarks, and burstcheck, a lightweight audit tool. User-timed events may have real effects, but post-event volume does not identify them by default; studies should compare similar episodes with and without the event.",
    "published": "2026-08-21T16:57:12Z",
    "updated": "2026-08-21T16:57:12Z",
    "categories": [
      "cs.HC",
      "stat.ME"
    ],
    "url": "https://arxiv.org/abs/2608.21294"
  },
  {
    "id": "2608.21292",
    "title": "AUSO: Action-Level Unified Skill Optimization from Internalization to Utilization",
    "authors": [
      "Huizu Lin",
      "Chengkai Huang",
      "Tianqi Gao",
      "Tao Huang",
      "Daijiao Liu",
      "Tongxin Li",
      "Xiaoyan Sun",
      "Lina Yao"
    ],
    "abstract": "Skills play different roles as an agent's policy evolves: they should first provide learnable knowledge, then support capability formation, and finally be invoked only when they improve individual decisions. Existing methods rarely model this lifecycle. They either keep skills outside the model, fully internalize them, or select among internalization and utilization objectives through noisy task-level success rates. Such designs fragment training and assign uniform importance to actions within the same trajectory, even though skill guidance may help some decisions while distracting others. To solve these problems, we introduce AUSO (Action-level Unified Skill Optimization), which unifies skill learning and skill use through a progressive, action-aware optimization process. At the beginning of training, AUSO jointly learns from teacher guidance and environmental outcomes, enabling the policy to acquire foundational skills without losing task-oriented feedback. It subsequently emphasizes outcome-based policy optimization to consolidate autonomous problem-solving ability. As the policy matures, AUSO evaluates each sampled action under both skill-conditioned and skill-free contexts. The resulting action-level information signal is coupled with the trajectory outcome advantage, allowing beneficial skill-sensitive actions to receive stronger updates and harmful ones to be suppressed. Therefore, skills gradually transition from an external source of supervision into decision knowledge whose utilization is adapted to its action-level benefit, while reinforcement learning remains the shared backbone across all stages. Experiments on ALFWorld, WebShop, and SearchQA show that AUSO consistently improves agent performance and out-of-distribution generalization over competitive baselines.",
    "published": "2026-08-21T16:53:27Z",
    "updated": "2026-08-21T16:53:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21292"
  },
  {
    "id": "2608.21290",
    "title": "VT-MUSE: Multimodal Unified Sequential Visuotactile Representation Learning for Manipulation",
    "authors": [
      "Congsheng Xu",
      "Qiaochu Yang",
      "Fangyuan Shi",
      "Yifan Han",
      "Baijun Chen",
      "Yiming Wang",
      "Haonan Zhao",
      "Daolin Ma",
      "Xiaokang Yang",
      "Hesheng Wang"
    ],
    "abstract": "We propose VT-MUSE, a Multimodal Unified SEquential representation learning framework for visuotactilemanipulation. Existing approaches often encode visual and tactile observations independently before fusion, limiting their ability to capture fine-grained cross-modal dependencies. Moreover, most methods focus on observations at the current time step and overlook the temporal evolution of contact. VT-MUSE addresses both limitations through a two-stage representation learning framework. In Stage I, modality specific encoders are jointly adapted via cross-modal temporal alignment and masked-view consistency. In Stage II, a conditional variational latent model processes masked visual sequences together with full tactile histories. Auxiliary decoders reconstruct the masked recent visual observations and predict tactile depth changes, encouraging the latent representation to retain both global visual context and local contact dynamics. The learned representation is subsequently integrated into a lightweight Transformer policy through gated cross-attention. On the simulation benchmark, VT-MUSE outperforms the strongest baseline evaluated on all tasks by 11 percentage points and also achieves substantial improvements in real-world experiments.",
    "published": "2026-08-21T16:50:02Z",
    "updated": "2026-08-21T16:50:02Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21290"
  },
  {
    "id": "2608.21289",
    "title": "Supporting The Many Lives of Personal Data with Rebite: LLM-Powered Goal-Directed Framing in Food Journaling",
    "authors": [
      "Weijun Li",
      "Daniel A. Epstein"
    ],
    "abstract": "People's health and tracking goals frequently change, but most personal informatics systems struggle to adapt, leading people to abandon their data and start over. We propose goal-directed framing, an approach that repositions goals within personal informatics systems. Instead of fixing the meaning of data at capture time, the approach frames the collected data through the current goal and reframes it whenever the goal changes. We realize this in Rebite, a photo-based food journaling system that uses LLMs to read unstructured meal photos and produce goal-directed feedback. In a one-week deployment with 21 participants managing multiple dietary goals, we find that goal-directed framing shaped how participants engaged with their goals. Translating a goal into metrics helped them see what it meant in practice, confirming existing priorities, surfacing what they overlooked, and revealing where the metrics fell short. When goals changed, seeing past meals reframed under the new goal exposed overlaps and conflicts, prompting participants to negotiate trade-offs and refine priorities. We discuss how goal-directed framing both supports and complicates reflection as goals change, and offer design implications for personal informatics systems to support evolving goals.",
    "published": "2026-08-21T16:48:45Z",
    "updated": "2026-08-21T16:48:45Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.21289"
  },
  {
    "id": "2608.21286",
    "title": "Difficulty-Calibrated Interpolation Paths for Conditional Flow Matching",
    "authors": [
      "Airin Akter Tania",
      "Md Raihan Khan"
    ],
    "abstract": "Conditional Flow Matching trains generative models by regressing a network onto the velocity of a prescribed noise-to-data interpolation path. The interpolation schedule that shapes this path is known to affect convergence and sample quality, yet it is invariably fixed in advance, independent of both the data and the model. We show that the regression difficulty of Conditional Flow Matching varies systematically along the path, and we propose Difficulty-Calibrated Flow Matching, which derives the schedule from the model itself: a short pilot run with the linear path records the per-time loss, and the schedule is set to the quantile function of this difficulty profile, so the trajectory lingers where the velocity is hardest to learn. The method has a single hyperparameter, leaves the training objective and its gradient equivalence intact, composes with classifier-free guidance, and adds about two percent training overhead. In controlled experiments on CIFAR-10, MNIST, and Fashion-MNIST with an identical compact U-Net, the calibrated path attains the best FID on CIFAR-10 at full sampling budget and clearly outperforms all fixed schedules in the large-batch, few-update regime, precisely the setting where compute is scarcest.",
    "published": "2026-08-21T16:42:52Z",
    "updated": "2026-08-21T16:42:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21286"
  },
  {
    "id": "2608.21281",
    "title": "WildFin: An In-the-Wild Dataset for Fish Behavioral Recognition",
    "authors": [
      "Abigail G. Grassick",
      "Jerome Tze-Hou Hsu",
      "Ethan Lin",
      "Ziang Liu",
      "Max Whitton",
      "Madelyn Hair",
      "Liam Gutierrez",
      "Haozheng Yu",
      "Kristin Branson",
      "Vivek Jayaraman",
      "Michael A. Gil",
      "Andrew M. Hein",
      "Jennifer J. Sun"
    ],
    "abstract": "Recent advances in field technology have led to a massive influx of in-the-wild video data for ecological science. The primary bottleneck in leveraging this data is the high cost of expert annotation. While computer vision offers a potential solution, current models frequently fail when deployed in complex marine environments. To characterize these failures, we introduce WildFin, a novel benchmark for fish behavior recognition collected and annotated by ecologists.WildFin spans two critical real-world paradigms: stationary cameras monitoring groups of fish and dynamic divers following individual subjects. The dataset represents a massive curation effort, involving 1,350 hours of fieldwork and 600 hours of expert annotation to produce 9 hours of behavioral data with over 2 million frame-by-frame labels. We benchmark modern vision foundation models and quantify tradeoffs between static and spatiotemporal architectures, revealing the substantial gap that remains between current model capabilities and the demands of real-world underwater behavioral analysis. Project website: https://team-wildfin.github.io/.",
    "published": "2026-08-21T16:38:01Z",
    "updated": "2026-08-21T16:38:01Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21281"
  },
  {
    "id": "2608.21278",
    "title": "CLEAR: Continuous Latent Adapter Routing for Utility-Preserving LLM Safety Alignment",
    "authors": [
      "Chengxiao Wang",
      "Enyi Jiang",
      "Xiaojing Liao",
      "Sanmi Koyejo"
    ],
    "abstract": "Improving the safety of large language models (LLMs) often comes at the expense of utility, as globally applied safety tuning may affect model responses to both harmful and benign inputs. We propose \\textbf{C}ontinuous \\textbf{L}at\\textbf{E}nt \\textbf{A}dapter \\textbf{R}outing (CLEAR), a conditional safety adaptation framework that uses a lightweight hidden-state gate to continuously control the activation strength of a safety low-rank adapter. CLEAR aims to reduce harmful completions while avoiding unnecessary changes to the frozen backbone that could degrade performance on benign prompts. Experiments on widely used safety and utility benchmarks show that CLEAR improves robustness on HarmBench while reducing the utility degradation observed with globally applied safety tuning such as SFT or standard low-rank adaptation (LoRA). On Llama-3-8B-Instruct, CLEAR reduces HarmBench ASR from 32.3\\% to 0.5\\%, while retaining most of the base model's utility and achieving up to 7.1 percentage points higher GSM8K accuracy than globally applied SFT or LoRA. These results suggest that CLEAR is a promising mechanism for improving the safety--utility trade-off in LLM alignment.",
    "published": "2026-08-21T16:36:10Z",
    "updated": "2026-08-21T16:36:10Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21278"
  },
  {
    "id": "2608.21276",
    "title": "The Coastline as a Structural Constraint: Harnessing Scene Geometry for Autonomous Surface Vessel Localization",
    "authors": [
      "Derek R. Benham",
      "Joshua G. Mangelson"
    ],
    "abstract": "Coastal environments contain rich, largely unexploited geometric structure capable of providing globally referenced localization cues. In this work, we present two complementary localization frameworks that exploit shoreline and water-surface geometry for GPS-denied autonomous surface vessel localization. The first framework leverages LiDAR observations of the water surface to estimate roll, pitch, and heave (vertical motion), while recovering global position and heading through direct registration of shoreline observations against a satellite-derived coastline map. The second framework relies solely on passive imagery to detect the shoreline and horizon through semantic segmentation. Using the proposed coastal scene geometry, shoreline distance is inferred from monocular imagery. Shoreline observations are accumulated into short-duration local submaps, registered against the same satellite-derived coastline map, and fused within a hierarchical factor graph. Evaluated across three real-world coastal datasets, the LiDAR pipeline consistently improves trajectory accuracy over standard baselines, while the monocular architecture maintains bounded long-term drift. In addition, we establish that modern zero-shot foundation models can reliably extract shoreline observations across diverse coastal environments. Together, these results demonstrate that coastal geometry provides a powerful and dependable source of globally referenced information for GPS-denied maritime localization.",
    "published": "2026-08-21T16:34:48Z",
    "updated": "2026-08-21T16:34:48Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21276"
  },
  {
    "id": "2608.21254",
    "title": "On the Transferability of Agricultural Weed Detection Under Cross-Field Distribution Shift",
    "authors": [
      "Nikhilesh Prabhakar",
      "Pranuthi Tenali",
      "Wilfredo Abudeye Fernandez",
      "Shekhar Borah",
      "Athresh Karanam",
      "Erik Blasch",
      "Prabha Sundaravadivel",
      "Sriraam Natarajan"
    ],
    "abstract": "Accurate agricultural weed detection in real-world field conditions is essential for precision agriculture, enabling targeted intervention and reducing yield loss. Recent work has reported strong detection performance from UAV-based imagery across a range of crops, yet existing approaches evaluate within a single crop and field, leaving practitioners with little evidence that a model trained on one crop will generalize to a new field or crop type. In this work, we characterize where cross-dataset weed-localization performance degrades and which modeling choices recover it, reducing the need to relabel every new deployment field. We introduce a newly collected and annotated UAV image dataset for agricultural weed detection in cotton fields and use it alongside an existing soybean dataset collected under a similar protocol. Using these datasets, we evaluate the performance of several strategies for transferring a detector trained on one crop to another, comparing unsupervised domain adaptive object detection (DAOD) against pretraining on a domain-adjacent source dataset followed by few-shot fine-tuning on the target dataset. Our analysis spans target-domain label budgets from zero to the full target dataset, characterizing the trade-off between adaptation strategy and annotation effort. We find that few-shot fine-tuning with as few as 25 labeled target examples outperforms unsupervised DAOD in our cross-crop comparison, suggesting that source domain selection combined with modest target supervision is more productive than algorithmic sophistication in adaptation.",
    "published": "2026-08-21T16:06:09Z",
    "updated": "2026-08-21T16:06:09Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.21254"
  },
  {
    "id": "2608.21252",
    "title": "EnSI-RAG: Entity-Structure-Indexed Retrieval-Augmented Generation for Long-Document Question Answering",
    "authors": [
      "Xuanyu Meng",
      "Jiashuo Sun",
      "Jash Rajesh Parekh",
      "Jiawei Han"
    ],
    "abstract": "Question answering (QA) over long, connected documents remains challenging because relevant evidence may span multiple entities and their relationships. Existing retrieval-augmented generation (RAG) methods typically index documents as raw chunks and retrieve them through embedding similarity. Their performance degrades when chunk boundaries separate entities from supporting evidence or when a question requires multi-hop reasoning across the corpus. We propose EnSI-RAG (Entity-Structure-Indexed Retrieval-Augmented Generation), a framework that constructs a query-independent, entity-centered index. Each record (e, t, k, v) represents an entity e, its type t, a semantic category k in {property, relation, aspect}, and a value v, while retaining links to the original source passages. At query time, these records serve as retrieval handles, and an LLM synthesizes the retrieved passages into the final answer. This design separates evidence localization from answer synthesis while preserving traceable source evidence. Across Loong and Oolong, EnSI-RAG achieves an average accuracy of 78.24. Relative to the published baseline scores used as references, this is 6.62 points higher, suggesting its effectiveness across these settings. The code is available at https://github.com/RamonMeng/EnSI-RAG.",
    "published": "2026-08-21T16:05:00Z",
    "updated": "2026-08-21T16:05:00Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.DB",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2608.21252"
  },
  {
    "id": "2608.21247",
    "title": "Just Noticeable Difference Modeling for Token Compression in Vision-Language-Action Models",
    "authors": [
      "Zhuoyuan Li",
      "Rui Zhao",
      "Jin Wang",
      "Hanwei Zhu",
      "Cong Zhang",
      "Giuseppe Valenzise",
      "Weisi Lin",
      "Kin-Man Lam"
    ],
    "abstract": "Token compression has become a key technique for reducing the inference cost of large foundation models, with approaches such as token pruning and KV-cache reuse widely adopted in vision-language models and recently explored for embodied agents. In embodied agents, tokens not only support perception and semantic understanding but also directly affect latency-sensitive closed-loop robot action prediction. Existing schemes typically guide compression using redundancy or importance cues, such as visual similarity, attention scores, and saliency. However, these cues only indirectly measure the key factor for safe compression: how much a token can change before causing an unacceptable deviation in downstream actions. This receiver-dependent tolerance is closely related to the principle of just noticeable difference (JND). Classical JND characterizes signal tolerance in the human visual system, while machine-oriented JND extends this concept to downstream machine responses. Building on this progression, we introduce Action-JND, which extends JND modeling to embodied perception by defining noticeability through the language-conditioned action response of a vision-language-action (VLA) policy in closed-loop control. A token change is considered admissible only when the induced action deviation remains within a tolerated margin. To realize this concept, we develop a lightweight token-wise JND estimator in deep visual-feature space to predict the maximum tolerable perturbation while preserving policy responses. The resulting action-tolerance score serves as a plug-and-play criterion for VLA compression paradigms, including stale-KV reuse and token pruning, prioritizing action-tolerant tokens for compression. Experiments on the LIBERO benchmark with OpenVLA and OpenVLA-OFT demonstrate that Action-JND consistently improves compression reliability, especially under aggressive compression ratios.",
    "published": "2026-08-21T15:59:37Z",
    "updated": "2026-08-21T15:59:37Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2608.21247"
  },
  {
    "id": "2608.21244",
    "title": "A VLM Answer Is Not an Anomaly Score: Rank Compression in Training-Free Video Anomaly Detection",
    "authors": [
      "Inpyo Song",
      "Jangwon Lee"
    ],
    "abstract": "Vision-language models enable training-free video anomaly detection by answering questions about video segments. VAD benchmarks, however, require a scalar anomaly score for each segment and evaluate the resulting ranking using the AUROC or AP. A VLM-based detector should therefore define an answer interface: the answer scale specifies the admissible answers, and the readout rule maps the model's output distribution to a score. Because this interface can change the evaluated ranking, it is part of the detector rather than a formatting detail. The generated readout uses only the most likely answer, whereas the probability readout uses the full distribution over admissible answers. Across four 7-8B VLMs, the probability readout outperforms the generated readout for every tested combination of answer scale, benchmark, and metric, with average gains ranging from 5 to 13 points across the four benchmark-metric pairs. The gap arises because the generated readout keeps only one answer value per segment, so segment with different answer distributions can receive the same score and lose their relative order. We call this loss of relative order generated-answer rank compression. Even when the answer scale allows 91 answers, the generated readout produces only 4-18 distinct scores, whereas the probability readout retains substantially finer score resolution. The advantage persists under every decoding strategy, prompt wording, and joint scoring-explanation prompt we test. The answer interface is therefore a consequential component of VLM-based VAD and should be explicitly specified and evaluated.",
    "published": "2026-08-21T15:56:00Z",
    "updated": "2026-08-21T15:56:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21244"
  },
  {
    "id": "2608.21243",
    "title": "Adapting Knowledge Graphs for Behavior Denoising in Sequential Recommendation",
    "authors": [
      "Zichun Jin",
      "Zihan Zhou",
      "Yinan Liu",
      "Bin Wang",
      "Xiaochun Yang"
    ],
    "abstract": "Sequential recommendation predicts the next item from a user's interaction history, but not every interaction is equally informative. Real logs combine persistent preferences with temporary needs, exploration, and incidental behavior, so some interactions can distort history representations or provide unreliable supervision. Existing denoising methods judge such interactions mainly from co-occurrence, order, or model predictions, without explicit evidence from relations between items. Knowledge graphs (KGs) offer this evidence, but item popularity, graph degree, uneven coverage, and widely shared entities can inflate connectivity and bias reliability estimates. Here we present AdaptedKG, which derives calibrated KG evidence for each training example without adding graph representations to the recommendation model. It first compares the observed context with structurally matched alternatives to identify relational paths that are unusually prominent and uses them to build a local KG view. It then compares each interaction with structurally matched reference items to calibrate its support within that view. The resulting retention coefficients gate historical representations and reweight target losses. All sample-specific scores are computed offline using training interactions and a fixed KG, so the backbone remains unchanged and no KG access is required at inference. Experiments show gains with a standard sequential recommender and multiple behavior-denoising sequential recommenders.",
    "published": "2026-08-21T15:54:39Z",
    "updated": "2026-08-21T15:54:39Z",
    "categories": [
      "cs.IR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21243"
  },
  {
    "id": "2608.21233",
    "title": "Fine-Grain GPU Parallelization of the Generalized Partition Crossover for Large-Scale Traveling Salesman Problems",
    "authors": [
      "Swetha Varadarajan",
      "Darrell Whitley"
    ],
    "abstract": "The Traveling Salesman Problem (TSP) is one of the most extensively studied NP-hard optimization problems. Genetic Algorithm (GA)-based solvers, such as the Edge Assembly Crossover (EAX), achieve state-of-the-art performance on many benchmark instances. However, the scalability of these approaches in massively parallel architectures remains limited because crossover operations involve irregular memory access patterns, graph traversals, and sequential dependencies. Existing GPU-based TSP solvers primarily exploit population-level parallelism and are limited to relatively small problem sizes. This work presents a fine-grain GPU implementation of the partition phase of the Generalized Partition Crossover (GPX) operator for large-scale TSP instances. The proposed approach reformulates GPX partitioning as a graph-parallel problem using coalesced memory layouts, ghost-node transformations, and connected-component analysis. The im- plementation parallelizes the union of parent tours, the splitting of degree- four vertices, the deletion of common edges, and the identification of recombining components using CUDA. Experimental results on instances ranging from 10,000 to 2 million cities demonstrate substantial acceleration over a naive sequential CPU imple- mentation. The proposed GPU partitioning achieves speedups between 48x and 625x while significantly reducing memory overhead. The re- sults demonstrate that operator-level parallelism can substantially im- prove the scalability of GA-based TSP solvers on modern many-core architectures.",
    "published": "2026-08-21T15:42:05Z",
    "updated": "2026-08-21T15:42:05Z",
    "categories": [
      "cs.AI",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2608.21233"
  },
  {
    "id": "2608.21230",
    "title": "Utility Under Attack: Agent Memory Poisoning and the Limits of Content Screening and Provenance Ranking",
    "authors": [
      "Arulnidhi Karunanidhi"
    ],
    "abstract": "Persistent memory makes false information durable: once a false statement is stored, it can be retrieved into future sessions that match it. We measure the cost of this failure mode using plainly worded false assertions generated in a single pass, with no instruction, trigger, or retriever optimization. Poisoning 1.2% of a LongMemEval corpus reduces accuracy from 0.850 to 0.300. A four-stage write-time screening pipeline that reaches 0.832 recall on indirect prompt injection while flagging 1.5% of trigger-word-laden benign text rejects 0 of 360 poisoned memories. We argue this exposes a boundary of content-only screening: distinguishing a false assertion from a true one generally requires external grounding beyond the text itself. We then evaluate provenance-weighted retrieval. The shipped weight is statistically indistinguishable from no defense (p=0.80), while a stronger weight recovers utility only by excluding untrusted content. In a mixed-provenance corpus where untrusted content is mostly benign, accuracy rises from 0.3167 to 0.7000; when the answer-bearing evidence itself arrives untrusted, evidence recall falls to zero and accuracy to 0.0417. Under the measured similarity regime, the additive provenance term has no usable setting: a weight strong enough to resist query-shaped poison is also strong enough to suppress legitimate untrusted evidence. We therefore argue for bounded occupancy constraints at retrieval rather than additive provenance penalties, and release the harnesses, corpora, and aggregate run reports.",
    "published": "2026-08-21T15:37:35Z",
    "updated": "2026-08-21T15:37:35Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21230"
  },
  {
    "id": "2608.21229",
    "title": "Anchoring Instruction Outside Mask: Exact Reference Caching for Efficient In-Context Diffusion Transformers",
    "authors": [
      "Yangshuai Liu",
      "Zheming Li",
      "Jiaao Li",
      "Kang He",
      "Ziliang Lai",
      "Zhitai Liu",
      "Chengru Song"
    ],
    "abstract": "Omnimodal generation is central to a wide range of content creation and editing applications. In-context conditioning is essential to this paradigm. It allows diffusion transformers to process text instructions and visual references in a shared attention sequence. However, each reference image introduces thousands of tokens. Computation therefore grows rapidly with the number of references. Existing methods reduce computation through structured sparse attention, which limits interactions between reference and target tokens. This structure also makes the reference K and V independent of the denoising target, allowing them to be computed once and reused across steps. However, it blocks visual references from attending to the text instruction. This substantially degrades instruction following and reference fidelity in multi-reference editing. To resolve this conflict, we jointly redesign the token sequence and attention mask. Our beyond-mask design uses static text anchors to connect the instruction to the reference branch. It preserves exact K and V reuse without adding parameters. However, this direct architectural conversion degrades generation quality. We recover the lost performance through teacher-forced velocity distillation, followed by a short on-policy stage in which the teacher supervises student-visited states. To our knowledge, this is the first use of on-policy distillation for architectural recovery in diffusion models. Across three image-editing benchmarks, our method matches full-attention generation quality. With five reference images, it accelerates the complete 40-step denoising process by 3.92x, while static text anchors introduce negligible runtime overhead; the speedup reaches 5.47x at ten references in our scaling study.",
    "published": "2026-08-21T15:37:23Z",
    "updated": "2026-08-21T15:37:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2608.21229"
  },
  {
    "id": "2608.21224",
    "title": "Ontology-supported AI Model and Dataset Management",
    "authors": [
      "Jan Novacek",
      "Ali Ahari",
      "Tobias Müller",
      "Sebastian Reiter",
      "Alexander Viehl",
      "Oliver Bringmann"
    ],
    "abstract": "Recently, there has been a great deal of research into improving AI methods and their application. The main focus is on tracking progress, enabling transparent comparisons, and fostering a more profound understanding of AI. In that process, different organizations generate and use plenty of assets that need to be tracked, traced and managed. Moreover, it is important to discover assets relevant for the task at hand. This paper presents research aiming to contribute to answering the question of what is required to exchange and manage AI models and related assets effectively without semantic gaps in an industrial context. We introduce a platform for AI model exchange, which facilitates the usage, exchange, and analysis of AI models and datasets. The platform incorporates an ontology that can foster a more profound common understanding of what is required in these tasks and help tackle the issues mentioned above. Finally, we elucidate the utility of the platform through the illustration of a use case in the context of real-time critical systems.",
    "published": "2026-08-21T15:32:57Z",
    "updated": "2026-08-21T15:32:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2608.21224"
  },
  {
    "id": "2608.21220",
    "title": "Who Trusts AI with Their Emotions? Trust Formation and Sociodemographic Variation in LLM Use for Emotional Support",
    "authors": [
      "Natalia Amat-Lefort",
      "Mert Yazan",
      "Amanda Cercas Curry",
      "Flor Miriam Plaza-del-Arco"
    ],
    "abstract": "Trust in AI for emotional support is not universal; it is shaped by who users are, where they come from, and what they value. Yet research in this area lacks validated psychometric instruments for assessing user perceptions in affective AI contexts and large-scale evidence on how trust formation varies across user segments. To address these gaps, we develop and validate a seven-construct psychometric scale, test a Structural Equation Model (SEM) linking system attributes to Trust and Perceived Benefits as mediators of Actual System Use, and conduct a Multi-Group Analysis (MGA) across five sociodemographic dimensions (gender, age, education, socioeconomic status, cross-national region), drawing on 1,343 active users from seven countries. We find that users experience empathy and anthropomorphism as a unified \"Humanlikeness\" construct, and that Privacy, Personalization, and Humanlikeness drive Trust while Perceived Bias degrades it. Notably, adoption logic diverges across groups: Privacy shapes women's trust more than men's, Anglosphere (UK, USA) users respond more positively to Humanlikeness than Europeans, and educated and higher-income users require Trust to engage, whereas older adults and lower socioeconomic groups bypass it entirely, relying on perceived practical benefits (e.g., 24/7 availability, non-judgmental support). Our findings extend technology acceptance theory and inform the equitable design of emotional support AI.",
    "published": "2026-08-21T15:30:28Z",
    "updated": "2026-08-21T15:30:28Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2608.21220"
  },
  {
    "id": "2608.21218",
    "title": "Enhancing LLMs in Predictive Political QA with Semi-Structured Data",
    "authors": [
      "Yinan Liu",
      "Zihan Zhou",
      "Zichun Jin",
      "Xinyu Wang",
      "Bin Wang",
      "Xiaochun Yang"
    ],
    "abstract": "Predictive political question answering (QA), such as predicting how a political actor will vote, goes beyond factual lookup. External political resources offer rich historical evidence, but rarely contain the answer itself. Existing LLM augmentation methods, including actor-profile-based simulation and knowledge graph evidence injection, improve political reasoning but largely treat external resources as knowledge-based evidence, leaving prediction-relevant signals under-modeled. We identify two complementary signals for predictive political QA: actor stances that capture issue-specific preferences, and high-order structure signals that capture indirect dependencies among political actors. We propose PSL, a dual-view framework that converts semi-structured political records into inference-oriented evidence for LLMs. PSL extracts stance signals from question-relevant actor records in a semantic view, and learns structure-aware actor representations from an actor interaction graph in a vector view. Across three real-world datasets and multiple LLMs, PSL consistently outperforms baselines, with ablations confirming the complementary gains of stance and structure signals.",
    "published": "2026-08-21T15:27:28Z",
    "updated": "2026-08-21T15:27:28Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.IR"
    ],
    "url": "https://arxiv.org/abs/2608.21218"
  },
  {
    "id": "2608.21209",
    "title": "Personalized Privacy Control in LLMs via Attention Head Intervention",
    "authors": [
      "Junseok Kim",
      "Nakyeong Yang",
      "Kyomin Jung"
    ],
    "abstract": "The rise of agentic AI enables LLMs to access diverse user data, raising critical privacy concerns. Prior work on contextual privacy studies whether LLMs regulate information disclosure according to context-dependent norms. However, acceptable disclosure boundaries may vary across users even within the same context. To address this limitation, we introduce \\textit{personalized privacy}, which incorporates user-specific disclosure preferences into privacy control. We further present P3Bench~(\\textbf{P}ersonalized \\textbf{P}rivacy \\textbf{P}reservation \\textbf{Bench}mark), a novel benchmark extending contextual privacy policies with personalized disclosure policies. Experiments show that prompt-based policies fail to reliably enforce personalized privacy policies, with Qwen2.5-7B and Gemma3-4B showing average policy ignorance ratios of 51.25\\% and 74.28\\%, respectively. Finally, to address this problem, we propose \\textsc{Repair}, a robust inference-time attention head intervention method that adjusts disclosure behavior toward policy-consistent responses. Our method significantly improves adherence to user-specific privacy preferences by reducing cases where the model fails to follow the given policy.",
    "published": "2026-08-21T15:22:20Z",
    "updated": "2026-08-21T15:22:20Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2608.21209"
  }
];
