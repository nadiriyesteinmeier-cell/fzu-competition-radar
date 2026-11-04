window.PAPER_DATA_UPDATED_AT = "2026-11-04";
window.PAPER_ITEMS = [
  {
    "id": "2611.05377",
    "title": "DreamX: Video Diffusion Model is a Universal Latent Action Learner",
    "authors": [
      "Jisoo Kim",
      "Chaehyun Kim",
      "Junsu Kim",
      "Jiho Park",
      "Seongchan Kim",
      "Eunbeen Hong",
      "Soowon Son",
      "Fu-En Yang",
      "Seungryong Kim"
    ],
    "abstract": "Learning a universal action representation from video requires modeling dynamics that are consistent across different executions of the same action yet invariant to changes in embodiment and appearance. Existing latent action models infer actions from visual transitions, but their representations often entangle the underlying action with irrelevant visual variations, limiting transfer across embodiments. We introduce DreamX, which repurposes a pretrained video diffusion model as a universal latent action learner. Our approach extracts compact latent actions from the video model's rich spatiotemporal features, compressing each latent video frame by $\\boldsymbol{300\\times}$ ($\\boldsymbol{1{,}200 \\rightarrow 4}$ tokens). In addition, by leveraging the video model's generative prior, these latent actions capture action-relevant dynamics disentangled from visual appearance. The resulting latent space serves as a shared action interface across embodiments (human and robot), environments, and action parameterizations. On LARY-Bench, DreamX achieves state-of-the-art performance among latent action models. Moreover, actions encoded in one setting remain effective in another: the latent space supports any-to-any video transfer and zero-shot action transfer across diverse embodiments and environments. Furthermore, this shared interface also enables policy learning in a compact latent action space, reducing the computational cost of video-diffusion-based policies.",
    "published": "2026-11-03T18:59:56Z",
    "updated": "2026-11-03T18:59:56Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.05377"
  },
  {
    "id": "2611.05376",
    "title": "From Autonomous Agents to Cognitive Symbionts: Toward AI-Augmented Human Intelligence",
    "authors": [
      "Hao Fei"
    ],
    "abstract": "For a decade, progress in artificial intelligence has been measured by how much a machine can do on its own. Large foundation models now write code and run multistep tasks, and personal agents act on a person's behalf. Yet people still forget what they once knew, miss what they are not looking at, fail to find the right words, and face hard choices without the benefit of their own history, because the machine that could help stands outside the situation. As AI moves into the physical world, attention has settled on one kind of intelligent individual, the embodied robot; we argue that the era of Physical AI holds a second kind of equal importance, the person augmented by AI. Alongside artificial general intelligence, which asks how intelligent a machine can be, stands AI-augmented human intelligence (AHI), which asks how much intelligence a machine can enable in a particular person. Realizing it calls for a new kind of system, a cognitive symbiont: a lifelong, embedded, real-time, private, low-friction, and proactive companion that senses what the person senses through external devices, keeps their context across years, models their situation and their mind, takes part in their thinking at the right moment, carries out everyday tasks with their context, and keeps learning the person as both change. We give the paradigm a conceptual core, the cognitive gap between what a person could bring to a situation and what they can hold in working memory, and organize its design space as a symbiosis loop of sensing, keeping, understanding, living alongside, acting for and thinking with the person, and growing, enclosed by a personal runtime and by trust. Because a symbiont changes what a person can do in front of others, it also raises risks of a new kind, from covert assistance in examinations to pressure on everyone to adopt it, and we treat their governance as part of the paradigm.",
    "published": "2026-11-03T18:59:52Z",
    "updated": "2026-11-03T18:59:52Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05376"
  },
  {
    "id": "2611.05373",
    "title": "Aligning Language Models with General Preferences: An Empirical Study of Direct Nash Optimization",
    "authors": [
      "Austin Tsai",
      "Saurav Nanda",
      "Ganapathy Parthasarathy",
      "Bhuvnesh Kumar",
      "Parivesh Choudhary"
    ],
    "abstract": "Direct Nash Optimization (DNO) aligns a language model to a general preference function by approximating the Nash equilibrium of a two-player preference game. Its practical variant, DNO-Prct, iterates on-policy sampling, LLM-based rating of the samples together with a teacher's gold response, large-margin preference-pair selection and a DPO-style contrastive update. We re-implement DNO-Prct independently and study it on two open-weight instruct models, Llama 3.1 8B Instruct and Mistral 7B Instruct v0.1, with GPT-4o or a larger open-weight model of the same family as the annotator. On AlpacaEval 2.0 with GPT-4o as judge, three iterations raise the length-controlled (LC) win rate against GPT-4o from 31.7% to 45.3% for Llama and from 6.8% to 18.4% for Mistral, and the tuned 8B model scores above Llama 3.1 70B Instruct on every reported win rate. With same-family open-weight annotators, the runs retain 62% (Llama) and 82% (Mistral) of the LC gain achieved with GPT-4o as annotator, so the rating step does not require a proprietary model. In a separate ablation configuration, variants that remove the gold responses, remove the data look-back, or accept only teacher-preferred pairs score 6 to 10 LC points below the full procedure, whereas varying the number of on-policy samples per prompt (1 to 7) moves the LC win rate by at most 2.1 points, and a margin sweep (1 to 5) run in its own pipeline by at most 2.4 points. We also report the cost of the pipeline and where the practical algorithm departs from the theory it approximates. All results are single runs, and GPT-4o is both the teacher and the evaluation judge; we discuss what this implies for the reported gains.",
    "published": "2026-11-03T18:59:15Z",
    "updated": "2026-11-03T18:59:15Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.05373"
  },
  {
    "id": "2611.05361",
    "title": "Visibility-Aware Reference Generation for Benchmarking Visual 3D Reconstruction in Vegetation-Rich Environments",
    "authors": [
      "Zhipeng Zhong",
      "Matthew Coombes",
      "Cunjia Liu"
    ],
    "abstract": "Reliable evaluation of visual 3D reconstruction and depth estimation in vegetation-rich outdoor environments is limited by the scarcity of geometric ground-truth data and the cost of complete scanner surveys. We present a LiDARbased reference-generation pipeline for evaluating the zero-shot performance of feed-forward visual-geometry models alongside conventional structure-from-motion (SfM) methods. The pipeline reuses camera images, LiDAR scans, and reference poses from existing multi-sensor localization datasets to generate per-view depth maps and visible reference point clouds. To address visibility errors in accumulated LiDAR scans, we introduce the LargeDepth-Gap Visibility Score (LDGVS) for point-wise visibility filtering and automatic scale selection in Hidden Point Removal(HPR). Experiments on TartanAirV2 and TartanGround show that, compared with Poisson surface reconstruction, which is an approach suited to completed scan surveys, the combined HPR and LDGVS filtering retains approximately three times the point density at comparable absolute relative error. We also apply the pipeline to the BotanicGarden dataset to systematically compare depth estimation and 3D reconstruction methods. Feedforward methods produce dense depth predictions efficiently, but their 3D reconstructions can contain duplicated structures. Conventional SfM generally produces more coherent geometry, but its reconstructions remain sparse and more prone to failure in challenging vegetated scenes. The benchmark toolkit and datasets will be released.",
    "published": "2026-11-03T18:54:52Z",
    "updated": "2026-11-03T18:54:52Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2611.05361"
  },
  {
    "id": "2611.05359",
    "title": "GSCV++: Lightweight 3D Gaussian Splatting Sequence Compression via Standard Video Codecs",
    "authors": [
      "Qi Yang",
      "Yingzhan Xu",
      "Kai Zhang",
      "Li Zhang"
    ],
    "abstract": "This paper presents GSCV++, a lightweight pipeline for 3D {G}aussian {S}platting (GS) sequences {C}ompression with standard {V}ideo codecs. To meet the requirements of low-complexity and hardware compatibility from the industry, GSCV++ jointly improves preprocessing, 3D-to-2D mapping, and practical video compression configuration of GS compression. First, for preprocessing, energy-adaptive inter-frame spherical harmonic (SH) alternative current (AC) dimensionality reduction (EA-SHDR) is proposed to produces a compact and stable temporal SH AC feature space. It can reduce the data volume of following mapping and practical compression, as well as less complexity while eliminating redundant information. Second, for 3D-to-2D mapping, prior-based Inter-MiniPLAS (P-MiniPLAS) is designed to generate smooth 2D feature maps through prior-based weighting factor inference and small scale remapping. Compared with vanilla Parallel Linear Assignment Sorting (PLAS) and Morton scan, P-MiniPLAS ensures the generated 2D maps are more suitable for the video codec while maintaining a low level of computational complexity. Third, for practical compression, content-aware generalized compression (CA-GC) is developed to use a non-uniform bit-depth split for coordinate map generation, and a coding unit size selection is introduced for efficient compression complexity control, which fully exploits the performance of video codecs without involving normative changes. Experiments demonstrate that GSCV++ reports over 20\\% in intra- and 60\\% in inter-prediction rate-distortion gains compared with state-of-the-art (SOTA) methods. GSCV++ also achieves faster 2D map generation, encoding, and decoding than other SOTA methods using the same type of video codecs. Ablation studies verify the effectiveness and robustness of the proposed modules and provide insights for subsequent research.",
    "published": "2026-11-03T18:54:29Z",
    "updated": "2026-11-03T18:54:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05359"
  },
  {
    "id": "2611.05358",
    "title": "Suppressing Misaligned Behaviors in Language Models, Durably",
    "authors": [
      "Luxi He",
      "Pengcheng Jiang",
      "Jifan Zhang",
      "Jiawei Han",
      "Danqi Chen"
    ],
    "abstract": "Undesired model behaviors can emerge or re-emerge at any stage of training. Once observed, how effectively can we suppress them? To study this question, we first construct two model organisms--language models deliberately trained to exhibit a specific misalignment--that differ in what triggers the behavior. The narrow-trigger organism misbehaves only when the prompt contains a specific cue: it cheats on multiple-choice questions by following a planted hint that points to a wrong answer, and behaves normally otherwise. The broad-trigger organism has no such cue: after fine-tuning on insecure code, it gives harmful responses across a wide range of open-ended prompts. We then formalize post-hoc behavioral suppression and evaluate methods along three criteria: immediate suppression of the target behavior, durability under further training, and preservation of general capability. We compare standard methods--SFT, GRPO, and gradient-ascent unlearning--along these dimensions. Building on prior work on alignment shallowness, we hypothesize that more durable suppression requires the ability to recover from a wider range of misalignment states. We introduce Prefix-Expanded Adversarial Reinforcement Learning (PEARL), a GRPO variant that augments rollouts with continuations from intermediate states sampled along cached organism trajectories. Across both organism settings and two model families (Qwen3-4B, GPT-OSS-20B), PEARL achieves strong immediate suppression while preserving task accuracy, and remains durable under further fine-tuning on either the organism's data or unrelated data. It obtains the greatest benefit when the undesirable behavior is broad and cannot be addressed through targeted SFT. Together, our framework and method offer a step toward more durable post-hoc removal of undesired behaviors.",
    "published": "2026-11-03T18:54:08Z",
    "updated": "2026-11-03T18:54:08Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.05358"
  },
  {
    "id": "2611.05348",
    "title": "OpenBrain: An Auditable Generated-Label Release for Whole-Brain MRI Parcellation",
    "authors": [
      "Qizhen Lan",
      "Yu-Chun Hsu",
      "Yuxiang Wei",
      "Lijing Zhu",
      "Zenan Sun",
      "Liang He",
      "Lishan Yu",
      "Xiaoqian Jiang"
    ],
    "abstract": "Automatic tools can now generate whole-brain MRI parcellations at cohort scale, but generated-label releases often provide little evidence about which cases are reliable enough to reuse. We introduce OpenBrain, a confidence-aware release of 35,838 provenance-verified OpenNeuro T1w cases from 607 source datasets. OpenBrain is organized as an auditable case-record release rather than a directory of standalone segmentation files: each record links a primary parcellation, two committee parcellations, source/license provenance, raw QC-7 measurements, percentile risks, a combined risk score R, and a confidence tier. QC-7 is a reference-free reliability panel over label geometry, image-label consistency, and committee disagreement, so users can filter, weight, audit, or re-threshold generated labels without rerunning inference. We evaluate this released evidence under a frozen protocol. Across external cohorts, lower QC-7 risk corresponds to higher generated-label quality; in fixed-budget training, lower-risk selections improve paired macro Dice over random selection by +3.2 to +3.7 percentage points. OpenBrain also exposes raw axes, committee outputs, provenance, and datasheet documentation, so confidence claims remain inspectable after download. It does not turn generated labels into manual annotations or clinical-grade segmentations. Its contribution is a large open generated-parcellation substrate, a reusable case-level risk-evidence layer, and an external validation protocol for release-time QC. Dataset: https://huggingface.co/datasets/lanqz7766/OpenBrain. Code: https://github.com/lanqz7766/openbrain.",
    "published": "2026-11-03T18:47:53Z",
    "updated": "2026-11-03T18:47:53Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.05348"
  },
  {
    "id": "2611.05347",
    "title": "Whose Guardrail? User Identity Shapes the Effectiveness of Model Disclaimers in Mitigating LLM Political Persuasion",
    "authors": [
      "Jillian Fisher",
      "Thomas Richardson",
      "Daniel W. Fisher",
      "Jennifer Pan",
      "Yulia Tsvetkov",
      "Katharina Reinecke"
    ],
    "abstract": "Politically biased AI can shift users' opinions, yet it remains unclear whether model disclaimers protect against such persuasion. We report a preregistered experiment (N=1,586) examining how disclaimer design and user characteristics shape susceptibility to politically biased AI. We varied whether disclaimers identified political bias versus potential inaccuracies and whether they included an explanation. Participants completed two decision-making tasks with an LLM biased against their political views, with outcomes assessed immediately and one week later. Disclaimers identifying political bias and including an explanation reduced persuasion, but effects varied across contexts and did not persist. Individual differences were more consistent predictors: Republicans were more persuaded and reported higher trust than Democrats across tasks. Similarly, participants who used AI more frequently were also more persuaded, whereas those with greater self-reported AI knowledge were less persuaded. These findings suggest that generic disclaimers are not enough: effective safeguards must account for user heterogeneity and context.",
    "published": "2026-11-03T18:46:42Z",
    "updated": "2026-11-03T18:46:42Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.05347"
  },
  {
    "id": "2611.05345",
    "title": "Adversarial Speculative Reasoning Improves Long Horizon Agents",
    "authors": [
      "Hongyin Luo",
      "Wei Fang",
      "Lijie Yang",
      "Owen Stepan",
      "Daniel Suit",
      "Jeff Krapf",
      "Dana Wensberg",
      "Jack O'Brien"
    ],
    "abstract": "Speculative decoding has been treated purely as a systems optimization that speeds up large language model decoding without changing the model behavior. Under this view, the growing effort to train better draft models has been focused solely on acceptance rate. We argue that this view does not hold true for long-horizon agent reasoning. Measuring frontier open-weight models on complex agentic tasks with different speculative decoding approaches, we found that numerical noise grows within verification windows, and the draft acceptance results of the thinking process can change the output distribution of the model after 30 steps, thus noticeably influencing the reasoning accuracy of long-horizon agents in random directions. In this work, we improve the reasoning capability of target models by controlling such noise. While we cannot change the overall token distribution verified by the target model, we can encode critical reasoning with highest precision by training the draft model to be rejected. We identify these points in agent traces and train the draft model to favor adversarial preference. At inference the trained draft and the target part ways precisely at these decision points, verification restarts, so that critical thinking tokens are sampled from the target model and encoded under its least noisy conditions. This approach makes critical reasoning better indexed and more durable over a long horizon. On complex agentic coding benchmarks, our approach raises end-to-end success rate with no change to the target model or its output distribution. Our results recast the speculative decoding mechanism from a pure accelerator into an active allocator for context precision that improves the accuracy of long-horizon agents by training 0.06% to 0.28% of hosted parameters.",
    "published": "2026-11-03T18:45:23Z",
    "updated": "2026-11-03T18:45:23Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05345"
  },
  {
    "id": "2611.05341",
    "title": "Weight-space programming for auditing clinical decision networks",
    "authors": [
      "Humza Nusrat",
      "Omar Nusrat"
    ],
    "abstract": "Machine learning models in radiotherapy are commissioned by testing them on cases with known answers, which may not reveal a shortcut that the test cases share with the training data. Frontier language models have recently been reported to read and write the raw weights of small neural networks, an ability called weight-space programming. The purpose of this study was to determine whether such a model, given only a clinical protocol and a network's weights, can audit and repair the network. Networks with 433 to 4,801 parameters were trained to screen head-and-neck planning requests against four rules. Flaws were planted through the training data: confounds that hid each rule, a 3 Gy shift in the cord threshold, and a hidden trigger. Claude Opus 5.5 audited each network blind, without tools, data or code execution, and every claim and repair was tested on about 420,000 requests. The language model named the broken rule in 16 of 18 flawed networks (95% CI 67% to 97%), including all 15 with a confound or a threshold shift. It repaired each of the 16 by changing a median of 3 parameters. Fine-tuning on protocol-labeled requests also repaired every network, but changed nearly every parameter. Each confound and shift it found was visible in single units, and a simple statistic chosen for each flaw type found the same flaws. It cleared 2 of 5 healthy networks without being forced and found 1 of 3 triggers. Testing against the protocol detected every flaw, and black-box testing found the confounds and the shift faster. The results indicate that, in small networks, weight-space programming can locate and repair flaws that silence an input or shift a threshold, but cannot yet certify that a network is correct.",
    "published": "2026-11-03T18:41:15Z",
    "updated": "2026-11-03T18:41:15Z",
    "categories": [
      "physics.med-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.05341"
  },
  {
    "id": "2611.05340",
    "title": "MedPhysBench: A Benchmark for Evaluating Language Models on Medical Physics Calculations and Error Detection",
    "authors": [
      "Omar Nusrat"
    ],
    "abstract": "Medical physicists turn a prescription into a delivered dose and check one another's calculations, because one error in a beam calibration or a monitor-unit (MU) calculation can affect every patient treated with it. MedPhysBench has ten seeded generators of calculation items in radiation therapy, diagnostic imaging, nuclear medicine and radiation protection, up to clinical tasks such as a TG-51 calibration worksheet. Reference answers come from code implementing the governing protocols, and a grader converts units and applies tolerance bands. From the same inputs, separate checking items test error detection, showing a colleague's worksheet or only the colleague's result, half correct and half with one planted error. On a held-out test split of 1,200 items (half for two models), 12 models scored 33.3 to 100.0% on calculation. Of the nine answers graded incorrect for the four best (99.3-100.0%), five contained model errors and four followed NCRP Report 151 on points our items misstate or leave open. Below them, most models did worst on level-3 clinical tasks, and Claude Sonnet 5.5 omitted the inverse-square correction in 19 of 20 isocentric MU items. Five models detected at least 96.7% of mostly large planted errors with at most 4% false alarms; for four of the other seven, checking only the result raised false alarms significantly. In an exploratory targeted test with 20 public cases of an omitted inverse-square correction, the three best models tested caught it in every worksheet, and three weaker models accepted 16 to 18 of 20 planted worksheets, one of them while applying the correction in most of its own calculations. Claude Opus 5.5 accepted 6 of 20 wrong results, although it applied the correction in all 20 of its own. We report the effect of two problems in our shielding items, found after the runs, and release the code, per-item outcomes and targeted-test responses.",
    "published": "2026-11-03T18:40:35Z",
    "updated": "2026-11-03T18:40:35Z",
    "categories": [
      "physics.med-ph",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.05340"
  },
  {
    "id": "2611.05334",
    "title": "A simple adaptive accelerated optimistic dual averaging method for unconstrained convex optimization in $p$-norm geometry",
    "authors": [
      "Bowen Li",
      "Danqing Zhou",
      "Chuan He"
    ],
    "abstract": "Efficient preconditioning plays an important role in large-scale first-order optimization. In this paper, we propose an adaptive accelerated optimistic dual averaging ($\\text{A}^2$ODA) method for unconstrained convex optimization that adopts low-cost preconditioning based on $p$-norm geometry for $p\\in[2,\\infty]$. The method is line-search-free and employs a new stepsize selection technique based on an aggregated affine lower model. Its update structure is simple and unified across $p\\in[2,\\infty]$, with the case $p>2$ requiring no more elaborate updates than the Euclidean case $p=2$. Under a generalized local smoothness condition, we derive a convergence bound that separates the effects of constant and gap-dependent curvature, with the latter potentially yielding faster-decaying terms. In the special case of local smoothness, this bound recovers a nearly optimal convergence rate.",
    "published": "2026-11-03T18:35:20Z",
    "updated": "2026-11-03T18:35:20Z",
    "categories": [
      "math.OC",
      "cs.AI",
      "cs.LG",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.05334"
  },
  {
    "id": "2611.04102",
    "title": "Is This 3D Asset Usable? Beyond the Beauty Render for Asset Curation",
    "authors": [
      "Rushikesh Zawar",
      "Vladimir Kim"
    ],
    "abstract": "Large 3D repositories make it easy to collect assets, but difficult to determine whether they can be reused reliably across scene assembly, editing, rendering, game production, and training-data construction. An asset can look plausible in RGB while hiding disconnected geometry, problematic UV organization, or materials that fail to resolve correctly after import. We introduce Diagnostic Rendered Evidence (DRE): aligned beauty, wireframe, and UV-seam-plus-wireframe views scored by pass-specific frozen ViT classifiers and combined through late fusion. On 1,234 human labeled TexVerse assets, nested grouped evaluation achieves 86.36% balanced accuracy and 88.32% bad-asset recall. On a separate, balanced 764 external reference test, DRE achieved 88.9% balanced reference-label accuracy. Our method requires only an imported asset and renderer-derived evidence, without repository identity, creator, popularity, text, or source metadata at inference. Our results support cross-corpus portability and show that purpose built diagnostic views expose defects that just the beauty views can miss. Webpage: https://rbz-99.github.io/is-this-3d-asset-usable/",
    "published": "2026-11-03T00:24:02Z",
    "updated": "2026-11-03T00:24:02Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04102"
  },
  {
    "id": "2611.04101",
    "title": "Structured Clinical Memory as Context for Probabilistic Decision Models: A Synthetic Evaluation with Jev",
    "authors": [
      "Jash Sayani",
      "Gaurang Karwande",
      "Achinth Bharadwaj"
    ],
    "abstract": "Longitudinal clinical context is often distributed across noisy, repetitive forms and narrative records. We study whether a compact structured memory can improve a probabilistic decision model's answers when the underlying patient vignette is already available. We created 30 fully synthetic cases spanning twelve clinical domains, paired each with synthetically generated structured memory, and evaluated 120 typed questions with Jev. The raw-vignette arm achieved 90.0% accuracy (95% normal-approximation confidence interval: 84.6%-95.4%); adding memory achieved 93.3% (88.9%-97.8%). Five questions changed from incorrect to correct and one changed in the opposite direction (exact McNemar $p=0.219$). Choice log loss decreased from 0.258 to 0.175 and binary Brier score from 0.054 to 0.022. Memory added 310 input tokens per call on average, while observed mean latency was unchanged at approximately 0.5 seconds. These results are directionally positive rather than clinically validating: the cases are synthetic, the labels are single-author judgments, and the memory is an oracle upper bound rather than extracted production output. The pilot supports evaluating structured clinical memory as a reusable state interface for decision models.",
    "published": "2026-11-03T00:22:39Z",
    "updated": "2026-11-03T00:22:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04101"
  },
  {
    "id": "2611.04100",
    "title": "The Agent Board: Kanban for Machines; Durable Coordination for Agents That Outlive the Conversation",
    "authors": [
      "Tyler Hunt",
      "Donald Nguyen",
      "Gurbinder Gill"
    ],
    "abstract": "Harnesses for large language models have converged on a single-threaded shape: one agent, one history, one machine, one sitting. That shape fails work that spans many agents, outlives any one model call, or waits on systems that are not agents. We describe the Agent Board, the coordination substrate in the Corvic harness. The board is a durable, shared table of semi-semantic tasks: a few exact fields the system routes on, and a free-form body that only language models read. Agents post tasks, watch tasks, and block on them, ending their turn and holding no process until a matching post wakes them. A system agent, the Board Keeper, acts as the interrupt handler for the board: it carries events from non-agent parts of the harness onto the board, matches them to waiting tasks by reading their prose, and allocates new agents for tasks that name a kind of agent rather than an instance. Loadable coordination policy kernels give statuses and roles meaning for a given pattern of work, without the board enforcing them. The design mirrors the kanban board a human team puts on a wall. We argue it is what persistent agent products such as Meta Muse, OpenAI dots and SpaceXAI Grok Bot need once an agent must wait, hand off work, or work with agents from another vendor. We view the board as an operating-system scheduler for agents and state where the analogy breaks. We separate what the mechanism guarantees from what it leaves to convention, and report a trace from a live board and three small simulated pilots. In the pilots, the wait cost of the board was flat in wait length while naive polling grew about 165-fold, but a plain external watcher was cheaper than the board. The Board Keeper matched prose waiters with no false wakes but missed 3.6 percent of real wakes.",
    "published": "2026-11-03T00:21:54Z",
    "updated": "2026-11-03T00:21:54Z",
    "categories": [
      "cs.AI",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2611.04100"
  },
  {
    "id": "2611.04092",
    "title": "CHROMA-MILL: Joint Low-Light Enhancement and White Balance under Colored Illumination",
    "authors": [
      "Pol Riubrogent-Comas",
      "David Serrano-Lozano",
      "Maria Pilligua",
      "Michael S. Brown",
      "Ramon Baldrich",
      "Javier Vazquez-Corral"
    ],
    "abstract": "Capturing an image in a low-light environment produces a weak, noisy sensor signal. Low-light image enhancement (LLIE) aims to restore it. Auto white balance (AWB) is also required for every image, and the same noisy signal degrades its ability to infer the scene illuminant. LLIE is typically performed first, followed by AWB, but this strategy remains largely unexamined because existing low-light datasets span a narrow range of illuminants and lack illuminant ground truth for evaluating AWB. We address this with CHROMA-MILL, a RAW dataset of 50 scenes captured with a DSLR and smartphone under four calibrated illuminants at eleven intensity levels. Because light is additive, we blend these captures in the linear RAW domain to synthesize physically valid illuminant mixtures with exact chromaticity ground truth. Benchmarking on this data, we find joint correction is best, and introduce CTI-Retinexformer, which supervises an illumination map, a chromaticity prediction, and an illumination-invariant scene embedding, outperforming the best cascade by 0.7 dB PSNR$_L$ and 1.1 $ΔE_{00}$.",
    "published": "2026-11-03T00:01:57Z",
    "updated": "2026-11-03T00:01:57Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04092"
  },
  {
    "id": "2611.04090",
    "title": "Swapping the Judge Changes the Ranking: A Preregistered Study of Cross-Provider Replication in LLM-Judged System Comparisons",
    "authors": [
      "Sangdo Han",
      "Moonsoo Kim"
    ],
    "abstract": "Practitioners who compare systems with an LLM judge and have no human labels often check a conclusion by repeating it with a judge from another provider. We test how far that check can be trusted. In a preregistered study (with a disclosed post-registration reduction of the judge set), five judge models from three providers re-judged 4,000 Chatbot Arena battles (nine systems, 33 system pairs) that carry human votes, each in both response orders. Agreement with the human vote was low at the verdict level (median Cohen's kappa = 0.22), and system rankings did not survive a change of judge: Kendall's tau with the human ranking ranged from 0.17 to 0.89 (median 0.67), so the preregistered hypothesis that rankings remain stable was not supported. Conclusions replicated by two low-cost judges from different providers matched the human conclusion more often than single-judge conclusions (+0.10 precision), but the gain came from filtering out one poorly aligned judge, and replication involving that judge left a conclusion for only 35% of comparisons. Judges that agreed with humans reached a stable conclusion with no more verdicts than human votes required; the others failed to converge on 26-70% of system pairs at the sample sizes tested (up to 100 verdicts per pair). Disagreements with the human vote co-occurred across judges far more often than independence predicts, although a single human vote per battle cannot separate shared judge bias from voter noise.",
    "published": "2026-11-03T00:01:35Z",
    "updated": "2026-11-03T00:01:35Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2611.04090"
  },
  {
    "id": "2611.04087",
    "title": "ScienceVision: Can AI Observe and Reason Like a Scientist?",
    "authors": [
      "Tianyi Ma",
      "Jing Gu",
      "Haozhe Zhao",
      "Liang Chen",
      "Yunfan Zhang",
      "Haijun Su",
      "Jialong Wu",
      "Le Xue",
      "Arnav Das",
      "Dustin Tran",
      "Yinfei Yang",
      "Andrew Dai",
      "Kuan Li"
    ],
    "abstract": "Scientific discovery builds on accurate observations interpreted through domain knowledge and reasoning. For scientific 3D data, this requires understanding structures and spatial relationships, from protein contacts to anatomical organization. Existing multimodal benchmarks largely evaluate text and 2D images, while scientific 3D evaluations vary in representations and protocols across disciplines, limiting cross-disciplinary comparison. To assess these foundational capabilities, we introduce ScienceVision, a cross-domain benchmark for scientific 3D understanding and reasoning through expert-level visual question answering (VQA). We construct 250 questions, with 50 each from Biology, Chemistry, Medical Imaging, Mechanical CAD, and Architecture, through a pipeline combining synthetic question generation with domain-expert review and annotation. Each task pairs a native 3D artifact with a scientific question, a specified response format, and a task-specific reference answer, requiring domain knowledge to be applied to geometric or topological evidence. We evaluate 12 models on the same questions in three settings: visual question answering with native 3D artifacts accessed through an agent harness's file and code-execution tools; the same workflow augmented with expert-inspired viewer inspection and measurement tools exposed through the Model Context Protocol (MCP); and visual question answering from prescribed rendered 2D images using an agent harness. All settings use the same task-specific deterministic final-answer scoring. The inspection environment supports view changes, target isolation, and slice inspection. In this main comparison, the best mean answer score is 0.53 out of 1. Mean scores in the native-artifact workflow without additional MCP tools exceed those in the rendered-image workflow for every model, by 17.2 percentage points on average.",
    "published": "2026-11-02T23:55:01Z",
    "updated": "2026-11-02T23:55:01Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04087"
  },
  {
    "id": "2611.04084",
    "title": "From Visual Matching to Textual Conditioning: Cross-Domain Few-Shot Segmentation via Reference Inversion",
    "authors": [
      "Jiahao Nie",
      "Yun Xing",
      "Wenbin An",
      "Qixin Zhang",
      "Yap-Peng Tan",
      "Alex C. Kot",
      "Shijian Lu"
    ],
    "abstract": "Cross-Domain Few-Shot Segmentation (CD-FSS) aims to segment objects from unseen domains using only a few annotated references. Recent Segment Anything Model (SAM)-based methods have advanced CD-FSS, yet their reference-target visual matching is highly sensitive to target appearance variations. SAM3 introduces text-conditioned segmentation, enabling natural-language descriptions to guide segmentation across target images, but directly using the category name as the condition still yields unstable performance under severe domain shifts. We propose Reference Inversion for SAM3 (RI-SAM3) that leverages SAM3's large-scale vision-language pre-training to learn suitable textual tokens for each target category. RI-SAM3 comprises three core designs: (i) Bi-level Reference Inversion that learns complementary tokens before and after the frozen text encoder: the former remain anchored in SAM3's text space while the latter represent the category more flexibly; (ii) Layer-adaptive Textual Conditioning combines these tokens differently as object queries evolve across decoder layers; and (iii) Presence-aware Confidence Supervision that jointly supervises query confidence and target presence for reliable predictions. With SAM3 frozen, RI-SAM3 optimizes around 12K parameters only per category and it efficiently segments each target in a single forward pass with reusable textual conditioning without per-sample reference-target visual matching. Extensive experiments over multiple widely adopted benchmarks show that RI-SAM3 achieves superior performance consistently in CD-FSS tasks, together with strong robustness, efficiency, and generalization.",
    "published": "2026-11-02T23:49:24Z",
    "updated": "2026-11-02T23:49:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.04084"
  },
  {
    "id": "2611.04079",
    "title": "AlgoPilot: Cross-Paradigm Reasoning in Language Models via Strategy Selection and Guidance",
    "authors": [
      "Yilun Hao",
      "Ruixiao Yang",
      "Hudson Hilal",
      "Yongchao Chen",
      "Kaizhi Qian",
      "Yada Zhu",
      "Yang Zhang",
      "Chuchu Fan"
    ],
    "abstract": "Real-world problems span diverse domains, including program synthesis, symbolic reasoning, planning, and optimization, and often require fundamentally different solution paradigms. A central challenge for LLM-based reasoning is twofold: identifying an appropriate problem-solving approach and formulating it correctly. In this paper, we propose AlgoPilot, a cross-paradigm reasoning framework that enables adaptive selection of the solving approaches and structured problem formulation prior to execution. The AlgoPilot framework contains three components: 1) a SteerLM, trained via supervised fine-tuning (SFT) and reinforcement learning (RL), that adaptively selects the solving strategy (paradigm and modes) based on input problems, 2) the corresponding expert GuideLM, trained via SFT, that generates structured formulation guidance tailored to the selected strategy, and 3) an ExecutionLM that generates solutions conditioned on both the selected strategy and its formulation. Unlike prompting-based methods that rely on fixed reasoning templates, our approach learns to adaptively choose and structure problem-solving strategies based on the input. We build AlgoPilot on Qwen3-8B and evaluate across 5 problem categories and 13 benchmarks with 66 unique domains, comparing against both the latest similarly scaled small models and large LLMs. AlgoPilot significantly improves average accuracy for the same model from 38.4% to 72.9%, outperforming the best large LLM prompting baseline GLM-5 by 11.7%. Ablation studies confirm the effectiveness of each component. Notably, we show that the learned steering and formulation modules can transfer across execution models, suggesting their potential to improve other LLMs. Project page: https://sites.google.com/view/algopilot.",
    "published": "2026-11-02T23:41:45Z",
    "updated": "2026-11-02T23:41:45Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.04079"
  },
  {
    "id": "2611.04061",
    "title": "On the Primacy Bias in RLVR Training",
    "authors": [
      "Phuc Minh Nguyen",
      "Ngoc-Hieu Nguyen",
      "Parshin Shojaee",
      "Chinh Duc La",
      "Duy Minh Ho Nguyen",
      "Rui Zhang",
      "Khoa D. Doan",
      "Ting Hua",
      "Nitesh V. Chawl"
    ],
    "abstract": "Reinforcement Learning with Verifiable Reward (RLVR) has emerged as a promising approach for enhancing the reasoning capabilities of large language models. However, it still remains unclear whether RLVR can extend reasoning capabilities beyond what is already encoded in the base model. In this paper, we study this question through the lens of primacy bias: the tendency of models to over-rely on already-learned representations, disproportionately improving performance on problems they already handle well while underexploring harder ones that require departing from those representations. Through our controlled experiments and large-scale analysis, we show that RLVR training on mixed data tends to further sharpen performance on easier problems while yielding only marginal gains on harder ones. We find that although hard problems lead to modest gains overall, they are actually the ones that help most in expanding the model's reasoning capabilities and pushing the representations. However, prolonged training on these hard problems may also hurt and lead to forgetting on easy problems. These findings help to better understand some of the prior conflicting observations about RLVR, specifically, why on (OOD) domains where the base model performs poorly, improvements on hard problems can expand reasoning; while on well-trained domains, forgetting can reduce performance and mask genuine gains obtained from hard problems.",
    "published": "2026-11-02T23:04:48Z",
    "updated": "2026-11-02T23:04:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04061"
  },
  {
    "id": "2611.04059",
    "title": "Query-based Submodular Data Selection for Efficient Instruction Tuning",
    "authors": [
      "Zhenghao Zhao",
      "Yasutomo Kawanishi",
      "Huihuo Zheng",
      "Michael E. Papka",
      "Yan Yan"
    ],
    "abstract": "As large language models are fine-tuned for increasingly specialized tasks, their performance depends more on which training examples are selected than on how many. Given a large heterogeneous training pool and a small target set specifying the desired capability, targeted data selection aims to find a compact subset that maximizes downstream performance. Existing methods score each candidate independently against the target and select the top-ranked examples, yet this point-wise strategy ignores inter-example interactions: at tight budgets the selected subset is dominated by near-redundant points that waste capacity on overlapping information. We propose Query-based Submodular functions with Gradient-guided Synthesis (QSGS), which formulates targeted selection as a submodular graph cut over a gradient similarity graph. A modular relevance term pulls selected examples toward the target task, while a pairwise dispersion penalty suppresses intra-subset redundancy. The resulting objective balances target relevance and intra-subset redundancy using the same formulation across different selection budgets. Empirically, the benefit of diversity-aware selection becomes increasingly pronounced as the data budget decreases. To further close coverage gaps that no selection from existing data can bridge, we introduce a gradient-guided synthesis step that identifies under-covered target directions via residual subspace analysis and generates synthetic examples to fill them. Experiments on MMLU, BBH, and TydiQA across Llama-2, Llama-3, and Mistral, show that QSGS at a 0.5% budget matches or exceeds full-data performance on Mistral-7B, outperforms the strongest baseline across all benchmarks, and yields increasing gains as the budget shrinks.",
    "published": "2026-11-02T23:03:43Z",
    "updated": "2026-11-02T23:03:43Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04059"
  },
  {
    "id": "2611.04057",
    "title": "Look Before You Launch: Learned Throughput Prediction for Hardware Selection in a Production Training Fleet",
    "authors": [
      "Hossein Askari",
      "Wei Sun",
      "Chenguang Zhu",
      "Bin Zan",
      "Sreen Tallam",
      "Keyu Man"
    ],
    "abstract": "In mixed-vendor accelerator fleets, many training jobs can run on several hardware types, and the best choice depends on each job's throughput on each type. Routing a job needs a throughput estimate for every candidate type before the job runs. We present LEAP, a machine learning performance prediction service that predicts each training job's throughput on every candidate hardware type at submission time and ranks the candidates by predicted throughput per unit cost. It routes tens of thousands of training job attempts a day across hundreds of different model types and more than 20 hardware types in a production fleet. LEAP predicts throughput from submission-time training configuration, including each job's prior throughput. LEAP reaches an accuracy of 77% over 30 nightly retrains, higher than the lookup table it replaced and at least as high as every alternative model we tested, including fine-tuned language models. Over six months, the share of eligible training GPU-hours that received a ranking by LEAP grew from 58% to 95%, and we estimate that it saves about 3% of training computational cost. In this paper, we identify the drivers that actually move accuracy and those that do not. We offer these as lessons for teams building performance predictors at fleet scale.",
    "published": "2026-11-02T23:02:14Z",
    "updated": "2026-11-02T23:02:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.04057"
  },
  {
    "id": "2611.04055",
    "title": "HybridSpec: Throughput-Aware Speculative Decoding for Hybrid GDN-MoE Models",
    "authors": [
      "Haiyu Wang",
      "Sai Qian Zhang",
      "Zechun Liu",
      "Steven Li"
    ],
    "abstract": "In speculative decoding, parallel drafters such as DFlash make drafting cheap, so target verification dominates each round. A central choice is the verification length, the number of tokens that the target processes in each round. Verifying more draft tokens can accept more of them, but work after the first rejection is wasted. For hybrid target models that combine Gated DeltaNet (GDN) and mixture-of-experts (MoE) layers, verification time grows much faster with this length than for dense models. In a single-request profile of Qwen3.6-35B-A3B with DFlash, it grew by 71% from length 4 to 16, almost entirely in GDN and MoE layers, compared with 4%-6% for a dense Qwen3-4B target. Each GDN layer must update a recurrent state at every token and recover it at the end of the accepted prefix. The MoE cost depends on the experts that the tokens activate, which are known only once verification runs. We present HybridSpec, which selects the verification length on the GPU from draft-side acceptance estimates and measured target latency. Verification then runs this length plus one extra token up to the first MoE router, before any expert runs. There, a lightweight routing correction uses the observed expert assignments to decide whether to keep that token. The rest of verification runs only on the selected tokens. Block-parallel GDN kernels avoid storing a state after every token and reconstruct the accepted state of every GDN layer in one launch. In isolated benchmarks at verification lengths 4 to 16 with every draft token accepted, these kernels, including accepted-state reconstruction, are $1.54\\times$-$4.04\\times$ faster than the default kernels. With three GDN-MoE target models in single-request greedy decoding, HybridSpec is $1.75\\times$-$1.88\\times$ faster than autoregressive decoding and $1.30\\times$-$1.33\\times$ faster than DFlash.",
    "published": "2026-11-02T22:58:00Z",
    "updated": "2026-11-02T22:58:00Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.04055"
  },
  {
    "id": "2611.02651",
    "title": "Probe-Guided Gradient Balancing for Multimodal Learning",
    "authors": [
      "Vu Vo",
      "Haytham M. Fayek",
      "Thuy Nguyen"
    ],
    "abstract": "Jointly trained multimodal networks frequently underutilize weaker modalities, as faster-learning modalities dominate the shared fusion objective and suppress gradients reaching slower ones. Most existing approaches throttle dominant modalities, whereas directly boosting weaker modalities often fails because monitoring signals derived from the joint loss remain dominated by stronger modalities. We propose Probe-Guided Gradient Boosting (PGGB), a gradient modulation approach that boosts weaker modalities while preserving the strength of dominant ones. PGGB attaches lightweight linear classifiers to stop-gradient features from each modality to estimate representation quality independently. The gap between these scores, termed the utilization gap, provides an imbalance signal used to adaptively scale weaker-modality gradients through bounded and smoothed modulation. PGGB is composable with throttling methods, as it leaves the loss function and fusion architecture unchanged. Experiments across eight benchmarks spanning four domains and 2-4 modalities demonstrate that PGGB outperforms state-of-the-art methods on highly imbalanced multimodal datasets while remaining competitive under low or negligible imbalance. We further establish bounded scaling, self-attenuation, and a descent bound for standard SGD under smoothness and bounded-variance assumptions. Code is available at https://github.com/VuVoCodes/PGGB.",
    "published": "2026-11-02T07:13:14Z",
    "updated": "2026-11-02T07:13:14Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02651"
  },
  {
    "id": "2611.02649",
    "title": "Computer Vision Applications for Art History: Reflections and paradigms for future research",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "One of the contributing factors to the continuing debate among art historians over the use of computational methods in art history research is that they do not consider the core of today's art history research questions. The lack of close collaboration between the two involved research communities makes the definition of contemporary art-historical methods as well-defined computer vision problems extremely difficult. For that purpose, it is devised as a methodology to study articles in art history journals from a computer science perspective. The objective is to identify which image features art historians utilise within their research and describe them in immediate and meaningful terms to the computer vision research community. Finally, some paradigms that could serve as a new starting point for exploring how computer vision applications for art history can address the core of today's art history research are given.",
    "published": "2026-11-02T07:10:58Z",
    "updated": "2026-11-02T07:10:58Z",
    "categories": [
      "cs.CV",
      "cs.CY",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2611.02649"
  },
  {
    "id": "2611.02648",
    "title": "ReinSeg: Retrieval-Guided Bounded Multimodal Refinement for 3-D Road Anomaly Segmentation",
    "authors": [
      "Haifa Zhang",
      "Yijing Wang",
      "Zhiqiang Zuo"
    ],
    "abstract": "3-D road anomaly segmentation is essential for risk-aware perception in autonomous driving. Its central challenge is to rank sparsely observed hazards ahead of abundant normal road structures while preserving point-wise metric localization. LiDAR provides accurate 3-D point support, whereas surround-view imagery offers complementary semantic context for separating unexpected hazards from challenging normal structures. We propose ReinSeg, a retrieval-guided bounded multimodal refinement framework for point-wise road anomaly segmentation. Occupied LiDAR bird's-eye-view cells retrieve scene-specific context from a shared memory of eight surround-view images without supplying calibration variables to the retrieval module. A relative-norm-bounded residual returns this context to the LiDAR point features, so the frozen LIDO anomaly-scoring interface is preserved, and the refinement is optimized with in-distribution semantic labels only. On the Spotting the Unexpected (STU) benchmark, ReinSeg improves validation average precision from 27.54\\% to 35.67\\% and reduces the false-positive rate at 95\\% anomaly recall from 34.85\\% to 10.61\\%, shrinking the high-recall screening set from 67.54 to 20.55 million points. Relative to REL, AP is 24.99 percentage points higher and FPR95 is 0.99 points lower. Matched interfaces and component isolation show that retrieved scene imagery and the relative-norm bound are both essential, and ReinSeg stays above LiDAR-only performance under missing, corrupted, or misaligned camera inputs while running at 21.8 frames per second. These results establish bounded retrieval of scene-specific visual evidence as an effective route to reliable 3-D road-hazard perception.",
    "published": "2026-11-02T07:10:16Z",
    "updated": "2026-11-02T07:10:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.02648"
  },
  {
    "id": "2611.02643",
    "title": "SearchInject: Retrieval Exposure Control for Indirect Prompt Injection in Language-Model Search",
    "authors": [
      "Kainan Zhou",
      "Gangzhen Qian",
      "Janet Sung",
      "Zhi Jing",
      "Rong Bao",
      "Qianru Lao"
    ],
    "abstract": "An indirect prompt injection can affect a search-augmented large language model only after its carrier page reaches model context. SearchInject controls this admission decision with a joint score combining retrieval relevance, search-abuse cues, instruction likelihood, and two relevance interactions. A quarantine threshold is selected under an empirical 0.5% clean-candidate false-quarantine constraint on a calibration split. Evaluation uses 300 held-out SciFact queries and held-out payload categories within four construction families already represented during development. Across 1,200 query-family outcomes per retriever, top-10 target exposure falls from 0.9408 to 0.1583 for BM25, from 0.9158 to 0.1508 for a normalized hybrid, and from 0.8450 to 0.1375 for latent semantic analysis. These are relative reductions of 83.2-83.7%; the largest absolute change in clean normalized discounted cumulative gain at rank 10 is 0.0018. The frozen threshold yields clean test false-quarantine rates of 0.59-0.65%, above the empirical calibration constraint. A query-level analytical reanalysis accounts for the repeated construction outcomes under an independent-query assumption. A separate 104-case generation follow-up records context removal but no confirmed undefended hijacks under a post hoc endpoint, so it cannot estimate a reduction in attack success. The evidence supports retrieval exposure control within the evaluated construction families; the benefit of the interaction terms at matched clean cost remains unresolved.",
    "published": "2026-11-02T07:04:42Z",
    "updated": "2026-11-02T07:04:42Z",
    "categories": [
      "cs.AI",
      "cs.CY",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.02643"
  },
  {
    "id": "2611.02640",
    "title": "InterFuse: Interaction-Guided Adaptive Fusion of Heterogeneous Models for Payment Risk Ranking",
    "authors": [
      "Haoyu Jiang",
      "Weiyu Han",
      "Ze Zhao",
      "Jie Sheng",
      "Ruobing Zuo",
      "Xiao Tan",
      "Shuai Chen",
      "Tianyi Zhang"
    ],
    "abstract": "Payment platforms use view-specific models trained on transaction attributes, behavioral histories, and relational structures to rank transactions under limited review budgets. However, existing fusion methods often focus on prediction scores or interactions among model representations, with less attention to how these interactions should guide aggregation using each model's original prediction and input coverage. To address this limitation, we propose InterFuse, a fusion framework that uses a shared fusion state from cross-model interaction to guide transaction-adaptive aggregation. InterFuse encodes each model's representation, prediction score, and input coverage as a model-specific token, using learned states for unavailable outputs. Availability-aware attention updates these tokens and produces a shared fusion state. This state then guides aggregation over available models using their updated representations, original predictions, and input coverage. We evaluate InterFuse on an industrial payment replay and three public financial benchmarks using the same upstream models across fusion methods. InterFuse achieves the highest top-ranked recall and AUC on all four datasets, improving Recall@1% by 1.11-8.09 percentage points over the strongest baselines. Ablations show the benefits of cross-model interaction and adaptive aggregation, while industrial analyses find larger interaction gains when model predictions disagree. Additional analyses examine robustness to missing outputs and the trade-off between ranking gains and fusion latency.",
    "published": "2026-11-02T07:02:48Z",
    "updated": "2026-11-02T07:02:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02640"
  },
  {
    "id": "2611.02639",
    "title": "Where Is a Prediction Model Miscalibrated, and for Whom? Local Audits in Outcome-Learned Pockets",
    "authors": [
      "Bernardo Modenesi",
      "Taoyi Chen",
      "Sima Najafzadehkhoei",
      "Lucia Wang",
      "Ameya Diwan",
      "Beatrice Knudsen"
    ],
    "abstract": "Overall and group-level averages, and ranking metrics such as the AUC, can hide sets of observations for which a prediction model systematically over- or under-predicts. We present an audit that asks where a model is miscalibrated (in which sets of similar observations it over- or under-predicts on average) and for whom (whether its average prediction error differs between demographic groups, such as by race or sex, within the same set). It groups observations into pockets using random-forest similarity, which weighs each feature by its importance for predicting the outcome, with a ridge-regression grouping alongside. Pockets are learned on one sample and tested on another, with simultaneous confidence intervals that allow for correlation within units such as hospitals; the audit needs only features, outcomes and fixed predictions. In 17 simulation scenarios with an error planted for one group, the combined audit located it better than the strongest alternative grouping in 15, with false-alarm rates near or below 5%; with a local error planted for everyone, it won in 12 of 15 scenarios at the smaller error size and lost when the error was unrelated to the outcome. In public synthetic data from the care-management algorithm studied by Obermeyer et al., it found no detectable overall error but under-prediction of illness in the sickest pockets and over-prediction elsewhere, and distinguished Black patients' concentration where the score under-predicted for everyone from a Black-White gap within pockets. For APACHE IVa, an exploratory analysis located its previously reported over-prediction of ICU mortality in a mostly ventilated pocket and a low-risk pocket, with none detected in a moderate-risk one. Two chest X-ray classifiers showed offsetting local errors behind no detectable overall error. Code: https://github.com/modenesi/pocket-audit",
    "published": "2026-11-02T07:01:31Z",
    "updated": "2026-11-02T07:01:31Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "stat.ME",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2611.02639"
  },
  {
    "id": "2611.02637",
    "title": "Variable names provide priors: semantic grounding enables data-efficient numerical prediction by large language models",
    "authors": [
      "Xin-Rui Ma",
      "Shi-Zhi Chen",
      "Hai-Yan Jiang",
      "De-Cheng Feng",
      "Michael Beer"
    ],
    "abstract": "Large language models (LLMs) have achieved strong performance across diverse tasks, from question answering to code generation. Recent studies have found that LLMs can perform numerical prediction on tabular datasets via in-context learning. However, it remains unclear under what conditions and how LLMs use variable names and in-context examples for numerical prediction. Here we show that semantic grounding, the match between variable names and the values they describe, allows five LLMs without task-specific training to match or outperform seven supervised machine learning (ML) models across 20 datasets from nine scientific domains, particularly when examples are scarce. Reasoning traces indicate that variable names allow LLMs to draw on domain-specific knowledge acquired during pretraining. Using controlled tasks based on physical formulas, we further show that LLMs integrate domain-specific knowledge with in-context examples in a way consistent with Bayesian updating. Specifically, when the relationship between the inputs and the target cannot be inferred from the examples alone, LLMs rely on domain-specific knowledge as the prior. Conversely, as contradicting examples accumulate, LLM predictions shift progressively towards these examples, which act as the likelihood. Our work reveals how LLMs use domain-specific knowledge in numerical prediction and positions them as data-efficient predictors for data-scarce scientific domains.",
    "published": "2026-11-02T07:00:18Z",
    "updated": "2026-11-02T07:00:18Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.02637"
  },
  {
    "id": "2611.02636",
    "title": "SYNC: A Training-Free Inference Controller for Dynamic Layer Selection in Multi-Persona Alignment",
    "authors": [
      "Yosef Nuraga Wicaksana",
      "Muhammad Reza Qorib",
      "Fadhil Muhammad",
      "Alfan Farizki Wicaksono"
    ],
    "abstract": "Steering vectors align a model at inference time without touching its weights, but eliciting several personas at once is a different problem from eliciting one. Prior multi-persona steering approaches predetermine both how persona vectors are combined and the specific layers at which they are injected. Moreover, this static commitment introduces substantial offline search costs to identify suitable target layers, despite the fact that optimal intervention strengths vary dynamically across both decoding steps and distinct personas. We introduce SYNC (SensitivitY-guided iNference Control), a novel training-free inference control framework compatible with pre-existing steering vectors. SYNC dynamically estimates each layer's sensitivity to every persona via cosine similarity trajectories, assigning each persona to its optimal injection layer at every decoding step. Across two models, two persona profiles and steering vectors from both unsupervised and supervised extraction, SYNC leads on 21 of 28 persona configurations, significantly on 15. Code is available at https://github.com/yosefnuragaw/sync.",
    "published": "2026-11-02T06:59:50Z",
    "updated": "2026-11-03T05:45:25Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02636"
  },
  {
    "id": "2611.02633",
    "title": "Measuring AI Agents as Teammates with Collaborative Intelligence",
    "authors": [
      "Sean Wu",
      "Aneesh Pappu",
      "Jiaru Zou",
      "Yubin Kim",
      "Yuncong Mao",
      "Hongjian Zhou",
      "Junchi Yu",
      "Jieneng Chen",
      "James Zou"
    ],
    "abstract": "Progress in AI is often measured by what a single model can do on its own. Yet teams of AI agents are starting to make breakthroughs and discoveries in science, medicine, mathematics and software engineering. As AI begins to work in teams of agents and people, the ability to collaborate becomes a core part of their intelligence. Research on human teams has measured this ability for decades. Inspired by this, we introduce the Collaborative Intelligence Benchmark, which measures how well an AI agent works as a teammate. It contains 240 tasks across 8 dimensions of teamwork, from refusing an unsafe shortcut to checking the work that a weaker model leaves behind. Each task comes from a real record or an existing benchmark, from aviation accident reports and clinical cases to coding tasks and negotiations, and has a programmatically verifiable outcome. To isolate teamwork from individual capability, models are scored only on tasks that they can solve by themselves when they have full information. We evaluate 18 closed- and open-weight models and find that every model, across sizes and families, has clear weaknesses as a teammate, with the best model scoring only 82.2 out of 100. Frontier models almost always refuse unsafe shortcuts and report misconduct, yet they cave under interpersonal pressure, reaching the best overall deal in only 14% of conflicts, and their pass rate drops from 97% to 81% when they take over a task in which a weaker model has cheated. Crucially, general capability does not guarantee good teamwork, as models with nearly the same capability score differ by up to 11 points as teammates. The benchmark includes 160 public tasks with code and data, along with 80 held-out tasks for evaluation. As AI agents increasingly work alongside other agents and people, the ability to collaborate effectively is becoming a crucial capability to measure and develop.",
    "published": "2026-11-02T06:59:08Z",
    "updated": "2026-11-02T06:59:08Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02633"
  },
  {
    "id": "2611.02631",
    "title": "UniCross3D: Unified Cross-View and Cross-Domain Diffusion for Consistent Single-Image 3D Generation",
    "authors": [
      "U-Chae Jun",
      "Jaeeun Ko",
      "Jiwoo Kang"
    ],
    "abstract": "Reconstructing detailed geometry and realistic appearance from a single RGB image is essential yet fundamentally challenging due to inherent ambiguities such as occlusion, lighting variations, and texture-geometry entanglement. While recent diffusion-based generative models have significantly improved novel view synthesis, existing approaches suffer from two critical limitations: lack of cross-view geometric consistency and insufficient cross-domain semantic alignment. To address these issues, we introduce UniCross3D, a unified cross-view and cross-domain diffusion framework designed explicitly for consistent and physically coherent 3D generation. UniCross3D features two novel contributions: (1) a cross-view latent regularization that enforces cross-view geometric consistency across synthesized viewpoints by penalizing latent variance, and (2) a cross-domain mutual information objective grounded in the physics of image formation, explicitly aligning synthesized color and normal maps. Extensive experiments demonstrate that UniCross3D achieves significantly improved view consistency and semantic alignment over state-of-the-art methods and yields higher-fidelity reconstructions, particularly under challenging textures and ambiguous viewpoints.",
    "published": "2026-11-02T06:57:14Z",
    "updated": "2026-11-02T06:57:14Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2611.02631"
  },
  {
    "id": "2611.02625",
    "title": "Latent Diffusion-GAN: Adversarial Learning in the Autoencoded Latent Space",
    "authors": [
      "U-Chae Jun",
      "Jaeeun Ko",
      "Jiwoo Kang"
    ],
    "abstract": "Diffusion models are powerful generative frameworks for producing high-quality images by denoising latent variables from random noise. However, training with likelihood-based objectives, such as denoising score matching, can lead to locally over-smoothed high-frequency details, including fine textures and sharp edges, thereby limiting perceptual fidelity and structural detail. Adversarial training with GANs enhances sharpness but typically requires additional discriminator networks, increasing computational costs and destabilizing training. To this end, we propose Latent Diffusion Generative Adversarial Networks (LD-GAN), a novel framework that seamlessly integrates adversarial learning into diffusion models without modifying their original pipeline. LD-GAN leverages the pretrained variational autoencoder (VAE) in latent diffusion models as an energy-based discriminator, enabling adversarial training without extra parameters and preserving the structured latent priors learned from large datasets. We also introduce a structural consistency energy that aligns encoder and decoder feature representations, thereby enhancing perceptual quality and compatibility with the pretrained latent space. Extensive experiments demonstrate that LD-GAN significantly improves sample fidelity, perceptual sharpness, and diversity over state-of-the-art baseline methods across various generation tasks while ensuring efficient training dynamics.",
    "published": "2026-11-02T06:53:03Z",
    "updated": "2026-11-02T06:53:03Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.02625"
  },
  {
    "id": "2611.02624",
    "title": "Widening Harm Evaluation Coverage with a Judge that Reads the World",
    "authors": [
      "Prabhpreet Singh Setia",
      "Bhavesh Neekhra",
      "Debayan Gupta"
    ],
    "abstract": "An agent acting in a stateful environment can leave evidence of harm in two places: the record of what it did and said, or the world it changed. Safety evaluations for discovering harm examine one or the other in limited ways, using either an LLM judge over the trajectory or deterministic checks over the final state. Although LLM-based verifiers that inspect the environment exist, they have been used to verify task completion, not to detect and confirm harm in a safety setting. We address this gap with an LLM that has read-only access to the environment state and is given a harm taxonomy. We evaluate this approach in three environments: two from DecodingTrust-Arena and one from OSWorld. We hold the judge model and harm taxonomy fixed, varying only what the judge observes: the trajectory, read-only tools for inspecting the environment, or both channels together. In the two DecodingTrust-Arena environments, combining the trajectory and state-only judges recalls 94 percent of confirmed harms, compared with 53 percent for the trajectory judge alone. On OS-Harm, the union recalls 77 percent, compared with 67 percent. A single judge given both channels does not perform better and produces more false negatives than the state-only judge. We also record disagreements and find that the two channels miss different episodes. These results suggest that combining verdicts from two channel-specific judges is a robust and flexible approach to detecting and verifying harm in agentic settings.",
    "published": "2026-11-02T06:51:27Z",
    "updated": "2026-11-02T06:51:27Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.02624"
  },
  {
    "id": "2611.01467",
    "title": "See, Think, Use: Diagnosing Perception and Reasoning Failures in VLMs",
    "authors": [
      "Jiacheng Ding",
      "Yanliang Qi",
      "Cong Guo",
      "Peihua Mai"
    ],
    "abstract": "We present See, Think, Use, a protocol that traces each answer of a vision-language model to perception, reasoning or the use of perception. The diagnosis shows a developer which stage to improve and directs test-time compute to the stage that fails. Benchmarks score the final answer, and an answer that rests on the image earns the same credit as a guess or a memorized prior. The protocol asks the model two extra questions per item and needs no access to its weights. A localization probe asks for a box around every instance and measures seeing, and a text-replacement probe answers from a description and measures thinking. Use is the rate at which the answer follows the model's own perception across counterfactual image pairs. The rate needs no answer labels, because the question and its prior are the same on both images. On two model families and six datasets the protocol shows that the knob that helps follows the task family. Answers follow the model's perception except on images that contradict a common prior, and asking the model to localize first repairs this failure when its boxes are right. Allocating compute by the measured stages comes close to the best uniform policy at lower cost and beats a random allocation of the same compute wherever a knob raises the short stage. We will release the code, the prompts and the per-question outputs.",
    "published": "2026-11-01T02:56:06Z",
    "updated": "2026-11-01T02:56:06Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2611.01467"
  },
  {
    "id": "2611.01466",
    "title": "Resolve, Clear, or Defer: Training-Free Active Prototype Triage for Ecological Detection Pipelines",
    "authors": [
      "Anirudh Potlapally",
      "Brijesh Nanda Brunda Yogananda",
      "Jianyang Gu",
      "Maanav Jajodia",
      "Luke Meyers",
      "Wei-Lun Chao",
      "Hari Subramoni"
    ],
    "abstract": "Ecological monitoring increasingly relies on camera traps and aerial surveys that generate large image collections. High-recall animal detectors can localize candidate animals at scale. However, they also produce many detections that still require expert review, including false positives, ambiguous cases, and animals difficult to identify at the species level. Since exhaustive review requires substantial effort, we propose training-free active prototype triage, where reviewed detections become reusable evidence to (1) Resolve supported foreground classes, (2) Clear likely background false positives, or (3) Defer insufficiently supported cases for expert review. Across camera-trap and aerial datasets, foreground recognition and false-positive rejection benefit from different pretrained representations: BioCLIP2 provides foreground evidence while DINOv3 provides background evidence, reducing erroneous foreground clearing while improving automatic foreground recovery. Deferring unsupported cases avoids the higher error rates caused by forced decisions. Compared with confidence-thresholded multiclass k-NN and uncertainty-sampling logistic regression, prototype triage improves foreground recovery while maintaining competitive or lower review burden. Acquisition goes beyond class discovery: even after classes are represented, prototype choice determines how reliably evidence propagates through the remaining detections. Our results suggest that once animal localization reaches high recall, the challenge shifts from finding animals to deciding which examples to review, how to reuse them, and when evidence does not support an automatic decision.",
    "published": "2026-11-01T02:55:36Z",
    "updated": "2026-11-01T02:55:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01466"
  },
  {
    "id": "2611.01463",
    "title": "DIMWIT: Directly Invoking Models Without Intensive Tuning",
    "authors": [
      "Saarth Deshpande",
      "Neeraja J. Yadwadkar",
      "Venkat Arun"
    ],
    "abstract": "Resource managers typically encode what to do in a task-specific policy---a heuristic, an optimization procedure, or a model trained for the task---that must be developed before use and may need revision as the workload or system changes. We propose bypassing policy development and instead asking pretrained models to make resource-management decisions directly, given the current system state, desired outcome, and available choices. We evaluate this approach on microservice autoscaling, DRAM sizing, and video encoding, using a frontier LLM and two small decision models. On two microservice applications, a small decision model meets latency targets while using within 10% of the replicas allocated by policy-based autoscalers and within 13% of the frontier LLM. In DRAM sizing, a small decision model reduces DRAM usage by up to 27.5% relative to static provisioning while maintaining at least 95% of baseline performance. In video encoding, it completes encodes up to 4.3$\\times$ faster than the frontier LLM, with an imperceptible 1.1-point decrease in Video Multi-Method Assessment Fusion (VMAF), a metric of perceptual video quality. Making individual resource-management decisions may be considerably simpler than developing a general strategy for making them.",
    "published": "2026-11-01T02:53:00Z",
    "updated": "2026-11-01T02:53:00Z",
    "categories": [
      "cs.PF",
      "cs.AI",
      "cs.CV",
      "cs.DC",
      "cs.OS"
    ],
    "url": "https://arxiv.org/abs/2611.01463"
  },
  {
    "id": "2611.01461",
    "title": "An auditable agentic pipeline for variant-to-gene prioritisation, validated against orthogonal functional evidence",
    "authors": [
      "Shakuntala Baichoo",
      "Sohail",
      "Sarkar",
      "Bo Wang"
    ],
    "abstract": "Assigning GWAS variants to causal genes requires evidence from multiple resources. We present V2G, an agentic pipeline that records evidence retrieval and returns ranked genes alongside the retrieved evidence. We evaluate whether language-model reranking improves gene prioritisation and whether its gains depend on the retrieved evidence or recall of known associations. On 135 held-out loci where candidate retrieval succeeded and Open Targets L2G predicts, reranking by a language model improves Precision@1 over the evidence ordering it receives, 0.793 against 0.711 (+0.081, 95% CI +0.038 to +0.129), and over nearest-gene assignment (+0.178); no difference from Open Targets L2G or from training-membership baselines was detected. Given only the trait and the candidate gene symbols, in shuffled order, the same model scores 0.864 on these loci (three seeds, 0.859 - 0.867) and names the reference gene at 0.594 of the loci where the pipeline never retrieved it; with each gene's symbol moved to another gene's evidence row it follows the top-scored row and scores 0.284. The gain over the evidence ordering is recall of known genes, and the evidence as presented anchors the model to the ordering rather than informing it. Across the 296 held-out loci (five seeds each) the model keeps the given top candidate at 86% of decisions; at naturally retrieved loci its departures select a reference gene in 85% of departure decisions (31 of 37 loci), and none displaced one. Its calls carry trait-matched mouse mutant or Mendelian phenotype annotations more often than other candidates at the same locus. Train-test overlap is reported throughout. The study includes a frozen benchmark, cached predictions and reproduction code.",
    "published": "2026-11-01T02:48:40Z",
    "updated": "2026-11-01T02:48:40Z",
    "categories": [
      "q-bio.GN",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.01461"
  },
  {
    "id": "2611.01460",
    "title": "Can Large Language Model Agents Learn by Watching Tutorial Videos?",
    "authors": [
      "Haoyu Zhao",
      "Zafeirios Fountas",
      "Jun Wang"
    ],
    "abstract": "Humans continuously acquire knowledge from carefully crafted materials such as books and tutorial videos, carrying that understanding into future tasks. Millions of such instructional videos are uploaded online every day, yet LLM agents remain unable to exploit this ever-expanding wealth of human teaching. Their capabilities are frozen after training, while parameter updates at scale remain prohibitively expensive. This raises the central question: can LLM agents learn from this vast instructional resource without parameter updates? We introduce Tutorial Agentic Learning (TAL), a nonparametric continual-learning paradigm that consolidates tutorial videos into a persistent, structured tutorialbook memory through a two-stage adversarial process that harvests hard, video-grounded questions and uses them to refine the memory. At inference time, TAL retrieves through a Table-of-Contents (TOC) tree, tying retrieval directly to the model's reasoning rather than to embedding similarity. To study this setting, we introduce VidLearn, a multimodal QA benchmark built from 72 chess tutorial videos spanning 12 openings. On VidLearn, TAL outperforms all evaluated baselines and improves monotonically as more videos are consumed, achieving up to 113% and 91% relative gains over the corresponding vanilla MLLMs on the training and test splits, respectively. In actual gameplay, TAL reaches a stronger opening-phase position than its vanilla counterpart in 69% of head-to-head games. Evaluation in a second domain further demonstrates the generality of TAL. Together, these results highlight instructional videos as a scalable resource for parameter-update-free agent continual learning.",
    "published": "2026-11-01T02:48:09Z",
    "updated": "2026-11-01T02:48:09Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01460"
  },
  {
    "id": "2611.01457",
    "title": "ContactCut: A Partition-Aware Contact Selection Framework for False-Merge Correction in Connectomics",
    "authors": [
      "Byunghyun Ko",
      "Won-Ki Jeong",
      "Chaoli Wang"
    ],
    "abstract": "Localized false-merge correction in connectomics requires converting an identified error into an executable native 3D partition. Still, neither intermediate correction predictions nor seeded graph solvers alone determine which native source-sink constraints should define that partition. We formulate this problem as a 3D-native partition-aware contact selection problem: selecting candidate contacts based on the complete partitions they induce. Our solution comprises two components: ContactCut (CC)-Auto, which uses learned single-contact selection, and ContactCut (CC)-Search, which enables bounded paired-contact search, generates compact alternatives, and applies learned panel ranking. On historical two-way false-merge corrections from MICrONS and FlyWire, CC-Auto improves failure-aware 3D partition (FA-3D Part.) mIoU by 5.9 and 3.4 points over the strongest graph-based controls and by 12.5 and 10.0 points over the best learned baselines. A MICrONS-trained ranker transfers to FlyWire with negligible degradation. CC-Search expands oracle reachability and prioritizes near-oracle alternatives. The code is available at https://github.com/bentake/ContactCut.",
    "published": "2026-11-01T02:46:25Z",
    "updated": "2026-11-01T02:46:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01457"
  },
  {
    "id": "2611.01449",
    "title": "CONFIRM: Governing Scientific Reporting for Trustworthy Agentic Neuroimaging",
    "authors": [
      "Yuxiang Wei",
      "Lijing Zhu",
      "Qizhen Lan",
      "Yanteng Zhang",
      "Vince D. Calhoun"
    ],
    "abstract": "Large language model (LLM) agents can autonomously run neuroimaging analyses from research questions to reported findings. Existing agentic systems use tools to check that code runs and reported values match its output, but rely on LLM judgment to decide which results warrant scientific reporting. We show that LLM judges endorse site-confounded findings even when the confound is presented as evidence. We present \\textbf{CONFIRM}, a framework that separates running an analysis from deciding which findings to report. CONFIRM encodes each hypothesis as a machine-readable, pre-specified analysis plan that fixes the claim and its pass criteria before computing results. It then filters results through five deterministic gates (search history and multiplicity, confounds, power, analytic stability, and replication) under three configurable reporting standards, from least to most demanding: \\textit{Screen}, \\textit{Replicate}, and \\textit{Full}. Failed claims receive diagnoses that guide follow-up analyses. To evaluate reporting decisions at the claim level, we introduce \\textbf{NeuroClaimBench}, comprising 489 executable neuroimaging claims with frozen data, including literature-supported findings and 150 controls designed to violate individual methodological requirements. On NeuroClaimBench, CONFIRM falsely supports at most 3\\% of controls, compared with 23--38\\% for the baselines, while recovering up to 61\\% of literature-supported claims. When auditing an existing agent, CONFIRM reduces false support on controls from 23\\% to 0\\% while retaining the agent's literature-supported claims. Its diagnostic feedback also produces more supported revisions than Self-Refine with fewer LLM calls. Together, CONFIRM and NeuroClaimBench show that basing reporting decisions on pre-specified analysis plans and deterministic gates is essential for trustworthy autonomous scientific discovery.",
    "published": "2026-11-01T02:37:56Z",
    "updated": "2026-11-03T16:50:14Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2611.01449"
  },
  {
    "id": "2611.01446",
    "title": "I-PTC: Interactive Programmatic Tool Calling for Stateful Tool-Augmented Agents",
    "authors": [
      "Huanzhi Mao",
      "Chengkun Cao",
      "Shuo Yuan",
      "Joseph E. Gonzalez"
    ],
    "abstract": "Large language models are increasingly capable of writing and executing code, suggesting a natural paradigm for tool-augmented agents: expressing tool use as programs rather than isolated calls. Programmatic tool calling (PTC) captures this idea through loops, batching, abstraction, and structured computation, but existing PTC approaches are largely stateless, limiting their ability to reuse intermediate results and adapt over time. This is problematic for real-world tasks, where tool environments and problem-solving processes are inherently stateful. We therefore present I-PTC, an interactive framework that executes stateful PTC: models issue code snippets that call tools, maintain reusable state, and evolve the tool interface through API corrections. To evaluate the effectiveness of I-PTC and the general PTC setting, we introduce PTC-Bench, a benchmark of long-tail, production-style user requests whose difficulty comes from large initial environments, many dependent API interactions, extended planning, and recovery across follow-ups and transient failures. Experiments on PTC-Bench show that I-PTC improves performance on complex multi-step tasks with large tool sets while substantially reducing token consumption over conventional tool-calling baselines and the original PTC baseline, highlighting stateful programmatic tool calling as a promising direction for scalable tool-augmented agents.",
    "published": "2026-11-01T02:32:02Z",
    "updated": "2026-11-01T02:32:02Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2611.01446"
  },
  {
    "id": "2611.01438",
    "title": "FOCUS: Closed-Loop Attention Feedback for Efficient Vision-Language Understanding",
    "authors": [
      "Akul Santhosh",
      "Aastha Jhunjhunwala"
    ],
    "abstract": "Processing every video frame through Vision-Language Models (VLMs) adds significant inference cost and limits their ability to comprehend real-time video. Existing approaches either sub-sample frames uniformly, ignoring content and missing important events, or prune visual tokens inside the VLM to cut per-call cost while still invoking the model on every sampled frame. We introduce FOCUS, a training-free three-layer framework that reduces the number of invocations and steers each one towards what matters. Temporal gating measures inter-frame dissimilarity in the patch-embedding space of a smaller VLM from the same family, triggering burst captures only when the scene changes in a semantically meaningful way. Patch-level dissimilarity is then accumulated across the burst and fused with a top-down attention prior into a spatial focus map that encodes where motion and semantic relevance coincide. That map calibrates the VLM's value cache during generation, progressively amplifying vision tokens in task-relevant regions and attenuating off-target ones, without removing any token from the context. The loop closes after each response: text-to-vision cross-attention is extracted from the decoder and fed back as the prior for the next burst, letting the system converge on semantically important regions over successive observations. We evaluate FOCUS on the 500-video EgoSchema subset in streaming mode, with a single Qwen3-VL-8B backbone shared by every method. It reaches 74.8% accuracy using 25.4 VLM calls per clip, against 74.6% with 55 calls for uniform sampling and 74.2% with 55 calls for BOLT. On egocentric video captioning across four domains, it matches the best baseline's quality while issuing 57% fewer VLM invocations than uniform sampling.",
    "published": "2026-11-01T02:20:07Z",
    "updated": "2026-11-01T02:20:07Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01438"
  },
  {
    "id": "2611.01424",
    "title": "Gamification Box: Automated Personalized Rewards for Improved Task Experience",
    "authors": [
      "Ali Utku Ozaslan",
      "Sadra Sadraddini",
      "Deniz Marti"
    ],
    "abstract": "We introduce a gamified rewarding system, called \"Gamification Box\", and conduct a user study to examine its effects on task experience and performance. Gamification Box provides an interface for automated rewards that are intrinsically enjoyable activities, such as watching short video clips. In a controlled user experiment, 118 participants completed a short-term memory task involving meaningless syllables under either a gamified reward condition or a non-rewarded control condition. Participants in the gamified condition reported significantly greater perceived task enjoyment than those in the control group. Importantly, this increase in perceived enjoyment did not come at the cost of performance: no significant differences were observed in free recall or recognition accuracy between conditions. These findings suggest that while gamified rewards may not directly enhance immediate performance, they function as a motivational regulator, thereby improving task enjoyment. The primary benefit of such systems may therefore lie in supporting sustained effort over time, where cumulative performance gains are more likely to emerge.",
    "published": "2026-11-01T02:06:54Z",
    "updated": "2026-11-01T02:06:54Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.01424"
  },
  {
    "id": "2611.01400",
    "title": "RadPose: ISAC-based RF 3D Human Pose Estimation",
    "authors": [
      "Geo Jie Zhou",
      "Kunzhe Song",
      "Ruxin Lin",
      "Huacheng Zeng"
    ],
    "abstract": "Human pose estimation under adverse lighting and occlusion conditions remains challenging for camera- and LiDAR-based systems. Although mmWave radars provide robustness to illumination and occlusion, they rely on dedicated hardware and licensed spectrum, limiting scalability. In this paper, we present RadPose, a learning-based monostatic integrated sensing and communication (ISAC) framework that enables mmWave communication devices to perform 3D human pose estimation. Unlike specialized radars, RadPose leverages monostatic full-duplex operation to extract channel impulse responses (CIRs) directly from standard OFDM communication signals, generating 3D radio point clouds without additional sensing hardware. To address the sparsity and noise of RF observations, RadPose employs a cross-frame transformer-based pose inference network with semantic-guided spatial attention and target-driven temporal attention for robust spatio-temporal aggregation. It further adopts a joint-aware inverse kinematics refinement module based on graph convolution to enforce skeletal topology, bone-length consistency, and anatomical plausibility. Extensive experiments demonstrate RadPose achieves competitive accuracy compared to state-of-the-art radar-based approaches while maintaining robust performance in unseen and occluded scenarios. The dataset and source code are available at https://github.com/Geo-Chou/RadPose.",
    "published": "2026-11-01T01:08:32Z",
    "updated": "2026-11-01T01:08:32Z",
    "categories": [
      "cs.CV",
      "cs.NI"
    ],
    "url": "https://arxiv.org/abs/2611.01400"
  },
  {
    "id": "2611.01396",
    "title": "SpecUltra: A Unified Foundation Model for Heterogeneous Spectral Images",
    "authors": [
      "Weili Kong",
      "Baisen Liu",
      "Xiaojun Bi",
      "Jiaming Pei"
    ],
    "abstract": "Spectral imagery, including hyperspectral image (HSI) and multispectral image (MSI), exhibits substantial heterogeneity in band numbers, wavelengths, spectral resolutions, hindering unified modeling and cross-sensor transfer. From the perspective of imaging physics, these heterogeneous observations can be regarded as discrete measurements of an underlying continuous spectrum acquired through different sampling processes. Motivated by this perspective, we propose SpecUltra, a unified foundation model for heterogeneous spectral images. Specifically, SpecUltra employs 3D convolutional tokenization and wavelength-aware 3D RoPE to encode relative wavelength and spatial relationships, enabling fine-grained spatial-spectral modeling within a shared coordinate system. We further construct MultiHyper-200K, a large-scale multi-sensor HSI dataset, and pretrain SpecUltra using auxiliary-token-assisted mask image modeling (MIM), where a level token indicates the radiometric product type and register tokens absorb sensor- and acquisition-dependent variations. To bridge the spectral-granularity gap between HSI and MSI, we introduce Spectral Kernel Transformation (SKT), which transfers pretrained knowledge in parameter space by constructing MSI embedding kernels from fine-grained HSI-pretrained kernel slices. This design preserves pretrained spectral priors while maintaining compatibility with the pretrained backbone. Experiments on HSI and MSI classification and segmentation benchmarks demonstrate state-of-the-art or competitive performance across disparate sensors and downstream tasks.",
    "published": "2026-11-01T01:03:17Z",
    "updated": "2026-11-01T01:03:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.01396"
  },
  {
    "id": "2611.00974",
    "title": "Efficient Image Denoising on Smartphone GPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "HaoDong Wu",
      "Desheng Cai",
      "Nikolay Falaleev",
      "Faraz Kayani",
      "Sarmad Kayani",
      "Asad Ahmed",
      "Dmitry Ignatov",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Yoonsuk Kang",
      "The Van Le",
      "Jin Young Lee",
      "Sunzhe Yang",
      "Qiuhai Yan",
      "Kang Chen",
      "Tingting Wang",
      "Faming Fang"
    ],
    "abstract": "Image denoising is a fundamental problem in mobile photography. Despite a large number of solutions proposed for this task, the majority of them are trained on synthetically produced noisy images, and are additionally too computationally heavy for processing full-resolution images on mobile devices. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on constrained mobile hardware. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can denoise Full HD resolution photos while running on popular smartphone GPUs from Qualcomm and Arm. For this, the participants were provided with a large-scale dataset consisting of noisy-clean image pairs captured in the wild. The runtime of all models was evaluated on the Snapdragon 8 Elite Gen 5 and Dimensity 9500 chipsets with the Adreno and Mali GPUs, respectively. Top solutions proposed in this challenge are able to perform high-quality image denoising under 100 milliseconds on both platforms while reaching a PSNR score of over 37 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:18:38Z",
    "updated": "2026-10-31T14:18:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00974"
  },
  {
    "id": "2611.00963",
    "title": "4K Image Super-Resolution on Mobile NPUs: Mobile AI 2026 Challenge Report",
    "authors": [
      "Andrey Ignatov",
      "Georgy Perevozchikov",
      "Radu Timofte",
      "Fubin Ren",
      "Shihao Wang",
      "Liwen Zhang",
      "Zhe Xu",
      "Zhipei Lei",
      "Minjian Zhang",
      "Kailing Tang",
      "Dingyong Gou",
      "Yanlin Wu",
      "Cong Li",
      "Xiaohui Cui",
      "Kihwan Yoon",
      "Ganzorig Gankhuyag",
      "Heo MyeongCheol",
      "Yonghyun Park",
      "Juho Jung",
      "Sungjei Kim",
      "Phuong-Nam Nguyen-Pham",
      "Nam-Tien Le",
      "Tinh-Anh Nguyen-Nhu",
      "Matin Fazel",
      "Abdelhak Bentaleb",
      "Xinrui Li",
      "Xusheng He",
      "Jianlong Wu",
      "Mohsin Ikram",
      "Dmitry Ignatov",
      "Hao Chen",
      "Long Sun",
      "Jiangxin Dong",
      "Jinshan Pan",
      "Jinhui Tang",
      "Siyue Teng",
      "Yuxuan Jiang",
      "Fan Zhang",
      "David Bull",
      "Zhe Xiao",
      "Jun Xiao",
      "Zhi-Song Liu",
      "Jiayi Pei",
      "Songtao Wu",
      "Hong Shang",
      "Kuanhong Xu"
    ],
    "abstract": "Image super-resolution is widely used on mobile devices for upscaling various types of image data. This creates a need for efficient deep learning-based models that are not only performant but can also be deployed on neural processing units (NPUs) present in the majority of mobile and IoT chipsets. In this Mobile AI challenge, we address this problem and propose the participants to design fast solutions that can upsample images from Full HD to 4K resolution while running on popular mobile NPUs from Qualcomm and MediaTek. For this, the participants were provided with the DIV2K dataset and trained models to do an efficient 3X image upscaling. The competition had two tracks: in the first track, the models had to be fully quantized (INT8), and the runtime of all models was evaluated on the Qualcomm Snapdragon 8 Elite Gen 5 NPU. In the second track, the participants were developing floating-point solutions that were evaluated on the MediaTek Dimensity 9500 NPU. Top solutions proposed in this challenge are able to reconstruct 4K images under 5 milliseconds while reaching a PSNR score of 30 dB. A comprehensive description of the models developed in the challenge is provided in this paper.",
    "published": "2026-10-31T14:05:38Z",
    "updated": "2026-10-31T14:05:38Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00963"
  },
  {
    "id": "2611.00960",
    "title": "Self-Refining Prompt Induction for Streaming Text-to-SQL",
    "authors": [
      "Gaetano Rossiello",
      "Alfio Gliozzo",
      "Nandana Mihindukulasooriya",
      "Erick Lee",
      "Nabila Siregar",
      "Lisa Amini"
    ],
    "abstract": "Text-to-SQL assistants for streaming engines must handle dialect-specific types, windowing rules, and temporal semantics, including constructs poorly handled by generic prompts. We present Self-Refining Prompt Induction (SRPI), an offline method that converts generation failures into reusable dialect instructions while keeping model weights fixed. A Refiner revises the Generator's prompt using reference-conditioned feedback from three LLM judges; a sampled regression guard checks earlier successes, and a separate Compressor reduces prompt length. Inference uses the frozen prompt without retrieval or query repair. We evaluate cross-domain and cross-model transfer on Confluent Cloud Flink SQL using a controlled synthetic workload seeded by 30 expert-written examples, with 335 induction examples and 257 questions from held-out domains. The same induced prompt improves mean judge scores across seven Generators by 7.1-19.2 percentage points, including an increase from 85.3% to 97.5% for the induction model. A separate compression study reduces prompt length by 52.7% with a 0.19-percentage-point score decrease. An assistant using the induced prompt is in early access, with initial user feedback to inform subsequent refinement.",
    "published": "2026-10-31T14:02:40Z",
    "updated": "2026-10-31T14:02:40Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2611.00960"
  },
  {
    "id": "2611.00953",
    "title": "PSF-Informed Reconstruction: An Enhanced 2D Directional Filtered Backprojection Method for Cone-Beam Rotary Computed Laminography",
    "authors": [
      "Chengxiang Wang",
      "Wei Yu",
      "Baodong Liu"
    ],
    "abstract": "Cone-beam rotary computed laminography (CL) presents a viable alternative to cone-beam CT for imaging objects with high aspect ratios. Conventional reconstruction techniques, such as CL-FBP and CL-FDK, often yield suboptimal results charac?terized by pronounced superimposition artifacts, reduced contrast,and blurred edges, primarily due to their reliance on 1D row-wise filtering along detector rows. To address these limitations and improve reconstruction quality, we proposed a novel 2D directional filtered backprojection (DFBP) method based on the point spread function (PSF). First, an exact expression for the projection process is derived by establishing the relationship between a reconstructed pixel and its corresponding projection point on the detector. Second, a revised backprojection process incorporating two weighting factors is introduced to counteract the nonlinearity inherent in conventional backprojection, leading to a simplified PSF formulation. Third, to circumvent the computational burden of 3D image space filtering,an approximate method by linearizing the coordinate relationship in Fourier space under some assumptions is developed that transfers the 3D filtering operation to the 2D projection space. This approach facilitates the derivation of a formally simple yet effective 2D direc?tional filter, which integrates a 2D von Hann window and a 2D sinc window. Experimental results demonstrate that the proposed method produces reconstructions with superior contrast, sharper boundaries,and fewer superimposition artifacts compared to CL-FBP and CL?FDK. Moreover, it enables more accurate recovery of internal structures, such as bubble defects and electronic components.",
    "published": "2026-10-31T13:54:26Z",
    "updated": "2026-10-31T13:54:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00953"
  },
  {
    "id": "2611.00945",
    "title": "HieraNTP: Structured Risk Representations for Time-Series Anomaly Detection via Hierarchical Next-Token Prediction",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Boyu Diao",
      "Zhulin An",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Time-series anomaly detection commonly converts deviations from learned temporal regularities into anomaly scores. This practice can conflate violations of temporal regularity with task-specific anomaly judgments: the same deviation may be anomalous under one task definition and benign under another. Aggregating heterogeneous deviations into a single score before task-specific adaptation can obscure the evidence needed to distinguish these cases. We introduce HieraNTP, a Hierarchical Next-Token Prediction framework that separates self-supervised predictive modeling from task-specific risk interpretation. HieraNTP pretrains a hierarchical tokenizer and a causal next-token predictor to capture temporal regularities at multiple scales. It then organizes prediction discrepancies into a structured risk representation, preserving complementary evidence across temporal scales in token, local-statistic, and observation spaces. A task-adaptive detector uses anomaly labels to select and combine this evidence for the target task. Across anomaly detection benchmarks, HieraNTP improves VUS-PR by 12.0% on TSB-AD-U and 15.5% on TSB-AD-M relative to the strongest baselines, and achieves the highest composite score on both TAB tracks, with controlled comparisons supporting the value of retaining distinct evidence. Our code is available at https://github.com/blisky-li/HieraNTP.",
    "published": "2026-10-31T13:47:31Z",
    "updated": "2026-10-31T13:47:31Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00945"
  },
  {
    "id": "2611.00944",
    "title": "SNAPPerf: Software-Aware Tabular Foundation Model for Retraining-Free Performance Prediction of Configurable Systems",
    "authors": [
      "Amine Lbath",
      "Massih-Reza Amini",
      "Vadim Okun"
    ],
    "abstract": "Modern software systems expose hundreds of configuration options whose combinations can substantially affect execution time, memory and energy usage. Measuring software performance resulting from a configuration set requires running a realistic workload. Since the configuration space grows exponentially, exhaustive benchmarking is infeasible. Prior work therefore trains models on a small set of measured configurations to predict the performance of the rest. Yet these models are specific to a particular software version, hardware platform, and workload, so changes require new measurements and retraining, and such changes are becoming more frequent with coding agents. We challenge this per-system training assumption with SNAPPERF (Software-aware, No-retraining, Adaptive Prediction), a sample-efficient tabular foundation model specialized for configurable software. SNAPPERF is pretrained once on synthetic data. Each new update only requires a few measured configurations as context to predict the rest without any per-system training or hyperparameter tuning. Across 39,866 configurations from 12 real-world systems, spanning 6 domains and 4 performance metrics, SNAPPERF reduces prediction error by 38% over the prior state of the art at the same measurement budget, and by 25% over the best general-purpose tabular foundation model. It matches the state of the art's accuracy with 54% fewer measurements on average. These results suggest that knowledge about software can be encoded in pretraining data rather than in per-system models, opening a new research direction in software-aware pretraining.",
    "published": "2026-10-31T13:47:08Z",
    "updated": "2026-10-31T13:47:08Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00944"
  },
  {
    "id": "2611.00941",
    "title": "MarkovTS: Pretrained State-Transition Representations for Zero-Shot Time Series Generation",
    "authors": [
      "Yujie Li",
      "Zezhi Shao",
      "Jingbo Zhou",
      "Yongjun Xu",
      "Xueqi Cheng",
      "Fei Wang"
    ],
    "abstract": "Across heterogeneous real-world domains, time-series generation supports simulation, model development, and data augmentation by generating sequences that preserve target-domain statistics and temporal dependencies when real observations are scarce or costly. However, existing methods predominantly address in-domain generation, limiting their reuse in unseen domains. We study reference-conditioned zero-shot time series generation: target domains are unseen during pretraining, generation uses a single target-domain reference sequence, and no model parameters are updated. MarkovTS characterizes sequence evolution through local morphologies and their ordered transitions at multiple temporal scales. Its pretrained encoder quantizes normalized time-series patches into multiscale morphological states with a state codebook, while a transition codebook encodes contextual transitions between adjacent intervals. These transferable state-transition representations condition a pretrained flow-matching model. At generation, the frozen model combines a reference-derived condition with independent Gaussian noise to produce stochastic samples that retain the reference's temporal organization. Across 12 unseen target datasets, MarkovTS outperforms strong baselines in most distributional comparisons and generates diverse, reference-consistent sequences. As downstream augmentation, its samples yield overall gains across forecasting, classification, and anomaly detection benchmarks and diverse model families. Our code is available at https://github.com/blisky-li/MarkovTS.",
    "published": "2026-10-31T13:43:00Z",
    "updated": "2026-10-31T13:43:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00941"
  },
  {
    "id": "2611.00937",
    "title": "What Helps Denoising Can Hurt Memory: Rethinking History in Long Video Generation",
    "authors": [
      "Yubin Jing",
      "Ziyang Zhang",
      "Meng Chen",
      "Yuyao Li",
      "Haofan Wang",
      "Yichen Gong"
    ],
    "abstract": "Autoregressive video generators produce long videos block by block, using historical context to maintain temporal consistency. After denoising, a committing pass encodes each clean block into keys and values (KV) that later blocks read, and the same clean block can be encoded into different KV depending on the history it reads. We therefore study historical context not only as a condition for denoising but also as an input to committing. Older historical context that supports denoising can harm subsequent generation when read during committing. At fixed context size and temporal positions, older historical context lowers mean clip-to-clip Subject Consistency. Across 5 generator configurations supporting longer contexts, consistency rises, plateaus, and then declines as committing context expands. Motivated by these findings, we propose Commit Forcing, a training-free rule that organizes committing into a chain. During committing, each block reads only the preceding block's stored KV, so older historical context reaches new entries only through the chain. We apply this rule to 6 pretrained generators. On 60-second VBench, Commit Forcing improves Quality and Total on all 6 generators, by up to 1.27 Quality points and 1.10 Total points. Long-range consistency gains extend to 240-second videos. In a blinded comparison on 120-second LongLive videos, Commit Forcing achieves win rates of 83.5% for subject and scene consistency and 82.9% for overall preference against the base generator, excluding ties.",
    "published": "2026-10-31T13:39:46Z",
    "updated": "2026-10-31T13:39:46Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00937"
  },
  {
    "id": "2611.00935",
    "title": "Labadain-MedQA: A Tetun Medical QA Dataset for Fine-Tuning and Evaluating Large Language Models",
    "authors": [
      "Gabriel de Jesus",
      "Sérgio Nunes"
    ],
    "abstract": "Advances in large language models (LLMs) have created opportunities for cross-lingual transfer of medical knowledge from high-resource to low-resource languages to support access to healthcare information. However, medical question-answering (QA) datasets for fine-tuning and evaluating LLMs remain scarce for Tetun. To address this gap, we translated MedAlpaca's Medical Flashcards and WikiDoc Patient Information collections into Tetun using Gemini 2.5 Flash, producing 39,077 medical QA pairs. Translation quality was assessed on 50 randomly sampled QA pairs (100 documents) using automatic metrics against human reference translations and evaluations by two native Tetun-speaking healthcare professionals, focusing on medical accuracy and Tetun fluency. Human translations achieved higher mean ratings than LLM-generated translations for both criteria (4.43/5 vs. 4.02/5), with statistically significant differences (Wilcoxon signed-rank test, p < 0.001). To assess downstream utility, we fine-tuned Gemma and Llama variants on the translated MedAlpaca dataset using parameter-efficient fine-tuning (PEFT) and evaluated them on 325 Tetun-translated United States Medical Licensing Examination multiple-choice questions. Gemma 4 12B fine-tuned using QLoRA achieved relative improvements in mean accuracy of 10.79% with 4-bit NormalFloat (NF4) inference and 10.42% after merging the LoRA adapters into the BF16 base model, compared with the corresponding base models. These results highlight the viability of automatic dataset translation for Tetun medical QA and the effectiveness of PEFT in enhancing model performance. The datasets, models, and evaluation resources are accessible at https://github.com/labadain/labadain-medqa to support reproducible research on Tetun medical QA and facilitate machine translation, cross lingual, and multilingual research.",
    "published": "2026-10-31T13:36:05Z",
    "updated": "2026-10-31T13:36:05Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00935"
  },
  {
    "id": "2611.00926",
    "title": "UI-UG 2: Advancing Mobile UI Understanding and Generation with Fine-Grained Supervision and Reinforcement Learning",
    "authors": [
      "Hao Yang",
      "Shuoyang Liu",
      "Xiaoyu Lin",
      "Zhou Fang",
      "Maji Huang",
      "Zhaosong Huang",
      "Ruichao Mao",
      "Teng Guo",
      "Hai Rao"
    ],
    "abstract": "Mobile UI understanding and generation require both fine-grained component perception and reliable structured synthesis. Inspired by the unified direction introduced by UI-UG, we present UI-UG 2, a compact 4B-parameter multimodal large language model (MLLM) that advances mobile UI Understanding and Generation with broader task coverage, a front-end-aligned taxonomy, and online render-aware reinforcement learning. UI-UG 2 constructs a multi-source understanding corpus from RICO, VINS, Android in the Wild, and Android Control, annotated with an 80-category two-level UI taxonomy aligned with front-end component semantics, and pairs it with over 5,000 requirement-screenshot-JSON tuples for progressive structured UI generation through a domain-specific language (DSL). For understanding, UI-UG 2 introduces decomposed rewards for category prediction, OCR fidelity, color recognition, dense grounding, and GUI grounding. Unlike the offline Direct Preference Optimization (DPO)-style generation optimization in UI-UG, UI-UG 2 optimizes generation through end-to-end online Group Relative Policy Optimization (GRPO): sampled DSL outputs are rendered with a Playwright-based server-side pipeline and evaluated using LLM-as-a-Judge and contrastive preference ranking. Experiments show that UI-UG 2 achieves the strongest referring and dense-grounding results among the evaluated models on our 80-category benchmark, and achieves the best composite generation score among compared models at a compact scale (4B). More importantly, we observe a consistent understanding-to-generation transfer: adding fine-grained UI perception supervision improves generation quality under a fixed training budget, suggesting that component-level semantics provide a shared representational foundation for both tasks.",
    "published": "2026-10-31T13:24:05Z",
    "updated": "2026-10-31T13:24:05Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2611.00926"
  },
  {
    "id": "2611.00923",
    "title": "Illusion: Safeguarding Topology Confidentiality in LLM Multi-Agent Systems via Behavior-Preserving Obfuscation",
    "authors": [
      "Yiu-Fai Cheung",
      "Hongzhi Guo",
      "Miao Pan",
      "Irwin King",
      "Hao Wang"
    ],
    "abstract": "The communication topology of Large Language Model Multi-Agent Systems (LLM-MASs) governs how information propagates among agents and encodes critical domain knowledge and expert workflow design. It is valuable intellectual property and plays a decisive role in system utility and safety, yet remains vulnerable to inference attacks that stealthily reconstruct it from agent outputs. Existing defenses detect or mitigate such attacks but do not proactively conceal the topology itself. We propose \\textit{Illusion}, a proactive topology obfuscation defense for LLM-MAS. \\textit{Illusion} injects fake edges and fake messages to present attackers with a deceptive topology, while selecting low-impact candidates that preserve output-distribution equivalence and task-accuracy non-inferiority. The resulting fake edges are designed to be indistinguishable from genuine messages under black-box observation. Extensive experiments show that \\textit{Illusion} reduces edge-level F1 from over 0.87 to 0.62 and graph similarity from over 0.94 to 0.71. It also largely preserves output distributions and task performance, and its fake edges resist both similarity-based and LLM-judge filtering, even under adaptive pruning.",
    "published": "2026-10-31T13:23:42Z",
    "updated": "2026-10-31T13:23:42Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00923"
  },
  {
    "id": "2611.00919",
    "title": "TreePIN$^{2}$: Tree-Prior Initialized Neural Networks",
    "authors": [
      "Yanrong Wang",
      "Qiming Sun",
      "Haoyang Chen"
    ],
    "abstract": "Fitted decision trees provide predictive knowledge for neural network initialization. We present Tree-Prior Initialized Neural Networks (TreePIN$^{2}$), a method that translates split rules, decision paths and leaf predictions into initial network weights and biases for classification and regression. Sigmoid units encode split responses, hidden units combine them along decision paths, and leaf predictions initialize the output layer. We calibrate split softness using local training margins, sample support and impurity reduction, relating the initial responses to the data at each node. All weights and biases remain trainable, allowing gradient-based optimization to refine the transferred decisions and their combinations. Across six classification and six regression tasks with twenty paired seeds, TreePIN$^{2}$ improves mean initial and early validation performance over initialization baselines on most tasks. After fifty epochs, it achieves the best or tied-best mean validation performance among the six compared methods on ten tasks. Paired ablations show how split calibration and leaf-informed output initialization contribute to the starting predictor and its subsequent learning.",
    "published": "2026-10-31T13:22:01Z",
    "updated": "2026-10-31T13:22:01Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2611.00919"
  },
  {
    "id": "2610.41939",
    "title": "Observable-Specific Validity Tests for Scientific AI: Controlled Approximations and Intervention Response",
    "authors": [
      "Xiaoshn Nee",
      "Haobo Zhong",
      "Xiaomin Ni"
    ],
    "abstract": "An approximation can reproduce an energy while missing its response, or satisfy an error tolerance without being certified by a given bound. We formulate observable-specific validity records for scientific artificial intelligence (AI) that link a reduction to its reference model, error measure, tolerance, parameter domain, and transformations or interventions. Explicit displacement and velocity certificates for a singularly perturbed oscillator recover distinct convergence orders and provide sufficient validity guarantees. Exact Hubbard dimer relations resolve the different coupling domains accepted by energy and response criteria. Across 16 repeated neural fits, imposing dimensional homogeneity reduces energy scale transfer error from 52.3% to 0.0768% and raises the median fraction jointly satisfying gap and response tolerances from zero to 100%. Paired transformations verify the protected scaling relation, while a coupling crossover identifies the additional information needed for response transfer. A causal model recovers a positive intervention response beneath a strong negative observational association. For two mechanisms observed with Gaussian noise whose responses first differ at order $x^k$, we derive an exact fixed control query requirement scaling as $x^{-2k}$ and verify its full success curve numerically. Together with a 256-task evaluation interface, these results provide independently checkable tests of controlled approximation, physical transfer, and mechanism discrimination in scientific AI.",
    "published": "2026-10-30T15:57:51Z",
    "updated": "2026-10-30T15:57:51Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.DL"
    ],
    "url": "https://arxiv.org/abs/2610.41939"
  },
  {
    "id": "2610.41924",
    "title": "IGDA-ICMH: an Importance Guided Feature and Network Dual Adaptation Framework towards Image Compression for Machine and Human Vision",
    "authors": [
      "Yanbo Gao",
      "Xinyu Zhao",
      "Shuai Li",
      "Xun Cai",
      "Mao Ye",
      "Li Li"
    ],
    "abstract": "With the surge of machine vision applications, image compression for both machine and human vision (ICMH) has become an important research area. Existing studies mainly focus on task-specific adaptation or multi-task joint optimization, yet they often overlook the unequal contributions of different features and network layers to downstream machine vision tasks. To address this issue, we first quantitatively investigate the impact of different feature and network layers on machine vision performance, providing a principled understanding of their importance. Based on this analysis, an Importance Guided feature and network Dual Adaptation (IGDA) framework is developed for ICMH. It adopts implicit neural representation as the basic architecture and designs an efficient adaptation structure with both feature and network weight adaptation. An Importance-Guided Network Adaptation (IGNA) module is developed with a low-rank adaptation strategy to selectively adjust key network layers according to their importance in different tasks. An Importance-Guided Feature Adaptation (IGFA) module is developed with a low-rank and Kronecker product-based transform to explore the non-local property of the features in order to reduce the number of adaptation parameters. Extensive experiments on representative machine vision tasks, including image classification and object detection, demonstrate that our IGDA-ICMH framework achieves significantly better performance than the existing implicit neural representation-based methods for ICMH.",
    "published": "2026-10-30T15:54:03Z",
    "updated": "2026-10-30T15:54:03Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41924"
  },
  {
    "id": "2610.41909",
    "title": "Structure-Aware Skill Retrieval and Arbitration for Optimization Modeling",
    "authors": [
      "Anran Liu",
      "Benzhao Hou",
      "Zongsheng Cao",
      "Daichao Wang",
      "Lang Chen",
      "Shitong Chen"
    ],
    "abstract": "Large Language Models (LLMs) can turn natural-language optimization tasks into solver-checked answers, but current agents remain brittle under narrative rewrites and often store reusable experience at the instance level. We introduce \\textsc{ArchOR}, an archetype-centric skill agent that builds on \\textsc{OptSkills} by adding two retrieval-focused modules. \\emph{Centroid-Aware Representation Learning} (CARL) refines the ordering of cached skill representations through a low-rank prototype residual. \\emph{Signature-Guided Retrieval} (S\\textsuperscript{3}R) attaches open-dimensional structural signatures to skills, prioritizes candidates by weighted Jaccard overlap, and bounds semantic re-ranking to a top-$K$ set. A baseline-preserving arbitration rule determines when the structural route should replace the original selector. With the same DeepSeek-V4.1-Flash backbone and released skill library, \\textsc{ArchOR} reaches 65.00\\% Micro-Avg.\\ Pass@1 across five benchmarks, improving over \\textsc{OptSkills} by 1.64~pp Micro-Avg.\\ and 2.68~pp Macro-Avg.",
    "published": "2026-10-30T15:45:17Z",
    "updated": "2026-10-30T15:45:17Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41909"
  },
  {
    "id": "2611.00181",
    "title": "A Rate-Distortion Optimized Skip Mode Coding Framework for Neural Video Compression in AVS",
    "authors": [
      "Yuntian Jiang",
      "Shuai Li",
      "Yanbo Gao",
      "Jinglin Zhang",
      "Hui Yuan",
      "Mao Ye"
    ],
    "abstract": "With the development of deep learning, neural video compression (NVC) is gaining increasing interest and is currently under standardization in the AVS (Audio Video Coding Standard). Skip mode coding, a crucial component in the traditional video compression, is also adopted in AVS NVC. Although the skip mode takes a large portion in encoding the motion and residual features in the NVC, there is a lack of investigation on the rate distortion performance of the skip mode coding. In this paper, we first thoroughly investigate the rate and distortion distribution in the skip mode coding within a spatial frame and under different temporal reference qualities, and demonstrate that distortion distribution changes spatially and temporally. Therefore, a rate-distortion optimized skip mode coding (RDOSkip) framework is proposed, where the rate and distortion in the skip mode coding is formulated based on a statistical distribution predicted by the hyperprior and the Bayes' theorem. An adaptive skip mode decision method based on spatial-temporal joint RD optimization is developed for the skip mode coding among channels and frames in a group of pictures. It addresses the limitation of the rigid fixed-distortion distribution assumption in skip mode coding within the existing methods that rely on a fixed skip threshold. The temporal skip mode decision method has been adopted in the ongoing AVS NVC standard and incorporated into the reference software. The proposed RDOSkip can be directly used in the inference without any training and with negligible complexity increase. Experimental results further demonstrate that the proposed RDOSkip can improve the performance by 0.90% and 1.29% on AVS and HEVC datasets, respectively, in terms of BD-rate saving.",
    "published": "2026-10-30T15:45:10Z",
    "updated": "2026-10-30T15:45:10Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00181"
  },
  {
    "id": "2610.41901",
    "title": "ReX-GG: a LLM Ensemble Pipeline for Relation-extraction and Graph Generation",
    "authors": [
      "Giacomo Magnifico",
      "Eduard Barbu"
    ],
    "abstract": "Current LLM ensemble frameworks focus on multi-step setups with additional modules for answer ranking, often opting for token and span analysis rather than structured outputs, leading to heavyweight architectures with potential fail states along the pipeline. Faster, lighter solutions are more vulnerable to hallucination propagation and can lack output control in more complex pipelines. This paper proposes a customisable, lightweight ensemble workflow of coordinated Large Language Models that leverages JSON-structured outputs and anonymous peer-review ranking to mitigate hallucinatory outputs and single-model failure points. The pipeline is demonstrated on a relation extraction task applied to popular science articles in English, targeting four ontologically-grounded relation types (strong causation, weak causation, contrastive, and compositional), with semantic node canonicalisation and interactive, colour-coded HTML causal graphs as the final output. Performance is evaluated through an anonymous user study, achieving an average perceived accuracy of 0.778 against a human-annotated gold standard. The modular architecture supports flexible deployment across both API-based and in-house LLM setups, and the full framework is released under an open license to foster reproducibility and collaborative research.",
    "published": "2026-10-30T15:39:02Z",
    "updated": "2026-10-30T15:39:02Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41901"
  },
  {
    "id": "2610.41900",
    "title": "Using Machine Learning to Measure Self-Efficacy Belief Through Learners' Interaction Traces in Technology-Enhanced Learning",
    "authors": [
      "Maeva Somny",
      "Linda Chouati",
      "Marie Lefevre"
    ],
    "abstract": "Self-efficacy beliefs play a critical role in learners' performance, academic choices, and, more broadly, in their future career trajectories. As Technology-Enhanced Learning (TEL) environments have demonstrated strong potential for supporting both performance and motivation, investigating self-efficacy within such environments is of particular interest, especially for implementing remedial practices as early as possible to support learners' self-efficacy beliefs. Our research aims to develop a system capable of detecting low self-efficacy based on learners' interaction traces while they solve exercises in a TEL system. In this paper, we present initial results and future perspectives on a detection approach based on data mining and machine learning techniques to identify features indicative of low self-efficacy beliefs. Because the detection of learners' self-efficacy beliefs through their use of TEL systems remains largely unexplored, this work is exploratory in nature. To this end, we conducted an experiment across two universities to collect interaction traces and self-reported measures of self-efficacy. We then developed a machine learning pipeline comprising multiple classification models, enabling us to highlight the importance of closely monitoring of learners' self-efficacy beliefs for improved prediction performance, given their highly dynamic nature during learning.",
    "published": "2026-10-30T15:38:30Z",
    "updated": "2026-10-30T15:38:30Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41900"
  },
  {
    "id": "2610.41899",
    "title": "General-purpose foundation models surpass specialized ones on chemical property prediction tasks",
    "authors": [
      "Stepan N. Ostarkov",
      "Gregorii A. Semakin",
      "Ivan A. Bespalov",
      "Michael G. Medvedev"
    ],
    "abstract": "Foundation models (FMs) learn reusable representations from large collections of unlabeled data. In chemistry the corresponding data mainly consists of molecular structures, which are abundant, whereas experimental measurements are scarce. Chemical FMs such as ChemBERTa and MoLFormer were therefore trained on diverse molecular structures to enable fine-tuning on small experimental datasets (less than 100 datapoints in most realistic scenarios) and subsequent property prediction. At the same time, general-purpose FMs such as GPT-6 Astra and Claude Opus 5.5 were trained on virtually all publicly available data, including knowledge of the humankind on molecular properties and laws governing them. Here we compare accuracies of chemical and general-purpose FMs on tasks from various areas of chemistry. Strikingly, general-purpose GPT-6 Astra outperforms the currently eligible chemical FMs on five physicochemical and quantum-chemical regression tasks when only 60 experimental datapoints are available. Only when provided 10x datapoints do the best chemical FMs reach performance of GPT-6 Astra: on 1,000 and 10,000 points they show performance on par with Astra on 60 and 1,000 points, respectively. Thus, counterintuitively, frontier general-purpose FMs are better suited for guiding chemical research in data-scarce areas than specialized chemical FMs, suggesting that learning relevant primitives (e.g. chemical structures) does not substitute training on relevant humankind knowledge.",
    "published": "2026-10-30T15:37:40Z",
    "updated": "2026-10-30T15:37:40Z",
    "categories": [
      "physics.chem-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41899"
  },
  {
    "id": "2610.41893",
    "title": "Automated Keyword Generation Using LLMs in a High-Volume Data Virtualization Service",
    "authors": [
      "Saiful Khan",
      "Yiwen Xing",
      "Joyraj Chakraborty",
      "Afrah Farea",
      "Philip Beaucamp",
      "Samuel Jackson",
      "Min Chen"
    ],
    "abstract": "In modern data infrastructure, a data virtualization service (DVS) allows users to create many versions of source datasets for different processing tasks. For example, a multivariate or multi-modality dataset can be used for different machine learning tasks (e.g., classification, detection, segmentation, forecasting, and so on). Data selection, participation, integration, and preprocessing in different tasks result in many virtual datasets [Khan et al., SSC 2026]. Meanwhile, different users need to discover existing virtual datasets frequently and easily to avoid duplicate efforts. To enable an effective search engine in a DVS, it is desirable to automatically generate keywords for each virtual dataset. In this work, we present a solution for generating keywords for virtual datasets using large language models (LLMs). We propose five strategies for selecting different collections of text data for processing by the LLMs. We applied the five strategies to virtual datasets created in five application case studies with different source datasets. We conducted experiments with three LLM generators and two embedding techniques. The experiments show that the performances of the five strategies depend on the quality of the text descriptions. The results help us adopt a multi-strategy implementation of a new keyword generation service (KGS) as part of an extended DVS. The work demonstrates that the capability of automated keyword generation is indispensable for a high-volume DVS that is dataset-rich and frequently accessed.",
    "published": "2026-10-30T15:34:59Z",
    "updated": "2026-10-30T15:34:59Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41893"
  },
  {
    "id": "2610.41879",
    "title": "Fuzzy selective state model for forecasting the dynamics of consumer preferences",
    "authors": [
      "P. A. Golovinski",
      "A. A. Drobyshev",
      "A. O. Shatalova"
    ],
    "abstract": "We consider forecasting the dynamics of consumer preferences of retail chain customers. A customer's preference is described by a triangular fuzzy number. The evolution of the preference over time is governed by a Mamba-type selective state space model whose hidden state is a triangular number, with computations carried out in M.G.~Matveev's two-component algebra of fuzzy numbers. The recurrence parameters are computed from crisp features, while the fuzzy part of the model remains linear with non-negative coefficients. We show that the state then always remains a proper triangular number and is a convex combination of past observations, so that the fuzziness of the forecast does not accumulate over time and the algebraic computations coincide with Zadeh's extension principle. On a synthetic example with competitor promotions and customer switching, a lightweight 107-parameter model reaches a mean absolute error of the forecast centre of 0.154 versus 0.163 for the constant-inertia evolution operator and 0.179 for the naive forecast, matches a crisp model of the same architecture and additionally provides a linguistically interpretable estimate of forecast vagueness. We also show how the linguistic readout of the forecast can be used to detect a permanent switch of a customer to a competitor.",
    "published": "2026-10-30T15:27:14Z",
    "updated": "2026-10-30T15:27:14Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.41879"
  },
  {
    "id": "2610.41877",
    "title": "Movens-Zero: Scaling Humanoid Motion Foundation Models with Large-Scale Human Videos",
    "authors": [
      "Wendong Bu",
      "Tinghong Ye",
      "Qizhou Wang",
      "Jiacheng Li",
      "Zhiqi Ge",
      "Yuze Lin",
      "Zhongqi Yue",
      "Yi Su",
      "Jingyu Wang",
      "Kai Shen",
      "Jingdong Liu",
      "Chengyuan Deng",
      "Xiaoxuan Chen",
      "Xin Tan",
      "Jiaming Ji",
      "Wenqiao Zhang",
      "Chenghong Jiang",
      "Tuoyu Li",
      "Siliang Tang",
      "Jun Xiao",
      "Tat-Seng Chua",
      "Yueting Zhuang",
      "Xingxing Wang",
      "Juncheng Li"
    ],
    "abstract": "Scaling humanoid motion foundation models is constrained by the scarcity of diverse, robot-executable data and by the difficulty of jointly learning from heterogeneous multimodal inputs while supporting real-time closed-loop control. We present Movens-5M, constructed from raw Internet videos through clip generation, quality filtering, semantic annotation, motion recovery, and physical refinement with humanoid retargeting and execution verification. It contains 15 million human-motion sequences and 5 million physically executable humanoid-motion sequences spanning over 10,000 hours, aligned with text, RGB video, speech, and music. Building on this data, we introduce Movens-Zero, a scalable understanding-generation-execution architecture that supports joint learning across modalities and real-time closed-loop execution. Task-mixed flow-matching training jointly optimizes a single action expert across seven generation tasks, enabling direct motion generation from text, speech, music, and video. Multimodal Real-Time Chunking connects overlapping chunks under continuously updated instructions and robot states for continuous closed-loop execution. We further introduce Movens-Intent, a four-track benchmark with 8,192 expert-verified condition-motion pairs across text, speech, music, and video. Experiments show consistent gains across all four modalities when scaling execution-verified data from 1% to 100% and action-expert capacity from 64M to 911M parameters, while demonstrating that data quality and cross-modal supervision improve generation and execution.",
    "published": "2026-10-30T15:25:49Z",
    "updated": "2026-10-30T15:25:49Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.41877"
  },
  {
    "id": "2611.00180",
    "title": "Learning to Live: A Step Toward Lifelong Embodied Intelligence",
    "authors": [
      "Lirong Che",
      "Peidong Wang",
      "Yimeng Su",
      "Jiong Wang",
      "Yang Chen",
      "Wenbo Fu",
      "Zhenyu Huang",
      "Tiancheng Xu",
      "Yuzhe Yang",
      "Dongli Xie",
      "Xu Cao",
      "Chuang Wang",
      "Daqi Liu",
      "Jian Su"
    ],
    "abstract": "Embodied agents are usually organized around individual tasks, yet the physical world keeps changing between tasks and during execution. We introduce LIFE (Lifelong Intelligence from Experience), a framework in which a robot observes continuously, remembers selectively, and turns experience into new capabilities. RoboBeats, a family of lightweight streaming gates, tracks conditions set by the agent and discovers new events, deciding when an observation warrants a response or a memory write. Selected observations enter Plastic Memory, a flat store of images and structured records that keeps the source evidence, so new fields and indexes can be added when later questions need them. When existing tools fall short, Explore-Distill-Mount (EDM) turns solutions found during problem solving into validated, reusable tools and skills. Under matched protocols, RoboBeats substantially improves condition tracking over its base models and, at the same writing budget, retains more useful evidence for memory question answering than uniform sampling. A case study of limited scale, replaying 24 hours of continuous video recorded by a real robot, illustrates how the integrated system builds memory from a day of experience and uses it to answer everyday questions. LIFE takes a step toward robots that become more familiar with their surroundings and more capable through experience: learning not only to complete tasks, but to live in the world.",
    "published": "2026-10-30T15:23:52Z",
    "updated": "2026-10-30T15:23:52Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2611.00180"
  },
  {
    "id": "2610.41866",
    "title": "AI evaluators favor job applications written by certain AI models, independent of candidate quality",
    "authors": [
      "Nicolò Pagan",
      "Michael Andreas Ebling",
      "Stefania Ionescu",
      "Anikó Hannák"
    ],
    "abstract": "Job applicants increasingly use large language models (LLMs) to write cover letters, while employers deploy LLMs to screen them. In this all-AI setting, we ask whether the \\emph{choice of model} affects hiring outcomes independently of candidate qualifications. We introduce a multi-model auditing framework pairing eleven LLM writer agents with nine API-hosted evaluator agents across ten job descriptions and fifty candidates per job. Four findings emerge. First, we identify a generative preference hierarchy: a consistent global ranking of writer models by evaluator acceptance, in which locally hosted models are systematically disadvantaged regardless of their license, compounded by self-preference bias where evaluators favour their own outputs. Second, evaluator models differ substantially in how much bias they introduce based on applicants' tool choice, offering actionable guidance for fairer screening design. Third, this hierarchy has measurable competitive consequences: in the most adverse pairing, approximately two (1.8) out of twenty-five qualified candidates are filtered out purely due to model mismatch. Fourth, a common mechanism explains the patterns above: writer preference and self-preference trace to a combination of how much each writer leans on specific stylistic cues and how strongly evaluators, often unanimously, reward or penalise those same cues. A further check finds little evidence that an unmeasured \"writer fingerprint\" remains once these same features are accounted for. We discuss implications for algorithmic fairness in employment, regulation of AI-assisted screening, and the design of auditing frameworks that can be reapplied as the model landscape evolves.",
    "published": "2026-10-30T15:18:29Z",
    "updated": "2026-10-30T15:18:29Z",
    "categories": [
      "cs.CY",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.41866"
  },
  {
    "id": "2610.40333",
    "title": "RFW-A: Agentic Procedural Generation of 400K Articulated Assets over 500 Categories",
    "authors": [
      "Yuanbo Lyu",
      "Changjian Pan",
      "Saining Zhang",
      "Yi Yang",
      "Peishuo Li",
      "Zhiheng Li",
      "Jialu Liu",
      "Junhao Chen",
      "Jiawei Weng",
      "Yupeng Gao",
      "Weiqing Xiao",
      "Wenyi Li",
      "Jiarui Guo",
      "Rui Zhang",
      "Jingrun Du",
      "Weiyi Lin",
      "Zenan Meng",
      "Hu Wei",
      "Lin Qu",
      "Zongzheng Zhang",
      "Hao Zhao",
      "Chaojian Li"
    ],
    "abstract": "High-quality articulated assets are essential for embodied perception, simulation, and manipulation, yet constructing them at scale remains difficult. Manual annotation and procedural modeling require substantial human effort. Recent agentic systems automate asset construction through program synthesis, but repeat costly reasoning and refinement for every new asset. Our key observation is that assets within a category can share construction logic despite variations in structure and appearance. Agentic synthesis and procedural generation are therefore complementary: agents can construct reusable programs, while procedural execution reuses the resulting logic across many samples. We therefore present RFW-A, which combines the two in a new articulated-asset generation paradigm. Starting from existing articulated programs, RFW-A organizes reusable components and their dependencies into category-level generators. Agents test and refine these generators across sampled configurations and motion states. Once constructed and validated, the generators produce diverse assets through procedural execution with no further model calls or token charges. The estimated API cost of generator authoring averages $10.62, amortizing to $0.05 per asset over 200 assets, versus $1.24 for the sampled per-asset agentic synthesis baseline. Using RFW-A, we built RFW-A-400K, containing over 400K sim-ready articulated assets across more than 500 categories. Experiments show high structural and kinematic validity and stable execution across physics simulators. Beyond asset validity, training with RFW-A-400K improves part-level articulation estimation on seen and unseen categories, while policies trained in simulation with retrieved and program-edited assets transfer zero-shot to real articulated objects.",
    "published": "2026-10-29T15:58:15Z",
    "updated": "2026-10-29T15:58:15Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40333"
  },
  {
    "id": "2610.40330",
    "title": "Multistep and Multivariate Time Series Explainability with GradientSHAP: A Wind Power Case Study",
    "authors": [
      "Robbie Southam",
      "Zhong Fan",
      "Ke Li"
    ],
    "abstract": "As the effects of climate change become increasingly apparent, the demand for renewable energy sources such as wind power continues to grow. However, renewables' variable and intermittent nature presents significant challenges in their integration into energy grids. Artificial intelligence (AI) has emerged as a powerful tool to address these issues. Still, its adoption in the energy sector has been hindered by the opacity of many AI models, which often function as black boxes. This paper introduces a carefully adapted GradientSHAP approach to provide interpretability for multivariate, multistep wind power forecasting -- a largely underexplored area. This capability is critical for day-ahead grid management and, to the best of our knowledge, this is the first study to apply GradientSHAP in the context of wind power forecasting. To address the inherent dimensionality, we developed novel visualizations that deliver both local and global explanations, uncovering intricate relationships between environmental factors, site-specific conditions, and temporal dynamics. While GradientSHAP is not an out-of-the-box solution, our findings demonstrate that, with thoughtful handling of SHAP values and domain expertise, it can offer valuable insights into model behaviour, supporting more informed and trustworthy decision-making. Nevertheless, its complexity poses challenges for practical implementation. Future research should focus on streamlining these interpretability methods to make them more actionable for routine deployment in critical energy applications.",
    "published": "2026-10-29T15:57:13Z",
    "updated": "2026-10-29T15:57:13Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40330"
  },
  {
    "id": "2610.40036",
    "title": "Hybrid AI Patterns: Thirteen Ways to Couple Language Models with Rules, and How to Choose Among Them",
    "authors": [
      "Siegfried Handschuh",
      "Götz-Henrik Wiegand",
      "Lorena Raichle"
    ],
    "abstract": "Language models handle text well, and rule engines give conclusions with proofs. Systems that combine the two are usually described by example, and the same coupling turns up under different names in agent frameworks, guardrail toolkits and neuro-symbolic research. This document defines thirteen patterns for coupling a language model with an executable rule language, in the catalogue form introduced for object-oriented design: intent, motivation, applicability, participants, collaborations, consequences, implementation, known uses and related patterns. Four patterns concern what crosses the boundary between model and rules, five who controls whom, three how the model takes part in the reasoning, and one how knowledge is kept over time. Five invariants hold for every combination, and five failure patterns name the couplings that break them. We relate the catalogue to published pattern catalogues and taxonomies of hybrid and neuro-symbolic systems and show where they overlap with it. A decision guide leads from a problem to a pattern. It rests on our measurements, including the cases in which a model alone did as well as the hybrid or better, and it reports what each design cost.",
    "published": "2026-10-29T13:37:28Z",
    "updated": "2026-10-29T13:37:28Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40036"
  },
  {
    "id": "2610.40030",
    "title": "Cheap Retrieval and Observation Credit Assignment from One Quantity: The Value of Information",
    "authors": [
      "Daniel Strauss",
      "Nikolaos Sotirakis",
      "Zhenshan Bing",
      "Alois Knoll"
    ],
    "abstract": "Memory in reinforcement learning raises two problems. Attention finds the relevant item by scoring the whole store, which is costly for robots under latency and energy limits. When a retrieved memory pays off, credit for acquiring it must cross the whole sequence. We argue that both are governed by one quantity, the value of information, and propose to estimate it from archived rollouts with a learned world model. We obtain that, when read at the observation, it yields a provable lower bound on the optimal value of the acquiring action, which floors its TD target and attributes this floor to the observation that earned it. Read at the decision, it defines the optimal retrieval set. A pilot retrieval system, to be trained and improved with this signal, solves a memory task with reduced context.",
    "published": "2026-10-29T13:36:06Z",
    "updated": "2026-10-29T13:36:06Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40030"
  },
  {
    "id": "2610.40029",
    "title": "Segment Anything Model Based Context Guided Mamba Unet for Medical Image Segmentation",
    "authors": [
      "Chenchen Wang"
    ],
    "abstract": "Medical image segmentation is crucial for clinical diagnosis and treatment planning, requiring both global contextual understanding and fine-grained structural precision. While the Segment Anything Model (SAM) demonstrates strong generalization capabilities, its direct application to medical images often lacks domain-specific adaptability. Meanwhile, State Space Models (SSMs)-based methods, such as Mamba, efficiently capture long-range dependencies but may struggle with preserving fine anatomical details. To address these challenges, we propose a segment anything model based context guided mamba unet, SAMBA-UNet, a novel framework that integrates SAM's context knowledge with Mamba's hierarchical feature learning to enhance both global representation and local detail refinement. Specifically, we introduce the Hierarchical Context Enhancement Module (HCEM), an attention-based fusion module that deeply incorporates the multi-level features of SAM and Mamba to improve detail perception and segmentation precision. Additionally, we employ LoRA and Adapter-based fine-tuning to adapt SAM to medical imaging tasks, further enhancing its domain-specific segmentation capability and robustness. We conducted a comprehensive study on several medical segmentation datasets, including Synapse, ISIC17, and ISIC18, evaluating our method across multiple metrics. Experimental results demonstrate that SAMBA-UNet achieves state-of-the-art performance, effectively balancing generalization, segmentation accuracy, and computational efficiency. Our code will be released upon acceptance.",
    "published": "2026-10-29T13:36:01Z",
    "updated": "2026-11-01T07:22:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40029"
  },
  {
    "id": "2610.40023",
    "title": "HEMO: Harness Self-Evolution for Multi-Objective Combinatorial Optimization",
    "authors": [
      "Jianghan Zhu",
      "Cong Zhang",
      "Ni Zhang",
      "Yifan Yang",
      "Yew Soon Ong",
      "Zhiguang Cao"
    ],
    "abstract": "Automatic operator design (AOD) has increasingly adopted large language models (LLMs) to generate problem-specific search and variation operators for multi-objective combinatorial optimization (MOCO). Yet most methods evolve the operators while leaving the process that discovers them fixed. This limits adaptation as new Pareto trade-offs and operator interactions change where and how the search should proceed. We introduce HEMO, which makes the AOD harness itself a self-evolving optimization target. HEMO maintains a persistent harness state and updates one module at a time, revising the logic that determines which experience to retrieve, which operators to improve, which parents to select, and how to formulate the orchestration of search steps. Downstream solution quality and runtime guide these updates, while a discounted UCB scheduler directs adaptation toward promising modules as their utility changes. A persistent memory filesystem preserves candidate outcomes and diagnostic feedback across harness states, enabling successive states to build on accumulated optimization experience. Experiments across eight MOCO tasks and two structurally distinct evolutionary backbones demonstrate strong performance against conventional evolutionary, neural, and LLM-based AOD baselines, together with effective transfer to related tasks. HEMO extends automatic operator design beyond evolving individual operators to improving the search process that discovers them.",
    "published": "2026-10-29T13:32:00Z",
    "updated": "2026-10-29T13:32:00Z",
    "categories": [
      "cs.NE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40023"
  },
  {
    "id": "2610.40018",
    "title": "DINOv2 for PET: A Pre-Training Domain Benchmark Across Classification, Segmentation, and Prognosis",
    "authors": [
      "Roxanne De Maeyer",
      "Yannick Brackenier",
      "Vicky De Ridder",
      "Simon DeKeyser",
      "Maarten Larmuseau",
      "Jef Vandemeulebroucke"
    ],
    "abstract": "DINO (self-DIstillation with NO labels) has become a stan- dard for self-supervised pre-training, producing features that generalise across datasets and downstream tasks. In medical imaging it has been adopted mainly for radiology (X-ray, CT and MRI), where even natural- image DINO features transfer well. In the literature, these features have been reported to transfer worse to functional imaging such as PET. Yet PET-specific DINO models have barely been introduced, and even less validated across multiple tasks and datasets. We present PET-DINOv2-2D, the first DINOv2 model pre-trained on 2D PET, and benchmark it against open-source encoders: the origi- nal DINOv2 (pre-trained on the LVD-142M natural-image dataset) and OmniRad (pre-trained on CT, MRI and ultrasound). Using the same lightweight heads for every backbone, and despite far less pre-training data, PET-DINOv2-2D matches or outperforms both on three down- stream PET tasks: normal/abnormal classification, lesion segmentation and recurrence-free survival prognosis. Its advantage is largest when few labels are available, suggesting that PET pre-training gives more transferable, label-efficient features. Code is made available at https://github.com/nuclivision/pet-dinov2-2d/.",
    "published": "2026-10-29T13:30:24Z",
    "updated": "2026-10-29T13:30:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40018"
  },
  {
    "id": "2610.40007",
    "title": "Greenscapes: Optimized Vegetation Configurations in Cities",
    "authors": [
      "Patryk Bartkowiak",
      "Marcin Marlewski",
      "Paweł Wójcik",
      "Jae Joong Lee",
      "Dominik L. Michels",
      "Bedrich Benes",
      "Sören Pirk",
      "Wojciech Pałubicki"
    ],
    "abstract": "Vegetation plays a central role in cities, serving functional roles such as balancing shade and sky exposure, shaping the microclimate, carbon sequestration, and providing acoustic screening. Furthermore, aesthetic choices in landscape styles (formal, modernist, picturesque) are important for citizens' well-being and should be considered in the design of urban landscapes. In this paper, we present a novel method for placing vegetation, ranging from shrubs to large trees, in 3D urban scenes. Our method uses individual lots as input and employs a conditioned Vision-Language Model (VLM) to generate a top-down rendering of vegetation, placing large trees, small trees, and shrubs on lawn areas. This rendering is then converted into a 3D scene by detecting individual plants and selecting appropriate 3D assets. To refine the proposed configurations, we define an optimization loop that keeps the VLM-generated positions fixed after a deterministic feasibility repair and uses CMA-ES to optimize per-instance scale transformations along with discrete vegetation asset substitutions. To define the objective function for the optimization, we evaluate the generated 3D scenes with efficient surrogate models of shade and path-based acoustic exposure. Furthermore, we render in-scene views at each optimization step to compute view-dependent perceptual descriptors, enabling the generation of both aesthetic and functional vegetation layouts for urban scenes.",
    "published": "2026-10-29T13:24:24Z",
    "updated": "2026-10-29T13:24:24Z",
    "categories": [
      "cs.GR",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40007"
  },
  {
    "id": "2610.40006",
    "title": "Human--AI Interactions as First-Class Data: A Formal Interaction Model and Runtime for Explainable AI Collaboration",
    "authors": [
      "Michela Taufer",
      "Kin Ng",
      "Ian Lumsden",
      "Aashish Pandey",
      "Rajasi Gore",
      "Angelina Ju",
      "Sukanya Moudgalya",
      "Ewa Deelman",
      "Sai Swaminathan"
    ],
    "abstract": "AI assistants are increasingly embedded in computational notebooks, scientific workflows, software engineering tools, and learning systems, yet human-AI interactions are often treated as transient prompt-response exchanges rather than durable data products, hindering reproducibility, explainability, replay, behavioral analysis, and adaptive AI support. We argue that these interactions form a new data class requiring formal representation and introduce the Human-AI Interaction Description Language (HAIDL), a formal interaction model with a Backus-Naur Form-inspired concrete syntax. HAIDL encodes each interaction as a structured object capturing computational context, user request, prompt payload, AI response, feedback, problem context, provenance, and model metadata. We integrate this vision into HAIDL-X, a middleware for JupyterLab that instantiates HAIDL by capturing user-bot state, building contextualized prompts, interfacing with AI providers, collecting feedback, and storing interactions in a repository. We add a learning layer over HAIDL that maps interaction objects and notebook execution traces into reproducible measures of user behavior, including engagement, performance, help-seeking, error-oriented use, and learning personas. HAIDL-X provides a foundation for treating human-AI collaboration as structured, queryable, replayable, analyzable data.",
    "published": "2026-10-29T13:23:54Z",
    "updated": "2026-10-29T13:23:54Z",
    "categories": [
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.40006"
  },
  {
    "id": "2610.40005",
    "title": "Efficient Learning of Mechanism Designs and Compositionality",
    "authors": [
      "João Pedro Gandarela",
      "Thiago Rios",
      "Stefan Menzel",
      "André Freitas"
    ],
    "abstract": "Learning mechanism behaviour requires a representation of how connected parts jointly constrain motion. We study whether exposing reusable constraint subassemblies improves prediction from limited data. Assur-KB represents planar mechanisms through irreducible modules, boundary interfaces, and solve dependencies while retaining source geometry. Our theoretical results characterize transfer through module interfaces and establish physical limits arising from missing interface information and accumulated sensitivity. To test the representation claim directly, the experimental design compares matched mechanism-curve pairs across training budgets within the same multilayer-perceptron family. This controlled comparison establishes the utility of the complete representation in the evaluated learning setting. Assur-derived features provide a geometric-mean $1.8\\times$ advantage in sample efficiency over flattened adjacency and position inputs across budgets of 50-10,000 mechanisms. Separate experiments establish invariance under tested joint relabelings, higher valid-generation rates under dyadic composition, and a coarser structural index over 10.02 million mechanisms. In summary, the theory and experiments identify how physical constraint structure supports limited-data prediction and which interface conditions govern compositional reuse.",
    "published": "2026-10-29T13:23:44Z",
    "updated": "2026-10-29T13:23:44Z",
    "categories": [
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.40005"
  },
  {
    "id": "2610.40002",
    "title": "How Much Should a VLA Trust Its Reasoning? Step-Level Guidance as a Measured Action-Value Function",
    "authors": [
      "Dabin Seo",
      "Eunhyek Joa"
    ],
    "abstract": "Reasoning vision-language-action (VLA) policies write a reasoning trace and then decode the action from it. A wrong trace yields a wrong action, and even a correct-looking trace can mislead the plan. Existing remedies ask whether the reasoning is right. We ask how strongly it should steer. CoC-CFG applies classifier-free guidance between the policy's context and the same context without the reasoning span. One weight per Euler step attenuates or amplifies the reasoning, and w=1 recovers the original policy. We treat the choice of this weight as a Markov decision process whose action values are measured, not bootstrapped. With the expert frozen and the noise fixed, applying a weight for one step and finishing the plan under the current controller returns that weight's value exactly. Q-adaptive guidance fits these values with small critics and improves the controller conservatively. In the Alpasim driving simulator it outperforms every fixed weight and online RL (SAC, GRPO) in open loop, and in closed loop it passes 262 of 300 scenes, against 252 for the original policy. On held-out frames of the Waymo end-to-end driving benchmark, its first three stages outperform every fixed weight, four adaptive-guidance methods, SAC and GRPO. On the hidden test set, a frozen Alpamayo 1.5 with rule-based camera and vehicle conversions and Q-adaptive guidance sets a new state of the art among published methods: 8.135159 rater feedback score, against 8.079 for the best published method.",
    "published": "2026-10-29T13:20:35Z",
    "updated": "2026-10-29T13:20:35Z",
    "categories": [
      "cs.RO",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40002"
  },
  {
    "id": "2610.39992",
    "title": "Accumulating Pruning Constraints: New Exact Polynomial-Space Algorithms for Max 2-SAT",
    "authors": [
      "Konstantin Kutzkov"
    ],
    "abstract": "We present deterministic polynomial-space algorithms that solve Max 2-SAT on $n$ variables exactly in time $\\Ostar(2^{(1-γ)n})$, for a fixed $γ>0$, on several classes of instances whose clause density may grow with $n$. Our main tool extends the classic DPLL branching algorithm. When the search gives a variable its less promising value, comparing the two values of the variable yields a pruning constraint that is satisfied by some optimal assignment. Accumulating these constraints along each branch prunes all but an exponentially small fraction of the assignments. The classes are formulas with many biased variables, semirandom 2-CNF formulas, and Max-Cut on regular expander graphs and on graphs generated by a stochastic block model. In a semirandom formula, the pairs of variables that may share a clause are arbitrary, and the clauses on these pairs are random. For semirandom formulas and block-model graphs, the algorithms are still exact on every input, and the time bound holds with high probability over the input. To our knowledge, these are the first polynomial-space algorithms with such a running time for nontrivial classes of dense Max 2-SAT instances. Beyond these classes, the pruning constraints can be added to any branching algorithm for Max 2-SAT, and we expect them to be of practical relevance for general formulas, in particular for sparse ones, where each constraint involves only a few variables.",
    "published": "2026-10-29T13:12:14Z",
    "updated": "2026-10-29T13:12:14Z",
    "categories": [
      "cs.DS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39992"
  },
  {
    "id": "2610.38497",
    "title": "Vision-Based Density Estimation for Adaptive Traffic Control",
    "authors": [
      "Mohammad Usaid",
      "Deepak Silaych",
      "Hrithik Mhatre",
      "Archak Mittal"
    ],
    "abstract": "Traffic congestion is becoming a critical challenge in rapidly growing urban centers, particularly in developing nations where rapid urbanization and inadequate transport infrastructure place increasing strain on transport networks. In highly heterogeneous and chaotic traffic flows, camera-based traffic-state estimation is limited by severe vehicle occlusion and overlap. In this paper, we propose a framework to optimize traffic flow directly from stochastic visual observations. The architecture is structurally decoupled into three primary components: (a) vehicle density estimation, (b) predictive dynamics modeling, and (c) policy optimization. The proposed methodology introduces a convolutional neural network (CNN) that learns the mapping from camera feeds to spatial density maps, utilizing an adaptive k-nearest-neighbor (k-NN) Gaussian kernel to handle varying congestion levels. This feeds into an ST3DNet predictive module for spatiotemporal forecasting, followed by a hierarchical Graph-Transformer Multi-Agent Reinforcement Learning (MARL) algorithm to optimize signal phases. The density estimation stage was evaluated on 40 annotated intersection images from Rambagh 4, Jaipur, India, with a reported five-fold validation mean absolute error (MAE) of $3.32 \\pm 0.95$ vehicles and a mean absolute percentage error (MAPE) of 14.5%. These results pertain to the perception component; empirical training and evaluation of the forecasting and control stages remain future work.",
    "published": "2026-10-28T09:15:54Z",
    "updated": "2026-10-28T09:15:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38497"
  },
  {
    "id": "2610.38496",
    "title": "Accelerating Nonlinear MPC by Behavior Cloning with Separated Timescales: Application to Nuclear Reactor Load-Following",
    "authors": [
      "Perceval Beja-Battais",
      "Alain Grosset{ê}te",
      "Nicolas Vayatis"
    ],
    "abstract": "Behavior Cloning (BC) of expert controllers for multiscale dynamical systems is challenging: state variables evolving at widely separated timescales induce highly nonlinear couplings that a shared latent space may fail to adequately represent, degrading closed-loop generalization. We propose Structured Representation Learning for Behavior Cloning (SRLBC), an architecture designed to leverage the physical knowledge of multiscale systems in which slow state variables, fast (stiff) state variables, and predictable exogenous inputs evolve at different timescales. On 500 long-horizon roll-outs of a pressurized water reactor (PWR) load-following benchmark -a high-dimensional, stiff industrial system with challenging safety constraints -and across 20 training seeds, separated embeddings systematically outperform shared embedding baselines on cumulative cost, imitation accuracy and constraint satisfaction. The resulting standalone policies approach NMPC closed-loop performance at a computational cost 15 times lower on average. Since standalone policies still leave a few percent of trajectories infeasible, we embed the learned policies in a safety-augmented approximate NMPC framework, in which the optimizer is only called when the predicted input sequence is not certified as safe. This yields controllers still 6.8 times faster than the NMPC controller on average, with a feasibility (i.e., constraint satisfaction) of at least 99.8% for all architectures, SRLBC retaining the lowest closed-loop cost. Under distribution shift, standalone BC policies degrade sharply: SRLBC degrades the least, and once safety-augmented, it retains a feasibility above 98% with the lowest closed-loop cost. Beyond the quantitative results, Jacobian-based sensitivity analysis shows that the resulting controller relies on a sparse and less redundant set of latent features, each attributable to a single group of physical variables, and aligned with the physical timescale decomposition of the system.",
    "published": "2026-10-28T09:15:18Z",
    "updated": "2026-11-02T13:30:38Z",
    "categories": [
      "cs.AI",
      "cs.LG",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.38496"
  },
  {
    "id": "2610.38494",
    "title": "Calibrating Track-Query Updates at Test Time for Multi-Object Tracking",
    "authors": [
      "Riku Inoue",
      "Shogo Sato",
      "Yu Mitsuzumi",
      "Kazuhiko Murasaki",
      "Tomoyasu Shimada",
      "Takashi Sano"
    ],
    "abstract": "Multi-Object Tracking (MOT) requires localizing multiple objects and maintaining their identities over time. Recent query-propagation trackers carry target-specific representations across frames and update them with current-frame image features, yet identity association remains difficult when visually similar targets overlap or cross. During such interactions, current-frame query updates may contain components directed toward nearby active tracks, which may affect identity association in later frames. To investigate this issue, we analyze track-query updates preceding identity switches (IDSWs), where the same target is assigned a different track ID. Our analysis shows that (i) propagated track-query representations change more abruptly before IDSWs, (ii) current-frame updates have larger positive projections along directions toward other active tracks, and (iii) bounding-box intersection over union (IoU) retrieves the counterpart track involved in a subsequent IDSW with high recall when that track remains active before the switch. Motivated by these findings, we propose Test-time Track-Query Calibration (TQC), a training-free and gradient-free method for query-propagation trackers. TQC calibrates the tracker output before propagation using a bounded correction estimated from update components directed toward nearby active tracks. It requires only track-query representations and bounding boxes available during inference, without retraining or architectural modification. Across nine DanceTrack and SportsMOT test settings, TQC improves HOTA and AssA in all settings and IDF1 in eight, with an average HOTA gain of +0.38 and limited inference overhead. Controlled variants on six validation settings further show that TQC's correction direction yields more consistent HOTA improvements than alternative directions with matched correction norms.",
    "published": "2026-10-28T09:07:44Z",
    "updated": "2026-10-28T09:07:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38494"
  },
  {
    "id": "2610.38488",
    "title": "Generative AI as a Mediator in Creator Collaboration: Challenges, Design Opportunities, and Concerns",
    "authors": [
      "Hajun Kim",
      "Jini Kim",
      "Yunjae Josephine Choi"
    ],
    "abstract": "As Generative AI (GenAI) expands beyond individual workflows and becomes increasingly integrated intocollaborative creative work, its potential to address the fundamental challenge of building common groundamong creators with diverse expertise remains underexplored. Specifically, we lack empirical understandingof how GenAI can mediate collaboration asymmetries among heterogeneous creators. To address this gap,we conducted a multi-method study with narrative writers (N = 10) and visual designers (N = 10) in thecontext of game development. Our findings demonstrate that GenAI goes beyond individual assistance toserve as a collaborative mediator by aligning creative intent, sustaining shared understanding, and mitigatinginterpersonal friction among creators. At the same time, we highlight concerns that GenAI may reducecommunication among creators, undermine mutual trust, and reshape interpersonal dynamics and collaborativeprocesses. Based on these insights, we identify design opportunities for GenAI tools that nurture collaborativesynergy while preserving the creativity and values of human work.",
    "published": "2026-10-28T08:58:58Z",
    "updated": "2026-10-28T08:58:58Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38488"
  },
  {
    "id": "2610.38482",
    "title": "Geometry-Aware Trajectory State Modeling for Few-Shot Action Recognition",
    "authors": [
      "Zhiqi Miao",
      "Marko Haralović",
      "Stanislav Levendeev",
      "Sarvesh Angadi",
      "Jannatul Ferdous",
      "Dan-Cristian Ploesteanu",
      "Jiapan Guo",
      "Estefanía Talavera"
    ],
    "abstract": "Few-shot action recognition (FSAR) requires representations that expose discriminative motion dynamics from only a few labeled videos. Recent trajectory-based methods leverage long-term point tracks for explicit temporal correspondence, but often treat trajectories as carriers of sampled visual features or summarize their motion with compact 2D displacement-based descriptors. We instead view an action as the ordered evolution of 2.5D trajectory states and their local geometric interactions. Based on this view, we introduce GeoTRAM, a geometry-aware trajectory state modeling framework for FSAR. GeoTRAM lifts sparse tracks into 2.5D trajectories, where StateMotion models ordered intra-trajectory state evolution and RelMotion captures state-conditioned local interactions through time-varying relative geometry and motion. Quality-filtered spectral sampling provides more reliable trajectory initialization; complementary semantic, motion, and depth cues are separately refined and preserved for joint spatio-temporal modeling; action-guided reweighting and top-$ρ$ trajectory selection support complementary frame- and trajectory-level matching. Experiments on five FSAR benchmarks demonstrate strong gains on the motion-centric Something-Something benchmarks while maintaining competitive performance on more appearance-driven benchmarks and a favorable accuracy--efficiency trade-off.",
    "published": "2026-10-28T08:56:33Z",
    "updated": "2026-10-28T08:56:33Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38482"
  },
  {
    "id": "2610.38467",
    "title": "StreamStudio: Exploring Video Authoring with Streaming Autoregressive Generation",
    "authors": [
      "Boyu Li",
      "Zhe Lin",
      "Eli Shechtman",
      "Ding Li",
      "Hongbo Fu",
      "Yuqian Zhou"
    ],
    "abstract": "We present StreamStudio, a prototype system that explores a new authoring paradigm for streaming video generation. Instead of entering a prompt and waiting for a complete video before making changes, creators can interact with the generation as it unfolds: steering what comes next, returning to earlier moments, and exploring different continuations. In this way, StreamStudio shifts creative control from post-generation revision to continuous interaction with the generative process. Our contribution centers on this authoring paradigm and the interaction mechanisms that make streaming generation directly manipulable. StreamStudio is designed as a plug-and-play interface that can work with compatible generation and editing models, allowing its interaction model to evolve alongside advances in underlying video models. As streaming models become faster and easier to control in the future, such an interface may support more flexible and controllable video creation, including richer edits and multimodal interventions during generation.",
    "published": "2026-10-28T08:43:34Z",
    "updated": "2026-10-28T08:43:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.38467"
  },
  {
    "id": "2610.38462",
    "title": "Automatic Iconographic Annotation of Medieval Illuminations: Comparing Generative Vision-Language Models and Supervised Discriminative Classifiers",
    "authors": [
      "Vincent Jolivet",
      "Lucas Terriel",
      "Chahan Vidal-Gor{è}ne"
    ],
    "abstract": "The large-scale digitisation of medieval manuscripts creates a growing need for automated iconographic indexing. We evaluate two complementary paradigms for this task on 9,735 full-folio images annotated with 2,333 TIMEL concepts: generative Vision-Language Models (VLM) and supervised discriminative classifiers (SDC). The VLM experiments evaluate fine-tuning, structured JSON decoding, taxonomybased candidates generation, and deterministic reranking. The discriminative experiments evaluate flat, hierarchy-aware, and patch-attention heads over a frozen DINOv3 encoder. Our results highlight key functional differences: ML-Decoder (SDC) achieves the strongest overall retrieval performance (precision@1 of 0.696, MRR of 0.806), with loss calibration (Asymmetric Loss) serving as the primary performance lever. While SDCs provide superior precision and reliability within a closed vocabulary, VLMs offer strong semantic generalization and broad taxonomic coverage, particularly through structured JSON targets and verify-calibrate reranking (hierarchical F1 of 0.559). Furthermore, model behavior strongly depends on concept abstraction: SDCs excel at perceptually grounded descriptive concepts, whereas VLMs provide useful hypotheses for complex interpretative scenes. Finally, we find that enforcing explicit hierarchy within model architectures limits coverage compared to spatial feature aggregation. Overall, rather than competing approaches, SDCs and VLMs emerge as complementary components for future hybrid indexing systems combining structured retrieval with exploratory annotation assistance. As a methodological contribution, we define the soft F1 metric to provide a taxonomy-aware evaluation that credits semantically close predictions based on lowest common ancestors.",
    "published": "2026-10-28T08:38:13Z",
    "updated": "2026-10-28T08:38:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.38462"
  },
  {
    "id": "2610.38458",
    "title": "Tracekit Box: Running AI Agents in Micro-VMs Where Every Way Out Is Decided and Signed",
    "authors": [
      "Bravish Ghosh"
    ],
    "abstract": "AI agents now install packages, call model APIs with their operators' keys and change code in repositories that deploy to production. The network, credentials and write access they need are also how they can leak data, steal a key or change a system nobody approved. Sandboxes contain an agent but leave little evidence of what crossed their boundary; tracing records what happened but contains nothing. We present Tracekit Box, an open-source system (MIT, v0) that does both. Each job runs in its own Firecracker micro-VM with no network card. The only ways out are doors on the host, served over vsock: commands, outbound connections, secrets, model calls and the workspace patch. At every door a Tracekit signer the agent cannot reach decides what passes and signs it into one run per box. Names are resolved on the host; private and cloud-metadata addresses are always refused; secrets never enter the VM, which sees placeholders the host proxy swaps for real values only in one header for bound hosts; and changes come back as a patch applied file by file after the signer decides each file. Box fails closed, and each job ends as a .tkb bundle anyone can verify offline. All 13 end-to-end checks pass on a real KVM runner (the test that runs them takes 28.5 s, including image pull and boot); 15 fuzz targets on the trust boundary produced nine findings, all fixed; and the demo run's 102 signed records verify. Box does not yet run Firecracker's jailer, needs a co-located signer, and records processes inside the VM only where they cross a door.",
    "published": "2026-10-28T08:36:22Z",
    "updated": "2026-10-28T08:36:22Z",
    "categories": [
      "cs.CE",
      "cs.AI",
      "cs.CR",
      "cs.OS"
    ],
    "url": "https://arxiv.org/abs/2610.38458"
  },
  {
    "id": "2610.38448",
    "title": "Benchmarking decision models against generative large language models on medical multiple-choice questions",
    "authors": [
      "Oscar Freyer",
      "Daniel Glauert",
      "Moritz Hofmann",
      "Max Ostermann",
      "Stephen Gilbert",
      "Jakob Nikolas Kather"
    ],
    "abstract": "Medical workflows often require selecting among predefined options. We compared 13 decision models with 15 generative large language model configurations, including different reasoning settings, using 1,273 four-option MedQA questions under text-only conditions. Accuracy ranged from 67.71% to 89.08% for decision models and from 78.32% to 96.86% for generative configurations. Among the tested configurations, Mercury Decide had the lowest mean final-attempt cost (USD 0.0069 per 1,000 questions), while Clef Omni had the shortest median request duration (0.291 seconds). Decision-model probabilities distinguished correct from incorrect answers, but error rates among answers assigned probabilities of at least 0.90 ranged from 1.71% to 12.77%. Answer agreement across three runs ranged from 92.30% to 100%, while probability repeatability varied. Decision models offered resource advantages alongside lower peak accuracy; selecting models for medical workflows requires considering probability quality and repeatability together with accuracy and the resources needed to detect and correct errors.",
    "published": "2026-10-28T08:25:35Z",
    "updated": "2026-10-28T08:25:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38448"
  },
  {
    "id": "2610.38445",
    "title": "DES-JEPA: Learning a Shared Vocabulary for High-Dimensional Discrete Event Sequences",
    "authors": [
      "Hugo Math",
      "Maximilian Forstenhäusler",
      "Christos Anagnostopoulos"
    ],
    "abstract": "Temporal foundation models such as Chronos and TimesFM generalize across domains through a shared numerical observation space. In contrast, discrete event sequences (DESs), including operational event logs or patient clinical-event trajectories, have domain-specific event vocabularies whose labels lack a consistent correspondence across domains. Beyond this lack of consistency, the number of distinct events in real-world settings is high enough to challenge both classical temporal point process modeling and current in-context foundation inference models such as FIM-PP. Critically, current foundation models for DESs are limited to a small, fixed number of event types, restricting their applicability to realistic, high-dimensional event streams. To address this, we propose two complementary modules: (i) DES-JEPA, a joint-embedding predictive architecture that learns a shared discrete vocabulary from synthetic stochastic processes with unaligned event vocabularies; and (ii) DES-PFN, a discrete event sequence prior-fitted network that reuses the learned vocabulary for in-context next-event prediction. Without task-specific fine-tuning, this framework achieves competitive zero-shot performance on eight unseen real-world datasets and scales up to 700 distinct event types.",
    "published": "2026-10-28T08:24:09Z",
    "updated": "2026-10-28T08:24:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.38445"
  },
  {
    "id": "2610.38439",
    "title": "Predict the Reward, Not the World: World Reward Models for ML Agents",
    "authors": [
      "Yuxiao Lee",
      "Zherui Yang",
      "Fan Liu",
      "Hao Liu"
    ],
    "abstract": "Search-based machine-learning (ML) agents improve a solution by writing candidate programs, executing them, and keeping the best. Execution gives the search reliable feedback, but a single run can take hours, and most runs end in programs the agent discards. Recent agents try to save these runs by letting a large language model act as a world model that predicts how each program would perform. However, a wrong prediction feeds the search false information. We argue that an agent does not need to predict the outcome of execution, only the decision that execution would support. We propose World Reward Models (WRMs), which learn from real execution results to choose directly which candidate will perform better, without predicting any intermediate outcome. We prove that a selector which predicts execution from the same inputs cannot outperform the best direct selector, that predicted outcomes add an error which can make a likelihood-trained world model prefer the worse program on every instance, and that cross-entropy on executed winners drives a WRM toward the optimum. Our WRM, ForeCritic, adapts a 9B typed decision model to 5k executed program pairs. On 12,438 held-out pairs from 26 ML tasks, it picks the better program 79.4% of the time, while general-purpose LLM judges reach 53--62%, and its probabilities are calibrated. Inside AIDE, ML-Master, and ForeAgent, it cuts mean task time by 4.4--7.5 times while keeping their mean scores within 0.01 or raising them.",
    "published": "2026-10-28T08:20:06Z",
    "updated": "2026-10-28T08:20:06Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.38439"
  },
  {
    "id": "2610.38438",
    "title": "RoleFUZZER: User-Behaviour Fuzzing for Role-Specification Adherence in Large Language Models",
    "authors": [
      "Kshitish Ghate",
      "Michael Saxon",
      "Tadayoshi Kohno",
      "Aylin Caliskan"
    ],
    "abstract": "Large language models (LLMs) are often conditioned into specific roles such as tutors, interviewers, or agents acting for an organisation, through system prompts that specify how they should behave. The extent to which they can actually adhere to these role specifications under multi-turn interactions with realistic and potentially problematic users is understudied. To address this, we propose user behaviour fuzzing, a guided search over plausible user behaviours that can lead a model to violate its role specification, and introduce RoleFUZZER, a framework that adapts coverage-guided fuzzing from software testing to operationalise the search. RoleFUZZER constructs scenarios guided by a user-behaviour coverage grid that crosses a grounded taxonomy of user interaction types and the role specification of the model under test i.e. what is under pressure. With RoleFUZZER, we evaluate LLMs across five role specifications, including tutor, financial advisor, AI interviewer, antagonistic roleplay character, and web agent under organisational policies. Across simulated and validated conversations in 15 campaigns, the framework reaches >= 89% coverage of the 64-cell behaviour grid for every model and role tested, and surfaces specification-grounded failure patterns. At an equal budget of conversations, removing the RoleFUZZER grid and asking an LLM to generate specification targeting users free-form lowers coverage to 39-69% with fewer kinds of violations. The same specification can also fail in opposite directions. For e.g., on the antagonist, open-weight target models override the player's safety signals, while Claude Haiku 4.5 breaks character instead. RoleFUZZER offers a tractable way to uncover vulnerabilities in LLMs across role specifications by testing diverse user behaviours that are likely to violate them.",
    "published": "2026-10-28T08:19:36Z",
    "updated": "2026-10-28T08:19:36Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.38438"
  },
  {
    "id": "2610.37459",
    "title": "M4Bench: Evaluating Procedural Specification for Clinical EHR Derivation Agents",
    "authors": [
      "Hannes Ill",
      "Rafi Al Attrach",
      "Rajna Fani",
      "Ahram Han",
      "Ryohei Yamamoto",
      "Marlene Louisa Moerig",
      "Dukyong Yoon",
      "Leo Anthony Celi"
    ],
    "abstract": "Clinical research over electronic health records depends on derived variables whose definitions sit outside the schema, in item codes, time windows, missingness rules, and output-grain choices that change cohorts and downstream conclusions. We introduce M4Bench, 28 clinical derivation tasks across 15 task families on MIMIC-IV and eICU, to test whether AI coding agents can reproduce such derivations and how clinician-reviewed agent skills change their results. Its controls decompose the value of skills into specification completeness, delivery format, and schema familiarity. In a Docker-isolated Codex campaign (GPT 5.4 Mini and GPT 5.5), skills raise reward by 0.136 over the no-skill baseline, with 26 of 28 tasks improving. Specification completeness accounts for most of this gain: on an eight-task control subset, an operational spec alone raises reward by 0.162, and skills add only 0.024 on top, indistinguishable from zero. On a ten-task subset, decoy skills score like no skill and raw reference SQL nearly matches targeted skills, arguing against generic context or the skill format as the explanation. Schema obfuscation and restructuring preserve 86% and 70% of the skill gain (GPT 5.4 Mini, 26 MIMIC-IV tasks), a descriptive robustness check rather than a bound on memorization. A descriptive Claude Code replication on all 28 tasks (Opus 4.7 and Sonnet 4.6, 560 runs) is directionally consistent (+0.120, 21 of 28 tasks improving). These gains are partial agreement with the reference, not completed tasks: only 25 of 280 with-skill and 13 of 280 no-skill Codex runs pass every strict check, and skills barely change which rows agents return (key F1 +0.003). Skills are released as a versioned, clinician-reviewable markdown delivery format, with a family-level reference-validity audit. M4Bench releases tasks, skills, evaluation code, and sanitized per-run evidence as an open-source benchmark.",
    "published": "2026-10-27T15:59:13Z",
    "updated": "2026-10-27T15:59:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37459"
  },
  {
    "id": "2610.37448",
    "title": "Test-Time Communication in Trading Agent Swarms",
    "authors": [
      "Avid Fayaz",
      "Harry Zhang",
      "Håvard Alstadheim",
      "Erik Nordlöf",
      "Vilhelm Karlin",
      "André Silva"
    ],
    "abstract": "Communication between agents has mostly been studied on tasks with a shared objective and fast, clear feedback. Trading has neither: each agent manages its own account, with decisions being scored by markets late and noisily. A trading swarm is thus a population of independent decision-makers rather than a team, for which convergence is a risk and not the goal. We ran 200 agents from four model families in groups of ten under five communication regimes, from isolation to message boards and shared notes, over seven US trading days (1 to 9 October 2026), logging everything each agent read before every decision. In two of the four families, communicating groups came to hold far more of the same stocks than the isolated group. A group's return was largely the return on what its members held in common. Seeing a post from a groupmate made an agent 7 percentage points more likely to reuse an eight-word phrase from it. Agents that started too close together to see each other's posts shared such a phrase in 14% of cases, the rate that common inputs produce. Seeing the post did not detectably change that morning's trades. Case studies traced the adoption of positions and decision rules over subsequent days, and communicating groups sold in step more often than isolated ones. Because isolated groups also converged on the same stocks, sometimes completely, assessments of herding need to measure excess convergence relative to a no-peer baseline.",
    "published": "2026-10-27T15:54:05Z",
    "updated": "2026-10-27T15:54:05Z",
    "categories": [
      "cs.MA",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37448"
  },
  {
    "id": "2610.37446",
    "title": "PolyGandr: Steering Generative Models via Spatial Navigation through Latent Space",
    "authors": [
      "Mingwei S. G. Li",
      "Susie S. Y. Li",
      "Isabel Moreira de Oliveira",
      "Ryan P. Adams",
      "Remco Chang"
    ],
    "abstract": "Generative models support content creation across text, images, videos, and design disciplines, yet their interfaces rely primarily on natural language. While effective for specifying high-level intent, language can be inefficient and imprecise for fine-grained control, iterative refinement, and open-ended exploration. We present PolyGandr, a visual interface for exploring relationships between latent representations and generated outputs, complementing natural-language model steering. PolyGandr formulates generative control as high-dimensional navigation, enabling users to define starting points, steering directions, and step sizes through a unified map-and-mixing-palette interface. Combining global exploration with local refinement supports both broad design-space navigation and fine-grained output manipulation without repeatedly translating visual intent into prompts. We evaluate PolyGandr across three use cases: StyleGAN2 face generation, Stable Diffusion chair design, and rotational kirigami engineering. A formative study indicates that PolyGandr complements existing workflows by supporting real-time editing while simultaneously providing an overview and means to explore the broader design space.",
    "published": "2026-10-27T15:52:23Z",
    "updated": "2026-10-27T15:52:23Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37446"
  },
  {
    "id": "2610.37437",
    "title": "Representing the Unseen: Rethinking Visual Imagination for Spatial Reasoning",
    "authors": [
      "Zengqi Zhao",
      "Zun Wang",
      "Shoubin Yu",
      "Mohit Bansal",
      "Yue Zhang"
    ],
    "abstract": "Visual world models increasingly support spatial reasoning by generating RGB views of unobserved states. However, RGB has become the default interface largely because it is well suited for visual generation, rather than necessarily being the most effective representation for downstream reasoning. Different spatial questions may benefit from different representations of the same imagined state: top-down geometry can facilitate global distance comparisons, while panoramic views provide broader context for reasoning about open space. To isolate the role of representation in spatial imagination, we introduce ImagiRep, a simulator-grounded benchmark of 922 questions spanning seven question types across two settings, Viewpoint Imagination and Cross-view Integration, providing oracle RGB and six alternative representations (e.g., depth, panoramic views, and top-down geometry) of the same unobserved state. This controlled comparison reveals that even accurate imagined RGB does not guarantee accurate spatial reasoning, and different questions benefit from different representations. Similar trends hold for representations derived from world-model-estimated states. Notably, estimated RGB alone can mislead spatial reasoning, while alternative representations retain complementary benefits. Building on these findings, we introduce GEARS, a lightweight test-time strategy for adaptive representation selection, outperforming existing spatial imagination methods and showing that reasoning about unseen states requires more than generating RGB views.",
    "published": "2026-10-27T15:48:09Z",
    "updated": "2026-10-27T15:48:09Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.37437"
  },
  {
    "id": "2610.37434",
    "title": "FeatureArc: Benchmarking Coding Agents on Evolving Features",
    "authors": [
      "Yunlong Wang",
      "Alyssa Wu",
      "Cuiyun Gao",
      "Jia Feng",
      "Songyuanyi Lu",
      "Zhichao Hu"
    ],
    "abstract": "A software feature usually evolves over time: developers extend its first version as new use cases and requirements arrive, and each extension builds on code written earlier. Most feature benchmarks evaluate a single request on a fixed codebase. Feature evolution requires evaluating successive extensions on an agent's own earlier code and checking whether the feature remains correct. We introduce FeatureArc to evaluate coding agents on evolving features, together with a pipeline that constructs its tasks from repository histories. The benchmark combines dependencies between successive stages of the same feature, explicit requirements and interface contracts, and executable checks across four programming languages. The pipeline validates fail-to-pass (F2P) tests for new behavior and pass-to-pass (P2P) tests for existing behavior on the reference code before and after each stage. We evaluated 10 coding agents on 73 manually reviewed tasks of 2 to 10 stages. Each agent works in one persistent session and workspace without external test feedback or rollback. The evaluation reveals a gap between first-stage and whole-feature success: pooled success falls from 62.7% at the first stage to 28.5% when the whole feature is tested on the final code. Trajectory analysis identifies inherited defects as a common failure mechanism, present in 72.9% of failed later stages. These earlier errors often remain undetected: in stages following a failure, agents leave the earlier error unnoticed about 95% of the time, and their self-tests rarely revisit earlier stages. Evolving a feature autonomously, without human checks between stages, therefore remains a substantial challenge for current coding agents. At Tencent, the pipeline extends internal evaluations to this setting and guides the development of Hunyuan, Tencent's family of large language models.",
    "published": "2026-10-27T15:45:50Z",
    "updated": "2026-10-27T15:45:50Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37434"
  },
  {
    "id": "2610.37431",
    "title": "Segmentation Confidence for Arbitrary CNNs",
    "authors": [
      "Baris Oguz",
      "Xing Yao",
      "Claudia Tawil",
      "Alison Pouch",
      "Brett Byram",
      "Gabriel Arenas",
      "Nadav Schwartz",
      "Ipek Oguz"
    ],
    "abstract": "Convolutional neural networks (CNN) are widely used for medical image segmentation. However, they lack an inherent measure of confidence. Existing methods for estimating prediction uncertainty often require a custom network architecture and/or dedicated training setups and need to be trained from scratch. In addition, the deduction of a single confidence score per input from the uncertainty maps is not always straightforward. In this study, we explore voxel-based uncertainty estimation methods that can be added to existing segmentation pipelines without training from scratch. We also propose a novel method to estimate a single confidence score from the uncertainty maps. Our evaluations on different ROIs and modalities suggest that our confidence score can predict segmentation performance in unseen data.",
    "published": "2026-10-27T15:42:29Z",
    "updated": "2026-10-27T15:42:29Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37431"
  },
  {
    "id": "2610.37430",
    "title": "When Visual Evidence Is Insufficient: How Instructions, Post-Training, and Internal Activations Shape Refusal in Multimodal Language Models",
    "authors": [
      "Ananth K Suresh",
      "Aveen Dayal",
      "Gouthaman KV",
      "Aditya Pola",
      "Vineeth N Balasubramanian"
    ],
    "abstract": "For reliable deployment, multimodal large language models (MLLMs) should recognize when an image provides insufficient evidence to answer a question and withhold unsupported answers. Yet refusal alone is not necessarily evidence of such recognition: models may refuse because of unrelated safety constraints or without identifying the missing evidence. We study how refusal on visually unanswerable questions is shaped by three sources of control: inference-time instructions, post-training, and internal activation interventions. Across three MLLMs on the MoHoBench benchmark, we systematically manipulate the meaning and placement of refusal instructions, compare supervised and preference-based post-training, and intervene on a refusal-related activation direction derived from naturally answered and refused examples. We find that refusal is highly sensitive to both the meaning and placement of instructions, with model-specific changes at the sample level that are obscured by aggregate refusal rates. Evidence-aware and general refusal instructions have stronger effects than an intentionally mismatched safety instruction. Post-training produces larger increases in refusal, but can also induce responses that combine refusal language with attempted answers. In contrast, activation intervention produces smaller yet transferable changes across prompt conditions, without evidence of indiscriminate refusal on tested visually answerable samples. These findings show that refusal is jointly shaped by external instructions, post-training, and internal representations, highlighting the need to disentangle evidence recognition from a model's learned propensity to refuse.",
    "published": "2026-10-27T15:42:20Z",
    "updated": "2026-10-27T15:42:20Z",
    "categories": [
      "cs.LG",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37430"
  },
  {
    "id": "2610.37429",
    "title": "Bayes-Adaptive MDPs for Rollout Allocation to Enhance GRPO Training",
    "authors": [
      "Faeze Moradi Kalarde",
      "Armin Toroghi",
      "Nam Ho Koh",
      "Doo Hwan Hwang",
      "Seungjin Kim",
      "Kee-Eung Kim",
      "Scott Sanner"
    ],
    "abstract": "Group Relative Policy Optimization (GRPO) has demonstrated strong performance in LLM post-training. However, it allocates a uniform rollout budget to every training question, ignoring variations in question difficulty. As a result, highly difficult questions may receive too few rollouts to generate informative positive reward signals, limiting their contribution to training, while moderately difficult questions often receive more rollouts than necessary. In this work, we formulate the problem of difficulty-aware rollout budget allocation to maximize training utility under the same total rollout budget as standard GRPO. We propose AdaRoll-GRPO, which reformulates rollout allocation as a sequential decision-making problem and leverages a Bayes-adaptive Markov decision process (MDP) to learn an adaptive allocation policy. The learned policy is computed offline and applied during GRPO training without introducing additional online optimization overhead. Extensive experiments on multiple reasoning datasets and LLM architectures demonstrate that AdaRoll-GRPO consistently improves GRPO training performance under a fixed rollout budget, highlighting the effectiveness of adaptive rollout allocation for GRPO in LLM post-training.",
    "published": "2026-10-27T15:41:57Z",
    "updated": "2026-10-27T15:41:57Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37429"
  },
  {
    "id": "2610.37427",
    "title": "Time-Dynamic Semantic-Activity Entanglement: Quantifying Communication-Based Synchrony in Collaborative VR",
    "authors": [
      "Pooja Pol",
      "Jianing Zhang",
      "Qing Huang"
    ],
    "abstract": "Collaborative virtual reality (VR) produces rich multimodal traces of team behavior, yet practical methods for characterizing time-varying team communication remain limited. We present time-dynamic semantic-activity entanglement (TSAE), inspired by the entanglement concept introduced by Gloor et al. (2022), to describe communication-based team synchronization within discrete time windows. TSAE is modeled by combining relative speaking activity with contextual semantic alignment for participant pairs, which is aggregated into participant-level trajectories and summarized through the Gini coefficient to understand the distribution of team-level communication synchrony. This approach is employed with German-language transcripts from fifteen collaborative VR gameplay sessions. Transcript utterances are represented using a long-context embedding model with a late-chunking strategy and analyzed within fixed game-time windows. A representative session illustrates shifting dyadic alignment and low-to-moderate participant contributions, with sporadic periods of high entanglement. Across fifteen game sessions, the metrics indicate complementary insights, offering a qualitative contrast to the core-periphery pattern reported in the foundational work. Hence, these descriptive findings support the study of communication as a dynamic process and provide a mathematically grounded approach to analyze its evolving distribution in shared interactive VR spaces.",
    "published": "2026-10-27T15:40:51Z",
    "updated": "2026-10-27T15:40:51Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.37427"
  },
  {
    "id": "2610.37422",
    "title": "Beyond the Readout: A Latent Numerical Frame Shared Across Modality and Operation",
    "authors": [
      "Oriol Juan Sabater",
      "Alex Ferrando de las Morenas",
      "Pau Rodríguez",
      "Xavier Suau"
    ],
    "abstract": "When a multimodal model computes 17+35 from text or 91-39 from a rendered image, it produces the same answer, 52. Does it use one internal concept of number for both, or separate machinery for each path? Similarity metrics such as RSA or CKA cannot settle this question. They give the same score to identical and to rotated directions, and two representations can look alike only because both prepare the same output digits. We therefore use causal interventions. For four conditions (text or image, addition or subtraction), we learn a small subspace of Gemma4-12B-it's residual stream in which swapping coordinates swaps the model's answer. The subspaces answer three questions. First, do the conditions write numbers along the same directions? They do not. Reusing a subspace from text in an image on the same operation recovers only 53.2% of its causal effect. A single rotation and rescaling maps one subspace onto the other and raises recovery to 91.4%, so the conditions share one geometry expressed in different coordinates. Second, does this shared geometry only reflect the digit the model is about to print? To test this, we split each subspace into 9 directions that the output layer reads to choose the next digit and 13 directions that it cannot see. The 13 hidden directions still carry the number, yet changing them barely alters the digit being written. Third, what are these hidden directions for? A model must emit a multi-digit answer one digit at a time, so it can compute the full result early and keep it in reserve. When two numbers share their first digit, swapping the number in the hidden directions leaves the digit being written intact and redirects the next digit in 77.6% of cases. The model thus forms an abstract numerical concept upstream and unfolds it across time: multimodal representations share meaning through relational geometry across distinct coordinate frames.",
    "published": "2026-10-27T15:36:46Z",
    "updated": "2026-10-27T15:36:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37422"
  },
  {
    "id": "2610.37738",
    "title": "Poisoned Skills: Propagating Jailbreaks Through Agent Markdown Files",
    "authors": [
      "Kashyap R Manjusha",
      "Murali Emani"
    ],
    "abstract": "Modern agent frameworks allow users to provide Markdown files containing system prompts, tool descriptions, and skill definitions (e.g., SKILL.md), which are incorporated into the agent's context during initialization. In this work, we investigate whether this configuration mechanism can also serve as an injection channel: can a jailbreak embedded in a Markdown skill file propagate through an agent and induce prohibited behavior? To answer this question, we construct a LangChain-based question-answering agent whose system prompt is assembled from a user-provided Markdown file. We embed a jailbreak combining persona manipulation with a GPTFUZZER-based attack and evaluate its effectiveness across seven contemporary open-weight models using 270 forbidden questions spanning nine harm categories. Under a benign system prompt, the models exhibit near-complete refusal behavior, with a mean attack success rate (ASR) of just 0.5%. In contrast, the injected skill file raises the mean ASR to 45%, reaching 68.9% for individual models. We further evaluate two payload obfuscation strategies: an invisible zero-width character-based stealth payload and a phonetic payload based on grapheme-to-phoneme transformations. Neither outperforms the plain-text injection; notably, the phonetic variant reduces mean ASR to 30%. These findings identify Markdown skill files as an underexplored attack surface for AI agents and suggest that vulnerability to configuration-based jailbreaks depends more strongly on the underlying model than on the specific payload obfuscation technique.",
    "published": "2026-10-27T15:29:41Z",
    "updated": "2026-10-27T15:29:41Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37738"
  },
  {
    "id": "2610.37407",
    "title": "Constraining the Commit Boundary: A DIO/ODI-Informed Authorization Guardrail for Agentic Entity Resolution",
    "authors": [
      "Daniel Beránek"
    ],
    "abstract": "Agentic Entity Resolution (ER) systems iteratively plan actions, retrieve evidence, revise hypotheses, and propose graph mutations. An erroneous identity hypothesis may condition later retrieval and produce apparent confirmation. This paper proposes a Digital Identity Optimization (DIO) and Ontology of Digital Identity (ODI)-informed authorization boundary between evidence available for agent reasoning and evidence eligible to authorize persistent identity-changing mutations. A domain-governed constraint-binding function maps selected reconstruction-failure distinctions to explicit identity-preserving constraints. An abstract two-phase supervisor permits a commit only when claim-specific authorization-eligible evidence supports every required proposition, relevant conflicts are resolved, the operation remains within its authorized scope, and relevant state and policy versions remain valid. Admission as UNVERIFIED does not confer authorization eligibility. Separate claim-specific promotion governs evidentiary use; insufficient support or unresolved material conflict leads to deferral. The contribution is a specification connecting diagnostic-to-constraint mapping, evidence promotion, proposition coverage, conflict handling, scope binding, and commit-time version integrity. A proposed evaluation protocol is designed to assess the mapping's incremental value beyond generic authorization and conventional identifier rules. This is a conceptual architecture without implementation or empirical validation, not a theorem of semantic correctness. Its property depends on domain-policy adequacy, evidence promotion, and enforcement. It does not prevent erroneous hypotheses or hypothesis-conditioned retrieval; dependency-aware evidence flow remains future research.",
    "published": "2026-10-27T15:22:00Z",
    "updated": "2026-10-27T15:22:00Z",
    "categories": [
      "cs.AI",
      "cs.CR",
      "cs.DB"
    ],
    "url": "https://arxiv.org/abs/2610.37407"
  },
  {
    "id": "2610.34865",
    "title": "ECHOES: An Adaptive LLM-Powered AR Glasses Docent for Evidence-Grounded Urban Heritage Interpretation",
    "authors": [
      "Bang Xiao",
      "Baosheng Jin",
      "Jinhan Niu",
      "Xingchen Zhang",
      "Hua Shen"
    ],
    "abstract": "Urban heritage tours are often delivered through fixed scripts, leaving limited room for visitors' situated questions, language preferences, or requests for evidence. We present ECHOES, an adaptive LLM-powered AR glasses docent for evidence-grounded interpretation of historical buildings. Specifically, the agent adapts along three dimensions: it modifies response structure according to the type of visitor question (identification, architectural detail, evidence-seeking, or route inquiry); it accumulates session-level interest signals from repeated questions and expressed curiosity to shape later explanations; and it tracks language preference and retrieval context across turns to maintain conversational continuity. The core of ECHOES is an LLM agent initialized as a source-aware urban heritage docent that realizes this adaptation through dialogue and preference context maintained across the session. Around this agent, ECHOES integrates visual site grounding, a self-built historical knowledge base supporting retrieval-augmented generation, and concise multilingual AR output designed for glanceable use. Through a working prototype centered on Shanghai's East Nanjing Road and the Bund, we demonstrate how an adaptive LLM-powered AR docent can transform historical tours from scripted narration into situated, question-responsive, and source-aware conversations.",
    "published": "2026-10-26T05:27:57Z",
    "updated": "2026-10-26T05:27:57Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.34865"
  },
  {
    "id": "2610.34855",
    "title": "DecoyCount: Evaluating Visual-Reasoning Misalignment in Counting",
    "authors": [
      "Qiuyi",
      "Zhang",
      "Zhen Xu",
      "Jing Gu",
      "Seojin Bang",
      "Arnav Mohanty Das",
      "Yaning Hu",
      "Gautam Kumar",
      "Jared Lichtarge",
      "Le Xue",
      "Bettina Catoto",
      "Akul Datta",
      "Daniel Luo",
      "Farha Khan",
      "Marcella Valentine",
      "Yinfei Yang",
      "Andrew M. Dai"
    ],
    "abstract": "Visual counting benchmarks report whether vision-language models produce the correct number, but not whether errors arise from perception or reasoning. We introduce DecoyCount, a benchmark built from 1,660 real-world images with designed decoys across seven mechanisms, along with paired prompts: a neutral question, a matched alignment cue, and a novel multi-hop, multi-image question that situates the same counting problem in a realistic scenario. Using this design, we find that counting failures are induced partly by visual misalignment: models can execute the intended counting process when cue-guided but fail to select it unaided, and we term this difference in accuracy the reasoning-alignment gap. Despite being highly capable on general reasoning, frontier models remain below 50\\% accuracy on our benchmark, while alignment gaps range from 11.8-22.1 percentage points; strikingly, we observe that more capable models, greater thinking budgets, and agentic processes often induce larger gaps. Because humans may bring context that models lack, we test whether textual underspecification contributes to misalignment using a scenario-based multi-hop condition without explicit hinting, but this added context does not improve aggregate performance. Our analysis concludes that stronger general reasoning does not by itself generalize to aligned visual reasoning, leaving misalignment with human visual expectations as a substantial component of the remaining deficit.",
    "published": "2026-10-26T05:19:02Z",
    "updated": "2026-10-26T05:19:02Z",
    "categories": [
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34855"
  },
  {
    "id": "2610.34854",
    "title": "Learning Dual-Camera Smooth Zoom via Decoupled Geometric-Photometric Data Synthesis",
    "authors": [
      "Junjie Fan",
      "Zhilu Zhang",
      "Renlong Wu",
      "Dazhi Zhang",
      "Wangmeng Zuo"
    ],
    "abstract": "When zooming between dual cameras on smartphones, prominent discontinuities in both geometric perspective and color rendition inevitably degrade the visual experience of users. To address this issue, we introduce the dual-camera smooth zoom (DCSZ) task, aiming to synthesize continuous intermediate frames for fluid zooming. However, directly applying existing video frame interpolation (VFI) models to this task is severely hindered by substantial domain gaps and the practical intractability of capturing real-world continuous ground-truth. To this end, we propose a novel data synthesis framework to generate high-fidelity DCSZ training sequences, named ZoomGS v2. It explicitly decouples geometric and color transformations from 3D scene representation modeling, thereby enabling extensive data generation from easily accessible single-camera 3D scenes. Furthermore, we develop ZoomFI, a specialized VFI network tailored to the DCSZ task, which leverages complementary bidirectional warping for comprehensive dual-camera information fusion. Extensive experiments on test datasets captured using two mobile phones demonstrate that training with the constructed DCSZ data significantly improves the performance of various VFI models. Moreover, ZoomFI achieves state-of-the-art results in both quantitative metrics and visual quality. The datasets, code, and pretrained models are available at https://hitjunjief.github.io/DCSZ-v2",
    "published": "2026-10-26T05:18:00Z",
    "updated": "2026-10-26T05:18:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34854"
  },
  {
    "id": "2610.34850",
    "title": "Recovering Black-Box Point Cloud Models from Pose Shifts via Derivative-Free Optimization",
    "authors": [
      "Seonghwan Park",
      "Min-Gyu Park"
    ],
    "abstract": "Point cloud models are increasingly deployed through score-only black-box interfaces. Under this access model, test-time rotations outside the training distribution can substantially degrade performance. Although existing mitigations such as equivariant retraining and gradient-based adaptation are effective, they are infeasible without access to model weights or gradients. To address this limitation, we propose CanDO, a test-time canonicalization method that recovers lost performance using only forward queries. Specifically, CanDO searches for an input transformation that maximizes model confidence and uses derivative-free optimization to perform this search without gradients. We further identify three conditions for successful recovery: a training augmentation gap, an accuracy-aligned confidence surrogate, and global search over a multi-modal objective. Across multiple architectures and benchmarks, CanDO recovers 76% of the oracle gap under azimuthal misorientation and 51% under arbitrary SO(3) rotations for object part segmentation. These results show that frozen score-only point cloud models can recover from rotation-induced distribution shifts through post-deployment canonicalization alone.",
    "published": "2026-10-26T05:07:36Z",
    "updated": "2026-10-26T05:07:36Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34850"
  },
  {
    "id": "2610.34846",
    "title": "Seeing Before Naming: Context-Grounded Learning of Novel Visual Concepts",
    "authors": [
      "Gabriel Adineera",
      "Jinoh Kim"
    ],
    "abstract": "Learning an unfamiliar visual category requires more than adapting a classifier: the model must connect its visual evidence to a useful semantic name. A pre-trained vision-language model can retain discriminative image features while providing a weak textual anchor for the target concept. We address this imbalance through context-grounded semantic anchoring. Our framework, SynerNet, learns concept-specific name embeddings, exposes them to compatible linguistic contexts, and conditions their representations on visual evidence. Difficulty-aware processing and adaptive objective weighting coordinate this adaptation while retaining the pre-trained backbone. On four VISTA-Beyond domains, SynerNet reaches a mean 16-shot accuracy of 74.35%, compared with 72.45% for few-shot name learning. Across 14 domains in the name-masked transfer setting, it improves mean accuracy from 45.17% to 46.74%. Ablations identify concept-specific name embeddings and cross-modal context integration as important components. These results support treating concept acquisition as the construction of visually grounded semantic anchors.",
    "published": "2026-10-26T04:55:38Z",
    "updated": "2026-10-26T04:55:38Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34846"
  },
  {
    "id": "2610.34845",
    "title": "PosePlaner: Denoising Any Feed-Forward Pose Predictor from Pairwise Planar Geometry",
    "authors": [
      "Yihang Chen",
      "Bin Tan",
      "Yujun Shen",
      "Yinghao Xu",
      "Nan Xue"
    ],
    "abstract": "Recent multi-view Transformers (e.g., DUSt3R and VGGT) have advanced 3D reconstruction by scaling training data and model capacity from two views to many views and long sequences, subsuming the classical SfM/SLAM pipeline of feature extraction, matching, and pose estimation in a single feed-forward pass. Yet this subsumption hides the interfaces between pipeline stages---correspondences, geometry, and pose are entangled in a single forward pass, leaving supervised fine-tuning as the major path to improvement and offering no mechanism to correct predictions from geometric evidence at test time. We propose PosePlaner to close this gap by reviving the classical coupling between correspondences and pose via flow matching, treating pose refinement as a conditional generation problem that takes coarse geometric matches and initial pose as input condition and fuses the resulting pose hypotheses into a single refined estimate, providing a continuous, data-driven analog of RANSAC voting. Our method is trained efficiently on two-view data, yet serves as a periodic refiner for streaming n-view pose estimators with no retraining. Empirically, it corrects failures of feed-forward predictors, substantially improves correspondence-based solvers, and reduces accumulated drift in long streaming sequences.",
    "published": "2026-10-26T04:55:36Z",
    "updated": "2026-10-26T04:55:36Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.34845"
  },
  {
    "id": "2610.34837",
    "title": "Beyond Behaviour: A Stimulus-Response Safety Evaluation of Vision-Language-Action Models",
    "authors": [
      "Vy Vo",
      "Dinh Phung"
    ],
    "abstract": "Humans exhibit biological sensitivity to safety-critical stimuli that can trigger defensive action. Across three models and two video benchmarks, we investigate whether similar responses emerge in vision-language-action models by examining their internal representations and action tendencies in response to visible hazards and harmful consequences. Our findings suggest that task execution may remain the default response even when danger is internally registered.",
    "published": "2026-10-26T04:36:21Z",
    "updated": "2026-10-26T04:36:21Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34837"
  },
  {
    "id": "2610.34836",
    "title": "Collective Emergent Alignment: Measuring and Amplifying Interaction-Induced Reasoning Alignment in Multi-Agent LLMs",
    "authors": [
      "Boxuan Wang",
      "Zhuoyun Li",
      "Sarvapali D. Ramchurn",
      "Xiaowei Huang",
      "Yi Dong"
    ],
    "abstract": "Multi-agent large language model (LLM) systems can exhibit emergent behaviors through interaction, yet whether a similar phenomenon exists for reasoning alignment remains largely unexplored. We study whether agent interaction produces additional reference-grounded reasoning alignment beyond matched individual self-refinement, and introduce REMAP (Reference-Entailment-Matrix for Agentic Process), a framework that quantifies this effect through Semantic Coverage and interaction-specific alignment gains. Across diverse model families and two multi-hop reasoning benchmarks, we observe broadly positive interaction gains, particularly on reasoning content that depends on integrating evidence distributed across agents. These gains are consistently associated with independently measured peer-information recovery, while further analysis reveals composition-dependent heterogeneity effects and asymmetric information transfer across agent capability levels. Motivated by these findings, we further introduce a fact-level multi-agent communication framework that replaces full reasoning-trace exchange with compact, gap-aware, and selectively routed information. Our experiments show that compact fact exchange improves reasoning alignment and task performance while reducing communication overhead, whereas more selective communication exposes a trade-off between acquiring distributed information, retaining local content, and communication efficiency. Overall, our results show that collective emergent alignment can be quantified, linked to information-transfer patterns, and used to guide more effective multi-agent communication.",
    "published": "2026-10-26T04:31:56Z",
    "updated": "2026-10-26T04:31:56Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.34836"
  },
  {
    "id": "2610.34833",
    "title": "Streaming Recurrent Memory",
    "authors": [
      "Mohamed Elsayed",
      "Minh Pham",
      "A. Rupam Mahmood"
    ],
    "abstract": "Natural intelligence learns from a continuous stream of sensorimotor experience: data can arrive at high bandwidth, and behavior adapts to feedback as soon as it arrives, even when it is delayed. In contrast, most modern deep learning systems rely on stored datasets, replay buffers, and retained contexts through which credit is later assigned. At high data rates, storing and revisiting past experience can be impractical under tight memory and computational constraints. This paper studies recurrent memory under a streaming learning constraint: the learner learns from experience as soon as it arrives without storing raw experience. We ask whether a streaming learner can maintain a state that remains useful for future prediction and control from delayed feedback. We introduce Streaming Recurrent Memory (SRM), a recurrent memory designed for the streaming setting which preserves information that may matter later while remaining trainable with one-step backpropagation through time (BPTT). SRM provides a streaming-compatible recurrence that is designed to recall past information by content or time, track elapsed steps, and compose transformations whose outcome depends on the order in which inputs are observed. Across controlled memory tasks and streaming applications, SRM learns effectively with one-step BPTT, outperforming recurrent baselines in associative recall and online language modeling while achieving near-perfect success in associative T-Maze with delayed rewards. These results suggest that fixing how inputs are stored in the recurrent state, while learning how that state is read out, enables effective streaming learning without long-range backpropagation.",
    "published": "2026-10-26T04:29:44Z",
    "updated": "2026-10-26T04:29:44Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34833"
  },
  {
    "id": "2610.34829",
    "title": "Logic Hijacking of RAG: Single-Document Poisoning via Local Optimization",
    "authors": [
      "Hangyi Zhao",
      "Bonan Zhang",
      "Fusen Guo",
      "Jiaheng Wei",
      "Chao Chen",
      "Tianqing Zhu"
    ],
    "abstract": "Single-document corpus poisoning under black-box access poses a severe threat to Retrieval-Augmented Generation (RAG). However, existing attacks predominantly rely on explicit factual refutations or imperative instruction overrides. Modern aligned LLMs often arbitrate such conflicts conservatively, rejecting overt contradictions in favor of parametric memory or clean retrieved context while triggering input guardrails. We propose MONOLOGUE, a single-document poisoning framework based on Logic Hijacking without explicit refutation. Rather than disputing the ground truth, our method concedes it as an authoritative historical baseline before introducing the update, weaving a grounded record-correction narrative (e.g., dated institutional reattributions) that presents the counterfactual target as the most recent update. To prevent suspicious live writes, payloads are refined entirely offline via local multi-dimensional gated optimization, coupling automated text quality audits with surrogate behavioral verification. Evaluations across three benchmarks, three retrieval backends, and four open-weight generator regimes show that our method achieves the strongest overall attack efficacy among the evaluated single-document poisoning attacks.",
    "published": "2026-10-26T04:23:01Z",
    "updated": "2026-10-26T04:23:01Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34829"
  },
  {
    "id": "2610.34826",
    "title": "TrustJev: Separating Policy Authority from Untrusted Evidence in LLM-Based Decisions",
    "authors": [
      "Zhiwei Xu",
      "Xuyang Liu",
      "Xiaolin Peng",
      "Weixian Deng",
      "Jiabao Gao",
      "Zirui Li",
      "Tian Qiu",
      "Boya Zhou",
      "Wei Jiao",
      "Hai Wan",
      "Xibin Zhao"
    ],
    "abstract": "Decision models enable software to select from predefined actions using natural language inputs. However, the external evidence that supplies facts for these decisions may also contain instructions that attempt to override the application's policy. We propose TrustJev, a framework combining protected policy scoring with bounded evidence corrections. A single Transformer backbone computes policy scores and a correction budget from trusted policy and candidates, then bounds evidence corrections by that budget. Paired supervision encourages stable predictions under instruction insertions that preserve task facts and changed preferences when edits change the correct answer. Authority supervision accommodates evidence when the policy alone cannot determine the decision. We evaluate a 0.6B implementation against 14 baselines on three datasets covering authentication, instruction hierarchy, and executable authorization rules. TrustJev achieves the highest mean Balance, the harmonic mean of accuracy on non-attack and attack inputs, exceeding the strongest baseline on each by 0.57-1.05 percentage points. In the authorization benchmark, it correctly answers all 32 attacks per source in a fixed pool for 95.77% of sources, compared with 80.98% for the strongest comparator. TrustJev maintains comparable inference memory and median latency, with additional overhead primarily during training.",
    "published": "2026-10-26T04:17:53Z",
    "updated": "2026-10-26T04:17:53Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.34826"
  },
  {
    "id": "2610.34825",
    "title": "Interpretable Brain Age Prediction Using White Matter Fiber Orientation Distributions with Rotation-Equivariant Deep Learning",
    "authors": [
      "Chenyang Fan",
      "Robert D. Sanders",
      "Elie Matar",
      "Yixuan Yuan",
      "Xiang Li",
      "Sharon L. Naismith",
      "Fernando Calamante",
      "Jinglei Lv"
    ],
    "abstract": "Diffusion MRI (dMRI) provides information about white matter microstructure that can support brain age prediction. However, many existing prediction models use diffusion tensor imaging (DTI) scalar metrics that omit orientation information. Deep learning is increasingly used for brain age prediction, but conventional CNNs do not explicitly respect the geometric structure of orientation-dependent features. We present an interpretable brain age prediction framework that combines white matter fiber orientation distributions (WM-FODs) with an SE(3) (Special Euclidean group in 3 dimensions) equivariant CNN. The network operates directly on spherical harmonic (SH) coefficients of the FOD, preserving their transformation properties under rotation. Evaluation in 692 participants aged 36-90 years from the Human Connectome Project Aging dataset showed that the combined framework outperformed the evaluated DTI-based models and conventional CNNs. Averaging predictions from five cross-validation models yielded a mean absolute error of 3.54 years and Pearson's correlation of 0.958. Our results indicated that the performance advantage depended on combining WM-FODs with equivariant processing. Prediction accuracy was highest at a maximum SH order of Lmax = 2 and declined at higher orders. Tract-level occlusion, where each segmented tract was masked in turn, revealed age-dependent patterns of model sensitivity, with importance peaks in frontal projection pathways at 36-44 years, the fornix at 45-54 years, the callosal isthmus at 55-64 years, the middle cerebellar peduncle at 65-74 years, and the callosal genu at 75-90 years. These findings support rotation-equivariant processing of WM-FODs for accurate brain age prediction with anatomically interpretable model sensitivity.",
    "published": "2026-10-26T04:14:38Z",
    "updated": "2026-10-26T04:14:38Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.34825"
  },
  {
    "id": "2610.33605",
    "title": "Data Governance for Generative and Agentic AI : Technology, Law, Economics, and Security",
    "authors": [
      "Narayana Darapaneni",
      "Padmaja K",
      "Gnana Chaithra D"
    ],
    "abstract": "This book develops a unified governance framework for systems that retrieve, generate, infer, remember and act on information from large language models and retrieval augmented pipelines to autonomous multi agent systems. Eleven chapters and eight appendices integrate three disciplinary lenses-technology, law and economics-across the full lifecycle: data quality, lineage and provenance; global data protection law and intellectual property; the economics of data governance; digital trust, cybersecurity and zero-trust architecture; ethics and responsible AI; governing generative AI pipelines; governing agentic AI and multi-agent systems; data governance in elections and the public sphere; AI regulation across six jurisdictions; and the design of a governance control plane for 2030. Each chapter is anchored in Indian law and institutions while maintaining a comparative, cross jurisdictional perspective.",
    "published": "2026-10-24T11:03:57Z",
    "updated": "2026-10-24T11:03:57Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.33605"
  },
  {
    "id": "2610.33594",
    "title": "Counterfactual Model Testing Under Distribution Shift",
    "authors": [
      "Joran Leest",
      "Ilias Gerostathopoulos",
      "Claudia Raibulet",
      "Patricia Lago"
    ],
    "abstract": "Deployed machine learning (ML) models can degrade as the distribution of their input data shifts. Such shifts can result from changes in the population or from data integrity issues in the pipeline that materializes model features, two sources that operate through different mechanisms. Because labels are often absent or delayed, it is common practice to track shifts in the data instead, but a detected shift does not indicate how it affects the model. We formulate this problem as online model testing under distribution shift. Testing requires reproducing the shift on a controlled baseline with known labels. Since the same shift can come from either source, doing so requires knowing which mechanism changed. We propose a methodology that reproduces observed changes in both mechanisms to estimate current performance and the potential gain from repairing observed data integrity issues. Experiments on real-world datasets with simulated faults show that separating the two sources generally improves both estimates, supporting this formulation. A churn prediction case illustrates how these tests can support monitoring and repair prioritization",
    "published": "2026-10-24T10:42:31Z",
    "updated": "2026-10-24T10:42:31Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.33594"
  },
  {
    "id": "2610.33592",
    "title": "Auditing evaluation artifacts and data leakage in large language model systems for rare disease diagnosis",
    "authors": [
      "Jian Yang",
      "Peilin Liu",
      "Xiaohan Li",
      "Songda Li",
      "Yu Cao",
      "Yuqing Feng",
      "Haomin Li"
    ],
    "abstract": "Augmented large language model (LLM) systems have reported high benchmark accuracies in rare disease diagnosis, yet their real-world clinical utility remains unproven. A recent meta-analysis flagged augmented LLM diagnostic evaluations as having a high risk of bias due to suspected data leakage; however, the precise impact of these vulnerabilities on model inference has yet to be fully quantified. In this study, we present a comprehensive empirical audit to quantify evaluation artifacts across prevailing AI paradigms, using a repository of over 60,000 cases from diverse public and independent clinical cohorts. By reconstructing a state-of-the-art agentic framework, we demonstrate that candidate-space contamination artificially inflates performance: enforcing strict cross-dataset isolation resulted in a marked performance decline, with the cross-dataset mean Recall@1 decreasing from 54.3% (under conventional one-vs-rest evaluation) to 40.3% (Hedges' g = 0.94). Similar spatial overfitting in supervised classifiers caused diagnostic accuracy to drop from an internal mean of 42.9% to 16.7% across external cohorts (Cohen's d = 2.01). Furthermore, we quantify how LLMs infer diagnoses by exploiting retrospective therapeutic cues in clinical narratives, and how temporal misalignment in foundational knowledge bases leads to performance fluctuations. We conclude that prevailing evaluation protocols for augmented LLM systems inadvertently reflect data leakage rather than genuine medical reasoning. To address these systematic artifacts, we propose a rigorous evaluation framework - coupling strict data-isolation protocols with standardized benchmarking safeguards - to ensure future diagnostic AI for rare diseases is evaluated on actual clinical robustness.",
    "published": "2026-10-24T10:35:48Z",
    "updated": "2026-10-24T10:35:48Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33592"
  },
  {
    "id": "2610.33589",
    "title": "Mix Forcing: Causal Pre-Training via Mixture Attention for Interactive World Models",
    "authors": [
      "Zelin Gao",
      "Hao Ouyang",
      "Jiapeng Zhu",
      "Qiuyu Wang",
      "Jingye Chen",
      "Zichen Liu",
      "Xing Zhu",
      "Yujun Shen",
      "Yinghao Xu"
    ],
    "abstract": "While interactive video world models require autoregressive generation, directly adapting pretrained bidirectional video diffusion models into autoregressive ones with teacher forcing can disrupt their visual priors and degrade autoregressive generation quality. In this paper, we introduce Mix Forcing, a causal pre-training paradigm for interactive video world models, implemented with the Mixture-of-Bidirectional-and-Autoregressive (MoBA) attention. Mix Forcing jointly trains a video diffusion model with both teacher forcing and bidirectional training, yielding a strong causal initialization for few-step post-training. In self-attention, Mix Forcing leverages teacher forcing to learn causal next-chunk prediction for autoregressive rollout, while using bidirectional attention to preserve pretrained visual priors. To support online text interaction, Mix Forcing further adopts a chunk-wise cross-attention design that conditions each video chunk on a shared environment prompt and its own local prompt, without exposing future instructions to the current chunk. Following causal pre-training on a 14B image-to-video model, we apply consistency and distribution matching distillation to obtain a four-step autoregressive generator. Experiments on our internal benchmark and public benchmarks, including WBench and SANA-WM-Bench, show that our model achieves state-of-the-art visual quality and timely event following with precise camera control. Notably, our model supports high-fidelity long-horizon generation without quality degradation even over one-hour rollouts. Project page is here: https://zelingao98.github.io/mixforcing",
    "published": "2026-10-24T10:31:58Z",
    "updated": "2026-10-24T10:31:58Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33589"
  },
  {
    "id": "2610.33582",
    "title": "Replicate What Varies: Resource Sharing for Domain-Randomized Embodied Simulation",
    "authors": [
      "Zixu Hao",
      "Weijun Wang",
      "Xiangyu Li",
      "Liang Mi",
      "Hao Wu",
      "Yunxin Liu",
      "Ting Cao"
    ],
    "abstract": "Simulation provides a low-cost sandbox where embodied agents can attempt tasks, observe outcomes, and learn from experience. Running many diverse simulation environments concurrently can consume substantial CPU and GPU memory because independently constructed scenes duplicate resources that remain unchanged across instances. We present Patchwork, a resource-sharing system for domain-randomized simulation, built around the representation $E=T+Δ$: a shared template contains common resources, and a patch records the mutations needed to construct a target environment. Patchwork separates randomization sampling from replay and selects reusable templates together with patches that preserve each target environment's intended configuration. Its layered runtime shares compiled model structure and immutable assets while keeping mutable parameters and simulation state private to each instance. We implement Patchwork on robosuite and MuJoCo and evaluate it on LIBERO-plus and RoboCasa365 workloads. At 32 replicas, shared-template execution reduces CPU RSS by 88-92% relative to process-per-environment execution. Controlled experiments show how sharing shifts memory growth toward template diversity and unique asset content rather than instance count, within the supported sharing boundaries.",
    "published": "2026-10-24T10:20:13Z",
    "updated": "2026-10-24T10:20:13Z",
    "categories": [
      "cs.DC",
      "cs.AI",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.33582"
  },
  {
    "id": "2610.33581",
    "title": "UltraFlash: Accelerating Megapixel Visual Synthesis",
    "authors": [
      "Phuc Lai",
      "Anh Nguyen",
      "Phong Nguyen",
      "Anh Tran"
    ],
    "abstract": "Megapixel visual synthesis with latent diffusion models requires operating far beyond the resolutions at which these models are typically trained. Cascade refinement is a leading strategy for this setting: it starts from a base image at a native resolution and progressively upsamples it to the target resolution through multiple refinement stages. Each stage typically performs a pixel-space resolution transition followed by latent-space denoising. While prior acceleration efforts mainly focus on reducing denoising cost, we identify a complementary and underexplored bottleneck: the repeated movement of representations through the VAE. We call these operations pixel-space transitions. In cascade pipelines, intermediate latents are often decoded to RGB, resized, and re-encoded before refinement, while final latents are decoded patch by patch with dense overlap to suppress boundary artifacts. We propose UltraFlash, a transition-efficient approach that accelerates these VAE-heavy operations. UltraFlash has two components. Latent Hyperloop replaces intermediate RGB round trips with a learned latent-space shortcut that approximates the decode-resize-encode transformation without repeated VAE decoding and encoding. Sparse Patch-based Decoding accelerates final reconstruction by addressing patch seams caused by inconsistent GroupNorm statistics and reusing cached statistics across patches, enabling sparse VAE decoding with much smaller overlap. Integrated into a state-of-the-art cascade baseline, UltraFlash reduces 4K generation latency by approximately 2x while improving image quality. These results show that optimizing pixel-space transitions can improve both efficiency and fidelity, offering an effective route toward fast, high-quality megapixel visual synthesis.",
    "published": "2026-10-24T10:19:20Z",
    "updated": "2026-10-27T11:09:49Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33581"
  },
  {
    "id": "2610.33580",
    "title": "ZoomSEM: accelerating large-scale brain connectomics with intelligent SEM super-resolution",
    "authors": [
      "Jiateng Shou",
      "Zhiwei Xiong",
      "Ruikang Xu",
      "Zhicheng Wang",
      "Peiyao Shi",
      "Te Shi",
      "Haiqun Jin",
      "Chunying Yin",
      "Jun Guo",
      "Manfred Auer",
      "Hanchuan Peng",
      "Ruobing Zhang",
      "Feng Wu"
    ],
    "abstract": "Serial electron microscopy (EM) is essential for large-volume biological imaging and connectomics, yet its throughput remains a major bottleneck, with cubic-millimeter-scale brain imaging requiring months or years. Existing deep learning-based EM super-resolution methods are limited to small upscaling factors or rely on synthetic data, offering modest acceleration and limited practical impact. We introduce ZoomSEM, a deep learning-based super-resolution method to dramatically accelerate SEM imaging. Trained on real low- and high-resolution scanning electron microscopy (SEM) pairs, ZoomSEM enables reliable recovery of 4$\\times$, 8$\\times$, and up to 16$\\times$ higher-resolution images from fast low-resolution scans while preserving fine neuronal structures critical for connectomic analysis, achieving up to 30-fold effective acceleration. Extensive experiments across datasets of diverse biological samples demonstrate robust generalization under realistic low-resolution acquisition. This advance enables high-resolution, large-volume serial EM imaging at unprecedented speed, poised to transform connectomics and related fields.",
    "published": "2026-10-24T10:18:50Z",
    "updated": "2026-10-24T10:18:50Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33580"
  },
  {
    "id": "2610.33575",
    "title": "CADonatello: Towards Real-World Multi-Part 3D CAD Reconstruction",
    "authors": [
      "Ahmet Serdar Karadeniz",
      "Dimitrios Mallis",
      "Parsa Akbari Chianeh",
      "Kseniya Cherenkova",
      "Anis Kacem",
      "Djamila Aouada"
    ],
    "abstract": "Existing methods for CAD reconstruction from 3D scans achieve strong performance on standard benchmarks, yet their effectiveness often degrades in real-world scenarios where objects consist of multiple parts and scan artifacts such as noise. A key reason is that current CAD reconstruction datasets predominantly contain single-part models and clean geometric inputs, limiting the ability of learned models to generalize to realistic settings. In this work, we introduce CADonatello, a part-aware framework for reconstructing parametric CAD models from real-world 3D scans. Our approach first decomposes the input geometry into structurally meaningful components using a foundation-scale 3D part segmentation model, and then reconstructs each component independently through a cross-section-driven pipeline that performs sketch parameterization followed by an extrusion. To improve the robustness of sketch parameterization to scan-derived cross-sections, we further introduce CC3D Cross-Sections, a dataset of paired rasterized cross-section images from realistic scans and their corresponding parametric sketches derived from aligned CAD models. This dataset enables effective domain adaptation from clean CAD sketch images to scan-derived cross-section images. Extensive experiments demonstrate that the proposed approach improves generalization to noisy scans and enables reliable reconstruction of complex multi-part objects across multiple real-world CAD reverse engineering benchmarks.",
    "published": "2026-10-24T10:05:26Z",
    "updated": "2026-10-24T10:05:26Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33575"
  },
  {
    "id": "2610.33566",
    "title": "Distilling Dense Trajectory Teachers For Large-Motion Video World Models",
    "authors": [
      "Shuofeng Sun",
      "Linqing Zhao",
      "Haibin Yan"
    ],
    "abstract": "Video world models are expected to generate videos that accurately follow specified camera trajectories while maintaining consistent 3D structures. However, existing models are predominantly trained on densely sampled videos with small inter-frame camera motions. When applied to sparse, large step trajectories, they often produce frozen frames, inaccurate camera motion, and severe geometric drift. We attribute this degradation to a mismatch between the gradual viewpoint transitions seen during training and the large viewpoint changes required at inference time. To address this problem, we propose Dense Trajectory Teacher Distillation (DTTD), a post-training framework that transfers a model's generation capability from dense trajectories to large camera motions. Given a sparse trajectory, DTTD interpolates additional camera poses to construct a dense trajectory covering the same path. The frozen base model then generates reliable teacher videos along this familiar dense trajectory, and pose aligned teacher observations are used to evaluate candidate videos generated under the original sparse trajectory. In this way, the model serves as its own generation teacher, requiring neither additional video data nor a stronger external video generator. We further combine dense teacher supervision with geometry aware rewards that assess cross frame consistency and camera trajectory following, and use the resulting preferences for offline preference optimization. To stably expand the model's motion range, we introduce a cumulative curriculum that progressively incorporates larger motion steps while retaining simpler trajectories to reduce capability forgetting.",
    "published": "2026-10-24T09:35:13Z",
    "updated": "2026-10-24T09:35:13Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33566"
  },
  {
    "id": "2610.33565",
    "title": "WorldFailBench: Do World Models Understand Policy Failures?",
    "authors": [
      "Zheng Zhang",
      "Xiaoyang Tang",
      "Shuaiqi Cheng",
      "Jiakai Huang",
      "Zhongbo Wu",
      "Ziyi Zhang",
      "Yuan Si",
      "Zeyu Liu",
      "Weibo Gao",
      "Shunyu Liu",
      "Shan You",
      "Fei Wang",
      "Xiaogang Wang",
      "Dacheng Tao"
    ],
    "abstract": "Robot policy evaluation informs deployment decisions and policy improvement, but physical testing and simulator preparation require substantial effort. World models offer a complementary route through closed-loop interaction in generated environments. Recent benchmarks have demonstrated their potential as policy evaluators through outcome-based evaluation (i.e., assessing task success or failure). However, such evaluation does not establish whether world models faithfully simulate how policies fail. Misrepresenting failures can lead to incorrect diagnoses of policy weaknesses and make policies appear ready for deployment even when small scene changes cause them to fail. We therefore ask: do world models faithfully simulate how and at which stages policies fail, and under what conditions they transition from success to failure? To answer this question, we introduce WorldFailBench with three evaluation tasks. Failure reason tests whether models reproduce the observable errors policies make. Failure stage assesses whether failures concentrate at the same stages of full-task execution. Failure boundary examines whether models reproduce the conditions under which policies transition from success to failure under controlled scene changes in simulation. The benchmark covers manipulation tasks in the LIBERO and RoboTwin simulation environments and real-world manipulation tasks performed by the G1 humanoid robot. Experiments across seven world models reveal substantial gaps in their understanding of policy failures, providing guidance for developing more reliable world models for policy evaluation.",
    "published": "2026-10-24T09:33:52Z",
    "updated": "2026-10-24T09:33:52Z",
    "categories": [
      "cs.RO",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33565"
  },
  {
    "id": "2610.33564",
    "title": "What Remains OOD? OODConceptBench for Open-World Concept Recognition in Vision-Language Models",
    "authors": [
      "Zhiran Luo",
      "Zhiyong Yang",
      "Zitai Wang",
      "Sicong Li",
      "Qianqian Xu",
      "Qingming Huang"
    ],
    "abstract": "In the era of large-scale pretrained models, zero-shot generalization has increasingly blurred the boundary between known and unknown concepts. However, current evaluations do not directly reveal which open-world concepts different vision-language models can recognize. To study this problem, we introduce OODConceptBench, a hierarchical benchmark for open-world concept recognition on image-concept pairs. The full benchmark set (L1) contains 30,752 images, and the harder subset (L2) contains 14,285 images. The benchmark covers 560 concept phrases across seven open-world categories. We evaluate 37 vision-language models across release year, model family, and variant. We obtain three main findings. First, target-concept recognition is lower on L2 than on L1 across all 37 evaluated models. Second, later-released models do not necessarily achieve stronger open-world concept recognition. Third, an increase in overall recognition does not imply consistent improvement across all benchmark categories. Together, these results show that OOD remains a challenge even in the era of large-scale vision-language pretraining.",
    "published": "2026-10-24T09:33:41Z",
    "updated": "2026-10-24T09:33:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.33564"
  },
  {
    "id": "2610.33562",
    "title": "Hybrid-time PINNs: Discontinuity-Aware Physics-Informed Neural Networks for Learning Hybrid Dynamical Systems",
    "authors": [
      "Shivanshu Tripathi",
      "Maziar Raissi"
    ],
    "abstract": "Hybrid dynamical systems flow continuously but jump at discrete events. Physics-informed neural networks (PINNs) fit data while enforcing known dynamics, but a single network is smooth in time and cannot model these jumps. We show that the more closely a PINN follows a jump, the larger its physics loss must be. We propose hybrid-time PINNs (HT-PINNs), which assign one network to each flow interval of the hybrid time domain and train the networks jointly with the jump times and the unknown parameters. The number of jumps and the sequence of modes are found by enumeration. HT-PINNs recover the number of jumps and the restitution coefficient of a bouncing ball. In a MuJoCo simulation of robotic disassembly, where a robot pulls a press-fitted pin out of a housing through a spring, HT-PINNs find the number of jumps and the sequence of modes, and estimate the static and kinetic friction coefficients with small errors of 0.1% and 1.7%.",
    "published": "2026-10-24T09:29:58Z",
    "updated": "2026-10-24T09:29:58Z",
    "categories": [
      "eess.SY",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33562"
  },
  {
    "id": "2610.32163",
    "title": "Forging Emotions: a deep learning experiment on emotions and art",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Affective computing is an interdisciplinary field that studies computational methods that relate to or influence emotion. These methods have been applied to interactive media artworks, but they have focused on affect detection rather than affect generation. For affect generation, computationally creative methods need to be explored that have recently been driven by the use of Generative Adversarial Networks (GANs), a deep learning method. The experiment presented in this paper, Forging Emotions, explores the use of visual emotion datasets and the working processes of GANs for visual affect generation, that is, for generating images that can convey or trigger specified emotions. This experiment concludes that the methodology used so far by computer science researchers to build image datasets for describing high-level concepts such as emotions is insufficient and proposes utilizing emotional networks of associations according to psychology research. Forging Emotions also concludes that to generate affect visually, merely corresponding to basic psychology findings, such as bright or dark colours, does not seem adequate. Therefore, research efforts should aim to understand the structure of trained GANs and compositional GANs in order to produce genuinely novel compositions that can convey or trigger emotions through the subject matter of generated images.",
    "published": "2026-10-23T04:54:00Z",
    "updated": "2026-10-23T04:54:00Z",
    "categories": [
      "cs.CV",
      "cs.CY",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32163"
  },
  {
    "id": "2610.32161",
    "title": "MG-REPA: Multi-Granularity Representation Alignment for Generative Target Speaker Extraction",
    "authors": [
      "Dohwan Kim",
      "Jung-Woo Choi"
    ],
    "abstract": "Generative target speaker extraction (TSE) models achieve high-quality extraction, but suffer from considerably slow training convergence. Representation Alignment (REPA) accelerates diffusion transformer training by aligning hidden states with a pre-trained Self-Supervised Learning (SSL) teacher. However, existing alignment in the speech and audio domain operates at a single granularity. For TSE, frame-level alignment leaves the global, time-invariant characteristics of the target speech implicit, whereas utterance-level alignment leaves the time-varying content implicit, even though extracting the target requires both. We propose Multi-Granularity Representation Alignment (MG-REPA), aligning the hidden states with an SSL model at the frame level and a speaker verification model at the utterance level. We further apply temporal normalization to the frame-level target, removing its utterance-level statistics so that each branch concentrates on its granularity. On Libri2Mix, MG-REPA reaches the OVRL and PESQ of a MeanFlow-TSE baseline with $3.0\\times$ and $2.1\\times$ fewer epochs, respectively. Trained for 750 epochs, it is competitive with the published 2,000-epoch baseline on intrusive metrics while improving non-intrusive metrics. An ablation demonstrates that MG-REPA outperforms alignment at a single granularity.",
    "published": "2026-10-23T04:51:51Z",
    "updated": "2026-10-23T04:51:51Z",
    "categories": [
      "eess.AS",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32161"
  },
  {
    "id": "2610.32159",
    "title": "Playing Bias: Epistemic Games for Interpreting Text-to-Image Models",
    "authors": [
      "Amalia Foka"
    ],
    "abstract": "Text-to-image (T2I) systems do not merely render prompts; they circulate defaults for \"what X looks like,\" shaping recognition through pose, camera, costume, props, and setting. While technical audits quantify disparities, they rarely cultivate the literacy needed to argue how images assemble stereotypes and confer authority. This paper translates a three-stage, humanities-informed framework into a set of epistemic games that make this cultural work visible and debatable: Interpret (art-historical close looking with AI outputs), Interrogate (counter-intent prompting as artistic exploration), and Expose (creative misuse through paired prompts with a constant motif and a BiasSlot rule, in which only the bias cue varies). In a pilot with undergraduate fine-arts students, the games shifted discussion from impressionistic reactions to concise, warranted hypotheses grounded in visual evidence, supported by lightweight classroom instruments that enabled reproducibility and structured collaboration. We argue that such game-based approaches foster critical literacy across educational contexts, equipping learners to recognize, discuss, and contest how T2I models encode bias.",
    "published": "2026-10-23T04:50:16Z",
    "updated": "2026-10-23T04:50:16Z",
    "categories": [
      "cs.CY",
      "cs.CV",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.32159"
  },
  {
    "id": "2610.32153",
    "title": "Sparsity-driven emergence of functional modularity in multitask neural networks",
    "authors": [
      "Bowen Shi",
      "Qi Ouyang",
      "Long Qian"
    ],
    "abstract": "Neural networks can learn multiple tasks, but how learning organizes shared computation into specialized and reusable components remains poorly understood. In this work, we show that sparsity inducing regularization promotes functional modularity in multitask networks without predefined module boundaries. Using functional profiling in multilayer perceptrons and a lightweight transformer, we identified compact, task-selective subnetworks, termed functional tokens. Across rule-based task families, selectively retaining these tokens preserves their associated functions while reducing performance on other tasks. Such specialization develops preferentially in deeper layers during training, while earlier layers retain shared computation. Regularization strength and form shape module compactness and specialization, while task weighting alters functional allocation. Moreover, extracted functional tokens can be recombined through alternative pathways to reconstruct a learned composite computation without retraining, preserving their connectivity and learned weights. Our results suggest that sparsity-constrained optimization shapes not only parameter use but also the organization and reuse of learned computation.",
    "published": "2026-10-23T04:38:24Z",
    "updated": "2026-10-23T04:38:24Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32153"
  },
  {
    "id": "2610.32151",
    "title": "The LLENS Platform for On-Premises Large Language Model Agents in a Japanese University Hospital: Development and Evaluation Study",
    "authors": [
      "Ken Enda",
      "Jien Saito",
      "Masami Mukai",
      "Feng Han",
      "Emir Turkes",
      "Tatsumi Kusakabe",
      "Reona Umeki",
      "Kazuhiro Sumiyoshi",
      "Mitsuya Numata",
      "Takumi Tanikawa",
      "Akira Endoh",
      "Kenji Hirata",
      "Atsushi Yoshida",
      "Kohsuke Kudo",
      "Shinya Tanaka"
    ],
    "abstract": "Large language model agents that use tools could take on part of the electronic health record and desk work that occupies physicians' time, but in many hospitals the medical information systems run inside closed networks, so the model and the agent harness must also be inside the network. We designed, implemented, and deployed LLENS, a clinical support AI agent platform that runs inside the closed network of Hokkaido University Hospital on a single host with 8 NVIDIA H200 GPUs, the open-weight model Kimi K2.6 (~1 trillion parameters), and a web application rebuilt from Open WebUI. The harness has 10 components, including page image reading, full-text attachment input, a path-addressed document tree without a vector index, a network-isolated sandbox, artifact return, self-checking of generated output, subagents, and saved procedures. Kimi K2.6 was chosen from 3 open-weight candidates and scored 480/500 on the 2026 Japanese Medical Licensing Examination; it generated 119 tokens/s for a single user and served 16 concurrent requests at 908 tokens/s in total. On 180 questions over hospital documents (3 seeds each), mean accuracy was 10.7% with no documents, 81.3% with fixed retrieval (top 10 chunks of one lexical search), and 97.2% with interactive access, in which the model reads with document tools and the sandbox (15.9 percentage points above fixed retrieval, 95% CI 10.9-21.3); the difference lay in filtering/counting questions (16.7% vs 87.8%). In an automated test of 13 work scenarios (4 runs each), the expected components were triggered in all runs for 12, and 5 scenarios were run with synthetic data on the deployment host. The platform has run on the hospital network since September 14, 2026.",
    "published": "2026-10-23T04:34:26Z",
    "updated": "2026-10-26T04:31:45Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32151"
  },
  {
    "id": "2610.32147",
    "title": "Implicit Neural Representations for Variational Problems on Graphons",
    "authors": [
      "Taeyoung Kim",
      "Jineon Baek",
      "Joonkyung Lee",
      "Hongseok Yang"
    ],
    "abstract": "We propose a neural exploratory framework for variational problems over graphons, i.e., symmetric measurable functions $[0,1]^2 \\to [0,1]$, that arise as limits of dense graph sequences. Such problems are central to two parts of the mathematical literature: extremal graph theory, which studies graph parameter optimisation under given restrictions, often for those graphs with a large number of vertices, and the large deviation theory of dense random graphs, which characterises the structure of rare events through constrained graphon optimisation. We represent graphons by implicit neural networks and optimise graphon objectives by gradient descent. Our design combines three ingredients: a multi-scale sinusoidal residual architecture biased toward sharp, step-like graphons; an embedded solver that enforces a single empirical density constraint and is differentiated by implicit differentiation; and symmetry-aware Monte Carlo estimators. On generalised Turán problems that previously required substantial human effort, our framework rediscovers known optimal graphons without human intervention. Applied to open instances, it produces candidate optima, including a previously unreported family of extremal structures. Applied to the variational problems from the large deviation theory of Erdős--Rényi random graphs, the framework produces new candidate optimal graphons across both upper- and lower-tail regimes for multiple pattern graphs; for the case of the triangle graph and the upper-tail regime, these candidates improve upon the best-known reference construction of Lubetzky and Zhao. The structures found by our framework have also led to new theorems on the optimal graphons for both families of problems.",
    "published": "2026-10-23T04:25:44Z",
    "updated": "2026-10-23T04:25:44Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG",
      "math.CO"
    ],
    "url": "https://arxiv.org/abs/2610.32147"
  },
  {
    "id": "2610.32146",
    "title": "Separating Angular Alignment from Radial Ordering in Hyperbolic Vision-Language Models",
    "authors": [
      "Mingyang Gao",
      "Yuwei Wu",
      "Shiyu Luo",
      "Wei Wu",
      "Xiaomeng Fan",
      "Qihao Lv",
      "Haoyu Zhang",
      "Rui Gao",
      "Bingzhen Liu",
      "Zhi Gao",
      "Che Sun"
    ],
    "abstract": "Hyperbolic vision-language models are well suited to modeling the hierarchical structure of multimodal data, because hyperbolic volume grows exponentially with radius, enabling low-distortion representations of tree-like taxonomies from general to specific concepts. However, existing pretraining objectives for hyperbolic vision-language models entangle semantic alignment with entailment modeling, forcing radial coordinates to simultaneously encode semantic matching and hierarchical structure, leading to conflicting geometric constraints. In this paper, we introduce AURORA, a hyperbolic vision-language framework that decouples the objectives through angular alignment and a novel Radial-Angular Order Cone (RAOC) for entailment modeling. Angular alignment captures semantic similarity while preserving the radial structure for representing hierarchies. Unlike conventional entailment cones, RAOC determines angular allowance from relative parent-child radial gaps. It is incorporated into hierarchical entailment contrastive training to capture partial-order relations. We further introduce a norm regularization term that prevents undesirable radial degeneration for stable training. We train models on millions of image-text pairs and evaluate them across zero-shot classification, image-text retrieval, hierarchical reasoning, and compositional understanding. Our model consistently outperforms strong Euclidean and hyperbolic vision-language baselines, demonstrating the effectiveness of decoupling semantic alignment from hierarchical entailment modeling.",
    "published": "2026-10-23T04:25:17Z",
    "updated": "2026-10-23T04:25:17Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.32146"
  },
  {
    "id": "2610.32142",
    "title": "Rethinking LoRA Initialization for Robust Asymmetric Learning Rates",
    "authors": [
      "Disen Liao",
      "Yaoliang Yu"
    ],
    "abstract": "Low-Rank Adaptation (LoRA) is often highly sensitive to learning-rate (LR) choices. Recent empirical studies suggest that, once LRs are carefully tuned, vanilla LoRA can remain competitive with many proposed LoRA variants. This shifts the central practical question from designing ever more variants to reducing the cost and brittleness of LR selection. LoRA+ addresses this issue with asymmetric LRs, using a larger LR for the up-projection matrix $B$ than for the down-projection matrix $A$. However, the ratio $η_B / η_A$ itself becomes an additional hyperparameter: large ratios can improve adaptation, but under the standard LoRA initialization they can also cause unstable training and ratio-dependent performance collapse. We identify the source of this brittleness through a signal--noise decomposition of LoRA dynamics. Under standard \\initA, the update contains an initialization-induced noise term whose magnitude can be affected by the LR for $B$, $η_B$, the initialization scale $β$, and the adapter rank $r$. In practical LLM fine-tuning, this non-vanishing noise can limit the performance gains expected from LoRA+ style asymmetric LRs. To suppress this effect, we propose \\initAA, a simple initialization that scales the variance of $A$ as $σ_A^2 \\propto n^{-2}$ while keeping $B_0=0$. Under matched rank and training time for both initializations, this reduces the initialization-noise energy by an additional factor of $1/n$, stabilizing asymmetric LoRA training while preserving zero initial adapter output. Empirically, \\initAA substantially widens the stable LR region across initialization scales, adapter ranks, and LoRA update multipliers. Across tasks and models, \\initAA reduces best-ratio drift, prevents the high-ratio collapse observed with standard \\initA, and makes the width-based guideline $η_B \\approx n η_A$ a useful starting point for finite pretrained models.",
    "published": "2026-10-23T04:15:33Z",
    "updated": "2026-10-23T04:15:33Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32142"
  },
  {
    "id": "2610.32141",
    "title": "Beyond Data Schedule: Fast LLM Pretraining on Data Mixtures by Loss-Reweighting",
    "authors": [
      "Jiazheng Li",
      "Huaqing Zhang",
      "Jing Xu",
      "Tianle Cai",
      "Jingzhao Zhang"
    ],
    "abstract": "Large language models often acquire specialized capabilities through successive pretraining stages, but these gains can come at the cost of forgetting earlier knowledge. In this work, we investigate whether such trade-offs can be improved by changing how strongly each domain contributes to learning while keeping its data exposure fixed. We find that, in controlled knowledge--mathematics experiments, loss reweighting produces a single checkpoint that surpasses the best knowledge and reasoning scores attained along either stage trajectory. This reveals an independent control that data-mixture ratios alone do not capture. Building on this finding, we propose LARE (Loss-Adaptive Reweighting under fixed Exposure), which automatically adjusts domain weights from running loss statistics. Motivated by a theoretical analysis of gradient noise, its normalized inverse-square-root rule balances relative loss scales without changing the sampled mixture or requiring additional runs to search for weights. Across knowledge, mathematics, and code, \\Method{} improves all five evaluated benchmarks for a 1.5B model trained on 240B tokens, averaging +7.84 pp over a matched direct mixture, including gains of +17.06 pp on GSM8K and +9.00 pp on MATH. These findings demonstrate that adjusting domain loss scales can improve joint capabilities without additional domain exposure.",
    "published": "2026-10-23T04:09:46Z",
    "updated": "2026-10-23T04:09:46Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.32141"
  },
  {
    "id": "2610.32132",
    "title": "SyncPro: Synchronous Reasoning and Responding for Proactive Streaming Video Understanding",
    "authors": [
      "Xueyun Tian",
      "Bingbing Xu",
      "Jiaming Liu",
      "Jinpeng Yu",
      "Yang Shi",
      "Yu Zhao",
      "Ruihua Huang",
      "Yuanzhuo Wang",
      "Huawei Shen"
    ],
    "abstract": "Proactive streaming video understanding requires assistants to track unfolding events and respond when a user's requested condition is met. To make these decisions, assistants must accumulate relevant evidence and reassess response conditions as new observations arrive. Existing work offers complementary capabilities for this process: proactive video assistants learn when to respond, while streaming video reasoning methods generate scheduled intermediate text to organize observations and support subsequent answers. Together, these capabilities provide a foundation for proactive reasoning, but how to coordinate ongoing reasoning with timely responses remains underexplored. In a direct adaptation, fixed reasoning intervals can trigger updates when nothing relevant has changed or postpone useful updates until the next scheduled step. Sharing one generation path also couples two distinct requirements: preserving evidence for future decisions and producing only the response requested by the user. Moreover, responses generated after reasoning must wait for it to finish, even when sufficient evidence is already available. To address these challenges, we introduce SyncPro, a synchronous dual-stream framework with specialized generation paths for evidence tracking and user-facing responses. Its Inner and Response branches share causal history and activate independently, allowing relevant evidence changes to trigger internal updates and responses to proceed concurrently with ongoing reasoning. We construct 189K dual-stream examples and train SyncPro through supervised fine-tuning followed by trajectory-level reinforcement learning. Experiments across three proactive benchmarks show improved response timing and more accurate answers to user requests.",
    "published": "2026-10-23T03:58:17Z",
    "updated": "2026-10-23T03:58:17Z",
    "categories": [
      "cs.CV",
      "cs.CL",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32132"
  },
  {
    "id": "2610.32129",
    "title": "Shorter Is Not Cheaper: A Controlled Comparison of Declarative Animation Specifications and Free-Form Code for LLM-Generated Explanations",
    "authors": [
      "Jiantang Huang"
    ],
    "abstract": "Chat assistants increasingly answer conceptual questions with interactive, animated explanations, generated either as free-form HTML/JavaScript or as declarative specifications that a fixed runtime plays. The declarative route is widely expected to be cheaper, faster and more reliable, because its outputs are shorter and constrained. We test this expectation in controlled comparisons whose hypotheses and analysis plans were frozen before the runs. We designed ExplainSpec, a time-indexed declarative animation format, and an observation contract that makes every generated explanation programmatically inspectable; validated, pacing-agnostic checkers score 20 explanation requests from five domains. Three Claude models (360 jobs) and, in a follow-up, the open-weight Qwen3-14B with thinking enabled and disabled (240 jobs) answered every request in both formats. For every model the specifications were 25-48% shorter in answer tokens (output excluding reasoning), yet with reasoning enabled total output fell significantly only for the largest Claude model and no model generated significantly faster. The reasons differed. The Claude models reasoned far more before writing specifications (exploratory; for the two larger models, from 15-20% to 85-88% of generations). Qwen3-14B reasoned about as much in both formats (a pre-registered test of this shift was not supported), and its shorter answers saved little against a reasoning trace more than twice as long. Nor were specifications more reliable: free-form pages were valid after one repair round in 95-100% of jobs for every model, whereas Qwen3-14B produced valid specifications in only 33% of jobs and passed all semantic tests in 17% (HTML/JavaScript: 62%). For reasoning models, a shorter format alone therefore does not make generation cheaper, faster or more reliable, and a format learned in context can cost reliability.",
    "published": "2026-10-23T03:56:19Z",
    "updated": "2026-10-23T03:56:19Z",
    "categories": [
      "cs.CL",
      "cs.HC",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.32129"
  },
  {
    "id": "2610.32127",
    "title": "MPQ: A Message-Passing View of Post-Training Quantization",
    "authors": [
      "Yanshuo Chen",
      "Chenxi Liu",
      "Reza Shirkavand",
      "Heng Huang"
    ],
    "abstract": "Post-training quantization (PTQ) is a key technique for efficiently deploying large language models, as it compresses weights into low-bit representations without retraining. Existing PTQ solvers, including GPTQ, LDLQ, and block coordinate descent, commit each weight block to a single codeword before its neighbors are considered, leaving near-optimal alternatives unexplored. In this work, we cast row-wise PTQ as posterior inference over discrete codebooks, in which existing solvers correspond to a zero-temperature, hard-decision limit retaining only the top codeword per block. We propose Message-Passing Quantization (MPQ), which preserves soft posterior information across blocks during inference and commits to hard codewords only at the output stage. MPQ first uses vector approximate message passing to compute approximate blockwise posteriors, then refines a hard-decision initialization by exact block coordinate descent. Across 2-bit lattice and 3- and 4-bit scalar quantization on dense language models from Llama, Qwen, and Mistral families, MPQ improves perplexity and zero-shot accuracy over strong hard-decision baselines, and composes favorably with preprocessing techniques such as activation-aware scaling and incoherence processing. Our implementation is available at https://github.com/poseidonchan/MPQ.",
    "published": "2026-10-23T03:54:41Z",
    "updated": "2026-10-23T03:54:41Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.32127"
  },
  {
    "id": "2610.30895",
    "title": "Your Home Remembers: A Voice-Enabled Household Memory Assistant for Conversational Retrieval",
    "authors": [
      "Aleix Sant",
      "Jordi Luque",
      "Fernando López",
      "Pablo Gómez",
      "Carlos Escolano"
    ],
    "abstract": "Everyday household information is often exchanged in conversations but never written down, making details easy to forget or misremember. We present a voice-enabled smart-home assistant that acts as a household memory by recording conversations and retrieving information from stored and newly captured speech. The assistant runs on an Android tablet with a modular architecture in which speech-recognition, diarisation, embedding and language models can be configured or replaced through an orchestration layer. On-device wake-word detection and VAD-based query capture support hands-free interaction. Recorded audio is processed in configurable chunks, transcribed and diarised, converted into turn-aware passages with conversation-level timestamps, and indexed in a vector store. For memory queries, a retrieval-augmented generation pipeline selects key passages and uses them to generate an answer. The interface supports recording, conversation management and inspection of timestamped sources.",
    "published": "2026-10-22T08:19:07Z",
    "updated": "2026-10-22T08:19:07Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30895"
  },
  {
    "id": "2610.30893",
    "title": "Working Through Representation: Malleable Workspaces for Human-Agent Knowledge Work",
    "authors": [
      "Nan Chen",
      "Long Ling",
      "Luna K. Qiu",
      "Zilong Wang",
      "Yuqing Yang"
    ],
    "abstract": "Generative AI supports knowledge work, yet conversational histories may not capture the evolving organization that guides subsequent action. We introduce the Malleable Workspace, a conceptual model of how humans and agents form and revise a Work Representation and use its organization to advance work within a wider Work Environment. We developed it iteratively through conceptual analysis, comparison of 58 papers, and the construction and three-month longitudinal study of MalleableSpace with seven experienced agent users. Systems varied in what they represented as units and relations. System-assembled context was common; more systems supported local incorporation of agent outputs than reorganization, and fewer supported consequential agent-driven changes beyond the representation. The field study showed how representational roles and organization developed in use. These observations refined the model's account of how representation-grounded action depends on and can change the Work Environment. We contribute a conceptual and analytic foundation for representation-centered human--agent design.",
    "published": "2026-10-22T08:12:49Z",
    "updated": "2026-10-22T08:12:49Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.30893"
  },
  {
    "id": "2610.30875",
    "title": "HimmBO: High-Dimensional Interactive Model-Merging Bayesian Optimization for Image Generation",
    "authors": [
      "Jinyuan Mao",
      "Zhihao Shen",
      "Chenxi Liu"
    ],
    "abstract": "Fine-tuning has become a common way to customize text-to-image models, leading to community collections of over 100K lightweight adapters. Adapters sharing a base model can be merged with continuous coefficients. This turns a large collection into a high-dimensional continuous design space, which recent work explores interactively using preferential Bayesian optimization (PBO). However, existing approaches are limited to a few dozen preselected adapters and require expensive image generation in every interaction round. We introduce HimmBO, a two-stage method that scales preference-driven adapter merging to much larger collections while reducing image-generation cost. Its screening stage recovers the active adapter set through level-set estimation over pre-generated images, requiring no image generation. The refinement stage then optimizes merge coefficients in the recovered low-dimensional subspace. Both stages use a style-aware kernel, allowing preference information to transfer between visually similar adapters. In simulated-user image-matching experiments, HimmBO achieves higher final similarity than all comparisons while reaching a given similarity with under one tenth of the image generations required by prior work. Its performance remains stable as the collection grows to 1080 adapters, while competing methods degrade substantially.",
    "published": "2026-10-22T07:56:10Z",
    "updated": "2026-10-22T07:56:10Z",
    "categories": [
      "cs.CV",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.30875"
  },
  {
    "id": "2610.30873",
    "title": "MOER: Mix-Policy Optimization under Expert Prefix Guidance with Selective Rollback",
    "authors": [
      "Xuyang Zhong",
      "Jiuding Yang",
      "Yiwen Guo",
      "Chen Liu"
    ],
    "abstract": "Mix-policy optimization incorporates off-policy expert data into the reinforcement learning (RL) loop to transcend the capability boundary of on-policy RL. However, existing methods either provide static full-trace guidance that suppresses self-exploration, or adopt expert prefix guidance without correctness guarantees, leading to suboptimal performance or even training collapse. In this paper, we propose MOER, a mix-policy optimization framework that harmonizes expert guidance with self-exploration. MOER injects a decaying expert chain-of-thought prefix into the prompt and lets the model complete the remaining reasoning, with the prefix length progressively annealed to encourage self-exploration. A selective rollback mechanism replaces failed completions with the original full expert trace, guaranteeing the correctness of every off-policy trajectory. Furthermore, a harmonized mix-policy objective optimizes on-policy tokens with a GRPO loss while supervising both expert prefix and completion tokens with a trust-region SFT loss, substantially stabilizing training. Extensive experiments show that MOER achieves the highest average scores in mathematical and general domain reasoning tasks, outperforming all basic and mix-policy baselines, and generalizes consistently across diverse tasks, model scales, and base model categories. Codes are available at https://github.com/CityU-MLO/MOER.",
    "published": "2026-10-22T07:54:45Z",
    "updated": "2026-10-22T07:54:45Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30873"
  },
  {
    "id": "2610.30867",
    "title": "Folding Pooled Usage Examples into the Tool Index Lowers Retrieval of Unused Tools",
    "authors": [
      "Abhijit Chakraborty"
    ],
    "abstract": "AI agents often find tools by searching their documentation. Agents that share a tool catalog can also pool usage examples: past requests, each tagged with the tool that handled it. We ask what pooling does to tools no agent has used yet. Adding each usage example to the search index as an extra entry for its tool (folding) helps tools that have examples, but on two of three catalogs it sharply lowers how often a needed unused tool reaches the top five results; on StableToolBench with our main embedding model, the share falls from 73 to 40 percent of queries. When the extra entries hold documentation from other tools instead of requests, the loss is much smaller, though differences in content or writing style could also explain this. We introduce ZoE (Z-scores over Evidence), a scoring rule that scores the documentation and the usage of a tool separately, so a tool without usage keeps its documentation score. On all three catalogs and with both embedding models we tested, ZoE retrieves unused tools more often than a router that reserves result slots for usage matches. With our main embedding model, the router retrieves more of the other tools on two catalogs, and in post hoc comparisons a simpler rule that adds a constant to the scores of tools with usage shows no detected difference from ZoE on unused tools. For five simulated agents on one catalog, folding lowered retrieval of unused tools for every agent; with ZoE no average drop was detected, though some agents still lost. Evaluations of pooled agent experience should report tools no agent has used separately from the average.",
    "published": "2026-10-22T07:45:24Z",
    "updated": "2026-10-25T04:34:55Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30867"
  },
  {
    "id": "2610.30866",
    "title": "Verus-Insight: Towards Explainable Artifact Detection in AI-Generated Videos",
    "authors": [
      "Zhuoran Zhang",
      "Yang Shi",
      "Qixun Wang",
      "Tengfei Liu",
      "Yuqi Tang",
      "Xuanyu Zhu",
      "Yizhuo Jia",
      "Jingyun Hua",
      "Shixuan Liu",
      "Xianghua Ying",
      "Haotian Wang",
      "Yuanxing Zhang",
      "Pengfei Wan",
      "Wenjing Yang"
    ],
    "abstract": "Recent advances in video generation have made synthetic videos increasingly realistic, placing greater demands on reliable AI-generated video detection. Existing artifact-based detectors typically identify generation artifacts as evidence for source prediction, yet they may either fail to recognize subtle artifacts or reach the correct source decision without faithfully identifying the evidence underlying it. In this work, we systematically investigate how to design and train effective artifact detectors and formulate artifact detection as a structured process comprising three complementary capabilities: Inspection Planning, which determines what should be examined; Evidence Verification, which verifies whether the inspected content exhibits genuine generation artifacts; and Evidence Aggregation, which integrates the verified evidence into the final source decision. Building on this formulation, we introduce Verus-Insight, trained with human-anchored full-process supervision and progressive capability training to strengthen both fine-grained artifact detection and video-level detection. We further introduce Verus-Bench, a benchmark with fine-grained human annotations of perceptible artifacts for evaluating artifact detection. Extensive experiments across diverse benchmarks demonstrate that Verus-Insight achieves strong performance in both fine-grained artifact analysis and AI-generated video detection, with substantial gains in recovering human-perceived artifacts. Further analyses reveal that the three capabilities are complementary yet distinct, and that Verus-Insight more reliably converts relevant inspection targets into supported artifact evidence without increasing spurious artifact claims.",
    "published": "2026-10-22T07:44:36Z",
    "updated": "2026-10-23T05:22:18Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.30866"
  },
  {
    "id": "2610.30863",
    "title": "Cross-Spectral Feature Fusion for Multispectral Document Binarization",
    "authors": [
      "Yasas Savinda",
      "Maheshi Buddhinee Dissanayake"
    ],
    "abstract": "Historical document binarization remains challenging when faded ink, bleed-through, and background degradation exhibit wavelength-dependent behavior across visible and near-infrared observations. This study investigates whether adaptive cross-spectral feature fusion and targeted structural guidance can improve multispectral document binarization beyond fixed fusion and generic attention mechanisms. Four registered SMADI bands at 500, 600, 700, and 1000 nm are processed using a multi-branch conditional generative adversarial network (cGAN). Visible, NIR, and structural feature streams are fused at encoder depth L = 3 using spatial- and channel-wise softmax gating, while auxiliary edge maps derived from selected VIS-NIR band pairs provide targeted structural guidance. Nine controlled fusion and structural configurations are evaluated using five-fold document-level cross-validation, DIBCO-standard metrics, and Holm-corrected statistical testing. The F3 + NIR edge-guided configuration provides the strongest overall performance among the evaluated models, achieving mean F1 = 0.7916, p-FM = 0.8044, and IoU = 0.6654. Relative to the fixed Mid AVG baseline, it improves F1 by 0.0269, p-FM by 0.0360, and IoU by 0.0321, with all three gains remaining statistically significant after Holm correction. Mean NRM and DRD are also reduced, although these reductions are not statistically significant after correction. Targeted cross-spectral structural guidance provides an effective mechanism for regulating intermediate multispectral fusion, improving primary foreground-overlap performance while retaining the complete four-band observation.",
    "published": "2026-10-22T07:42:35Z",
    "updated": "2026-10-22T07:42:35Z",
    "categories": [
      "cs.CV",
      "eess.SP"
    ],
    "url": "https://arxiv.org/abs/2610.30863"
  },
  {
    "id": "2610.33094",
    "title": "Beyond Correctness: Attribution of Natural-Language Documentation for Formal Libraries",
    "authors": [
      "Sirui Jiang",
      "Dongming Xiang",
      "Shichao Wu",
      "Yuxuan Zhou",
      "Yihong Wu",
      "Fangze Zhu",
      "Wang Lin",
      "Guanjun Liu"
    ],
    "abstract": "Formal languages are widely used in software engineering to specify and verify program properties. Because their mathematical notation and logic are hard to read, developers often rely on natural-language documentation to understand the functions in formal libraries. Yet a documentation statement can be provably true and still hold after the function's behavior changes. We call a statement's dependence on the function's specific behavior attribution, and we give a method to check it. We design and implement DocAuth, a documentation-generation method that uses attribution to decide what to publish and attaches to each published sentence the formal property recovered from it, together with checkable evidence. On 150 functions from the Community Books library of the ACL2 theorem prover, three large language models produce proved but non-attributable properties for about a third of the functions. DocAuth matches or exceeds the attribution rate of a mutation-based filter while delivering 37% more attributable sentences. Compared with a pipeline that checks truth alone, it raises the share of published sentences that a second model confirms as attributable from 82.9% to 94.7%. These results show that provable truth does not guarantee that documentation reflects what a function actually does. Attribution complements truth as a criterion for generating and evaluating documentation for formal libraries.",
    "published": "2026-10-22T07:42:17Z",
    "updated": "2026-10-22T07:42:17Z",
    "categories": [
      "cs.SE",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.33094"
  },
  {
    "id": "2610.30861",
    "title": "Direct Forcing: Single-Stage Training with Representation-Space Supervision for Few-Step Autoregressive Video Generation",
    "authors": [
      "Haojun Xu",
      "Jie Huang",
      "Chuyang Zhao",
      "Xin Lu",
      "Mingchen Zhong",
      "Zihao Fan",
      "Haoyang Huang",
      "Linjiang Huang",
      "Si Liu"
    ],
    "abstract": "Few-step autoregressive video generation enables low-latency streaming, yet prevailing training pipelines separate causal adaptation from distribution matching. Recent representation-based text-to-video methods retain this separation by starting with an ODE initialization stage, even when the target distribution is defined directly by reference videos. We introduce \\method, the first single-stage framework that uses reference videos both as paired examples of how a history continues and as a target population for self-generated rollouts. Specifically, Direct Forcing is trained with two complementary signals: (1) Causal Continuation Alignment learns paired spatiotemporal correspondence under reference histories; and (2) Rollout Distribution Matching employs maximum mean discrepancy to align the representation distributions of self-generated and reference videos. To coordinate these signals, we introduce Dynamic Gradient Balancing, which adapts their relative gradient contributions during training. Experiments with Wan2.1-1.3B show that Direct Forcing learns a four-step autoregressive generator in 250 updates without a separate ODE initialization stage or online diffusion-score supervision, achieving 84.63 VBench Total and 86.01 Quality.",
    "published": "2026-10-22T07:41:41Z",
    "updated": "2026-10-24T18:24:41Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.30861"
  },
  {
    "id": "2610.30854",
    "title": "CAVC: Convergence-Adaptive Audio-Visual Cache for Modality-Asymmetric Diffusion Generation",
    "authors": [
      "Lifan Jiang",
      "Yibo Zhao",
      "Senlin cheng",
      "Bolei Xu",
      "Xiaobo Li",
      "Can Ye",
      "Dehai Zhao",
      "Deng Cai",
      "Boxi Wu"
    ],
    "abstract": "Diffusion-based audio-visual generation methods typically perform joint denoising of audio and video latents throughout the entire sampling trajectory, repeatedly executing modality-specific denoising branches and cross-modal attention at every timestep. However, we observe that such uniform joint computation is not always necessary. The key is a modality-asymmetric recoverability: audio-side drift introduced by mid-stage caching can be substantially reduced by only a few terminal joint denoising steps, whereas video-side degradation caused by caching leads to persistent loss of motion and temporal details. This asymmetry suggests that inference acceleration should selectively cache recoverable audio-side computation while preserving full video refinement. Motivated by this observation, we propose \\textbf{Convergence-Adaptive Audio-Visual Cache (CAVC)}, a training-free modality-asymmetric caching framework. CAVC adopts a sandwich-structured computation allocation: after detecting that audio denoiser outputs enter a cache-tolerant regime, it caches and reuses the audio denoiser output to bypass audio denoising and cross-modal attention in the middle stage, while the video branch continues independent spatio-temporal refinement; a few joint steps are then restored at the end to reduce accumulated cross-modal drift and improve synchronization. Experiments across multiple public benchmarks demonstrate that CAVC achieves 1.10--1.35x wall-clock acceleration, improves several visual dynamics and temporal statistics, and maintains competitive audio fidelity and audio-visual alignment.",
    "published": "2026-10-22T07:30:21Z",
    "updated": "2026-10-22T07:30:21Z",
    "categories": [
      "cs.CV",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.30854"
  },
  {
    "id": "2610.30851",
    "title": "ADAPT for Science: A Multi-Agent System for Self-Evolving Scientific Optimization",
    "authors": [
      "Zhaoran Feng",
      "Yuchen Ni",
      "Jianan Liu",
      "Lemao Liu",
      "Dejing Dou",
      "Kairui Feng"
    ],
    "abstract": "Scientific discovery often requires identifying a small number of high-performing designs in vast, constrained search spaces. This is difficult when evaluations are costly, feasible solutions are sparse, parameters are strongly coupled, and physical constraints are strict. Recent AI for AI methods can automatically improve algorithms and optimization procedures. However, general purpose approaches are not designed around scientific priors, physical constraints, and limited evaluation budgets. We introduce ADAPT for Science, a multi-agent framework that treats scientific optimization as two coupled decisions: where to search and how to search. ADAPT uses historical designs to identify promising and diverse initial conditions, progressively concentrates computation on favorable search directions, and evolves the optimization procedure from execution feedback. We evaluate ADAPT on the design of gravitational wave detectors using a differentiable physics simulator and eight unseen detector topologies. Under matched scientific evaluation budgets, ADAPT achieves a mean loss of 0.204 +/- 0.101, reducing loss by 54.9% relative to the best classical optimizer and by 62.2% relative to the best general purpose agentic evolution baseline. ADAPT achieves the lowest loss on all unseen topologies among the evaluated baselines. ADAPT provides a step toward scientific optimization systems that continuously learn from prior experience and their own search outcomes.",
    "published": "2026-10-22T07:28:46Z",
    "updated": "2026-10-22T07:28:46Z",
    "categories": [
      "cs.AI",
      "cs.MA",
      "physics.optics"
    ],
    "url": "https://arxiv.org/abs/2610.30851"
  },
  {
    "id": "2610.30847",
    "title": "Bifurcations from Weight Space: JEPAWG on Parametric Dynamical Systems",
    "authors": [
      "Tobias Göbel",
      "Miranda C. N. Cheng"
    ],
    "abstract": "Trained network weights are increasingly treated as data, but there is rarely ground truth about what a population of models should encode, which hampers systematic validation of weight-space methods. This makes parametric dynamical systems a natural test-bed: the dynamics change qualitatively at submanifolds of parameter space that are, in well-studied families, known analytically or numerically. Fine-tuning a forecasting network at each point of a parameter grid yields a model zoo indexed by a physical parameter, against which weight-space diagnostics can be checked. We build such model zoos for four dynamical systems and analyse them with JEPAWG, a recently proposed joint-embedding hypernetwork built around a learned parameter--weight representation. It was first introduced for neural samplers for lattice field theories, where its latent geometry located the phase transition and estimated the 2D Ising critical exponent. Applied to dynamical systems, JEPAWG is competitive on forecasting with a hypernetwork trained directly for that task, despite being supervised on the parameter--weight correspondence rather than on forecasts. Beyond forecasting, the norm of the parameter-derivative of the decoded weights locates Hopf points and curves, tracks a period-doubling cascade closely enough to give a qualitative estimate of the Feigenbaum constant, and detects a global bifurcation, which has no eigenvalue signature and is therefore invisible to linearisation. As such, JEPAWG provides interpretable insight into the dynamics that is not available from other hypernetworks. Together, these results indicate that JEPAWG is a workable instrument for reading physical structure off a population of trained networks.",
    "published": "2026-10-22T07:22:44Z",
    "updated": "2026-10-22T07:22:44Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "nlin.CD"
    ],
    "url": "https://arxiv.org/abs/2610.30847"
  },
  {
    "id": "2610.29129",
    "title": "Mitigating Reward Hacking in Realistic Scenarios Through Representation Engineering",
    "authors": [
      "Austin Meek",
      "Kyle Cox",
      "Matthew Nguyen",
      "Austin J. Brockmeier",
      "Steven Basart"
    ],
    "abstract": "Reward hacking is a major problem in current production machine learning systems, resulting in costly and dangerous failures. Here we study how to monitor for and mitigate reward hacking in realistic settings, including tool calls and long contexts. We apply a dynamic intervention to steering directions obtained by three different methods: difference-in-means vectors from labeled rollouts, gradient optimization-based vectors, and vectors extracted when models reference an anti-reward-hacking model spec. This dynamic intervention perturbs model representations less than uniform steering vector addition to the residual stream, allowing for more precise edits. We find that we are able to cheaply and significantly reduce reward hacking without correspondingly significant costs to model coherence or capability, and that steering vectors originally extracted from coding environments also generalize to reducing reward hacking in other domains. Our results pave the way towards latent space monitoring and control over realistic production systems.",
    "published": "2026-10-21T03:12:22Z",
    "updated": "2026-10-21T03:12:22Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.29129"
  },
  {
    "id": "2610.29126",
    "title": "Two for One: Privileged Learning for Resource-Constrained Screening",
    "authors": [
      "Lisa Y. W. Tang"
    ],
    "abstract": "Machine learning systems are often developed under data-rich conditions but deployed when only incomplete information is available. A natural example arises in colour fundus photography (CFP), where both eyes are commonly imaged because they can provide complementary information for ocular disease assessment. Prior approaches that exploit bilateral information either fuse both eyes in a single model or use knowledge distillation to compress a dual-eye teacher into a lightweight student that still requires both images at test time. However, bilateral acquisition may not always be feasible. We thus propose a privileged learning framework in which a teacher model has access to bilateral CFP images during training and learns representations informed by information from both eyes, while the student is trained to transfer this knowledge from the bilateral teacher using only a single-eye image as input. At inference, the student operates exclusively on this single-eye input and does not require the contralateral image. Experimental results show consistent improvements in area under the receiver operating characteristic curve over conventional monocular training, with the largest gains observed for left-eye images for the detection of age-related macular degeneration (0.931 vs. 0.966) and diabetic retinopathy (0.789 vs. 0.836).%, while requiring only a single-eye image at inference. By enabling models to benefit from bilateral information during training while requiring only a single-eye image at inference, our approach may support more reliable deployment in resource-constrained clinical and screening environments.",
    "published": "2026-10-21T03:09:41Z",
    "updated": "2026-10-21T03:09:41Z",
    "categories": [
      "cs.CV",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.29126"
  },
  {
    "id": "2610.29122",
    "title": "StochIKM: Automated High-Fidelity Reconstruction of Individual Patient Data from Published Kaplan-Meier Curves",
    "authors": [
      "Liangze Ke",
      "Daniel Zelterman",
      "Wei Wei",
      "Guannan Gong"
    ],
    "abstract": "Individual patient data are the gold standard for secondary analysis of time-to-event evidence, but they are rarely released, and reconstruction from a published Kaplan-Meier figure could help. Existing methods all claim high fidelity, each judged by whichever agreements it happens to achieve, and each returns a single dataset although the map from figure to data is not bijective. We define fidelity explicitly: a dataset is admissible when it reproduces the risk table exactly, follows the digitized curve to within the image resolution, and respects the printed median, interval and event count. We propose StochIKM, a stochastic algorithm that digitizes the figure with a vision-capable language model and uses the high-fidelity definition as constraints, returning an admissible set of individual patient datasets. A solution is guaranteed to exist whenever the figure has been read correctly, so a failure indicts either the published figure or its digitization. In simulation and in 79 arms from published oncology trials, StochIKM reproduces the published risk tables and medians more closely than LLM-improved IPDfromKM, a high-impact alternative.",
    "published": "2026-10-21T03:05:49Z",
    "updated": "2026-10-22T02:47:45Z",
    "categories": [
      "cs.AI",
      "stat.AP"
    ],
    "url": "https://arxiv.org/abs/2610.29122"
  },
  {
    "id": "2610.29121",
    "title": "Recursive Self-Improvement on a Budget: Scoring Code Edits Before They Run",
    "authors": [
      "Erfan Darzi",
      "Sree Bhargavi Balija",
      "Sheng He"
    ],
    "abstract": "A coding agent that rewrites its own scaffold has to choose which proposed edit to expand before that edit has been evaluated, and the search then has to return one agent. Each run fits one linear readout on the parent's steering-split solve rate and eight coordinates of the proposed diff, from 96 scaffold edits labeled by four evaluations of a 16-instance fit split, and then freezes the coefficients. HumanEval+ reserves 48 instances as the steering split and Polyglot reserves 64. That split scores parents and keeps an archive of four nodes. Huxley-Gödel Machine selection draws a parent by Thompson sampling on the steering counts of nodes that have already been evaluated, and it expands the child that parent proposes. Every method then returns the earliest evaluated node whose steering-split solve count is maximal. The tables report the held-out score of that node on the other 100 HumanEval+ instances and the other 145 Polyglot instances, next to the root scaffold and the calibration edit with the highest fit-split label. Twelve runs of GPT-4o return a node at 87.0% on held-out HumanEval+, against 84.2% for the parent-rate ablation. On that split Huxley-Gödel Machine selection returns 85.1%, the root is at 81.2%, and the calibration-best edit is at 82.8%. On the same split Claude Sonnet 4.5 returns 86.6%, beside 86.5% for Huxley-Gödel Machine selection, 85.3% for the parent-rate ablation, and 85.1% for the calibration-best edit.",
    "published": "2026-10-21T03:04:25Z",
    "updated": "2026-10-21T03:04:25Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.29121"
  },
  {
    "id": "2610.29120",
    "title": "An Eco-Friendly Tourism Trip Planner Driven by Z-Number Uncertainty: Evidence from Baku, Dubai, Abu Dhabi, Tashkent, and Istanbul",
    "authors": [
      "Aziz Nuriyev",
      "Sherzod Turaev",
      "Saja Al-Dabet",
      "Mary John",
      "Kanan Qasimzade",
      "Alihuseyn Orujzada",
      "Fatima Alblooshi",
      "Aisha Al Ali"
    ],
    "abstract": "Deployed tourism trip planners ingest travel times and ratings as exact numbers, although routing services return travel times that vary with the hour of departure and a platform rating may rest on a handful of reviews or on hundreds of thousands. We present an eco-friendly trip planner that represents both quantities as Z-numbers, which pair a fuzzy restriction on a value with a fuzzy reliability on the evidence behind it, and that constructs them directly from routing-service observations at six departure hours and from platform review counts rather than from linguistic elicitation. A hybrid loss combines score, carbon, travel-time, and reliability terms, and an adaptive large neighborhood search returns single-day itineraries through a conversational front end. We compare the planner with a crisp-mean baseline under an identical optimizer in Baku, Dubai, Abu Dhabi, Tashkent, and Istanbul, with fifteen points of interest and thirty seeds per city, and we evaluate the selected itineraries on their trip carbon and their total travel time. Pooled over 150 seed-paired runs, the planner lowers trip carbon from 3.24 to 2.61 kg (19.3%, Wilcoxon p = 0.017; city-clustered bootstrap interval 6.4% to 26.7%) and travel time from 123 to 109 minutes per trip (11.5%, p = 2.8e-10; interval 5.0% to 18.2%). The travel-time reductions survive a Holm correction in Baku, Istanbul, and Abu Dhabi; the carbon reduction is significant in Baku and large but uncertain in the dispersed catalogs of Dubai and Abu Dhabi; and neither metric changes in Tashkent. Review counts are estimates of at least 3,000 for every point of interest, so rating reliability does not vary, and with a single baseline, the results establish feasibility and direction rather than a general advantage. Code, routing caches, frozen routing tables, and per-seed results are openly released.",
    "published": "2026-10-21T03:03:19Z",
    "updated": "2026-10-23T06:46:10Z",
    "categories": [
      "physics.soc-ph",
      "cs.AI",
      "cs.CE"
    ],
    "url": "https://arxiv.org/abs/2610.29120"
  },
  {
    "id": "2610.29114",
    "title": "MHeatmap: Two-Walk Laplacian Reordering and Mosaic Layout for Rectangular Matrix Visualization",
    "authors": [
      "Juntang Wang",
      "Sheng'en Li",
      "Liming Zhu",
      "Yihan Wang",
      "Siyuan Cao",
      "Hao Wu",
      "Man Zhang",
      "Shixin Xu",
      "Dongmian Zou"
    ],
    "abstract": "Weighted rectangular matrices record relations between two types of objects, such as occupations and industries, documents and terms, origins and destinations, or annotated classes and computed clusters. Their heatmaps become difficult to read when arbitrary row and column orders scatter related objects, while equal size cells hide large differences in row and column totals. We present MHeatmap (Mosaic Heatmap), which addresses these problems in two stages. Two-Walk spectral seriation first represents the matrix as a weighted bipartite graph. Ordinary bipartite ordering uses only observed row to column links. Two-Walk also uses length-two walks, so rows that share columns and columns that share rows receive explicit similarity links. Sorting a Fiedler vector of the resulting graph Laplacian gives coordinated row and column orders. The Mosaic layout then partitions a unit square so that row height is proportional to the row total and column width is proportional to the column total, while color represents the observed entry. We prove how the Two-Walk energy combines direct alignment with shared-neighbor smoothness, derive an exact matrix vector product that permits sparse computation, and formalize the tiling and area semantics of Mosaic. Across 300 synthetic matrices and seven real data sets, Two-Walk obtains the lowest normalized 2-SUM in all 15 synthetic regimes and the highest Band@10% in 14. The largest gains occur when shared neighborhoods express the latent relational structure.",
    "published": "2026-10-21T02:55:57Z",
    "updated": "2026-10-21T02:55:57Z",
    "categories": [
      "cs.LG",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.29114"
  },
  {
    "id": "2610.29110",
    "title": "GRAM: Group-wise Rank-Aware Model Merging via Subspace Alignment",
    "authors": [
      "Di Wu",
      "Shuaidong Pan"
    ],
    "abstract": "Merging different models into a single model is highly desirable for multi-task deployment, particularly in regulated domains like healthcare. In such settings, models are often locally fine-tuned due to strict data privacy policies, necessitating that aggregation operates exclusively on the fine-tuned weights. Existing methods apply a uniform merge across all tasks, ignoring the geometric relationships among their learned subspaces. When task updates occupy misaligned subspaces, projecting them onto a shared low-rank basis discards task-relevant directions, a failure mode named \\emph{subspace interference}. Through this study, we show that the per-task projection error of a merged model is governed by the principal-angle alignment between each task and the shared subspace, so that grouping geometrically compatible tasks provably reduces this error within each group. Motivated by this observation, we propose \\textbf{Group-wise Rank-Aware Model Merging (GRAM)}, which uses the principal-angle geometry of task vectors to decide which tasks should be merged together and then performs a standard SVD-based merge within each coalition; the pipeline requires only the fine-tuned weights at merge time. With only one additional model ($\\nK{=}2$), GRAM significantly mitigates subspace interference and consistently outperforms prior merging methods across language understanding (GLUE with Flan-T5), 8-task CLIP vision, and medical instruction tuning (Qwen2-7B-Instruct with four English/Chinese medical LoRAs).",
    "published": "2026-10-21T02:50:46Z",
    "updated": "2026-10-21T02:50:46Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.29110"
  },
  {
    "id": "2610.29108",
    "title": "WaFIR: Wavelet-Fourier Mixture-of-Experts with Subband-Adaptive Routing for Blind All-in-One Image Restoration",
    "authors": [
      "Trong Nhan Nguyen",
      "Vu Hoang Minh Doan",
      "Thanh Dat Le",
      "Truong Tien Vo",
      "Thi Thu Ha Vu",
      "Tan Hung Vo",
      "Jaeyeop Choi",
      "Junghwan Oh",
      "Truong-Son Hy"
    ],
    "abstract": "Blind all-in-one image restoration must adapt a shared model to heterogeneous and sometimes mixed degradations without a task label at test time. We introduce WaFIR, a decoder module that decomposes features into Haar subbands, summarizes each subband with a compact Fourier descriptor, and routes it to prompt-conditioned spectral modulation experts. Unlike image-level frequency conditioning, WaFIR makes routing decisions at the subband level, enabling frequency-specific processing while retaining the task context learned by the backbone. Under a unified training and evaluation protocol for denoising, deraining, and dehazing, WaFIR improves average PSNR over the three tasks by 0.48 dB over the PromptIR baseline and by 0.38 dB over the recent Up-Restorer. Matched-capacity and routing controls show that the gain is not explained by additional parameters alone. On unseen noise intensities, descriptor-based routing is more robust than a discrete label-conditioned alternative and remains on par under compound degradations, while routing analyses show stable subband-dependent expert use across degradation types. These results support subband frequency structure as an interpretable complement to prompt-based conditioning for blind image restoration. Code is available at https://anonymous.4open.science/r/WaFIR/README.md",
    "published": "2026-10-21T02:50:14Z",
    "updated": "2026-10-21T02:50:14Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29108"
  },
  {
    "id": "2610.29107",
    "title": "PhyMo: Learning Physical Dynamics with Accurate and Continuous Motion from Multi-View Videos",
    "authors": [
      "Shangjia Liu",
      "Jinxi Li",
      "Siyuan Zhou",
      "Bo Yang",
      "Bing Wang"
    ],
    "abstract": "Recovering dynamic 3D scene geometry, appearance, and the physical motion states that govern scene evolution from multi-view videos is important yet challenging. A key difficulty is that appearance can be deceptive. Under rendering supervision alone, a model may fit the observed images by changing color or opacity to compensate for inaccurate deformation, rather than recovering the true evolving geometry and motion. This issue is especially severe in scenes with fast or locally complex motion, where inaccurate trajectories can still produce plausible images over the observed frames, but lead to unreliable reconstruction and discontinuous future prediction. In this paper, we propose PhyMo, a framework for learning evolving dynamics from multi-view videos. We introduce a Motion-Aware Trajectory Representation that drives the model to recover accurate motion from deformation, rather than relying on appearance shortcuts to explain observed motion. On top of this, we propose a Continuous Motion Evolution module with bidirectional kinematic continuity constraint to promote temporally consistent evolution of displacement, velocity, and acceleration. Together, these designs yield geometrically faithful interpolation and continuous motion extrapolation. Experiments on four dynamic scene benchmarks demonstrate state-of-the-art performance.",
    "published": "2026-10-21T02:49:38Z",
    "updated": "2026-10-26T09:25:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29107"
  },
  {
    "id": "2610.29106",
    "title": "DriftNeRF: Cross-Ray Density Drifting for Sparse-View Neural Radiance Fields",
    "authors": [
      "Juntang Wang",
      "Yihan Wang",
      "Sheng'en Li",
      "Hao Wu",
      "Dongmian Zou",
      "Shixin Xu"
    ],
    "abstract": "Neural Radiance Fields (NeRF) synthesize photorealistic novel views from dense image collections, but degrade sharply when few views are available. We attribute a specific, measurable defect to the objective itself: the rendering loss is a sum over independent rays and contains no term comparing densities that different rays assign to the same region of space, so nearby 3D points can settle on contradictory densities while every training pixel is reproduced correctly. We make this quantity explicit by measuring cross-ray density disagreement directly during training, and show that it stays high in vanilla NeRF, falls only incidentally under frequency-based regularization, and moves together with held-out quality in the sparse regime. We then close the gap with DriftNeRF, a drop-in regularizer that instantiates the drifting-field template on density samples: a masked exponential kernel aggregates densities from nearby points on other rays into a stop-gradient consensus target, and the resulting drifting field penalizes unsupported disagreement while leaving agreed-upon boundaries intact. The regularizer reads only sampled positions, ray identifiers, and predicted densities, so it requires no pretrained model, external geometry, or additional images, and transfers across field parameterizations. On NeRF-Synthetic it reduces residual disagreement by an order of magnitude, and across NeRF-Synthetic, DTU, and LLFF it improves 3-view PSNR over the strongest MLP-NeRF baseline by 0.42-0.65 dB and remains competitive with sparse-view Gaussian pipelines under a matched protocol without their depth, flow, or covisibility preprocessing.",
    "published": "2026-10-21T02:49:34Z",
    "updated": "2026-10-21T02:49:34Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.29106"
  },
  {
    "id": "2610.29104",
    "title": "From Canon to Nikon: Camera Domain Shift and Potential Equity Implications in Retinal AI",
    "authors": [
      "Lisa Y. W. Tang"
    ],
    "abstract": "Diabetic retinopathy is a leading cause of preventable blindness, yet access to regular screening remains limited worldwide. AI offers a scalable approach, but its performance can be sensitive to image quality and acquisition conditions. In a Brazilian cohort of 8,524 patients, retinal images acquired with the Nikon NF5050 were more than twice as likely to have inadequate image quality compared with those acquired with the Canon CR-2, despite refurbished Canon systems costing more than twice as much as Nikon systems. This potential cost-quality trade-off highlights an important consideration for the reliability of AI systems deployed across heterogeneous imaging systems. Using a frozen pretrained retinal foundation model, we systematically evaluate whether camera-associated performance differences persist across 12 retinal disease classification tasks, four input resolutions, and five downstream classifiers. We find that camera-associated performance differences vary substantially across tasks, and that neither higher input resolution nor classifier choice consistently mitigates cross-camera variation. These findings identify camera platform as a potentially overlooked source of performance variability, with implications for the safety and reliability of retinal AI when deployed across heterogeneous imaging systems. We release all source code, evaluation scripts, and per-task results on GitHub to support reproducible benchmarking.",
    "published": "2026-10-21T02:47:39Z",
    "updated": "2026-10-21T02:47:39Z",
    "categories": [
      "cs.CV",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.29104"
  },
  {
    "id": "2610.29102",
    "title": "Diffusion Posterior Sampling with Uncertain Forward Models",
    "authors": [
      "Wentao Shangguan",
      "Vivek K Goyal"
    ],
    "abstract": "Diffusion posterior samplers reconstruct signals by combining a pretrained diffusion prior with a measurement likelihood specified by a forward model and a noise model. Calibration and reference data can characterize uncertainty in the forward model's parameters, such as blur kernels or detector responses. Fixing these parameters at estimated values leaves their uncertainty out of the likelihood, and parameter errors are thus absorbed into the reconstruction. We introduce an uncertainty-aware likelihood (UAL), a Gaussian approximation to the marginal likelihood obtained by integrating over the uncertain parameters. For each candidate signal, UAL propagates parameter uncertainty into a structured measurement covariance, reducing the quadratic penalty along residual directions that parameter variation can explain. Existing samplers can use UAL in their data updates while retaining their pretrained diffusion priors and sampling schedules. Under a fixed Gaussian nuisance model, we bound likelihood error from linearization and average divergence between the exact marginal and UAL posteriors. We compare samplers with and without UAL across six inverse problems spanning Gaussian and motion deblurring, CT, MRI, ultrasound, and fluorescence microscopy, and find improvements in reconstruction and ensemble prediction. UAL reduces geometric mean MSE by 9% to 20% across samplers in the main Gaussian-deblurring setting and by 51% to 92% in motion deblurring when non-blind samplers use the population-mean kernel. In motion deblurring, DAPS and PnP-DM with UAL also give 6.2 to 6.4 dB higher ensemble-mean PSNR than published BlindDPS and Fast Diffusion EM. On the ablation set, UAL outperforms trace-matched isotropic inflation for PnP-DM in both deblurring tasks; in motion deblurring, it also exceeds the best-tested fixed scalar data weighting by 3.3 dB for PnP-DM and 4.2 dB for DAPS in average PSNR.",
    "published": "2026-10-21T02:47:28Z",
    "updated": "2026-10-21T02:47:28Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.29102"
  },
  {
    "id": "2610.27702",
    "title": "Beyond Calibration: Temporal LLM Confidence Assessment Across Languages and Local Settings",
    "authors": [
      "Sahil Kale"
    ],
    "abstract": "Large language models are expected to estimate their own uncertainty, with confidence signals used to guide retrieval, adaptive compute allocation, routing, and selective abstention. We investigate whether confidence signals measured at different temporal stages of problem solving encode distinct forms of epistemic information and remain reliable beyond English-centric settings. Inspired by classical meta-memory theory, we distinguish anticipatory pre-solve confidence (Feeling-of-Knowing, FOK) from retrospective post-solve confidence (Judgement-of-Learning, JOL). We evaluate these signals across two frontier LLMs, multiple reasoning domains, translated Marathi benchmarks, and a newly constructed benchmark of genuinely local Marathi factual questions. Across settings, the cheaper pre-solve signal remains weakly calibrated, while post-solve confidence generally provides stronger epistemic alignment despite its additional inference cost. Confidence behaviour transfers surprisingly well under direct language translation, with calibration trends largely preserved between English and Marathi, but degrades substantially on local Marathi knowledge, suggesting that linguistic transfer alone is insufficient for region-specific information needs. Finally, hallucinated responses maintain persistently elevated confidence after answer generation, highlighting important limitations of current LLM self-assessment mechanisms.",
    "published": "2026-10-20T06:19:35Z",
    "updated": "2026-10-20T06:19:35Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27702"
  },
  {
    "id": "2610.27699",
    "title": "E8-QAT: Efficient 2-Bit Quantization-Aware Training with Implicit Lattice Codebooks",
    "authors": [
      "Xinyu Lei",
      "Hong Huang",
      "Jiebin Zhang",
      "Hongyu Li",
      "Jinlong Song",
      "Decheng Wu",
      "Guanghua Yu",
      "Jianchen Zhu",
      "Sujian Li"
    ],
    "abstract": "Low-bit quantization reduces the memory footprint of large language models, but preserving accuracy with efficient training remains challenging. Scalar quantization encodes weights independently, while explicit-codebook vector quantization introduces costly search during training. We propose E8-QAT, a 2-bit quantization-aware training framework that uses the $E_8$ lattice as an implicit eight-dimensional codebook. It jointly quantizes weight groups through arithmetic projection without storing or searching an explicit codebook during the training forward pass. A 2-bit core encoding and sparse extension preserve the selected lattice points exactly, adding less than 0.1\\% to core index storage. On Qwen3.6-35B-A3B, E8-QAT matches the performance of the full-precision model in terms of the average score across the four tasks. E8-QAT improves over the state-of-the-art baseline by 2.03\\% on IFEval and by 1.51\\% on LiveCodeBench, under the same data, schedule, and bit width. The 2-bit representation reduces peak memory by 80\\% and supports a $4\\times$ larger batch. At each representation's largest feasible batch, E8-QAT reaches $1.97\\times$ the decoding throughput of BF16.",
    "published": "2026-10-20T06:17:09Z",
    "updated": "2026-10-20T06:17:09Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27699"
  },
  {
    "id": "2610.27698",
    "title": "VLA-Retain: Benchmarking Cross-Dimension Effects of Vision Tuning in VLAs",
    "authors": [
      "Borui Xu",
      "Han Chen",
      "Bingsheng He",
      "Ming Wu",
      "Jason Zeng",
      "Michael Heinrich"
    ],
    "abstract": "Vision-language-action (VLA) models transfer knowledge from large-scale pretraining into robot control, but their manipulation performance remains sensitive to changes in observation conditions, which recent work addresses by fine-tuning the visual module on target-domain data. However, it remains unclear how such adaptation affects robustness beyond the target condition, as existing robustness benchmarks only evaluate models without fine-tuning and adaptation studies only report the target gain. Measuring this cross-dimension effect requires separating target gains from off-target changes, isolating adaptation effects from architectural differences, ruling out generic forgetting, and comparing tuning choices. Therefore, we introduce VLA-Retain, a benchmark that compares five open VLA models, tuned on Camera-view or Sensor-noise data, with their own base checkpoints on LIBERO-Plus dataset spanning seven perturbation dimensions. Our study reveals four findings. First, targeted vision tuning is not local, and its target gain does not predict retention. Mean off-target gain is negative in 8 of 10 model--domain configurations. Under Camera-view tuning, X-VLA gains $69.4$ percentage points on the target but loses $4.6$ points on average elsewhere, whereas OpenVLA-OFT gains $39.3$ and $1.4$ points, respectively. Second, these regressions are not explained only by performance loss on the same tasks without perturbations. Third, broader training coverage raises overall gain over target-specific training but does not eliminate dimension-level regressions. Fourth, tuning strategies are model-dependent, as DELTA-style feature preservation raises X-VLA's mean off-target gain to $+1.2$ points but lowers OpenVLA-OFT's to $-23.1$. Overall, these findings show that target-domain success alone is insufficient and highlight cross-dimensional retention as a key criterion for targeted VLA adaptation.",
    "published": "2026-10-20T06:17:00Z",
    "updated": "2026-10-20T06:17:00Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27698"
  },
  {
    "id": "2610.27696",
    "title": "PanoGraphGS: Unifying Panoptic Segmentation and Hierarchical 3D Scene Graphs with Gaussian Splatting",
    "authors": [
      "Jinghan Gao",
      "Siyu Wang",
      "Dongyu Feng",
      "Yiyuan Pan",
      "Rong Xiong"
    ],
    "abstract": "3D scene graphs support language-guided navigation by organizing physical entities and their containment and spatial relations into hierarchical maps. Building such structured maps requires a scene representation that consistently distinguishes semantic regions and object instances across viewpoints. To this end, we present PanoGraphGS, a unified framework that integrates panoptic 3D Gaussian representation learning with hierarchical 3D scene graph construction. The framework learns semantic and instance features on shared Gaussian geometry. Prototype-based semantic learning and association-based instance learning produce consistent panoptic predictions across viewpoints. The learned representation supports novel-view panoptic segmentation and direct Gaussian-level panoptic decoding. A semantic-aware scene graph module further recovers a floor-room-stuff-object hierarchy with containment and spatial relations. We further release NaviGS, a real-world dataset for panoramic scene understanding. The dataset provides 3DGS, mesh, RGB, semantic, and depth data. For 3D scene graph identification, PanoGraphGS outperforms the strongest evaluated baseline in object-node accuracy by more than 50\\% points on average across Replica and NaviGS. PanoGraphGS also achieves state-of-the-art performance among the evaluated methods in 2D panoptic segmentation. These results demonstrate the effectiveness of PanoGraphGS in both hierarchical 3D scene understanding and 2D panoptic segmentation. The project website is available at: https://github.com/gaojh0333/PanoGraphGS.",
    "published": "2026-10-20T06:15:59Z",
    "updated": "2026-10-20T06:15:59Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.27696"
  },
  {
    "id": "2610.27692",
    "title": "A Principled Optimal Transport Framework for Frame Selection in Long Video Understanding",
    "authors": [
      "Ziwei Zhao",
      "Yuhang Liu"
    ],
    "abstract": "Long-video understanding with multimodal LLMs is fundamentally constrained by the mismatch between video length and the model's limited visual context budget, making frame selection essential for practical reasoning. Existing query-aware methods typically rely on heuristic pipelines: they assign one-dimensional query-conditioned scores to frames and then apply sampling, ranking, or extraction rules to form the final subset. While effective in practice, such methods are generally not derived from an explicit optimization objective and struggle to capture the heterogeneous evidence required for complex reasoning. In this paper, we revisit long-video frame selection from a principled optimization perspective. We formulate it as a structured evidence-allocation problem and propose OTFS, an optimal transport framework that maps multiple evidence sources onto video frames. To reflect the asymmetry of this problem---important evidence should be preserved, whereas redundant frames need not absorb mass---we instantiate this view with a semi-unbalanced entropic optimal transport objective and an efficient solver, OTFS-Sinkhorn. Combined with an exact dynamic program for coverage-aware subset extraction, OTFS yields a practical two-stage training-free pipeline. We further show that, in the single-source case, our formulation induces a Gibbs-type distribution over frames, making Q-Frame's temperature-scaled distribution a special case of our framework while also providing a broader perspective for understanding related prior methods. Experiments on three long-video understanding benchmarks show that OTFS consistently outperforms strong training-free baselines. Codes are available at https://github.com/barry664/OTFS.",
    "published": "2026-10-20T06:12:30Z",
    "updated": "2026-10-20T06:12:30Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27692"
  },
  {
    "id": "2610.27691",
    "title": "EASformer: Environment-Action-State Alignment for Industrial Generative Ranking",
    "authors": [
      "Bohao Li",
      "Dinglun Cao",
      "Pengcheng Huang",
      "Yingda Tang",
      "Zhiting Zhao",
      "Yi Cao",
      "Jilei Fu",
      "Miao Yan",
      "Tianying Liu",
      "Heng Chang",
      "Bowen Du"
    ],
    "abstract": "Modern industrial ranking systems increasingly adopt generative recommendation (GR) paradigms, in which user behavior sequences and non-sequential (NS) features are tokenized and jointly modeled by Transformer-style backbones. This unified formulation provides a scalable interface for modeling long histories and heterogeneous features. However, sequence and NS representations often carry asymmetric semantics: historical representations may combine environment context with observed-action semantics, whereas candidate-side NS representations contain no observed action but incorporate richer supplementary context, such as user-item interaction features and recent behavior lists. Direct interaction between such representations can make query-key dot products compare different semantic objects, limiting meaningful cross-token interaction. To fill this gap, we propose EASformer, an Environment-Action-State disentangled architecture for industrial app ranking. EASformer constructs an explicitly aligned context environment space shared by historical and non-sequence tokens, while disentangling user actions from historical token and candidate-specific context form non-sequence tokens. Based on this aligned space, EASformer enables complementary historical action retrieval and state-conditioned action prediction. Furthermore, the disentangled design supports a Cloze-style self-supervised objective by masking historical actions and reusing the candidate prediction pathway. On an offline benchmark from a real-world industrial app marketplace, EASformer achieves an AUC of 0.89411, yielding a 0.88% relative improvement over the deployed baseline. Online A/B tests further support this advantage, with relative eCPM lifts of 1.26% and 3.94% across two real-world ranking scenarios.",
    "published": "2026-10-20T06:08:07Z",
    "updated": "2026-10-20T06:08:07Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27691"
  },
  {
    "id": "2610.27690",
    "title": "NeoWorld-3: From Pixels to Code-Defined Physical Worlds",
    "authors": [
      "Eachen Soong",
      "Zijian Niu",
      "Haoran Xu",
      "Yihong Dong",
      "Yunbo Wang",
      "Xiaokang Yang"
    ],
    "abstract": "Simulation-ready world reconstruction demands physical interactivity beyond visual realism, which existing black-box 3D generation fails to deliver. We present NeoWorld-3, a coding-agent framework that reconstructs interactive 3D worlds from visual observations via tunable, executable programs. At its core, NeoSDK provides the underlying computational engine for low-level geometries, part composition, differentiable parameter refinement, and physics validation. At the same time, NeoMCP exposes these capabilities as structured, tool-callable APIs for vision-language agents to visually inspect, edit code, and iteratively refine programs. Through a hierarchical coordinator-worker architecture, the framework scales seamlessly from standalone articulated objects to complex compositional scenes. Evaluations across object-level and scene-level reconstruction benchmarks demonstrate that NeoWorld-3 achieves state-of-the-art geometric fidelity and physical readiness. Crucially, manipulation trajectories planned within our reconstructed twins achieve successful zero-shot execution on a physical dual-arm robot, completing the Real-Sim-Real loop.",
    "published": "2026-10-20T06:05:06Z",
    "updated": "2026-10-20T06:05:06Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27690"
  },
  {
    "id": "2610.27684",
    "title": "Pattern Intelligence: Unsupervised, LLM-Interpreted Discovery of Systematic Underpayment and Denial Patterns in Healthcare Revenue Cycle Management",
    "authors": [
      "Harshil Lodhiya",
      "Alex McManus"
    ],
    "abstract": "Healthcare providers lose substantial revenue to systematic payer underpayments and claim denials, yet identifying the recurring, correctable patterns behind them remains largely manual and does not scale to hospital claim volumes. We present Pattern Intelligence, a deployed system that discovers such patterns without supervision by clustering claims on their adjudication behaviour rather than their identity. Each claim is embedded in a 130-dimensional vector combining per-line expected-versus-actual payment ratios, claim adjustment reason (CARC) codes, denial and payment signals, and service composition. Payer and contract identity are deliberately excluded from the distance metric - we show they dominate the geometry and collapse clusters into trivial per-payer groups - and are reintroduced only as a post-hoc segmentation (by contract and visit type) that keeps every surfaced pattern coherent and actionable. We cluster with HDBSCAN, recover structure from the noise set via second-pass sub-clustering, and gate low-confidence memberships. A large language model translates each centroid into an analyst-ready description of dominant procedures, adjustment reasons, and failure mode. We report a recurring finding: roughly one-third to one-half of high-dollar denials, depending on tenant and segmentation, form an irreducible long tail that no density-clustering configuration or representation we tried groups - a domain property, we argue, rather than a modeling deficiency. We evaluate validity through cluster-coherence analysis and quantify impact with a recoverable-opportunity ($) metric on two production tenants (approx. 10K and 157K claims) within a six-tenant deployment. Rather than a new algorithm, the contribution is a problem formulation, a representation-design insight, and empirical findings from production.",
    "published": "2026-10-20T05:59:14Z",
    "updated": "2026-10-20T05:59:14Z",
    "categories": [
      "cs.AI",
      "stat.ML"
    ],
    "url": "https://arxiv.org/abs/2610.27684"
  },
  {
    "id": "2610.27682",
    "title": "Temporal Evidence Allocation For Longitudinal Clinical Retrieval: A Position And Technical Report",
    "authors": [
      "Soumya Ranjan Sahoo",
      "Divya Bharti",
      "Sanand Sasidharan"
    ],
    "abstract": "Electronic health records are written to support care, not retrieval. Across years of oncology notes, the primary diagnosis is restated in report after report, while the events that shape a patient's course, such as a recurrence or a change in therapy, may be recorded only once. A retriever that ranks passages by similarity to the query keeps returning the repeated material and can miss these transitions, that is, it exhibits temporal redundancy across historical narratives. We argue that longitudinal clinical retrieval should be treated as allocating a limited evidence budget across time, not just ranking by relevance. We separate the task into three objectives: temporal evidence allocation, candidate reconstruction, and clinical validation. In Study A (13 clinical queries over 20 patient records, with two-stage reconstruction), the Temporal-15 configuration reaches a milestone slot recall of 0.538, compared with 0.388 for the Global-50 baseline. However, it also retrieves far more evidence (496 versus 50 indexed units per query), so the gain cannot be credited to allocation alone. When evidence is held fixed, removing prompted precedence rules raises schema-order reversals from 0.010 to 0.080. A five-patient, single-query pilot with fixed budgets finds that wider temporal coverage does not reliably yield more dated milestones. Together, these results suggest that how much a record says about a period is a poor guide to how useful that period is as evidence. Because no expert reference timelines are available, our measurements describe retrieval behavior rather than clinical accuracy. This position and technical report presents the retrieval analysis behind the Onco-CONSTRUE framework and sets out a research agenda for budget-constrained longitudinal clinical retrieval.",
    "published": "2026-10-20T05:54:39Z",
    "updated": "2026-10-20T05:54:39Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.27682"
  },
  {
    "id": "2610.27678",
    "title": "PhonoBridge: Error-Aware Phoneme-Mediated EMG-to-Text Reconstruction",
    "authors": [
      "Wen Qiu",
      "Jiacheng Zhang",
      "Xuanda Chen",
      "Siqi Cai",
      "Haizhou Li"
    ],
    "abstract": "Electromyography (EMG) provides a non-invasive means of decoding silently articulated speech into text, but accurate decoding remains challenging due to limited availability of paired EMG-text data. We introduce PhonoBridge, a two-stage framework comprising a channel-aware EMG-to-phoneme frontend and a large language model (LLM) backend for text reconstruction. The frontend is trained on paired EMG-text data that consists of channel-wise feature extraction, cross-channel fusion, and electrode embeddings. With phonemes as the intermediate representation, we expand the backend's training data by converting LibriSpeech transcripts into phoneme-text pairs without additional EMG recordings. To adapt the LLM to frontend noise, we introduce Error-Profile-Guided Augmentation (EPGA), which perturbs transcript-derived phoneme sequences according to error patterns estimated from frontend predictions, generating additional training pairs for the LLM. On the Open Vocabulary silent-speech dataset, PhonoBridge achieves 24.77% WER, outperforming the previously reported best of 28.27% on the same test split.",
    "published": "2026-10-20T05:48:21Z",
    "updated": "2026-10-20T05:48:21Z",
    "categories": [
      "cs.SD",
      "cs.CL",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.27678"
  },
  {
    "id": "2610.27677",
    "title": "CovNav: Conformal Prediction-Guided Adaptive Inference for Object Goal Navigation",
    "authors": [
      "Pengying Wu",
      "Zhejia Wen",
      "Kang Ding",
      "Kangjie Zhou",
      "Chunxuan Jiao",
      "Wei Pan",
      "Xiangli Nie",
      "Chang Liu"
    ],
    "abstract": "In object goal navigation (ObjectNav), an embodied agent must find a target object (e.g., \"find a bed\") in a previously unseen environment, relying on spatial commonsense such as object co-occurrence. Large Language Models (LLMs) encode this commonsense, but deploying them on robots exposes a trade-off between reasoning quality and efficiency: cloud-based models incur latency and privacy risks, whereas small on-device LLMs are fast but prone to hallucinated spatial judgments. Hybrid reasoning LLMs offer both a fast non-thinking mode and a slow thinking mode, which raises a key question for embodied agents: when is slow thinking worth its cost? We propose CovNav, a training-free framework that answers this question with Conformal Prediction (CP), turning dual-process (System 1 / System 2) inference into an uncertainty-aware decision. Much like recent decision models such as Jev, CovNav casts each spatial query as a structured binary decision rather than free-form generation: a local LLM in fast mode judges whether the target is likely near an observed object, CP converts its token probabilities into a prediction set, and only ambiguous queries are escalated to slow chain-of-thought reasoning. The object-pair formulation keeps calibration tractable and supports open-set objects through off-the-shelf detectors. Experiments on Gibson and HM3D show that CovNav surpasses the strongest zero-shot baseline by 0.8 and 1.7 percentage points in success rate on HM3D v1 and v2, while invoking slow reasoning for only 12.4% of queries and retaining most of the gain of always-on thinking at a fraction of its latency. Real-robot experiments on a TurtleBot 4 further validate the approach. CovNav shows how calibrated uncertainty can decide when an embodied agent should think slowly, offering a principled form of adaptive test-time reasoning for LLM-based robots.",
    "published": "2026-10-20T05:47:26Z",
    "updated": "2026-10-20T05:47:26Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CL",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27677"
  },
  {
    "id": "2610.27672",
    "title": "Reusing Assurance Evidence in AI Pipelines: Validity Conditions, a Fail-Closed Release Gate, and a Replay of 714 Public Data Version Control Pipelines",
    "authors": [
      "Atanu Mukhopadhyay",
      "Shravya Reddy Nalla"
    ],
    "abstract": "Rerunning every governance control after every change to an artificial intelligence (AI) pipeline is expensive, so teams reuse earlier results. Reuse is safe only if each control's declared dependencies cover everything that can change its outcome, and only if the release gate checks that reused evidence describes the candidate being released. This article makes both conditions explicit and measures how often the first fails in practice. It defines when a signed evidence record is valid for a candidate and gives sufficient conditions under which change-local re-execution reaches the same release decision as rerunning every control. A reference gate implementing these checks with Ed25519 digital signatures blocks eight of nine manipulation scenarios, against one for a gate that trusts the planner and three for a gate that only verifies signatures; a dependency the policy never declared passes every gate. A replay of 38,083 commits from 714 public Data Version Control (DVC) pipelines measures that failure mode. Reusing stage results according to declared dependencies avoids 83.4% of stage executions, but in 3.3% of commits it reuses a stage whose imported code or referenced configuration changed, and 31% of pipelines are affected. A manual audit confirms the undeclared dependency in 36 of 40 sampled events. Evaluation stages, whose outputs are the evidence, are the most exposed. Adding each stage's static import closure lowers stale reuse to 0.4% while still avoiding 81.6% of executions; sampled shadow re-execution removes far less, and rerunning everything after unexplained changes avoids only 45.3%.",
    "published": "2026-10-20T05:37:51Z",
    "updated": "2026-10-20T05:37:51Z",
    "categories": [
      "cs.CV",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.27672"
  }
];
