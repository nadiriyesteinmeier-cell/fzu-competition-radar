window.PAPER_DATA_UPDATED_AT = "2026-10-31";
window.PAPER_ITEMS = [
  {
    "id": "2610.40653",
    "title": "Micro-Edits: Computational Support for Fine-Scale Edits in Film",
    "authors": [
      "Nhan Tran",
      "Hijung Valentina Shin",
      "Abe Davis",
      "Mackenzie Leake"
    ],
    "abstract": "In film editing, every frame matters. While macro, content-level edits shape the high-level narrative of a film, small local edits often control timing and direct visual attention. For example, editors can adjust the precise timing of clips to control the length of a meaningful silence, or cut to shots that highlight a specific character's reactions to important moments. These small, detailed edits are slow and tedious to make in standard editing tools because users have to map high-level narrative goals to low-level frame-by-frame adjustments. At the same time, these fine-scale adjustments, which we call micro-edits, can be nuanced and expressive, with different choices serving different creative goals. In this work, we start by conducting a formative study with professional editors to understand the structure of micro-edits and how they are used. We then derive a mathematical formalization for this structure to develop tools that leverage AI and optimization to make exploring micro-edits simpler and more efficient for users. Finally, we validate our tools in multiple user studies and a wide range of video examples.",
    "published": "2026-10-29T17:59:49Z",
    "updated": "2026-10-29T17:59:49Z",
    "categories": [
      "cs.HC",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40653"
  },
  {
    "id": "2610.40649",
    "title": "Rethinking Neural Thickets Without Weight Perturbations",
    "authors": [
      "Nicolas Dufour",
      "Elouan Gardès",
      "Amil Dravid",
      "Patrick Pérez",
      "Loic Landrieu"
    ],
    "abstract": "The Neural Thickets hypothesis posits that pretrained language models lie in dense neighborhoods of task-specific experts in weight space, which random Gaussian perturbations can uncover. We reproduce the reported gains, but show that they do not require this geometric explanation. Perturbing a single decoder block already recovers much of the improvement, while keeping the model entirely frozen and adding a random bias to its output logits matches or exceeds full-weight perturbations on most reasoning tasks. This suggests an alternative explanation based on output diversity, validation-based selection, and voting. We formalize this view as Perturb-Select-Vote (PSV), a general procedure that generates perturbed predictors, selects high-performing members on a small validation set, and aggregates their predictions. This interpretation connects Neural Thickets to established inference-time methods, including sampling, self-consistency, and verifier-guided selection. A first-order analysis further shows that small weight perturbations act primarily through their induced logit shifts. We extend this analysis to vision, where logit PSV substantially improves performance under domain shift, including on Earth observation, while full-weight perturbations provide little additional benefit. Together, these results suggest that the gains attributed to nearby weight-space experts can instead be obtained through output diversity, selection, and voting. Logit PSV realizes these benefits with a fully frozen model, providing a simple, training-free alternative to full-weight perturbation ensembles across language and vision.",
    "published": "2026-10-29T17:59:29Z",
    "updated": "2026-10-29T17:59:29Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40649"
  },
  {
    "id": "2610.40647",
    "title": "Read, Allocate, Route: Role-Coupled Tokenization for Pixel-Space Generative Transformers",
    "authors": [
      "Jiongfan Yang",
      "Weichen Fan",
      "Haiwen Diao",
      "Zhongang Cai",
      "Ziwei Liu"
    ],
    "abstract": "Pixel-space generative Transformers typically use one token per image patch, so capturing finer detail requires more tokens and makes global attention increasingly expensive. We observe that finer detail does not necessarily require more global communication: low-frequency structure benefits from global exchange, while high-frequency detail can be modeled locally. Based on this insight, we introduce SpecSlot, a pixel-space rectified-flow Transformer that decouples output detail from the length of the global attention sequence. SpecSlot expands each spatial anchor into multiple slots, each assigned a disjoint band of DCT coefficients; this separates anchor density from spectral subdivision. Only the lowest-frequency slot from each anchor participates in global attention, while all slots interact locally. This allows the model to increase spectral detail without enlarging the global sequence. A spatial head further adds a local correction to the spectral prediction, while the generative state, target, and loss remain in pixel space. On ImageNet-256, SpecSlot achieves a comparable final FID to a FLOPs-matched JiT control while converging faster. On ImageNet-512, it improves FID by 2.84 over the control with 3.9% fewer FLOPs, and comes within only 0.69 FID of JiT-B/16 at 38.2% lower cost. On text-to-image generation, SpecSlot surpasses JiT-B/8 on DPG-Bench by 1.06 at 40.6% lower forward cost.",
    "published": "2026-10-29T17:59:21Z",
    "updated": "2026-10-29T17:59:21Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.LG",
      "cs.NE"
    ],
    "url": "https://arxiv.org/abs/2610.40647"
  },
  {
    "id": "2610.40643",
    "title": "Luggage re-identification: A study of strategies towards a real-world application",
    "authors": [
      "Quentin Dhôte",
      "Romaric Audigier"
    ],
    "abstract": "Luggage re-identification (ReID) is a critical task in video surveillance for forensics, security or border management (suspicious or abandoned luggage recognition), as well as luggage management (lost luggage recovery). It enables the association of observations of the same luggage across disjoint camera views in complex environments such as airports, train stations and border crossing. While existing approaches primarily focus on appearance-based cropped image matching under relatively clean conditions, real-world scenarios are characterized by frequent occlusions, cluttered background and crowded scenes which significantly degrade performance. Yet, strategies leveraging the complementarity of multiple shots and views from different video streams is overlooked. In this paper, we study strategies for an end-to-end pipeline that operates from multiple video streams to detect and re-identify luggage. We evaluate different variants on a benchmark dataset acquired in real-world environments to address the questions of selecting and merging different views and shots of the same luggage as well as training on different environment datasets for an overall ReID performance improvement in practical applications.",
    "published": "2026-10-29T17:58:59Z",
    "updated": "2026-10-29T17:58:59Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40643"
  },
  {
    "id": "2610.40641",
    "title": "From extreme weather to agricultural consequences with agentic AI",
    "authors": [
      "Minghan Yu",
      "Mengyu Dai",
      "Yixin Wen",
      "Haizhao Yang"
    ],
    "abstract": "Extreme weather is forecast days ahead, yet its consequences for agriculture remain hard to predict: a forecast says where a storm will strike, not which crops will suffer or how much is at risk, and the records that could tell span many sources. We present WxCrop, the first agent that judges agricultural hazards from physically interpretable weather indices examined by causal analysis, and the first that combines weather and agricultural information to predict crop loss reliably for past and forecast dates. We demonstrate it in Florida on hurricanes, freezes and dry heat, with a loss model calibrated on insurance records for each, and the same procedure extends to other hazards and areas. Three checks show reliability: the hurricane index detects recorded cyclone days with an AUC of 0.98, recorded losses in held-out years are reproduced to within 2%, and independent production records confirm the county rankings (rank correlation 0.63). Users ask the agent for each crop group's loss as a fraction of expected season value, every number sourced, so that governments, growers and scientists respond to agricultural disasters quickly.",
    "published": "2026-10-29T17:58:53Z",
    "updated": "2026-10-29T17:58:53Z",
    "categories": [
      "physics.ao-ph",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40641"
  },
  {
    "id": "2610.40640",
    "title": "SonoWorld4D: From One Video to a 4D Audio-Visual Scene via Diffusion Synchronization",
    "authors": [
      "Derong Jin",
      "Xiyi Chen",
      "Ming C. Lin",
      "Ruohan Gao"
    ],
    "abstract": "Recent progress in visual scene generation has extended beyond static 3D scenes toward the more challenging problem of generating dynamic 4D scenes from minimal input. However, sound, despite being intrinsically coupled with dynamic objects and events, remains largely unmodeled in prior work. We introduce Video-to-4DAVScene, a new task that turns a video into an explorable, time-varying 4D audio-visual scene, and present the SonoWorld4D framework for this task. Given a monocular video, our method generates a 360 static background, reconstructs explicit motion trajectories of dynamic, sound-emitting foreground objects, and synthesizes a physically-grounded sound field consistent across multiple sources through dual-space audio diffusion synchronization. The resulting 4D scene supports real-time novel-view visual and spatial audio rendering. Evaluation on real-world dynamic scenes and a user study demonstrates SonoWorld4D generates 4D audio-visual scenes with perceptually realistic, physically grounded spatial audio consistent with scene geometry and visual content.",
    "published": "2026-10-29T17:58:45Z",
    "updated": "2026-10-29T17:58:45Z",
    "categories": [
      "cs.CV",
      "cs.SD"
    ],
    "url": "https://arxiv.org/abs/2610.40640"
  },
  {
    "id": "2610.40636",
    "title": "Probing Spatial State Representations in Visual Foundation Models",
    "authors": [
      "Baiqiao Yin",
      "Zhongang Cai",
      "Ruisi Wang",
      "Qiwei Liang",
      "Lei Yang",
      "Ziwei Liu"
    ],
    "abstract": "An observer sees only part of the surrounding world, yet must keep track of what lies beyond the current view. Spatial perception therefore involves more than recognizing individual images: it calls for a persistent spatial state that is updated under self-motion and used to guide action. Do visual foundation models provide representations that support such a state? We study this question through four levels of spatial capability---spatial structure, object persistence, predictive spatial update, and actionability---using frozen-feature probes on ten representations under streaming egocentric observations of static indoor environments. The resulting capability profiles vary across tasks, network layers, and prefix lengths: strong readout of the visible scene does not ensure accurate object persistence or future-feature retrieval. Matched controls separate readout accuracy from reliance on visual history and motion. Native future prediction retains recoverable spatial structure, but a spatial reader trained on real features does not transfer to predicted features unchanged. Finally, goal-dependent candidate selection does not establish reliable continuous action utility: predicted actions respond to goal changes, yet supplying the correct goal does not reliably improve progress. Across the four levels, object persistence and actionability build on camera-pose readout, whereas feature prediction builds on visible-scene readout. Together, these findings motivate evaluating spatial representations not only by what can be decoded from them, but by whether that information is maintained beyond observation, updated predictively, and used for goal-directed action.",
    "published": "2026-10-29T17:58:16Z",
    "updated": "2026-10-29T17:58:16Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.40636"
  },
  {
    "id": "2610.40632",
    "title": "SymAnt: Grounding Long-Horizon Action Anticipation with Adaptable Symbolic Priors",
    "authors": [
      "Fnu Aryan",
      "Yaqi Xie",
      "Joseph Campbell",
      "Woojun Kim",
      "Kwonjoon Lee",
      "Hossein Nourkhiz Mahjoub",
      "Ehsan Moradi-Pari",
      "Katia Sycara",
      "Simon Stepputtis"
    ],
    "abstract": "As robots and intelligent systems increasingly interact with humans, they must anticipate long sequences of future actions from only brief observations. While purely neural models typically require extensive observations to predict future actions and remain difficult to interpret and adjust, symbolic priors offer a structured alternative. To this end, we introduce SymAnt, a novel neuro-symbolic approach that unifies the expressiveness of neural networks with the structured reasoning of scene and knowledge graphs. Given a short video, SymAnt performs a joint-search over both graphs to construct a symbolic context, enabling unified reasoning over spatial relationships, object attributes, affordances, and associated actions. This symbolic context serves as a prior for an iterative refinement process that progressively generates and improves the sequence of future actions. By grounding predictions in symbolic context, SymAnt anticipates long-horizon actions from short observation windows in a parameter-efficient manner, while enabling users to directly edit the underlying knowledge to adjust predictions without further training. Through our experiments, we demonstrate the effectiveness of SymAnt, particularly when only short observation contexts are available, across five diverse datasets: Breakfast, 50 Salads, EPIC-KITCHENS, EGTEA Gaze+, and Assembly101.",
    "published": "2026-10-29T17:58:00Z",
    "updated": "2026-10-29T17:58:00Z",
    "categories": [
      "cs.RO",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40632"
  },
  {
    "id": "2610.40616",
    "title": "Difficulty Calibration Across Time for Membership Inference in Diffusion Models",
    "authors": [
      "Michael Joseph",
      "Yedid Hoshen"
    ],
    "abstract": "Modern diffusion models are trained on massive datasets that often include copyrighted or private images. Membership inference attacks (MIAs) address this by testing whether a given image was in a model's training set. The standard approach scores an image by its reconstruction loss and flags low-loss images as members. This often fails because some images are simply easier to reconstruct than others, so a simple unseen image can score a lower loss than a complex training image. Difficulty calibration separates memorization from how difficult an image is to begin with. We show how to calibrate along two axes of time: training time and diffusion time. First, across training time, we introduce Reference-Model Calibration (RMC), which compares a fine-tuned model's loss against an earlier checkpoint. This cleanly isolates newly memorized data and gives near-perfect auditing, even without text captions. Since earlier checkpoints are not always available, we next present Temporal Self-Calibration (TSC), which calibrates across diffusion time using only a single model. Our key observation is that an image's difficulty persists across noise levels, whereas memorization is localized in time. By comparing the loss at a target timestep against neighboring timesteps from the same model, TSC attenuates image difficulty using the model's own trajectory. Empirically, our methods beat the state of the art by a wide margin, and unlike most existing attacks, generalize across different model parameterizations such as $x$-, $v$-, and $ε$-prediction models. Code is available at https://github.com/MichaelJoseph777/TSC.",
    "published": "2026-10-29T17:54:54Z",
    "updated": "2026-10-29T17:54:54Z",
    "categories": [
      "cs.CV",
      "cs.CR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.40616"
  },
  {
    "id": "2610.40614",
    "title": "L3G-World: Real-Time Infinite World Generation with Latent 3D Gaussian Memory",
    "authors": [
      "Jinhyeok Choi",
      "JoungBin Lee",
      "Jongmin Lee",
      "Minkyeong Jeon",
      "Jiyoung Kim",
      "Kaeun Han",
      "Yoonjin Yoon",
      "Seungryong Kim"
    ],
    "abstract": "Interactive world models generate visual content conditioned on user actions, yet maintaining spatial consistency over long-horizon exploration in real time remains challenging. Existing approaches rely on either temporal context or explicit 3D memory, both of which scale poorly because memory grows with the length of the generated stream. Moreover, explicit 3D memories condition latent video generators by re-encoding RGB renderings, which precludes real-time generation. In this paper, we introduce a Latent 3D Gaussian Memory (L3G) that combines the efficiency of feed-forward reconstruction with a compact, rapidly renderable scene representation. Building on this memory, we propose L3G-World, in which a memory updater and a video diffusion transformer (DiT) alternate autoregressively to generate spatially consistent worlds. The memory updater spawns Gaussians in newly observed regions and refines existing ones, so that the memory grows with scene extent rather than stream length. Each Gaussian further stores a VAE latent feature, allowing the memory to be rendered directly into the DiT's latent space without VAE re-encoding. Experiments show that L3G-World achieves state-of-the-art generation quality and long-horizon spatial consistency, with up to $38.6\\times$ fewer 3D primitives, $3.2\\times$ faster memory updates, and $359\\times$ faster memory rendering relative to the most efficient prior 3D-memory baseline for each metric, enabling real-time world generation at 9 FPS.",
    "published": "2026-10-29T17:54:42Z",
    "updated": "2026-10-29T17:54:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.40614"
  },
  {
    "id": "2610.40613",
    "title": "TextSeal2: Distortion-Free LLM Watermarking with Copula Mixing and Memoryless Races",
    "authors": [
      "Tom Sander",
      "Pierre Fernandez",
      "Itai Gat",
      "Haiming Bao",
      "Jiaxin Shi",
      "Jason Park",
      "Valeriu Lacatusu",
      "Sylvestre-Alvise Rebuffi",
      "Hongyan Chang",
      "Hady Elsahar",
      "Tomáš Souček",
      "Tuan Tran",
      "Surya Parimi",
      "Alexandre Mourachko"
    ],
    "abstract": "We present TextSeal2, a distortion-free watermark for large language models that keeps its signal under speculative decoding: tokens that replace rejected drafts remain watermarked with the same keys, and the acceptance rate is unchanged. It also preserves output diversity and adds no measurable inference latency. Its predecessor, TextSeal, restores diversity in the Gumbel-max scheme by routing each token to one of two keys via a coin flip. This is suboptimal because the detector averages the scores from both keys without knowing which key was used. TextSeal2 instead merges two or more keys into a single virtual key and couples it to fresh noise through AutoMark's Gaussian copula. Any number of keys, including publicly shared keys, can be merged this way without diluting detection. Under speculative decoding, TextSeal2 verifies keyed drafts with one more exponential race, run on the leftovers of the draft races. By memorylessness, this race reproduces block verification, so the output follows the target model exactly. We evaluate TextSeal2 on three LLMs. At equal output token diversity, TextSeal2 detects 8 to 22 percentage points more 100-token answers than TextSeal at a false-positive rate of $10^{-3}$, and is comparable to textGrain while requiring no post-logits optimization. Under speculative decoding, it detects 18 and 22 percentage points more 200-token answers than TextSeal and textGrain, respectively, at the same acceptance rate.",
    "published": "2026-10-29T17:54:12Z",
    "updated": "2026-10-29T17:54:12Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.40613"
  },
  {
    "id": "2610.40611",
    "title": "When to Assist and What to Suggest: Joint Gating and Memory-Grounded Hint Generation in One Compact Decoder",
    "authors": [
      "A. J. A. Jubayer Talukder",
      "Mohammad Ariful Haque"
    ],
    "abstract": "Proactive assistants offer short, memory-grounded hints during a conversation, deciding when to assist and what to suggest. Current systems split this between a gate and a larger generator; we evaluate both together on 28,058 decision points. Stage-wise generation scores are oracle-gate ceilings: behind a real gate, end-to-end exact match is 0.2619 against a ceiling of 0.2971, and end-to-end precision is 0.2387, leaving substantial headroom. A gate pays off through precision and compute, whose saving falls from 4.39x with an 8B generator to 1.38x with a 1B one. The memory profile drives hint quality: removing it costs 24.7 exact-match points (rescaled BERTScore 0.57 to 0.35), while retrieval and a larger generator add nothing on exact match. One 1B decoder can do both, gating from an intermediate layer and generating in the same pass. At its final checkpoint it matches or exceeds the two-model pipelines on automatic end-to-end measures with 1.31-1.76x less wall-clock time than the matched 1B pipeline; across three seeds, its deeper exit ties the separate gate. A human evaluation (1,144 ratings over 32 dialogues) supports the memory effect and rates the single model level with the matched 1B pipeline and below the 8B one. Graded metrics and LlamaPIE's native judge track human ratings more closely than exact match, which we report as a strict lower bound.",
    "published": "2026-10-29T17:54:07Z",
    "updated": "2026-10-29T17:54:07Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.40611"
  },
  {
    "id": "2610.39161",
    "title": "Joint Rigid Alignment and Morphable Reconstruction from Partial 3D Face Scans",
    "authors": [
      "Eli A. Underwood",
      "Nicolas Rondan",
      "Angel V. Peterchev",
      "J. Matias Di Martino"
    ],
    "abstract": "Aligning a partial, real-world 3D face scan to a canonical representation requires solving two coupled problems at once: estimating the rigid pose that brings the scan into a common frame, and completing the facial shape in regions the scan never observed. Existing pipelines typically decouple these steps, running a generic point-cloud registration front end followed by a separate non-rigid fitting or deformation stage. Building on the GeoTransformer superpoint-matching architecture, we propose a single network that predicts both a rigid pose and a shape-complete point cloud in one forward pass: a cross-attention regressor, conditioned on transformer point features and predicted coarse correspondences, maps a partial scan to per-patch coefficients of a 3D morphable face model learned offline from a corpus of 8,000 identities. The resulting morphed template is then used, in the same forward pass, as the target for fine-grained Sinkhorn matching and rigid pose estimation, supervised purely by geometric alignment to ground-truth morphed geometry, so no hand-labeled coefficients are required. Against six classical and learned non-rigid registration baselines on held-out identities, our method leads the strongest ones by 3-4 times on per-vertex error and baselines that collapse the head onto the visible region by more than an order of magnitude, and is simultaneously the most accurate and fastest method on ground-truth-free scans from two independent real-scan datasets, NoW and NPHM. Code will be made publicly available.",
    "published": "2026-10-29T01:47:54Z",
    "updated": "2026-10-29T01:47:54Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.39161"
  },
  {
    "id": "2610.39160",
    "title": "CLaW: Codec-Guided Adaptive Latent Watermarking for Traceable Diffusion Image Generation",
    "authors": [
      "Huangchao Song",
      "Lingyun Yu",
      "Cong Li",
      "Peiqi Jiang",
      "Mingqi Fang",
      "Hongtao Xie"
    ],
    "abstract": "With the rapid advancement of text-to-image diffusion models, increasingly realistic AI-generated content has raised serious concerns about misuse and copyright infringement. Digital watermarking offers a promising solution by enabling user-level traceability, yet existing methods remain difficult to deploy at scale, hindered by costly model retraining or detection, poor effectiveness-fidelity trade-offs, and limited robustness to image transformations. To address these challenges, we propose CLaW (Codec-guided Latent Watermarking), a robust and efficient watermarking framework for traceable diffusion image generation with frozen diffusion backbones and inversion-free detection. Specifically, CLaW first uses a pretrained watermark codec to map each watermark message to a latent residual, enabling low-cost sampling-time injection. Then, the residual is injected within a late denoising window, where image semantics are better preserved and the watermark signal is less perturbed by subsequent denoising updates, yielding a better balance between watermark effectiveness and image fidelity. Furthermore, we introduce a decoder-guided adaptive injection mechanism that uses decoding confidence as feedback to dynamically calibrate watermark strength, reinforcing weak watermark signals and improving robustness under image transformations. Extensive experiments show that CLaW preserves high visual fidelity and achieves state-of-the-art robustness under image transformations, enabling reliable user-level traceability.",
    "published": "2026-10-29T01:46:18Z",
    "updated": "2026-10-29T01:46:18Z",
    "categories": [
      "cs.CV",
      "cs.CR"
    ],
    "url": "https://arxiv.org/abs/2610.39160"
  },
  {
    "id": "2610.39158",
    "title": "VEvo-Harness: Causally-Guarded Self-Evolving Harness for Agentic Image Generation",
    "authors": [
      "Yuan Wang",
      "Yuhang Yu",
      "Mengting Chen",
      "Tianrun Xu",
      "Zihao Pan",
      "Xuetao Feng",
      "Wei Li"
    ],
    "abstract": "The central bottleneck in visual generation and editing has migrated from achieving pixel-level fidelity to satisfying densely constrained user specifications through increasingly agentic workflows. Prevailing agentic generation pipelines remain shallow generate-verify-rewrite loops treating VLM judgments as coarse visual feedback, either discarding repair experience or admitting ungated updates that poison skill library. With memorize and govern periods left open, they degrade into ungoverned iterators of repeated trial-and-error rather than continual self-evolving harness. Towards this issue, we present \\textbf{VEvo-Harness}, the first causally-guarded continual self-evolving harness system for agentic visual generation. VEvo-Harness introduces four coupled innovations: (1) \\textit{a visual traceback} that densifies sparse judgments into root-cause attributions with a hierarchical verification tree; (2) \\textit{a visual continual governance} that admits only causally valid skill patches through counterfactual dual-arm image generation replay; (3) \\textit{a lifecycle-managed harness state} that hierarchically distills root-cause-anchored episodes across working, experience, and pattern tiers into a persistent skill library of routable and causally verified capabilities; (4) \\textit{a heterogeneous sandbox policy} that orchestrates a diverse action space of repair primitives, dynamically routing cost-aware interventions based on root causes to select the most effective strategy. VEvo-Harness surpasses state-of-the-art agentic methods and rivals proprietary generators (\\textit{e.g.}, GPT-Image, Nano-Pro) while maintaining the continual harness evolution and generalization.",
    "published": "2026-10-29T01:43:45Z",
    "updated": "2026-10-29T01:43:45Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.39158"
  },
  {
    "id": "2610.39155",
    "title": "REALM: Identifying Minimal Task Assets for LLM Agents",
    "authors": [
      "Zihou Ren",
      "Byungchul Tak",
      "Long Wang"
    ],
    "abstract": "Large language model (LLM) agents often receive access to more files, accounts, and services than a task requires. Prompt injection turns this excess access into an opportunity to redirect execution toward unrelated resources. Applying least privilege therefore requires identifying the assets needed by a task, including assets whose identities emerge only during execution. We present REALM (Required Execution Assets Linked to a Mission), an approach to identifying and maintaining a task's required assets and their permitted uses. The approach represents required assets as Dependency Graph nodes, resolves prerequisite relationships, and admits newly discovered assets through source-scoped selection. It separates discovering an asset from authorizing its use, while preserving the agent's freedom to choose its computation. The REALM Builder maintains the selected grants and projects Asset Files; the Partial API Manager exposes resource-bound Partial APIs to the Agent inside a Task Container. Across 60 clean tasks and 560 injected cases in AgentDyn, it completes 40.0% and 36.4% of tasks and decreases ASR from 16.6% to 0.2% with qwen3.5-flash as the base model.",
    "published": "2026-10-29T01:40:42Z",
    "updated": "2026-10-29T01:40:42Z",
    "categories": [
      "cs.CR",
      "cs.AI",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.39155"
  },
  {
    "id": "2610.39152",
    "title": "Unlocking with the Heart: Investigating User Perceptions of ECG-Based Biometric Authentication",
    "authors": [
      "Farnaz Farid",
      "Linet Momposhi",
      "Tamara Watson",
      "Alana Maurushat",
      "Abubakar Bello",
      "Farhad Ahamed"
    ],
    "abstract": "Password-based authentication remains challenging for many users, especially for those who face usability and accessibility issues. The burden of maintaining security can cause user fatigue, frustration and non-engagement. To address these issues, we conducted a pilot study to assess ECG-based biometric authentication as a passwordless alternative and to gather adult participants' perspectives on this approach. The research consisted of a survey study, an authentication prototype and a follow-up usability experience questionnaire. Our approach combined an online survey of 337 adults examining authentication practices and perceptions, with a separate usability evaluation in which 49 participants interacted with a simulated ECG-authentication and password interface in a health-care application prototype, then completed a post-test usability test questionnaire. The survey examined how adults across age groups use and perceive various authentication techniques, their experiences with biometrics, their views on security and convenience, and their willingness to adopt ECG authentication. In parallel, the usability prototype and questionnaire captured participants' responses after hands-on interaction with an ECG authentication prototype.",
    "published": "2026-10-29T01:39:05Z",
    "updated": "2026-10-29T01:39:05Z",
    "categories": [
      "cs.HC",
      "cs.CR",
      "cs.CY",
      "cs.ET",
      "eess.SY"
    ],
    "url": "https://arxiv.org/abs/2610.39152"
  },
  {
    "id": "2610.39151",
    "title": "STRATA: Reinforcement-driven Active Sampling with Tri-paradigm Adaptation for Efficient 3D Spatial Transcriptomics",
    "authors": [
      "Junchao Zhu",
      "Ruining Deng",
      "Chongyu Qu",
      "Zhengyi Lu",
      "Yanfan Zhu",
      "Yuechen Yang",
      "Yu Wang",
      "Shilin Zhao",
      "Haichun Yang",
      "Yuankai Huo"
    ],
    "abstract": "Spatial transcriptomics (ST) enables joint characterization of tissue morphology and gene expression. However, 3D volumetric ST acquisition remains expensive. AI-driven methods offer a low-cost alternative but remain limited in accuracy, while recent 2D section-wise ST acquisition still rely on dense grid sampling, resulting in redundant measurements and undersampling of biologically informative regions. To bridge the gap, we propose STRATA, a reinforcement-driven active sampling framework with tri-paradigm adaptation for reconstructing dense 3D transcriptomic maps from sparse voxel-wise ST acquisition. STRATA constructs a 3D graph integrating H&E morphology with single-cell priors and employs a reinforcement learning agent to estimate morphological sparsity and transcriptomic informativeness, enabling budget-aware selection of informative spots. Given these sparse measurements, an adaptive tri-paradigm predictor combines retrieval, regression, and cross-layer imputation through lightweight fusion, dynamically weighting their contributions. Experiments across datasets demonstrate improved sampling efficiency and accuracy, particularly under low-budget settings. Code is available at https://github.com/Junchao-Zhu/STRATA.",
    "published": "2026-10-29T01:37:44Z",
    "updated": "2026-10-29T01:37:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.39151"
  },
  {
    "id": "2610.39147",
    "title": "Kinematic Causal Attribution: Black-Box Explanations of Motion versus Geometry for 4D Point-Cloud Video Models",
    "authors": [
      "Zerui Wang"
    ],
    "abstract": "4D perception models, which classify 3D point-cloud videos, are being built into robots, assistive monitoring and AR, yet before deploying one a practitioner cannot check which cue it relies on: how a body part moves, or what shape it has. 3D attribution is single-frame, video attribution is confined to RGB pixels, gradient maps need white-box access, attention is absent from state-space backbones, and point-level perturbations assume a point correspondence across frames that real depth and LiDAR data lack. We present Kinematic Causal Attribution (KCA), a black-box, interventional attribution method that queries only the model's outputs. Its freeze operator removes a region's motion while keeping its shape, and a shape-free proxy removes the shape while keeping the motion. Together they span a motion$\\times$geometry cube for every tracked region, whose order-symmetric Shapley decomposition is complete and whose interaction is measured rather than assumed away. The operators rewrite per-frame point sets, so they need no correspondences, and a context-averaged estimator handles structures that span several regions. We validate KCA on the official PSTNet, P4Transformer and Mamba4D trained on MSR-Action3D. The decisive test is an audit: two binary tasks are built from real clips whose classes differ only in the motion or only in the shape of the same arm, and the motion share of the arm's importance follows the defining cue on all three backbones (0.83 vs. 0.60 on P4Transformer, 0.86 vs. 0.30 on PSTNet, 0.92 vs. 0.61 on Mamba4D), a distinction no single attribution map can make. The split costs no faithfulness: the necessity maps have the lowest deletion AUC on P4Transformer and PSTNet, tie with the best baseline on Mamba4D, and lose their correlation with the trained model's once the weights are randomised. Skeleton ground truth, re-sampling stability and cost complete the validation.",
    "published": "2026-10-29T01:36:42Z",
    "updated": "2026-10-29T01:36:42Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.39147"
  },
  {
    "id": "2610.39124",
    "title": "Clean Sheets and Checkpoints: Evidence Complexity for Certifying Sequential Agent Risk",
    "authors": [
      "Rohith Yanambaka Venkata",
      "Don McBride",
      "Tiago Sequeira",
      "Md. Al Amin"
    ],
    "abstract": "Dangerous-capability evaluations often test an AI agent from prepared states at ordered milestones. A clean sheet records no successes. What it certifies about a campaign of $B$ attempts depends on what a failed attempt erases. We model the task as a chain of $k$ milestones divided into checkpoint segments and ask how many zero audit responses certify, at level $α$, a completion probability of at most $ε$. For segments chosen before the audit, counting possible completion windows gives a certificate for any specified budget. The bound also covers adaptive deployment processes that follow the chain's transitions, provided their success probabilities after every complete history are capped by the corresponding audit success probabilities. The audit does not test this transport assumption. In rare-risk phase interiors, each segment is either rarely completed within the budget (active) or nearly always completed (free). The minimum expected number of zero responses is asymptotic to $\\log(1/α)\\,(B^a/(a!\\,ε))^{1/K_A}$, where the $a$ active segments contain $K_A$ milestones and are those at least as long as a budget-dependent threshold. The certificate attains this constant. Every asymptotically optimal evaluator must divide its expected response count equally among active milestones in the limit, with a vanishing share elsewhere. Where a single segment passes from active to free, each of its milestones receives a smaller limiting share than an active milestone; a crossover-aware certificate attains the optimal constant. For selected segments with known or unqueried prefix steps, counting failed cycles can sharpen the certificate.",
    "published": "2026-10-29T01:13:00Z",
    "updated": "2026-10-29T01:13:00Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39124"
  },
  {
    "id": "2610.39122",
    "title": "Appreciation Teaches Unauthorized Execution: Self-Evolution Degrades the Robustness of Personal Agents to Indirect Prompt Injection",
    "authors": [
      "Xinyan Wang",
      "Xiaogeng Liu",
      "Jun Shao",
      "Chaowei Xiao"
    ],
    "abstract": "Self-evolving personal agents act for users and learn from user feedback. However, if an agent obeys an instruction that an untrusted third party hides in content, the third party gains control of the agent. Such indirect prompt injection (IPI) poses severe risks. We investigate whether self-evolution degrades the robustness of personal agents to IPI. To study this question, we design a controlled two-phase methodology. In the adaptation phase, the user asks the agent to read external content and complete the task described in it, a common request in daily use. The agent then learns from the user's feedback and improves itself as designed. In the test phase, a third party writes a similar task into new external content, but the user's test request does not authorize the injected task. Using this methodology, we build multiple tasks with diverse test instances in different domains for a real personal agent. Our extensive experiments reveal that self-evolution substantially degrades robustness to IPI. Specifically, compared with the base agent, which does not evolve from user feedback, the average attack success rate rises by 14.0--48.8 percentage points under skill evolution and by 3.0--39.3 percentage points under reinforcement learning, posing safety risks. The code is available at https://github.com/SaFo-Lab/Evolve-IPI",
    "published": "2026-10-29T01:10:18Z",
    "updated": "2026-10-29T01:10:18Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39122"
  },
  {
    "id": "2610.39114",
    "title": "From Local Recovery to Unified Generation: Discovering Triple Set in Knowledge Graphs via Observation-Anchored Latent Diffusion",
    "authors": [
      "Jiaqi Wang",
      "Yisen Gao",
      "Huayang Shi",
      "Junhao Hou",
      "Wengen Li",
      "Jihong Guan",
      "Yichao Zhang",
      "Shuigeng Zhou",
      "Yangqiu Song",
      "Hong Cheng"
    ],
    "abstract": "Triple set prediction (TSP) is to recover missing relational triples in a knowledge graph by predicting the triple set instead of isolated links. Existing approaches predominantly rely on the subgraph-based completion paradigm, where the original graph is first partitioned into local subgraphs which are then independently completed. Such a paradigm suffers from fragmented structural reasoning, limited cross subgraph dependency modeling, and missing predictions across subgraphs. This paper proposes LatentDiff, a novel unified latent generative framework for TSP, which reformulates knowledge graph completion as latent space graph generation. LatentDiff first learns a compact latent representation using a relation-aware residual-quantized knowledge graph autoencoder, which encodes the whole graph into relation-aware latent embeddings, quantizes them with chunked residual codebooks, and reconstructs triples through a factorized decoder. On top of this latent space, we introduce an observation-anchored latent graph diffusion model, where the target latent graph representation is perturbed toward the observed latent. The reverse process recovers missing triples through progressive latent denoising. Experiments on three benchmark datasets show that LatentDiff outperforms the SOTA in terms of F_{tsp} by 5.4 percentage points on average. Code: https://anonymous.4open.science/r/LKGDiff-44A5.",
    "published": "2026-10-29T00:57:38Z",
    "updated": "2026-10-29T00:57:38Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39114"
  },
  {
    "id": "2610.39109",
    "title": "PCM: A Proof-Carrying Message Protocol for Verifiable Multi-Agent Communication",
    "authors": [
      "Bravish Ghosh"
    ],
    "abstract": "When one AI agent tells another that \"the tests passed\" or \"a person approved this refund\", the receiver has only the sender's word. A2A and MCP authenticate the channel, but the sender is the party in doubt, so a prompt-injected agent can launder fabricated facts and authority through a multi-agent system. We present Proof-Carrying Messages (PCM), a protocol in which each claim carries evidence: records from an append-only Merkle log that the agent cannot write, with inclusion proofs, signed by an attesting signer the agent cannot control. Receivers check messages offline and give each claim a three-valued result: proven, unproven or failed. A claim that rests only on the agent's own report is never proven. Authority travels as grant chains rooted in a recorded human approval, and the chains can only narrow. We specify four claim types, a typed caveat algebra, replay rules that survive restarts, and strict readings that make independent verifiers agree, and we prove the resulting security properties. On a pre-specified benchmark of 926 messages from real runs, 712 of them lies in 16 classes, PCM accepts 10 lies, all of them stale evidence (1.4%, 95% CI 0.8-2.6%). Plain A2A accepts all 712, and models of six deployed protocols (A2A with signed Agent Cards, uAgents, RFC 9421, SCITT, AP2, Verifiable Intent) accept 504-712. Two independent verifiers agree on all 926 verdicts, and verification takes about 1 ms.",
    "published": "2026-10-29T00:50:34Z",
    "updated": "2026-10-29T00:50:34Z",
    "categories": [
      "cs.CE",
      "cs.AI",
      "cs.CR",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.39109"
  },
  {
    "id": "2610.39100",
    "title": "Generating Critic-Guided Synthetic Experience in Latent World Models",
    "authors": [
      "Jorge de Freitas",
      "Christos Ziakas",
      "Alessandra Russo"
    ],
    "abstract": "Learning from offline datasets is limited in scalability, as collecting new experience is often costly or unsafe in the real world. World models offer an alternative way to generate new experience through a learned dynamics model, yet learning policies in latent space is limited due to compounding errors in imagined rollouts. To this end, we propose using the world model as a local transition generator, leveraging critic guidance to choose actions inside that model to generate synthetic experiences. We study action refinement methodologies, introducing Critic-Guided Synthetic Experience (CGSE) generation in world models. Specifically, CGSE augments an existing offline dataset by sampling candidate actions using an offline policy and refining each to maximize a first-order approximation of the $Q$-function within a trust region. We then use a frozen latent world model to imagine the future state given each updated action, and use the critic to choose the best one, appending this synthetic transition to the replay buffer. Our method requires no additional real-environment interaction or test-time planner, as it generates synthetic experience offline using the world model. On three OGBench manipulation tasks, CGSE improves an offline policy by a relative improvement of $7.1\\%$ on the average success rate.",
    "published": "2026-10-29T00:41:38Z",
    "updated": "2026-10-29T00:41:38Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.39100"
  },
  {
    "id": "2610.37668",
    "title": "Honeycomb-Surfels: Compact Hexagonal Primitives for Efficient Scene Rendering and Reconstruction",
    "authors": [
      "Prakhar Kaushik",
      "Soumava Paul",
      "Alan Yuille"
    ],
    "abstract": "Novel view synthesis and 3D reconstruction have advanced rapidly with radiance fields and splatting, yet their memory and computational demands limit their use in resource-constrained settings. We introduce Hexels: novel planar hexagonal surface elements with a first-order spatial color field for efficient 3D scene and 2D image representation. Hexels exploit locally planar regions with smoothly varying appearance using fewer, larger primitives. Their hexagonal support provides an area- and boundary-efficient domain, while the local color field captures appearance variation within each primitive. Across 34 scenes, Hexels improve PSNR over memory-matched 2DGS by 4.53-7.38 dB across datasets while requiring lower training VRAM. We further ablate Hexels by showing that per primitive, Hexels outperform 2DGS by upto 4.74 dB while using lower training VRAM and having 2.31 times faster FPS. Even in unconstrained settings, Hexels offers complementary quality-memory trade-offs. For efficient 3D surface reconstruction, Hexels reduce error by 28.9% compared with memory-matched 2DGS across 15 DTU scans. On 6 Tanks and Temples surface scenes, Hexels achieves the highest mean F1 among compared methods (34.38%, versus 31.72% for 2DGS). We further also show that Hexels, as a general primitive, improves 2D image representation over Image-GS. Hexels push the Pareto frontier on the quality-efficiency trade-off of surface-aligned primitives.",
    "published": "2026-10-27T17:59:59Z",
    "updated": "2026-10-27T17:59:59Z",
    "categories": [
      "cs.CV",
      "cs.AI",
      "cs.GR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.37668"
  },
  {
    "id": "2610.37666",
    "title": "ThinkWorld: World Imagination Reinforces Chain-of-Dynamics Reasoning",
    "authors": [
      "Chaehyun Kim",
      "Chi-Pin Huang",
      "Jisoo Kim",
      "Min-Hung Chen",
      "Yu-Chiang Frank Wang",
      "Seungryong Kim",
      "Fu-En Yang"
    ],
    "abstract": "Vision-Language-Action (VLA) models have made substantial progress in robotic manipulation, but their generalization remains constrained by the diversity and coverage of action-labeled robot demonstrations. Human videos provide much broader behavioral and environmental experience, while learning from them faces a fundamental trade-off between scalable data and explicit action grounding. We introduce ThinkWorld, a VLA learning framework that grounds action reasoning in world dynamics and strengthens it through reinforcement learning with world imagination. ThinkWorld represents each action thought as a Chain-of-Dynamics (CoD), a sequence of discrete motion tokens that captures the intermediate dynamics connecting the current world to a future state and serves as a common action representation across embodiments. We first initialize CoD with action-labeled demonstrations, then predict the future induced by each CoD and reinforce those whose predictions better match the observed outcome. This enables videos without action annotations to provide direct supervision from observed state transitions, allowing human and robot experience to refine the same reasoning space. Experiments in simulation and on real robots demonstrate effective human-to-robot transfer and strong generalization to unseen tasks and environments.",
    "published": "2026-10-27T17:59:52Z",
    "updated": "2026-10-27T17:59:52Z",
    "categories": [
      "cs.RO",
      "cs.AI",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37666"
  },
  {
    "id": "2610.37662",
    "title": "Can Discrete Tokens Serve as Semantically Lossless Representations of Visual Signals?",
    "authors": [
      "Jialv Zou",
      "Xiaotong Li",
      "Zhengrong Yue",
      "Xu Huang",
      "Yaxin Luo",
      "Wenhao Yan",
      "Haodong Li",
      "Wenyu Liu",
      "Xinggang Wang"
    ],
    "abstract": "Discrete visual tokens represent vision in a discrete form analogous to language, offering a native interface for multimodal modeling under a shared next-token prediction objective. However, quantization error is widely assumed to cause unavoidable semantic loss, fundamentally limiting the semantic fidelity of discrete visual tokens and positioning continuous visual representations as an intrinsic upper bound. Using multimodal understanding as a proxy for semantic fidelity, we revisit this assumption and find quantization error unreliable, as discrete representations with substantially larger errors can achieve better understanding. Instead, the effective bit budget of discrete indices emerges as a key determinant of downstream performance. However, existing quantizers eventually saturate as additional codebooks contribute progressively less semantic information. As one approach to alleviating this saturation, we introduce Factorized Vector Quantization, which quantizes complementary, fixed-dimensional views of the visual feature with symmetric parallel codebooks. It continues to improve at larger bit budgets, ultimately matching continuous visual representations in multimodal understanding. Trained on industrial-scale multimodal data, our model achieves state-of-the-art performance among discrete-representation models, outperforming UniAR and Emu3-Chat by 22.8% and 59.2%, respectively, on a nine-metric average. To our knowledge, it is also the first discrete-representation model competitive with strong continuous-representation models such as Qwen3-VL, including on fine-grained OCR tasks. We further identify the key principles and a practical recipe enabling this competitiveness. These results and insights support the potential of discrete visual representations to underpin large-scale native multimodal foundation models. Code and models are available at https://github.com/hustvl/FVQ",
    "published": "2026-10-27T17:59:22Z",
    "updated": "2026-10-27T17:59:22Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37662"
  },
  {
    "id": "2610.37656",
    "title": "Attention as Lattice Gauge Theory: Relations Interact Only Through Wilson Loops",
    "authors": [
      "Aakash Sarkar",
      "Ananya Mukherjee",
      "Motoshige Sato"
    ],
    "abstract": "Relations compose through the entity they share - Alice is Bob's mother and Bob is Carol's father, so Alice is Carol's grandmother - and the order matters, since a father's mother is not a mother's father; verifying a composed relation means closing the loop. We show that if each entity's coordinate frame may be rotated independently (per-entity frame freedom), three things follow. In the pure-gauge sector, relations that share no cycle cannot interact at all. The only gauge-invariant score of a triangle is a class function of its holonomy $H = T_{ij} T_{jk} T_{ki}$ - a Wilson loop. And the only equivariant update of an edge is $U = Ψ(H)\\, T_{ij}$ with $Ψ$ conjugation-equivariant. Edge attention by Wilson loops is therefore not one design among many but the unique form the symmetry permits. Three communities hold pieces of this form: the commuting-operator embeddings of knowledge graphs are its abelian (commuting) sector; AlphaFold's triangle update and the Edge Transformer have its shape - an edge updated through the third vertex - without its constraints; and lattice QCD builds it equivariantly on lattices. We instantiate the equivariant sub-family on general relational graphs as holonomy attention. With no training and composition alone, it infers unobserved $S_4$ relations on sparse graphs at 0.88 with a fifth of the edges corrupted, at or slightly below specialist synchronization algorithms, where every commutative architecture is capped at 0.083; its holonomy score flags corrupted triangles at AUC 0.99 where commuting scores are capped at 0.76 by a second selection rule, and it separates clusters without labels.",
    "published": "2026-10-27T17:58:48Z",
    "updated": "2026-10-27T17:58:48Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "physics.comp-ph"
    ],
    "url": "https://arxiv.org/abs/2610.37656"
  },
  {
    "id": "2610.37655",
    "title": "KPPax: preprocess differentiable kinetic ODE for machine learning in atmospheric chemistry",
    "authors": [
      "Wenqing Peng",
      "Michael Boy",
      "Zhi-Song Liu"
    ],
    "abstract": "Atmospheric chemical mechanisms are commonly distributed in the language of the Kinetic PreProcessor (KPP), which generates efficient Fortran or C code but does not fit into the differentiable programming frameworks in which machine-learning models are developed. We present KPPax, a kinetic preprocessor that generates differentiable, just-in-time compiled, and vectorisable chemistry code in JAX from mechanisms written in the KPP language. KPPax evaluates the rate law with sparse operations in log space, which keeps it differentiable, and integrates the stiff system with the implicit solvers and the forward- and reverse-mode adjoints of the \\texttt{diffrax} library, so that exact sensitivities are obtained without hand-derived adjoint code. We demonstrate two applications with the POLLU benchmark mechanism. In the first, the Fisher information matrix computed from an automatically differentiated Jacobian predicts, before any fit, which of the 25 rate coefficients a flow-tube-like design can identify, and noisy synthetic estimation confirms the predicted uncertainties of the nine identifiable rate coefficients to within about 30\\% while revealing clusters of fast reactions of which only ratios are constrained. In the second, a neural-network correction of an emission inventory is trained offline on per-scenario 4D-Var retrievals and then fine-tuned online through the chemical model, which reduces the error of the biogenic correction by a factor of 2.4--5 and recovers information on low-temperature emissions that the individual retrievals lose. KPPax makes KPP mechanisms directly usable for parameter estimation and hybrid physics--machine-learning modelling.",
    "published": "2026-10-27T17:58:40Z",
    "updated": "2026-10-27T17:58:40Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37655"
  },
  {
    "id": "2610.37649",
    "title": "Can LLMs Uncover Hidden Physical Laws through Free Exploration?",
    "authors": [
      "Zhen Yang",
      "Wen Wang",
      "Xander Xu",
      "Ying-Cong Chen"
    ],
    "abstract": "Scientific discovery often begins with an unexpected observation that prompts a new research question. In a world with altered physical laws, can large language models (LLMs) notice unexpected behavior, such as heavier objects falling more slowly, and discover the law through experiments without being told what to investigate? To evaluate this ability, we introduce LongChang, an automated framework that creates simulated worlds with altered physics, where one or more laws differ from ordinary physics. The evaluated LLMs act as explorers, manipulating objects and building tools to investigate their own questions without research tasks or hints about these laws. Separate LLM agents generate and review scenes, review tool designs, and evaluate reports for correctness and experimental support using the altered physical laws and exploration records. These records guide scene evolution for further exploration, allowing the full cycle to run without human intervention. Among 12 LLMs, GPT-6-Astra achieves a discovery rate of 16.7%, while the other 11 score 0%. The exploration records reveal uninvestigated anomalies and only partial identification of the altered physical laws.",
    "published": "2026-10-27T17:57:00Z",
    "updated": "2026-10-27T17:57:00Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.37649"
  },
  {
    "id": "2610.37647",
    "title": "MuonGS: Pretraining LLMs with Relaxed Weight-Norm Control",
    "authors": [
      "Athanasios Glentis",
      "Dawei Li",
      "Mingyi Hong"
    ],
    "abstract": "Weight decay and explicit weight-norm constraints improve optimizer performance in language model pretraining, yet a unified understanding of why such control helps and how much is needed remains incomplete. We analyze norm control in Muon over the entire training trajectory using the \\emph{accumulated effective learning rate}, $C_T=\\sum_{t<T}η_t/\\|W_t\\|_F$, where $η_t$ is the nominal learning rate and $η_t/\\|W_t\\|_F$ is the effective learning rate relative to the weight norm. For bounded update directions, accumulation over any training interval bounds relative weight displacement. We show that vanilla Muon can accumulate only logarithmically, potentially limiting exploration and helping explain its slower empirical progress, whereas MuonW and MuonH guarantee at least linear accumulation under the stated conditions. Going beyond bounded-norm control, we show that sufficiently slow norm growth guarantees faster accumulation than the logarithmic worst case, opening up less restrictive optimizer designs. Based on this insight, we propose MuonGS, which uses Gram--Schmidt (GS) projection to remove the radial component of each Muon update without fixing the weight norm. With bounded update directions and a constant nominal learning rate, we prove that the weight norm grows at most proportionally to $\\sqrt{t}$ after $t$ steps. Consequently, MuonGS guarantees $C_T=Ω(\\sqrt{T})$, with accumulation sustained even in later training. Further, for smooth scale-invariant objectives we establish its $O(T^{-1/2})$ stationarity guarantee. In pretraining experiments with 160M- and 400M-parameter dense models as well as a 135M active- and 1B total- parameter MoE model, MuonGS achieves lower validation perplexity than MuonH at long training horizons. In particular, for the dense model it achieves an estimated token-equivalent speedup up to about $15\\%$ at matched validation loss to MuonH.",
    "published": "2026-10-27T17:56:40Z",
    "updated": "2026-10-27T17:56:40Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "math.OC"
    ],
    "url": "https://arxiv.org/abs/2610.37647"
  },
  {
    "id": "2610.37633",
    "title": "Repurposing Video Diffusion Transformers for Cross-View Temporal Object Correspondence",
    "authors": [
      "Siyoon Jin",
      "Dahyun Chung",
      "Honggyu An",
      "Sangbeom Lim",
      "Wonjin Nam",
      "Jaewoo Jung",
      "WonJun Moon",
      "Seungryong Kim"
    ],
    "abstract": "Cross-view object correspondence identifies the same object across views. However, existing methods often rely on frame-wise matching or sequential tracking, which can propagate correspondence errors under appearance changes or occlusions. Therefore, we introduce cross-view temporal object correspondence, which requires preserving object identity across both views and time from a query mask. To address this, we propose XTrack, a unified framework which repurposes a pretrained video DiT with semantic and spatiotemporal priors for RGB-to-mask latent transport, jointly modeling cross-view matching and temporal tracking. However, naive video DiTs do not guarantee accurate cross-view grounding and often attend to semantically similar yet incorrect objects across views. Thus, we introduce focal cross-view attention alignment, hard negative conditioning, and local context crop strategies to ensure reliable grounding. Finally, beyond these architectural enhancements, we also tackle the lack of dense annotation by introducing a pseudo-label curation pipeline that converts sparse Ego-Exo4D annotations into dense supervision to enable effective video-level training. Our results demonstrate the effectiveness of XTrack as a unified framework, ensuring robust temporal consistency and identity preservation.",
    "published": "2026-10-27T17:53:34Z",
    "updated": "2026-10-27T17:53:34Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37633"
  },
  {
    "id": "2610.37631",
    "title": "What Improves During Pretraining? Tracking Knowledge Acquisition with Point-in-Time Models",
    "authors": [
      "Chang Su",
      "Bin Wu",
      "Emine Yilmaz",
      "Yao Lu"
    ],
    "abstract": "Language models pretrained on web corpora collected over multiple years learn both general and domain-specific knowledge. How these different kinds of knowledge are learned as pretraining progresses remains unclear. Recent point-in-time models trained on web snapshots from different years provide a way to probe how knowledge prevalence varies over time. Using these models, we propose a temporal variability score (TVS), defined as the coefficient of variation of an item's negative log-likelihood across models. A higher score suggests that the knowledge may be less consistently represented across years of web text. We evaluate six benchmarks covering diverse topics using six models from multiple open-source model families. We find that low- and high-TVS items are learned similarly early in training, but high-TVS items improve faster later on. At the end of the pretraining run, high-TVS items outperform low-TVS items in 34 of 36 model-benchmark settings, with an average advantage of 7.3 points of chance-normalized accuracy. This pattern is most robust on knowledge-intensive tasks, even when comparing items of similar difficulty. Our findings reveal differences in how knowledge is learned over the course of pretraining, with temporal variability providing a diagnostic of these learning dynamics beyond aggregate benchmark scores.",
    "published": "2026-10-27T17:52:38Z",
    "updated": "2026-10-27T17:52:38Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.37631"
  },
  {
    "id": "2610.37626",
    "title": "Know, then Draw: A New Learning Paradigm for Visual Generation",
    "authors": [
      "Yucheng Mao",
      "Chongjian Ge",
      "Zhuowen Tu",
      "Hao Tan",
      "Hanwen Jiang"
    ],
    "abstract": "Visual generation requires both high-level semantic knowledge and fine-grained pixel details. We propose a learning paradigm that assigns these roles to autoregressive pretraining for knowledge acquisition and diffusion post-training for high-fidelity rendering. Within this framework, we study the objective, representation, and scaling of knowledge acquisition and rendering. Controlled comparisons identify autoregression as the stronger pretraining objective for downstream rendering, improving both learning efficiency and final generation quality. We further find that AR-only generation quality does not necessarily correlate with final performance; semantic quality matters more. This motivates a purely semantic tokenizer trained with language supervision alone, without an image decoder or reconstruction loss. We establish compute-optimal scaling laws for knowledge acquisition and rendering, and find that autoregressive pretraining lowers the fitted asymptotic rendering loss compared with pixel diffusion models trained from scratch. Guided by the laws, we train a 3B-parameter text-to-image model with only 6,600 H100 GPU-hours, achieving 86 on GenEval and 87 on DPG-Bench and validating the proposed paradigm at scale.",
    "published": "2026-10-27T17:50:20Z",
    "updated": "2026-10-27T17:50:20Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.37626"
  },
  {
    "id": "2610.37624",
    "title": "Rare, Relevant, and Still Wrong: How Memory Fails LLM Group Decisions",
    "authors": [
      "Anouar Imel",
      "Imad Charradi",
      "Abderrahman Sghir",
      "Khalil El Khammar"
    ],
    "abstract": "When an LLM group's discussion is compressed into a short memory for a final decision maker, what should the memory keep? Two natural heuristics keep the rarest claims or the claims relevant to the decision criteria. On hidden-profile tasks both look attractive, because how widely a fact is held is confounded with whether it helps. We introduce CrossProfile, a diagnostic benchmark of 60 templates with automatically verified answer keys, in which the ownership of supporting, decoy, and irrelevant facts is crossed while their text is held fixed (480 tasks). Across Qwen2.5-7B, Llama-3.1-8B, and two DeepSeek models, both heuristics fail in predictable places. Selecting by relevance readmits decoys, because decoys are on topic: even a perfect relevance filter loses 23 to 31 points to rarest-first selection in the classic hidden-profile configuration. Rarest-first selection is no better than random selection on average and wins only where the rare facts happen to be the useful ones. In both cases accuracy follows the balance of evidence the memory keeps, not the policy that kept it. The decision model adds a third failure, a form of social proof: it gives extra weight to facts attributed to many agents. Removing the attribution tags, or reassigning them at random with line order fixed, raises accuracy in the classic configuration by 13 to 24 points. In natural discussions the evidence is lost before any memory acts: the complete transcript yields lower accuracy than no notes at all.",
    "published": "2026-10-27T17:49:39Z",
    "updated": "2026-10-27T17:49:39Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.MA",
      "cs.SI"
    ],
    "url": "https://arxiv.org/abs/2610.37624"
  },
  {
    "id": "2610.37619",
    "title": "Perceiving and Predicting Dynamic Sports: Spatiotemporal Intelligence in Vision Models for Egocentric Tennis Video",
    "authors": [
      "Tudor Braicu",
      "Joseph DelPreto",
      "Jared Boyer",
      "Mónika Farsang",
      "Maximilian Stölzle",
      "Tim Niklas Seyde",
      "Daniela Rus"
    ],
    "abstract": "Agile robots require spatiotemporal intelligence to interpret scenes, reason about interactions, and anticipate future events. Yet it remains unclear how well foundation vision models support these capabilities, particularly from a moving egocentric camera, which is a natural view for robots. To investigate this, we collect an annotated tennis dataset and train a suite of vision models on spatiotemporal tasks. Our dataset contains egocentric video synchronized with five allocentric videos, estimated global positions, labeled contact times, and annotated stroke types. We then evaluate seven prediction tasks from egocentric images: 2D ego player and 3D ball localization, future player and ball trajectories, forehand or backhand stroke anticipation, time to the next ego player ball contact, and 3D ball position at that contact. We compare image encoders, video encoders, and vision-language models with jointly trained prediction heads. The best performing models achieve mean current-frame localization errors of 0.14 m for the ego player and 0.54 m for the ball, future forecasting errors of 0.34 m for the ego player and 0.91 m for the ball over 1.1 s, and a mean contact-time prediction error of 0.14 s. Auxiliary depth information substantially improves 3D ball localization, suggesting that inferring metric depth remains a challenge. Longer image histories do not improve ball forecasting, indicating that representations exploit scene context rather than rely solely on inter-frame motion. Finally, we propose a conditional diffusion model to generate whole-body kinematic tennis motion from vision encoder predictions on egocentric video at real-time rates, adapting movements as predictions are refined. These results move towards a deeper understanding of how foundation vision models can support real-time dynamic robots using egocentric video.",
    "published": "2026-10-27T17:47:14Z",
    "updated": "2026-10-27T17:47:14Z",
    "categories": [
      "cs.CV",
      "cs.RO"
    ],
    "url": "https://arxiv.org/abs/2610.37619"
  },
  {
    "id": "2610.36364",
    "title": "When Slides Met Scans: Cross-Attention for Renal Cancer Prognosis",
    "authors": [
      "Anusha Krishnamoorthy",
      "Basudha Pal"
    ],
    "abstract": "Histopathology and computed tomography (CT) provide complementary views of renal cancer. We connect these modalities through bidirectional cross-attention between 16 histology prototypes and up to 32 kidney-centered CT tokens from frozen foundation models. In 210 TCGA-KIRC patients with 46 disease-specific survival (DSS) events, 5-fold evaluation yielded a C-index of $0.760\\pm0.081$ and 3-year AUROC of 0.773 (95\\% CI 0.678--0.860), the highest averages among evaluated unimodal and fusion baselines. External testing in 180 CPTAC-CCRCC patients yielded DSS C-index of 0.629 with CT withheld. Attribution analysis linked predictions to image regions while exposing acquisition artifacts. These findings support further study of cross-scale fusion and independent multimodal validation.",
    "published": "2026-10-26T22:28:50Z",
    "updated": "2026-10-26T22:28:50Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.36364"
  },
  {
    "id": "2610.36363",
    "title": "Reliability-Aware Short-Term Glycemic Risk Prediction Using an Anchor-Based Comparative Framework of Sequence, Multimodal, and State-Updating Digital-Twin Models",
    "authors": [
      "Pir Bakhsh Khokhar",
      "Carmine Gravino",
      "Fabio Palomba"
    ],
    "abstract": "Anticipating short-term hypoglycemic and hyperglycemic risk is essential for proactive diabetes management. However, existing machine learning approaches often use inconsistent evaluation protocols and emphasize predictive performance over reliability. This study introduces an anchor-based benchmarking framework integrating longitudinal glucose sequences and multimodal patient information. Using the T1DiabetesGranada dataset, 5,503,441 standardized prediction anchors were constructed from 736 individuals with type 1 diabetes to evaluate hypoglycemia and hyperglycemia prediction at 30-, 60-, and 120-minute horizons. Three neural architectures, a Hybrid LSTM-Transformer, a Multimodal Digital Twin, and a State-Updating Digital Twin with gap-aware longitudinal state progression, were compared under identical patient-level validation protocols. Beyond predictive performance, the evaluation examined calibration, classification thresholds, explanation reliability, cross-model disagreement, and robustness to controlled perturbations. No statistically significant predictive differences were observed after Holm correction, although the models exhibited complementary reliability characteristics. The Multimodal Digital Twin achieved the lowest mean Brier score, while the State-Updating Digital Twin demonstrated the lowest mean expected calibration error (ECE-10). The Hybrid LSTM-Transformer showed strong explanation faithfulness and stability under its temporal attribution protocol. These findings highlight the importance of evaluating digital-twin models beyond predictive accuracy and emphasize the need for reliability assessment and external validation before clinical deployment.",
    "published": "2026-10-26T22:28:12Z",
    "updated": "2026-10-26T22:28:12Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.36363"
  },
  {
    "id": "2610.36355",
    "title": "WAKMan: Workload Aware KVCache Manager",
    "authors": [
      "Suhas Kumar Morisetty",
      "Vaibhavi Lokegaonkar",
      "Sachin Mathew Varghese",
      "Wesley Harris"
    ],
    "abstract": "Prefix caching enables a Large Language Model (LLM) servers to reuse the Key-Value (KV) states and accelerate prefill computation stage for requests that share a prefix with earlier prompts, thus reducing latency and serving cost. With limited memory resource, the KV cache eviction policy becomes a decisive factor in determining the overall benefits of prefix caching. Production traffic may have single-turn, multi-turn, agentic, or a mixture of any combination of these request types. Our findings indicate that agentic steps return within seconds and favor recency, while popular prompts and long conversations return after many other requests and favor frequency. Across 20 mixes, no single policy is always best: vLLM's default strategy LRU provides 12% higher cache hits as compared to the frequency-oriented S3FIFO on agentic-heavy mixes but trails it by up to 22% elsewhere, and even a single workload parameter can flip the winner even for any particular mix. We present WAKMan, a workload-aware KV cache manager that picks its eviction policy from live traffic without knowing request types or reading prompts. It improves hit rate over LRU by 5 percentage points on average, with the lowest mean and worst-case optimality gap of all policies.",
    "published": "2026-10-26T22:19:37Z",
    "updated": "2026-10-26T22:19:37Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.36355"
  },
  {
    "id": "2610.36346",
    "title": "Your Wish Is My Commit: Over-Compliant Refactoring in AI Coding Agents",
    "authors": [
      "Haocong Jiang",
      "Sadra Sabouri",
      "Sepand Haghighi",
      "Souti Chattopadhyay"
    ],
    "abstract": "Large language models are known to be sycophantic, over-complying with users even when doing so is unproductive. When these models act as coding agents, this can be costly: an agent that keeps editing after no edit improves the code writes churn, technical debt, and review burden into the codebase. Yet the consequences of sycophancy in software engineering remain largely understudied. To understand them, we run a controlled study of iterative refactoring, an open-ended task with no stopping criterion, where any edit an agent makes once the code is already clean reflects compliance rather than improvement. Across algorithmic (n=50) and object-oriented (n=10) suites, we repeatedly ask two widely used agents, Codex and Claude Code, to refactor further across five models. Over 3,000 turns, we define six behavioral signals of over-compliance. We hypothesized that a capable agent would stop once it recognized an optimized codebase; none did. Every model kept editing, rewriting up to 31x the original codebase before first stopping and resuming edits even after declaring the task complete. Over-compliance is a costly, multi-turn behavior that compounds with every turn, and our six signals give developers and tool builders a way to detect and curb it.",
    "published": "2026-10-26T22:12:50Z",
    "updated": "2026-10-26T22:12:50Z",
    "categories": [
      "cs.SE",
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.36346"
  },
  {
    "id": "2610.36344",
    "title": "Enhancing Clinical Classifier Robustness with Deep Representation Learning Based OOD Detection on DNA Methylation Data",
    "authors": [
      "Md Zahangir Alom",
      "Quynh T. Tran",
      "Breuer Alexandar",
      "Brent A. Orr"
    ],
    "abstract": "DNA methylation (DNAM) array-based tumor classification is a powerful clinical diagnostic tool, but models trained on fixed reference cohorts can produce faulty predictions for tumor types not represented in the training distribution. We propose an end-to-end deep representation learning-based out-of-distribution (OOD) detection framework for DNAm array data. Deep neural network (DNN) classifiers were trained on public sarcoma (SARC) (GSE140686) and brain tumor (BT) (GSE90496) cohorts, and feature vectors were extracted from bottleneck layers. Five OOD methods, including 1dimension (1D)-Subspace Analysis (1D-SSA), K-Nearest Neighbors (KNN), Ridge Regression, Mahalanobis Distance (MD), and Sum of Squared Distances (SSD), were explored with 200 and 500-dimensional embeddings. Spectral discrepancy was used to discriminate in-distribution (IND) from OOD samples. Performance was measured via cross-validation, holdout samples, and an independent clinical dataset. 1D-SSA was the most effective approach. In the sarcoma-IND/brain tumor-OOD setting, the framework achieved an AUROC of 0.975 and True Negative Rate (TNR)@95TPR of 0.930, and an AUROC of 0.9569 and TNR@95TPR of 0.8660 for the brain tumor-IND/sarcoma-OOD setting. On the independent clinical test set, the method yielded a mean AUROC of 0.976, a DE of 0.032, an FPR@95TPR of 0.065, and a TNR@95TPR of 0.935. These results show deep representation-based OOD detection as a practical quality-control layer for clinical-grade methylation-based tumor classification systems.",
    "published": "2026-10-26T22:11:07Z",
    "updated": "2026-10-26T22:11:07Z",
    "categories": [
      "q-bio.GN",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.36344"
  },
  {
    "id": "2610.36341",
    "title": "Executable Archaeology of Programs That Model Programming: Reanimating the Heuristic Compiler (1961) and KBEmacs (1984)",
    "authors": [
      "Jeff Shrager",
      "Kent M. Pitman",
      "Mia Golec"
    ],
    "abstract": "Early AI programs were often also theories of how people think, and programs that wrote programs were, in part, theories of how people program. Here we report on the reanimation of two such programs that offer two seemingly different theories of programming and were developed for quite different purposes. The first, Herbert Simon's Heuristic Compiler (1961), was an experimental model of programming as problem-solving, applying the means-ends analysis methods of the General Problem Solver to investigate the nature of the programming task. The second, KBEmacs (1984), was a working prototype of an intelligent programming assistant developed by MIT's Programmer's Apprentice project, built on the view that expert programmers recognize and combine familiar patterns, or \"cliches.\" It let a programmer build up programs by combining cliches through a stylized English command language. We approach both through the methodology of Executable Archaeology, the study of historical computational systems by running their original code, a process we call \"reanimation.\" Our reanimation of the Heuristic Compiler reproduces the compiled code appearing in Simon's 1963 paper, and our reanimation of KBEmacs reproduces the SQRT sequence of its December 1984 self-test. Examined side by side, the two theories turn out to have much in common: the Heuristic Compiler also works by adapting existing routines, and Simon later argued that search alone requires a large body of programming knowledge. To highlight the reflexivity of this project, we deliberately used a modern AI-assisted programming tool, Anthropic's Claude Code (Opus 5.5), to carry out much of the detailed reanimation work, building on a significant base of existing software. The explicit, executable theories of programming that both systems embodied are largely absent from today's far more capable AI coding assistants.",
    "published": "2026-10-26T22:09:13Z",
    "updated": "2026-10-26T22:09:13Z",
    "categories": [
      "cs.AI",
      "cs.HC",
      "cs.PL"
    ],
    "url": "https://arxiv.org/abs/2610.36341"
  },
  {
    "id": "2610.36340",
    "title": "CrowdCC: Jointly Benchmarking Corruption Robustness and Deployment Quantization in Crowd Counting",
    "authors": [
      "S Mahmudul Hasan",
      "Lu Peng"
    ],
    "abstract": "Crowd-counting models deployed on edge devices face two challenges: inputs are degraded along the capture and transmission pipeline, while models are often quantized to satisfy resource constraints of the edge. Yet corruption robustness and deployment quantization are typically evaluated separately. We introduce CrowdCC, a controlled benchmark that jointly evaluates these effects across 23 deployment-motivated corruptions at three severity levels, four crowd-counting datasets, and 26 models. We evaluate TensorRT engines at FP32, FP16, and post-training INT8 precision on an A100 GPU, alongside throughput and energy measurements on corresponding Jetson Orin~NX configurations. The corruptions span six families, with head annotations adjusted when geometry or visibility changes. Our results show that capture-chain corruptions consistently cause the largest degradation across evaluated models, while crowd density affects absolute and relative errors differently. Accuracy on clean images does not reliably predict performance on the corresponding corrupted images. INT8 changes corruption robustness more than FP16, without a consistent direction, and does not consistently improve latency or energy efficiency. INT8 inference efficiency is strongly associated with reformat overhead in the compiled engine, with slowdowns also observed under limited INT8 coverage. Precision changes corrupted-error rankings and robustness--cost frontiers, highlighting the need to consider corruption robustness and deployment cost jointly when selecting models and precision. The code is available at https://github.com/Tulane-Computer-Architecture-Systems/CrowdCC-Release.",
    "published": "2026-10-26T22:08:23Z",
    "updated": "2026-10-28T22:02:15Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.36340"
  },
  {
    "id": "2610.36337",
    "title": "CRLoMTL: Conflict-Resolution through Low-rank matrices for Multi-Task Learning",
    "authors": [
      "Ahmed Agiza",
      "Tasneem Shaffee",
      "Rahil Badkul",
      "Sherief Reda"
    ],
    "abstract": "Multi-task learning (MTL) improves model efficiency by sharing representations across related vision tasks, but it often suffers from negative transfer when task updates interfere with one another. Existing conflict-mitigation methods typically operate in gradient space, requiring explicit task-gradient manipulation and additional optimization steps. We propose Conflict-Resolution through Low-Rank Matrices for Multi-Task Learning (CRLoMTL), a parameter-efficient framework that mitigates task interference in the low-rank parameter-update space. CRLoMTL learns task-specific LoRA updates through task-specific passes, where each task updates its own low-rank matrices, and integrates these updates through global shared-subspace fusion. Specifically, we introduce a shared-subspace resolver based on singular value decomposition (SVD), referred to as the SVD resolver, which extracts a common low-dimensional orthonormal basis across task adapters and projects task updates into this shared space before merging them into a single deployment-time update. The resulting update can be folded into the backbone, preserving the inference structure of the original model without additional runtime branches. Experiments with Swin Transformer backbones on PASCAL-Context, NYUD-v2, and CelebA show that CRLoMTL achieves a favorable accuracy-parameter trade-off, improving over single-task baselines by up to 2.77% on PASCAL-Context, 5.03% on NYUD-v2, and 3.50% on CelebA, while training only a small fraction of the parameters used by single-task models.",
    "published": "2026-10-26T22:05:00Z",
    "updated": "2026-10-26T22:05:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.36337"
  },
  {
    "id": "2610.36335",
    "title": "OA-RAG: Ontology-based Agentic RAG for Faithful LLM Reasoning",
    "authors": [
      "Hui Yang",
      "Jiaoyan Chen",
      "Yongsheng Gao"
    ],
    "abstract": "Large language models (LLMs) perform well across many real-world tasks but remain prone to hallucination, limiting their reliability in domains such as biomedicine and healthcare, where answers must be grounded in established knowledge. Retrieval-augmented generation (RAG) mitigates this problem by incorporating external information, but often overlooks logical relationships and relies heavily on the LLM's own reasoning, which can compromise answer faithfulness. We propose OA-RAG, an agent that integrates formal reasoning with LLM reasoning, drawing on both the logical structure and informal annotations of domain ontologies. For each answer, OA-RAG reports the ontology observations used as evidence and a model-assessed grounding level (entailed, supported, related, or unrelated) that characterises the strength of that evidence. Across benchmarks derived from three large-scale ontologies and six real-world medical question-answering tasks, OA-RAG achieves the best overall performance among the evaluated ontology-fine-tuned and popular RAG methods, with particularly strong results on reasoning-intensive tasks. The reported grounding levels also offer a useful indication of answer reliability, with stronger grounding generally associated with higher accuracy. Finally, our results demonstrate the value of ontologies as knowledge sources: OA-RAG is competitive with, and sometimes outperforms, domain-specific RAG systems that draw on sources such as textbooks.",
    "published": "2026-10-26T22:04:58Z",
    "updated": "2026-10-26T22:04:58Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.36335"
  },
  {
    "id": "2610.36329",
    "title": "Plenty of Room in the Middle: Revealing Opportunities on a GPU Cluster via Fine-Grained Monitoring",
    "authors": [
      "Andrew Sheinberg",
      "Samyak Gupta",
      "Kai Li"
    ],
    "abstract": "GPU clusters have become essential computing resources for AI and scientific research in academia and industry. However, their high cost and growing demand often result in long queueing delays. While previous monitoring efforts have operated at second- or minute-level frequencies, they primarily informed job-level scheduling for clusters and lacked the detail needed to optimize GPU-level utilization. This paper presents an in-depth study of a university research GPU cluster, analyzing resource usage at 100 ms intervals. We have developed a lightweight monitoring tool that leverages Nvidia's DCGM library to capture fine-grained \"compute utilization\" metrics within GPUs. Deployed on a cluster with 89 nodes and 319 GPUs, our tool collected data over several months. This paper focuses on a 10-day period with 7,399 jobs submitted by 150 users from 12 departments. Our study reveals three key findings: (1) the GPU cluster exhibits significant underutilization, with over 70% of jobs using less than 20% of GPU memory and 50% averaging below 5% Streaming Multiprocessor (SM) utilization; (2) 80% of jobs have a drastic mismatch between their requested and actual durations, significantly limiting the scheduler's effectiveness; and (3) the multi-GPU jobs we examined show highly periodic communication patterns. These findings suggest there is plenty of room in the middle: substantial utilization gains are available through better job scheduling and GPU multitasking, independent of hardware or application improvements. Our monitoring solution is available as open-source software at https://github.com/als244/gpu_server_monitoring.",
    "published": "2026-10-26T21:56:13Z",
    "updated": "2026-10-26T21:56:13Z",
    "categories": [
      "cs.AI",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2610.36329"
  },
  {
    "id": "2610.36328",
    "title": "How Stable Are LLM-Generated Proofs Under Program Refactoring? A Stress Test for Verifiable Code Generation",
    "authors": [
      "Aravind Mandiga",
      "Guoming Li"
    ],
    "abstract": "Benchmarks for verifiable code generation usually test a proof against one fixed implementation. We ask whether the same proof remains valid after a program refactoring that preserves behavior. We introduce RefactorProof, which derives 458 Lean-certified variants from the 185 VERINA tasks that compile in our pinned environment while holding the specification and evaluated proof fixed byte-for-byte. VERINA supplies reference proofs for 46 tasks, all from its basic split; the primary model-versus-reference comparisons further match on 21-25 short, non-recursive tasks. Structural refactorings expose substantial brittleness across proof sources: task-normalized structural PSR is 4.3% for the supplied references and 13.3-26.8% for the specialized provers. On the matched tasks, specialized prover proofs nevertheless have higher overall unchanged-proof survival than the supplied reference artifacts: +15.6 points for DeepSeek-Prover-V2-7B, +18.8 for Goedel-Prover-V2-32B, and +20.3 for Goedel-Prover-V2-8B; all three 95% CIs exclude zero. The ordering persists after excluding universally survived T1 variants, under family-balanced aggregation, and under alternative deployable valid-proof selection rules. However, unchanged-proof failure is not the same as high repair cost: predefined one-identifier edits repair 51/54 eligible reference structural failures and 58/85 eligible prover failures. RefactorProof therefore measures unchanged-proof stability under program refactoring, not the cost of maintaining a proof after it breaks.",
    "published": "2026-10-26T21:56:03Z",
    "updated": "2026-10-26T21:56:03Z",
    "categories": [
      "cs.AI",
      "cs.LO",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.36328"
  },
  {
    "id": "2610.36327",
    "title": "Training-Free Inference Acceleration for Video Large Language Models: Methods, Trade-offs, and Evaluation",
    "authors": [
      "Yuqi Li",
      "Chuanyue Yan",
      "Neil Rodrigues",
      "Xianglong Wang",
      "Xiaoqin Feng",
      "Junming Liu",
      "Xi Xiao",
      "Zhongwei Cheng",
      "Wei Li",
      "Lin Chen",
      "Yingli Tian"
    ],
    "abstract": "Video Large Language Models (VLMs) have demonstrated strong capabilities in video understanding and reasoning, but processing long visual sequences incurs substantial computational, latency, and memory overhead. This survey examines training-free inference acceleration, focusing on reducing inference costs while preserving task-relevant spatiotemporal evidence. We organize existing methods by their intervention stages in the inference pipeline, covering input, visual encoding, projector, prefill, and decoding. Post-training quantization (PTQ) is discussed separately as a cross-stage extension with varying calibration requirements. We analyze how intervention position affects evidence preservation and computational savings, and why local efficiency improvements may not translate into end-to-end acceleration. We complement this analysis with quantitative evidence from prior studies and our own experiments under a shared evaluation setting to assess accuracy-latency trade-offs.",
    "published": "2026-10-26T21:55:44Z",
    "updated": "2026-10-26T21:55:44Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.36327"
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
  },
  {
    "id": "2610.26384",
    "title": "Answer Delivery Under a Shared Token Budget: An Audited Study of Stopping and Finalization",
    "authors": [
      "Yupeng Chang",
      "Linyuan Gao",
      "Zhiyuan Li",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "An inference budget is useful only when the system delivers an answer within it. We study a fixed-budget policy combining first-valid-box stopping with a charged finalization cue. On 100 fresh, independently audited GSM8K test questions per model, it improves delivered endpoint accuracy over first-box stopping by 8.0 percentage points for Qwen3-4B-Thinking-2507 and 7.0 for DeepSeek-R1-Distill-Llama-8B. A prelocked repeat on the same questions gives 7.0 and 10.0 points; neither seed shows a gross harm relative to first-box stopping. The point estimates of incremental physical-slot savings are below one percent. A finalization-only ablation separates cue recovery from stopping, and a fixed scalar reader tests extraction as an alternative explanation. The cue is prior art; the contribution is a component and readout analysis with charged injections and verified paths. Results cover two checkpoints, one task, one prompt family, and two fixed seed conditions.",
    "published": "2026-10-19T13:35:12Z",
    "updated": "2026-10-19T13:35:12Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26384"
  },
  {
    "id": "2610.26383",
    "title": "BOSS: Token-Budgeted Online Sampling and Selection for LLM Reasoning",
    "authors": [
      "Yupeng Chang",
      "Yahan Li",
      "Chenlu Guo",
      "Diana Inkpen",
      "Yuan Wu",
      "Yi Chang"
    ],
    "abstract": "Test-time scaling can improve LLM reasoning, but existing approaches typically adapt generation or apply answer selection after a predetermined generation schedule. We study within-instance allocation: under a hard per-instance prompt-plus-completion token cap, when should inference stop, generate another candidate, or spend residual tokens adjudicating candidates already observed? BOSS is a training-free policy for this three-way decision, with worst-case budget checks before every generation and judge call. Its key contribution is online generation-adjudication allocation under one shared token ledger. Across two Llama-3.1 models and four reasoning benchmarks, BOSS attains the highest accuracy in 22 of 24 model-task-budget cells under the common hard cap. At Llama-3.1-8B and B=4k, it reaches 60.5 macro-average accuracy versus 58.6 for Adaptive-Consistency, 59.1 for TALE-EP, and 58.9 for fixed-schedule League. On identical Stage-I candidate pools, randomized A/B judging with repeated voting improves plurality from 58.4 to 60.3, with the full BOSS selector reaching 60.5. Approximately matched-cost controls further characterize how the benefit of adjudication changes with available inference budget. Together, these results establish generation-adjudication allocation as a distinct design axis for reasoning under strict per-instance caps.",
    "published": "2026-10-19T13:34:47Z",
    "updated": "2026-10-19T13:34:47Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26383"
  },
  {
    "id": "2610.26369",
    "title": "Autonomous intelligence for mining productivity: a multi-agent AI approach to operational value creation",
    "authors": [
      "N Guerin",
      "A Dehoux",
      "M Nakhla"
    ],
    "abstract": "Integrated Remote Operation Centres (IROCs) are emerging as the architectural frontier of Industry 4.0 for capital-intensive sectors such as mining, oil and gas, and energy. Yet two intertwined gaps constrain their evolution towards full autonomy. First, no integrated agentic architecture has been proposed for mining IROCs that orchestrates Supervisory Control and Data Acquisition systems, digital twins, predictive analytics and human-machine interfaces under safety-critical constraints. Second, no evaluation framework jointly addresses the real-time, Health-Safety-Environment, regulatory-auditability and cost-per-decision requirements that govern industrial agentic deployments. This paper makes four contributions. It synthesises industry needs and quantified gains documented in analogous industries that motivate an agentic approach to mining IROCs. It introduces EI2ROC, a three-tier multi-agent architecture combining a Large Language Model orchestrator with specialised monitoring and production-capacityprediction agents communicating through a Model Context Protocol-style tool interface. It provides a critical review of agentic evaluation along six orthogonal dimensions and identifies the industrial blind spot of current benchmarks. Finally, it proposes a multi-dimensional benchmarking framework for industrial agentic AI comprising scenario library, harness, metrics and humancalibration protocol. The paper states explicitly which components are implemented in the current prototype, which belong to the proposed reference design and which remain future work, and reports preliminary cost and latency observations from an operating site. Together, EI2ROC and the benchmarking framework constitute a methodological blueprint transferable across CAPEX intensive industries.",
    "published": "2026-10-19T13:24:44Z",
    "updated": "2026-10-19T13:24:44Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.26369"
  },
  {
    "id": "2610.26365",
    "title": "From Tasks to Turns: Measuring Human Labor Contributions in Human-Agent Joint Production",
    "authors": [
      "Likai Wang",
      "Dezhao Su",
      "Jing Hu",
      "Yunyun Wan",
      "Jingdi Lei",
      "Xinhai Li"
    ],
    "abstract": "In agent workflows, a brief human instruction can alter subsequent search, reasoning, and tool execution, yet final task outcomes rarely reveal the contribution of an individual instruction to human-agent joint production. We propose a Human Turn-level framework for measuring human contributions, using task quality and token usage to characterize the collaborative production outcomes associated with each human instruction. We compare continuations from adjacent checkpoints under matched models, budgets, and termination conditions, and assess stability through repeated measurements. Across four archived and simulated interaction settings, we conduct 29,124 comparisons between predicted and observed directions of quality and computational change at both Human Turn and session levels. On HumanBench, we obtain 506 valid comparisons across 85 real-user scenarios. Results show that quality and computational changes associated with human guidance depend on task conditions. Expert-style and ordinary-style guidance differ in information provision, correction, and repetition. Even when task quality after continuation is identical, remaining computational demands can differ substantially across checkpoints. Our framework advances the measurement of human labor contributions from tasks and sessions to individual turns, providing a repeatable, fine-grained foundation for studying human contributions and their allocation in human-agent joint production.",
    "published": "2026-10-19T13:22:34Z",
    "updated": "2026-10-19T13:22:34Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.26365"
  },
  {
    "id": "2610.27018",
    "title": "Long-wave Infrared Polarimetric Remote Sensing Image Fusion for Vehicle Detection",
    "authors": [
      "Wenjuan Zhang",
      "Xiangrui Peng",
      "Zhen Li",
      "Caimeng Yi",
      "Xuesong Ma",
      "Jianwei Wang",
      "Jie Pan"
    ],
    "abstract": "Blurred vehicle contours and low contrast limit detection performance in infrared remote sensing imagery, while existing fusion methods may introduce polarization noise and fail to integrate complementary information effectively. To address these limitations, we propose a Mamba-based infrared polarimetric remote sensing image fusion model. Infrared polarization information reflects surface material properties and geometry, providing complementary information to infrared intensity. The proposed method first combines long-wave infrared total intensity S0 and the degree of linear polarization (DoLP), using a physics-inspired polarization-response proxy and spatial structural continuity to extract guidance features. It then employs bidirectional state space scanning along horizontal, vertical, and both diagonal orientations to enable cross-modal feature fusion across the entire image. Prior-guided multi-window structural similarity, reconstruction constraints, and a relative lower-bound loss for polarization saliency are jointly introduced to suppress noise while preserving global background structures and target polarization features. In addition, we construct AIR-LWIR-Pol, a dataset of 1,901 accurately registered image pairs acquired using an airborne division-of-aperture long-wave infrared polarimetric imaging system, and evaluate downstream vehicle detection using YOLO11. The experimental results show that the proposed method outperforms the comparison methods on four fusion metrics, including entropy and structural similarity. Vehicle detection mAP50 and mAP50-95 reach 55.0% and 29.4%. These results demonstrate the effectiveness of combining physical priors with state space modeling for long-wave infrared polarization image fusion and support its use for target detection in complex remote sensing scenes.",
    "published": "2026-10-19T13:22:25Z",
    "updated": "2026-10-19T13:22:25Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.27018"
  },
  {
    "id": "2610.26362",
    "title": "GAIDA: Generative AI for Human-in-the-Loop Document Annotation",
    "authors": [
      "Islam Mesabah",
      "Ali Elhosary",
      "Priyabanta Sandulu",
      "Darko Obradovic",
      "Sebastian J. Vollmer"
    ],
    "abstract": "Document annotation is a fundamental yet labor-intensive step in building document information extraction systems. While Optical Character Recognition (OCR) and Large Language Models (LLMs) can automate parts of this process, we argue that annotation systems should be judged not by how completely they remove human effort, but by how effectively they redirect it toward review and correction. We propose a modular human-in-the-loop architecture that integrates OCR-based extraction, LLM-based semantic pre-annotation, and human validation in a single editable workflow, and present \\textbf{GAIDA}, a research prototype serving as its reference implementation. GAIDA supports interchangeable OCR engines, LLM backends, and prompt configurations, and enables stage-specific measurement of annotation effort. In an initial single-annotator, stage-specific study on the FUNSD scanned-form and WildReceipt retail-receipt benchmarks, OCR assistance reduced region-creation and transcription time by up to \\textbf{80.9\\%}, and reviewing LLM pre-annotations reduced semantic-labeling time by up to \\textbf{73.7\\%}, despite imperfect pre-annotations of 78.86\\% and 86.98\\% Micro F1 on FUNSD and WildReceipt, respectively. Finally, we reuse the same implementation, adapting only OCR and prompt configuration, to build and openly release \\textbf{AraReceipt}, a manually annotated dataset of 100 Arabic receipt images labeled with 25 key-information classes. The results indicate that imperfect automated outputs provide practical value when presented as editable suggestions under human control.",
    "published": "2026-10-19T13:22:13Z",
    "updated": "2026-10-19T13:22:13Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26362"
  },
  {
    "id": "2610.26360",
    "title": "Remote Expert Evaluation of Tabletop Avatar Gaze Control in Asymmetric Multi-Scale MR--VR Collaboration",
    "authors": [
      "Carlos Mosquera",
      "Neven Elsayed",
      "Ernst Kruijff",
      "Joseph Newman",
      "Valeriya Lehrbaum",
      "Eduardo Veas"
    ],
    "abstract": "This paper proposes an integrated setup for a multi-scale asymmetric collaboration scenario in the context of a remote-expert use case, focusing on the expert side. In this system, the remote expert (with an exocentric view in Mixed Reality (MR)) uses a Tangible User Interface (TUI) to precisely position and rotate their avatar within a scaled tabletop World-in-Miniature (WIM). Inside the WIM, the expert's avatar and the operator share the same scale and egocentric view, while the expert retains a global tabletop overview of the plant to support collaboration. Interviews with industry experts during the participatory design phase revealed the need for an egocentric view inside the plant on the remote-expert side to enable full collaboration. We designed and studied three interaction-visualisation combinations to integrate and control the expert avatar's gaze: VR (fully immersive with direct head control), Head (floating screen with direct head control), and Touch (on-avatar screen with touchpad control). We evaluated these methods with 29 participants across two fault-detection tasks: Same Machine, where both collaborators inspect the same machine, and Twin Machine, where they inspect identical machines in separate locations. The VR condition, which combines immersion, direct head control, and a full-scale view, yielded the strongest overall performance and user experience, while the tabletop avatar setup was well received for collaboration. Our findings inform the design of gaze-control techniques for asymmetric MR-VR collaboration and reveal challenges and opportunities for future work.",
    "published": "2026-10-19T13:20:59Z",
    "updated": "2026-10-19T13:20:59Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.26360"
  },
  {
    "id": "2610.26357",
    "title": "HGASurv: Hierarchical Granularity-Aware Multimodal Integration for Survival Prediction",
    "authors": [
      "Peike Yu",
      "Wuchao Liu",
      "Jihong Guan",
      "Shuigeng Zhou"
    ],
    "abstract": "Multimodal survival prediction jointly analyzes histopathological whole-slide images (WSIs), genomic profiles, and clinical variables to stratify patients by risk. However, existing approaches often inadequately account for granularity differences across modalities, particularly in spatial organization and feature dimensionality. Within pathology, aggregating WSI patch features without preserving their spatial arrangement can obscure tissue architecture; across modalities, directly concatenating low-dimensional clinical variables with high-dimensional visual and genomic features may limit the contribution of clinical information to prediction. To address these challenges, we propose HGASurv, which introduces a hierarchical WSI encoding module and a clinical-guided graph propagation module for granularity-aware multimodal integration. The hierarchical WSI encoding module maps WSI patch features onto a spatial grid using their original coordinates and applies parallel convolutions to construct representations at patch, local-neighborhood, and regional scales. Genomic signature embeddings then query these scale-specific WSI representations through cross-modal co-attention, producing signature-conditioned morphological features. The clinical-guided graph propagation module uses clinical variables to define patient-similarity edges and propagates fused image-genomic node embeddings with graph attention, integrating clinical information through topology rather than feature concatenation. Across three TCGA cohorts, HGASurv achieved the strongest overall C-index performance, with ablation studies supporting the complementary contributions of the hierarchical WSI encoding and clinical-guided graph propagation modules. This design shows that matching representation and integration mechanisms to modality-specific granularity improves multimodal survival prediction.",
    "published": "2026-10-19T13:19:03Z",
    "updated": "2026-10-20T16:17:16Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.26357"
  },
  {
    "id": "2610.26351",
    "title": "PhyPro-FM: A Physics and Prompt-Guided Graph Foundation Model for Contingency Analysis",
    "authors": [
      "Xu Yang",
      "Zhanyuan Sheng",
      "Chenhui Lin",
      "Haotian Liu",
      "Qi Wang",
      "Yue Yang",
      "Wenchuan Wu"
    ],
    "abstract": "The continuous evolution of next-generation power systems, characterized by the high penetration of renewable energy resources and dynamic topology variations, poses formidable challenges to traditional N-1/N-2 contingency analysis in terms of computational efficiency and scalability. While deep learning-based methods offer accelerated inference, existing studies predominantly treat contingency analysis as a pure regression problem, often overlooking the physical essence of grid operation and engineering requirements of real-world scenarios. To bridge this gap, this paper proposes a physics and prompt-guided graph foundation model (PhyPro-FM) for generalizable and engineering-viable contingency analysis. The proposed architecture integrates graph neural networks with a learnable global query mechanism and, notably, introduces a prompt-guided learning paradigm. By leveraging historical snapshots as few-shot prompts, the model dynamically captures correlations between target and historical operating conditions, significantly enhancing generalization capabilities under unseen topologies. Furthermore, we design a physics-informed training mechanism that prioritizes branch power flow errors over nodal voltage errors, aligning the optimization objective with critical grid security constraints. To ensure engineering applicability, a physics-informed inference mechanism is also developed, incorporating a residual-based correction module and a specialized post-processing strategy for singular branches to circumvent numerical instability. Comprehensive experiments demonstrate that PhyPro-FM outperforms state-of-the-art methods in accuracy and generalization, validating its superior physical consistency and robustness for practical engineering applications.",
    "published": "2026-10-19T13:16:43Z",
    "updated": "2026-10-19T13:16:43Z",
    "categories": [
      "eess.SY",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.26351"
  },
  {
    "id": "2610.26346",
    "title": "CARRS: A Constraint-Aware, Real-Time Routing System for Emergency Vehicles in Urban Environments",
    "authors": [
      "Vincent Sello",
      "Timothy Adeliyi",
      "Ridewaan Hanslo"
    ],
    "abstract": "Emergency vehicles such as police vehicles, fire engines, and ambulances require a stable and efficient route optimization to reach life-critical events in the shortest times possible. However, the dynamic nature of urban traffic makes this ideal scenario much more challenging, causing critical life-threatening delays. Traditional civilian navigation systems cannot account for real-time traffic changes alongside vehicle-specific constraints, creating inadequate routing scenarios. This research presents the Constraint-Aware Real-Time Routing System (CARRS), a unified software architecture tailored for emergency coordination. The CARRS architecture is engineered to fuse together classical pathfinding algorithms such as A*, Dijkstra, and Bidirectional A*, with Constraint Satisfaction Problem methodologies. The Design Science Research Methodology is the research framework, and prototyping is the iterative process. The artifact was empirically evaluated using OpenStreetMap data for major metropolitan road networks, combined with simulated dynamic traffic scenarios. Performance metrics focused on route optimality, constraint adherence, rerouting responsiveness, and the potential for future system scalability. Findings revealed the system's capability to generate optimal routes for operationally relevant subgraphs in under 35 seconds, with incremental rerouting responsiveness below 20 seconds. Furthermore, the system achieved more than 90% adherence to vehicle-specific constraints, making the CARRS architecture viable for real-time dynamic routing requirements. This study delivers a routing platform that bridges artificial intelligence-driven optimization with software engineering operational compliance, presenting a practical transformative step toward adaptive emergency vehicle coordination in dynamic urban environments.",
    "published": "2026-10-19T13:12:42Z",
    "updated": "2026-10-19T13:12:42Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.26346"
  },
  {
    "id": "2610.26342",
    "title": "VibeTraining-Bench: Data-Trainer-Harness Co-Design for Iterative System Improvement",
    "authors": [
      "Ruotian Peng",
      "Yuanyi Ren",
      "Shuaiqi Liu",
      "Xin Guo",
      "Fang Zhu",
      "Yangyi Huang",
      "Yue Wu",
      "Zheng Wang",
      "Yandong Wen",
      "Zhihang Fu"
    ],
    "abstract": "Recursive self-improvement (RSI) requires agents to diagnose system bottlenecks and coordinate improvements across training and inference. We refer to the agents' capability to jointly optimize training data, the trainer, and the inference harness as cross-component co-design. We introduce VibeTraining-Bench, a benchmark for evaluating this capability across tasks spanning terminal operation, software engineering, multi-turn tool use, and mathematical reasoning. Within each task, research agents start from an identical initial agent system under a fixed resource budget. Guided by validation feedback, they iteratively refine data, trainers, and inference harnesses, then select and submit a final agent system for evaluation on the test set. To prevent reward hacking, we enforce three safeguards: test data isolation, separate research and grading containers, and network restrictions for research agents. Our evaluation results show that frontier research agents substantially improve target agent systems. For example, on SWE-bench Verified, GPT-6-Astra raises the target agent system's performance from 32.9% to 53.7%, comparable to the human-developed instruct model's 55.4%. However, there is still room to improve their ability to co-design and iteratively refine data, trainer, and harness to achieve cumulative performance gains. We hope that VibeTraining-Bench will serve as a unified platform for advancing RSI, deepening our understanding of cross-component optimization for agent systems. Code and data are available at https://github.com/D2I-ai/VibeTraining-Bench.",
    "published": "2026-10-19T13:10:54Z",
    "updated": "2026-10-20T13:03:07Z",
    "categories": [
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.26342"
  },
  {
    "id": "2610.26340",
    "title": "A Generic On-Board AI Processing Chain for Earth Observation: From Application Development to Embedded Deployment and Mission-Level Orchestration",
    "authors": [
      "Michel-Fran{\\c c}ois Foulon",
      "Liz Ramos Medina",
      "Thomas Goudemant",
      "Clotilde Szywala",
      "Virgile Robles",
      "Cl{é}ment Petitjean",
      "Ad{è}le Hankache",
      "Omar Hlimi"
    ],
    "abstract": "Earth observation satellites acquire more data than they can downlink. Extracting information on board with artificial intelligence (AI) turns the satellite into a data-reduction stage that downlinks compact products, such as masks or detections, instead of full scenes; deploying it in a mission, however, involves the whole processing chain and not only the neural network. We present a generic on-board AI processing chain along three axes, with wildfire segmentation as the worked example among ship detection and cloud segmentation. (i) The AI model is tuned (spectral-band selection, input normalization), quantized to 8-bit integers (int8) and ported to an AMD Versal VCK190, with its excellent segmentation performance preserved on the board. (ii) A modular tiler-inference-mosaicer workflow, reused unchanged across applications, brings the tile-level model to scene level, turning a full acquisition into a scene-level mask or detection list. (iii) Each step is packaged as a unikernel and orchestrated on board by ORCHIDE, a cloud-native orchestrator. The chain is characterized end to end, from the standalone execution on the target to its execution under orchestration with parallel workflows on a representative test bench. Beyond AI inference on individual tiles, this approach aims at increasing the maturity of on-board AI deployment by addressing a complete processing chain, from the acquired scene to the mission-level execution.",
    "published": "2026-10-19T13:08:45Z",
    "updated": "2026-10-19T13:08:45Z",
    "categories": [
      "cs.AI",
      "cs.AR",
      "cs.DC"
    ],
    "url": "https://arxiv.org/abs/2610.26340"
  },
  {
    "id": "2610.25340",
    "title": "Edge Deployable Lightweight Framework for Real-Time Driver Safety System with Integrated Lane Departure and Traffic Sign Recognition",
    "authors": [
      "Hassaan Ali Qureshi",
      "Danish Hussain",
      "Ali Hassan",
      "Aon Safdar",
      "Anas Bin Aqeel",
      "Muhammad Rafiq",
      "Zohaib Riaz",
      "Farhan Hussain"
    ],
    "abstract": "Lane departure and traffic-sign negligence are leading contributors to road accidents, particularly in regions with non-standardized signage and limited annotated data. Existing Advanced Driver Assistance Systems (ADAS) solutions are often developed as disjointed submodules, are rarely validated for real-time operation, and struggle to balance accuracy with low-latency inference for embedded deployment. We address these gaps with a unified, edge-deployable ADAS framework that simultaneously performs lane-departure warning (LDW) and traffic-sign detection and recognition (TSD/TSR), and validate the proposed system on automotive-class devices. Our framework combines a lightweight, lane-segmentation-driven LDW, which includes a drivable-area fallback for degraded markings, with a two-stage TSD/TSR pipeline consisting of efficient sign localization followed by fine-grained classification, designed to preserve accuracy at embedded latency. To support region-specific deployment under data scarcity, we curate a 35-class local traffic-sign dataset and introduce a generalized augmentation and balancing profile, expanding the corpus from 359 images to 8,750 samples. On an NVIDIA Jetson Orin Nano, the integrated system sustains 15 FPS end to end (32 FPS for LDW and 18 FPS for TSD/TSR). The TSD/TSR branch achieves 97.4 mAP for detection and 95.6% validation accuracy (93.1% on a local real-world set) while maintaining an approximately 13.9 M parameter footprint. Relative to recent methods that target a single task or report results only on desktop-class GPUs, our approach delivers both LDW and TSD/TSR with real-time performance on edge hardware, providing a practical pathway to low-cost, field-ready ADAS in resource-constrained settings.",
    "published": "2026-10-18T15:34:08Z",
    "updated": "2026-10-18T15:34:08Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25340"
  },
  {
    "id": "2610.25333",
    "title": "CoRe-WM: Conditioned Response-State World Modeling for Longitudinal Treatment-Response Prediction in Breast DCE-MRI",
    "authors": [
      "Lin Zhao",
      "Bowen Chen",
      "Qiaohui Gao",
      "Shaowen Wan",
      "Xiang Li",
      "Wei Liu",
      "Tianming Liu"
    ],
    "abstract": "Pathologic complete response (pCR) after neoadjuvant chemotherapy is a key prognostic indicator in aggressive breast cancer, yet existing prediction approaches either rely on pretreatment imaging alone, missing the patient's evolving response, or optimize multi-visit classifiers under direct outcome supervision, coupling representation learning with the clinical endpoint. We formulate longitudinal pCR prediction as a world-modeling problem and propose Conditioned Response-state World Modeling (CoRe-WM), which learns a latent state-transition model that predicts the next imaging state from the observed sequence. The transition function is conditioned on patient clinical profile and assigned therapy through additive shift and feature-wise modulation, enabling patient- and treatment-specific dynamics. A Factorized Response State pathway further decouples treatment-response dynamics from imaging appearance by encoding the structural prior that response manifests primarily in lesion morphology. After pretraining, all parameters are frozen and a linear readout predicts pCR at each clinical decision point. We evaluate CoRe-WM on I-SPY2 under five-fold cross-validation and assess cross-cohort transfer on I-SPY1. CoRe-WM achieves the highest discrimination among all evaluated methods at every prospective decision point, and demonstrates robust cross-cohort transfer. Ablation studies identify patient-profile conditioning and the factorized response pathway as the principal contributors. These results establish world-model-based representation learning as a promising framework for outcome prediction in oncology and beyond.",
    "published": "2026-10-18T15:25:09Z",
    "updated": "2026-10-18T15:25:09Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25333"
  },
  {
    "id": "2610.25326",
    "title": "MPIG: Multi-angle Polarization Image Generation from a Single Polarization Observation",
    "authors": [
      "Jue Wang",
      "Ruilin Huang",
      "Liquan Shen",
      "Zhen Tian",
      "Xia Hua"
    ],
    "abstract": "Polarization imaging provides informative cues for material analysis, scene understanding, and visual perception. However, acquiring complete polarization observations typically requires specialized hardware and multi-angle measurements, thereby increasing system complexity and limiting practical deployment. In this work, we address the problem of predicting the missing $45^\\circ$, $90^\\circ$, and $135^\\circ$ polarization views from a single $0^\\circ$ observation by leveraging a learned scene prior. To this end, we propose MPIG (Multi-angle Polarization Image Generation), a Swin Transformer-based framework that couples cross-angle feature interaction with residual decoding to predict angle-dependent intensity variations while preserving shared scene structure. Specifically, measured Stokes differences and polarization-strength-aware supervision guide the recovery of polarization modulation, orientation, and magnitude, while low-rank factorization further reduces the decoding cost. We also construct HighPol, a large-scale real-world polarization dataset comprising 5,474 groups of high-resolution four-angle polarization images collected from diverse indoor and outdoor scenes. Experimental results demonstrate improved image and polarization accuracy, achieving 29.729 dB PSNR, 0.9505 SSIM, and $21.514^\\circ$ AoLP MAngE while requiring 85.86 M parameters and 1.126 T FLOPs. Furthermore, downstream validation on glass and semantic-segmentation tasks suggests that the generated polarization images can preserve task-relevant information, demonstrating the effectiveness of MPIG and the practical utility of predicted polarization observations for downstream vision applications.",
    "published": "2026-10-18T15:13:23Z",
    "updated": "2026-10-18T15:13:23Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25326"
  },
  {
    "id": "2610.25323",
    "title": "Where and Why Search-Augmented LLMs Fail When Reasoning over Rapidly Evolving Knowledge",
    "authors": [
      "Tianyi Hu",
      "Bhavyajeet Singh",
      "Niket Tandon",
      "Akhil Arora"
    ],
    "abstract": "As the world changes, new information is published while older records remain online. This complicates reasoning for large language models (LLMs), which must retrieve evidence and resolve conflicts to determine which information remains valid. Existing evaluations treat information seeking as a black box, revealing little about where and why LLMs fail. To address this gap, we introduce TREK, a suite of three components: TREKTRACE is a plug-and-play framework that attributes failures to specific stages of retrieval and reasoning. We apply it to TREKBENCH-WILD, a meta-benchmark of real-world questions that require complex reasoning over rapidly evolving knowledge. Surprisingly, the main bottleneck is post-retrieval reasoning rather than retrieval: frontier models are often misled by conflicting evidence even after retrieving all the information needed to answer. To study this bottleneck, we build TREKBENCH-CTRL, a controlled benchmark with distractors spanning temporality, relevance, and trustworthiness, and show that benchmarks dominated by outdated distractors substantially underestimate task difficulty. Together, TREK provides a testbed for diagnosing and improving reasoning over rapidly evolving knowledge.",
    "published": "2026-10-18T15:09:08Z",
    "updated": "2026-10-18T15:09:08Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.IR",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25323"
  },
  {
    "id": "2610.25318",
    "title": "AdaFedXplain: Adaptive Federated Learning with Explainable AI for Ransomware Detection",
    "authors": [
      "Md. Emran Biswas",
      "Md. Delowar Hossain",
      "Mst. Tanbin Yasmin Tanny",
      "Muhammad Aminur Rahaman",
      "Md Al Amin",
      "Tangina Sultana"
    ],
    "abstract": "Attacks using ransomware have developed into complex multiphase campaigns that target vital infrastructure, resulting in annual damages of billions of dollars. Conventional detection techniques are ineffective against zero-day variations, and privacy issues are raised by centralized machine learning algorithms. Federated learning allows for cooperative model training without data sharing, however current FL approaches suffer from explainability issues, high communication cost, and non-IID data heterogeneity. In this study, we present AdaFedXplain, an explainable AI-based adaptive federated learning system for ransomware detection. Our approach includes progressive XGBoost complexity to avoid overfitting, a decaying learning rate schedule for stable convergence, and dynamic client grading based on ransomware prevalence and data sufficiency. Using 62,485 real-world ransomware samples from four OS-based non-IID clients, we compare AdaFedXplain against FedAvg, FedProx, and SCAFFOLD. According to experimental data, AdaFedXplain outperforms all baselines with 99.59% detection accuracy and 99.64% F1-score while cutting energy usage by 75%, latency by 65%, and communication overhead by 75%. The ablation investigation demonstrates that every element enhances performance. Security analysts can use SHAP explainability to identify important PE header characteristics that influence detection decisions. Our system provides a collaborative ransomware detection solution that is efficient and interpretable, while reducing privacy risks through federated learnings data-local training paradigm.",
    "published": "2026-10-18T14:55:23Z",
    "updated": "2026-10-18T14:55:23Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25318"
  },
  {
    "id": "2610.25309",
    "title": "SENRI: Understanding the Space-Event Nexus in Real-Life Videos",
    "authors": [
      "Kehan Lan",
      "Kaining Ying",
      "Henghui Ding",
      "Kaipeng Zhang"
    ],
    "abstract": "Human memories are organized in a way that connects events with their corresponding spatial contexts. An AI assistant should also be able to memorize and recall the nexus of events and spaces. Thus we introduce SENRI, a task that studies this space--event connection in long, continuous real-life egocentric video. It contains six task types in two directions: Event$\\rightarrow$Space, which recovers spatial knowledge from event cues, and Space$\\rightarrow$Event, which retrieves events from regions and trajectories. To evaluate this, we build SENRI-Bench, containing 500 manually annotated multiple-choice questions over 10 uninterrupted self-recorded videos with around 25.3 hours of content. Also, we evaluate three typical long video understanding paradigms: direct perception, evidence seeking, and persistent memory. The task remains challenging across all three paradigms, highlighting substantial room for improvement. Then we show two representative failure modes of existing memory methods and address these evidence gaps with SENRI-Agent, a controller that uses Target-Guided Visual Check (TGVC) to propose local visual check tasks for parallel verifiers and integrate the reports into a working memory to help with reasoning. Built upon existing memory systems, SENRI-Agent improves the performance of existing baselines without modifying their stored memories. We hope SENRI will provide valuable insights into how real-life egocentric understanding should be evaluated, reveal the gaps in existing approaches, and offer a possible direction for improvement.",
    "published": "2026-10-18T14:41:41Z",
    "updated": "2026-10-18T14:41:41Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25309"
  },
  {
    "id": "2610.25301",
    "title": "Shared-Private Cross-Modal Discrepancy Learning for Imbalanced Multi-Source Audio-Visual Deepfake Detection",
    "authors": [
      "Qiwu Wen",
      "Jahangir Alam"
    ],
    "abstract": "Audio-visual deepfake detectors are often trained under a single dataset or manipulation regime, but multi-source training collections may contain heterogeneous attacks and uneven source distributions. Training separate detectors for each source is inefficient, while a single shared detector may be biased toward dominant source-specific patterns. We study known-source imbalanced multi-source audio-visual deepfake detection using FakeAVCeleb and LAV-DF, where source identity is supplied during training and inference. To address this setting, we build on the Multi-Scale Cross-Modal Transformer Encoder (MSCT) and propose Pre-MSCT Shared-Private Feature Fusion. Our method routes \\texttt{[CLS]}-augmented audio and visual tokens into a shared stream and source-specific private streams before the first MSCT block, while retaining its internal multi-scale self-attention (MSSA), differential cross-modal attention (DCA), and feed-forward operations. The shared stream models cross-source reusable evidence, while the private streams retain source-dependent residual variations. A domain-aware gated residual fusion module injects selected private evidence into the shared representation for the main fused prediction. Experiments under two controlled source-composition protocols show improved macro and worst-source AUC compared with the MRDF and MSCT baselines. These results support shared-private cross-modal discrepancy learning in the evaluated two-source setting with known source identity.",
    "published": "2026-10-18T14:34:38Z",
    "updated": "2026-10-18T14:34:38Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.25301"
  },
  {
    "id": "2610.25300",
    "title": "Learning When to Abort in Transformer Planning: A Mechanistic Study",
    "authors": [
      "Shi Feng",
      "Qimin Zhong",
      "Siwei Wang",
      "Yifei Shen",
      "Shang-Hua Teng",
      "Hao Liao",
      "Wei Chen"
    ],
    "abstract": "Planning does not by itself imply the ability to recognise errors, but recognising errors can improve planning capacity. In this paper, we study this phenomenon in Transformer planning. To analyze the inner mechanism, we follow the approach of Wang et al. (2024) and abstract planning as path-finding in graphs. In this setting, we train the model to detect the error of invalid transitions, i.e., after the model generates a next node that is not adjacent with the current node, the model should then generate a special abort token x. For expressiveness, we construct a Transformer with feed-forward width $O(|V|)$ for any fixed graph with node set $V$. It can detect all possible invalid transitions, and select a valid next node if the prefix is valid. We then propose a worst-case lower bound on feed-forward width, which makes the detector's linear width near-optimal up to logarithmic factors. In trained models, we demonstrate that invalid-transition detection increases previous-node attention, and most of the valid--invalid separation locates in the feed-forward network's output. This accords with our theoretical insights. Finally, we use this error detection to improve the model's performance: at inference, generating the abort token x will directly cause an external procedure to discard the attempt and restart from the original prompt. Experiments show that error detection combined with retry improves model's planning reliability on graphs, Countdown, and mazes.",
    "published": "2026-10-18T14:33:08Z",
    "updated": "2026-10-18T14:33:08Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.25300"
  },
  {
    "id": "2610.25298",
    "title": "Aligning Language Models with Indigenous Community Cosmovision through Constitutional AI",
    "authors": [
      "Silvia Fernández-Sabido",
      "Jorge Reyes-Magaña",
      "Jesús Adrián Chay Tun",
      "Jean Carlos Buenfil",
      "Victor González Nahuat",
      "Francisco Morales"
    ],
    "abstract": "Large language models (LLMs) are predominantly trained on corpora that reflect Western, anglophone worldviews. This asymmetry is not neutral: when a model answers questions about territory, community authority, or the relationship with nature, it does so from assumptions that may be alien to the communities using the system. This paper presents a system for aligning language models with the ethical principles of Indigenous communities in Latin America. Drawing on interviews with five Indigenous leaders and defenders, we built an operational cultural constitution grounded in an Indigenous cosmovision, with 12 principles. On this basis, we implemented a Constitutional AI (CAI) pipeline in two phases: supervised fine-tuning (SFT) and direct preference optimization (DPO). The base models were Qwen2.5-7B-Instruct and Qwen2.5-1.5B-Instruct. With only 24 preference pairs, improvements were modest but detectable in intergenerational transmission, linguistic caution, and consultation and consent. Qualitative analysis reveals that the SFT phase was responsible for the primary shift in alignment, while DPO refined specific categories. The system was deployed in a conversational interface with retrieval-augmented generation (RAG) that allows communities to feed the knowledge base, turning alignment into a participatory cycle. We argue the architecture is functional and will scale qualitatively once the corpus is expanded and computing constraints are resolved. The work constitutes a first iteration of an epistemic justice mechanism for value alignment in the Global South.",
    "published": "2026-10-18T14:31:59Z",
    "updated": "2026-10-18T14:31:59Z",
    "categories": [
      "cs.AI",
      "cs.CL",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.25298"
  },
  {
    "id": "2610.25296",
    "title": "World Model Interpretability: From Decoding Representations to Understanding Latent Worlds",
    "authors": [
      "Jize Wang",
      "Yongcheng Jing",
      "Xinyi Le",
      "Cailian Chen",
      "Xinping Guan",
      "Dacheng Tao"
    ],
    "abstract": "Emerging Joint-Embedding Predictive Architectures (JEPAs) are moving beyond representation learning towards latent world models that support prediction, planning, and control. Yet their latent worlds naturally lack a human-interpretable interface. In this Perspective, we argue that as JEPA latents become internal states for prediction and action, interpretability must move beyond what they encode to how latent variables interact, evolve, and causally drive prediction. To this end, we envision a four-stage research agenda, involving Ground, Structure, Verify, and Act, to guide this shift toward actionable latent-world understanding. Within our framework, existing JEPA interpretability efforts provide early evidence for Ground, while systematic analysis of latent structure, causal verification, and intervention remains largely unexplored. Overall, this Perspective aims to call for a broader latent-world interpretability agenda that shifts attention from decoding representations toward understanding, validating, and acting on latent worlds.",
    "published": "2026-10-18T14:29:13Z",
    "updated": "2026-10-18T14:29:13Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.25296"
  },
  {
    "id": "2610.25290",
    "title": "MotionShift: Environment-Compatible Motion Transfer via Planner-Evaluator Synergistic Adaptation",
    "authors": [
      "Yanchen Liu",
      "Junyao Gao",
      "Yanan Sun",
      "Wensheng Chen",
      "Guangming Lu",
      "Wenjie Pei"
    ],
    "abstract": "Existing motion transfer methods excel at exact, rigid motion replication from reference videos to target scenes, whereas they often fail to account for the compatibility between the transferred motion and the target scene environment in accordance with physical laws. In this work, we propose MotionShift, a novel motion transfer framework that achieves high-fidelity motion transfer while ensuring physical compatibility with the target scene. In particular, we design a planner--evaluator iterative motion adaptation mechanism, in which a Large Language Model (LLM) acts as the planner to generate motion trajectories by leveraging its strong semantic reasoning capabilities, while a Vision-Language Model (VLM) serves as the evaluator to rectify the motion based on its superior visual perception and scene understanding. Through this planner--evaluator synergistic reasoning process, the motion is adapted to the target scene in a training-free manner. The adapted motion is then used as a generative condition for an image-to-video (I2V) model to render videos in the target scene. Extensive experiments demonstrate that MotionShift achieves high-fidelity and physically compatible motion transfer across diverse and complex scenes. Moreover, we show that MotionShift can be readily integrated into existing trajectory-conditioned I2V models, endowing them with realistic motion transfer capabilities.",
    "published": "2026-10-18T14:11:39Z",
    "updated": "2026-10-18T14:11:39Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.25290"
  },
  {
    "id": "2610.25289",
    "title": "The Explainability Illusion: Must ViTs Exhibit Patch-Decoding Interpretability?",
    "authors": [
      "Ronen Schaffer",
      "Hila Manor",
      "Tomer Michaeli"
    ],
    "abstract": "Transformers are widely assumed to exhibit token-decoding explainability. In particular, in vision transformer (ViT) classifiers, decoding individual patch tokens has become a common diagnostic tool due to its tendency to yield human-interpretable outputs. In light of the increasing popularity of this approach, an important question is whether token-decoding explainability is an inherent property of transformers that should be expected to hold across architectures, scales, and training objectives, or merely an artifact of some implicit bias. In this paper we systematically study token-decoding explainability across diverse ViT settings, spanning architectures, scales, and training objectives, using both controlled experiments and real-world models. We find that while some models indeed exhibit aligned and interpretable token decodings, others exhibit either inverted explainability maps or a complete lack of correlation with the image semantics. As we show, these tendencies toward different explainability behaviors are not intrinsic to the architecture and can vary arbitrarily with changes in the optimization landscape. We provide theoretical support for these observations by demonstrating a setting where a single fixed toy transformer architecture can provably implement the optimal classification rule in multiple ways, which differ in their patch-decoding explainability patterns. Our results show that token-decoding explainability is not an inherent property of trained transformers, but rather an outcome contingent on the problem setting and thus should not be a-priori assumed to hold. Code can be found in https://ronensc.github.io/Explainability-Illusion/ .",
    "published": "2026-10-18T14:10:50Z",
    "updated": "2026-10-18T14:10:50Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.25289"
  },
  {
    "id": "2610.24414",
    "title": "S3D-Mosaic: Subgradient-Guided Cross-Band Structure Transfer for Spectral Demosaicing",
    "authors": [
      "Weiqiang Zhao",
      "Xian Li",
      "Yuzhe Gui",
      "Tianzhu Liu",
      "Yanfeng Gu"
    ],
    "abstract": "Multispectral filter array (MSFA) imaging enables snapshot spectral acquisition, but its per-band sparse sampling causes severe spatial aliasing. Although missing spatial structures can be inferred across bands, wavelength-dependent contrast variations make direct cross-band transfer unreliable. Existing model-based methods lack explicit magnitude-invariant mechanisms, and learning-based methods require layout-specific training or per-image tuning, limiting generalization. To address these issues, we propose S3D-Mosaic, a model-based spectral demosaicing method built upon a subgradient-guided cross-band structure transfer framework. We first establish a subgradient-guided regularization framework with a generalized cosine-similarity interpretation, providing a convex mechanism for magnitude-invariant information transfer. Then we design a compact Directional Sparse Equivariant Difference Convolution (DSE-DConv) for band-level extraction of orientation-selective, high-frequency structure features at low computational cost. Instantiating the framework with DSE-DConv on spectrally adjacent bands yields a cross-band self-structure similarity regularizer for spectral demosaicing, which we optimize via a dual-scan ADMM algorithm that decouples the bidirectional dependency while propagating magnitude-robust structural information across bands. With DSE-DConv's two parameters trained once via self-supervision, S3D-Mosaic outperforms state-of-the-art unsupervised methods on CAVE and NTIRE 2022, and generalizes robustly to varying MSFA layouts, pan-mosaic fusion, and real-world UAV data with fixed reconstruction hyperparameters. The source code is available at \\url{https://github.com/bestwishes43/S3D-Mosaic}.",
    "published": "2026-10-17T03:29:24Z",
    "updated": "2026-10-17T03:29:24Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24414"
  },
  {
    "id": "2610.24409",
    "title": "Long Listening Thoughts: Eliciting Open Auditory Reasoning with Deliberative Perception and Cognitive Refinement",
    "authors": [
      "Jaeyeon Kim",
      "Chao-Han Huck Yang",
      "Luoyi Zhang",
      "Chan-Jan Hsu",
      "Fernando Ruiloba Portilla",
      "Jinchuan Tian",
      "Shinji Watanabe",
      "Carlos Busso"
    ],
    "abstract": "We introduce Long Listening Thoughts (LLT), a framework for constructing post-training datasets that improves audio reasoning by pairing deliberate perceptual grounding with explicit cognitive behaviors. On audio understanding and reasoning benchmarks, large audio-language models (LALMs) are limited primarily by perceptual errors, yet existing post-training datasets rely on audio descriptions of limited diversity. Through a four-stage pipeline, LLT (1) builds multi-aspect dense audio descriptions spanning semantic, acoustic, and temporal information, (2) generates more challenging questions, (3) synthesizes incorrect reasoning traces, and (4) extends short reasoning traces into long ones via a thought-continuation strategy that elicits cognitive behaviors such as verification and backtracking. Using LLT, we synthesize 1.6M reasoning traces and train Qwen2.5-Omni-7B with a two-stage pipeline of supervised fine-tuning (SFT) followed by direct preference optimization (DPO). This improves accuracy on MMAU Test-mini (71.5 to 78.2), MMAR (56.7 to 63.7), and MMSU (60.6 to 66.0).",
    "published": "2026-10-17T03:20:36Z",
    "updated": "2026-10-17T03:20:36Z",
    "categories": [
      "cs.SD",
      "cs.AI",
      "cs.CL",
      "eess.AS"
    ],
    "url": "https://arxiv.org/abs/2610.24409"
  },
  {
    "id": "2610.24405",
    "title": "ZeroDSS: Semantic Segmentation from Class Names Alone",
    "authors": [
      "Tian Ming",
      "Marzi Heidari",
      "Yuhong Guo"
    ],
    "abstract": "Semantic segmentation depends heavily on real images with pixel-level annotations, making dense supervision a major obstacle to deployment in new domains. We study task-specific data-free semantic segmentation, where training uses generic pretrained generative priors but has access to no target-domain images, masks, or captions--only a predefined category set. We introduce Zero-Data Semantic Segmentation (ZeroDSS), a feedback-driven approach that treats synthetic supervision as an adaptively controllable training distribution rather than a direct surrogate for real data. ZeroDSS constructs a semantically structured prompt distribution through LLM-guided compositional generation and adaptive class rebalancing, then converts the prompts into image-mask pairs using diffusion attention. Its feedback-driven distribution refinement consists of a two-phase closed-loop training procedure with a single loop-back step. In Phase I, a segmenter is trained using confidence-weighted supervision and dual-scale consistency. In Phase II, model feedback is used to adaptively target underperforming categories and refine diffusion-derived masks using model predictions. After this refined initial training, a teacher-student framework is utilized in the final phase to iteratively improve the fused supervision and segmenter through exponential moving average (EMA) updates. Using synthetic training data only, ZeroDSS achieves 35.0% mIoU on MS COCO with DeepLabV3, and 66.3% and 63.5% mIoU on PASCAL VOC with DeepLabV3 and Mask2Former, respectively. These results show that explicitly constructing and iteratively refining the synthetic supervision distribution can substantially reduce the synthetic-to-real gap in dense prediction.",
    "published": "2026-10-17T03:14:33Z",
    "updated": "2026-10-17T03:14:33Z",
    "categories": [
      "cs.CV",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24405"
  },
  {
    "id": "2610.24400",
    "title": "Spatons: Spatiotonally Localized Building Blocks for Efficient XR Predistortion",
    "authors": [
      "Mohammadjavad Maheronnaghsh",
      "Sushant Kondguli",
      "Steve Mann",
      "Andreas Moshovos"
    ],
    "abstract": "We present Spatons, a family of compositional, spatially localized neural operators for computationally efficient XR (extended reality) predistortion and distortion compensation. XR displays (AR, VR, and MR) suffer from spatial (e.g., geometric) and tonal (e.g., colour) distortions. Frames can be pre-distorted so that the projected image looks as intended. Distortions vary with manufacturing tolerances and projection systems, motivating programmable compensation. Untethered, battery-operated XR systems also require low energy and latency. A Spaton is a hybrid patch-to-pixel block combining tiny Multi-Layer Perceptrons (MLPs) with fixed-function interpolation. Using Spatons, we build programmable, computationally efficient pipelines for varied distortion scenarios. On the full spatiotonal Scenario 5, Sequential-5' matches CompenNet++ in SSIM (0.944 vs. 0.944) and closely matches its PSNR (27.5 vs. 27.7 dB), with substantially lower complexity. We demonstrate a flexible Spaton solution with 6 times fewer FLOPs and 106 times fewer parameters than CompenNet++, and 4-10 times fewer memory transfers than UNet++. We characterize software implementations and analytical hardware estimates, including optimizations across target XR platforms. The distortions considered are drawn mostly from see-through, near-eye displays, where the spatial light path governs local intensity and spectral response. This early systems-level exploration uses closed-form differentiable distortions and one real projector-camera capture set for training and evaluation, rather than through-the-optics measurements. Testing on a wider range of real XR devices remains future work. Chromatic dispersion (color fringes) remains the main artifact where Spatons trail monolithic baselines.",
    "published": "2026-10-17T03:11:05Z",
    "updated": "2026-10-17T03:11:05Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24400"
  },
  {
    "id": "2610.24395",
    "title": "MSCR: Jointly Balancing Utilization Across Modalities and Discovering Synergistic Information",
    "authors": [
      "Xinyu Chen",
      "Liangjian Wen",
      "Jiang Duan",
      "Dongkai Wang",
      "Yong Dai",
      "Jiayu Bai",
      "Jianzhuang Liu",
      "Zhen Tian",
      "Guoping Qiu",
      "Zhao Kan"
    ],
    "abstract": "In multimodal learning, modality imbalance often lets one modality dominate optimization and keeps the model from fully exploiting cross-modal interactions. Balance-oriented methods such as the Multimodal Competition Regularizer (MCR) perform well by alleviating this imbalance during training. These dynamic balancing methods, however, mainly adjust modality contributions and do not consider how imbalance affects the formation of synergistic information during fusion. Synergy is a major source of multimodal advantage, because it is predictive gain that cannot be recovered from unimodal evidence alone. We propose the Multimodal Synergistic Competition Regularizer (MSCR), a fusion method that jointly promotes balanced modality utilization and the discovery of synergistic information. MSCR has two complementary objectives. An anti-dominance objective suppresses excessive unimodal influence and leaves room for synergistic information, and a synergy objective encourages the fused predictor to outperform a non-synergistic unimodal reference. An adaptive gate further concentrates the regularization on samples that need stronger collaborative modeling. Experiments on five benchmarks show that MSCR consistently improves performance over MCR and strengthens synergistic capability. It raises conditional recovery, the accuracy of the fused prediction on samples that the unimodal predictors misclassify, as well as the share of the model's output that InterSHAP attributes to cross-modal interactions. Its gain in conditional recovery persists when the fusion module is Transformer-based. Code is available at https://github.com/chenxinyu991-collab/MSCR.",
    "published": "2026-10-17T02:54:30Z",
    "updated": "2026-10-17T02:54:30Z",
    "categories": [
      "cs.AI",
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24395"
  },
  {
    "id": "2610.24390",
    "title": "Trust the Edge, Doubt the Arrow: Auditing Validation Signals for Text-Mined Clinical Causal Knowledge Graphs",
    "authors": [
      "Su Lan",
      "Shicheng Zhou",
      "Yiqi Wang",
      "Yanming Zhu",
      "Xuefei Yin",
      "Alan Wee-Chung Liew"
    ],
    "abstract": "Clinical causal retrieval-augmented generation systems increasingly use knowledge graphs (KGs) mined from notes, yet extracted assertions remain candidates that require audit for patient-level EHR support and direction. We construct a directed candidate graph from 328,839 MIMIC-IV discharge summaries using LLM extraction and UMLS normalization, and evaluate three signals against SemMedDB: within-admission co-occurrence lift, cross-admission diagnosis-coding temporal precedence, and literature corroboration. Lift filters unsupported co-mentions and provides useful EHR support, but not causal proof. Coding order is a weak direction signal: among the 686 candidates where it commits, it reaches 54.2% agreement with SemMedDB, below the extractor's 69.4% on the same subset. Literature corroboration supplies independent direction evidence but covers only 30.4% of candidate relations. A MIMIC-III replication yields the same pattern: extractor direction remains stable (70.5%), whereas coding-order direction is near chance (50.9%). Thus, text-mined clinical causal candidate KGs are best treated as EHR-supported but direction-uncertain. In a leakage-controlled causal QA benchmark, lift-only retrieval achieves 35.7% accuracy; conservative causal demotion achieves 37.2% while reducing evidence-unsupported answers from 17.3% to 6.1% at fixed retrieval recall. We release code, aggregate summaries, and scripts to regenerate restricted outputs.",
    "published": "2026-10-17T02:46:57Z",
    "updated": "2026-10-17T02:46:57Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24390"
  },
  {
    "id": "2610.24389",
    "title": "From Neglect to Resignation: Understanding the Evolution of Mobile Privacy",
    "authors": [
      "Yibo Meng",
      "Ziqi Liu",
      "Lionel Z. Wang",
      "Shuning Zhang",
      "Xiaolan Ding"
    ],
    "abstract": "This decade-long longitudinal qualitative study follows 31 smartphone users in China across four interview waves (2014-2023) to examine how mobile privacy understanding evolves alongside shifting computing infrastructures. Findings reveal three stages shaped by distinct interactional mechanisms: early functional acceptance of permission-based data access, growing vigilance triggered by behavioral tracking feedback loops, and eventual resignation as AI-driven inference made ecosystem-level profiling feel inescapable. Rather than a stable attitude, digital resignation emerges through cumulative infrastructure exposure, as each new system layer retroactively reinterpreted earlier permissions and exhausted users' capacity for self-management. The study challenges permission-centric design assumptions and proposes inference visibility, context isolation, and automated privacy agency as system-level responses.",
    "published": "2026-10-17T02:44:39Z",
    "updated": "2026-10-17T02:44:39Z",
    "categories": [
      "cs.HC"
    ],
    "url": "https://arxiv.org/abs/2610.24389"
  },
  {
    "id": "2610.24385",
    "title": "Bridging Exploration and Persona: Information-Directed Dueling for Test-Time Agent Personalization",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Xiangyi Wang",
      "Hengquan Huang",
      "Shuang Qiu",
      "Min Zhang",
      "Zhongxiang Dai"
    ],
    "abstract": "Effective test-time personalization requires LLM agents to adapt to query-dependent user preferences from lightweight interaction. We study persona selection with binary comparisons between candidate responses as the online signal. We present ID-TAP, a scalable, IDS-inspired neural dueling-bandit framework for large discrete persona spaces. ID-TAP combines a query-conditioned neural utility model with a lightweight Bradley-Terry explorer, and transfers comparison evidence across related queries through similarity-weighted warm starts. The neural model shares statistical strength across queries while preserving query-specific scores, and efficient BT updates score hypothetical challengers. Across seven user-conditioned generation benchmarks under reference- and model-based preference simulators, ID-TAP achieves the strongest aggregate performance among the evaluated baselines within a fixed ten-round comparison budget. These results support information-directed challenger selection as an effective design for test-time persona adaptation.",
    "published": "2026-10-17T02:40:47Z",
    "updated": "2026-10-17T02:40:47Z",
    "categories": [
      "cs.AI",
      "cs.CY"
    ],
    "url": "https://arxiv.org/abs/2610.24385"
  },
  {
    "id": "2610.24383",
    "title": "IF-MAP: Influence-Function-Inspired Agent Prioritization in Multi-Agent Systems",
    "authors": [
      "Jie Mao",
      "Pingchen Lu",
      "Zikun Qu",
      "Jiahang Sun",
      "Xiangyi Wang",
      "Zhiwei Shang",
      "Zhiyong Wang",
      "Guojun Xiong",
      "Zhongxiang Dai"
    ],
    "abstract": "Improving every agent in an LLM-based multi-agent system can be prohibitively costly, making it important to identify which agent should be prioritized to achieve the greatest system-level gain with limited resources. Failure attribution can inform this decision, but an agent's responsibility for failures does not directly reveal the system-level gains achievable by improving it. We therefore introduce IF-MAP, an influence-function-inspired method for identifying agents with high potential for system-level improvement. For each agent, IF-MAP measures end-to-end loss changes under controlled semantic prompt perturbations, fits a regularized local response model in a low-dimensional prompt-embedding subspace, and uses the estimated response norm as a priority score. This black-box procedure requires no access to model parameters or gradients and produces agent priorities that can guide subsequent improvement effort. We evaluate IF-MAP across six multi-agent workflows spanning code generation, question answering, and mathematical reasoning, using the same priorities for prompt optimization and model upgrades. Optimizing the selected agents' prompts achieves a macro-average gain of 3.81 percentage points, compared with 1.85 for uniform agent selection. Across five target models, upgrading the selected agents yields macro-average gains of 7.62-16.42 percentage points, compared with 3.81-8.62 for uniform agent selection. Despite its probing overhead, IF-MAP reduces Qwen3-8B and DeepSeek-V3.2 token use by 74.2% and 35.2%, respectively, relative to optimizing every agent, and reduces target-model tokens by 63.6-64.9% relative to upgrading every agent. These results support the use of IF-MAP to identify promising agents and direct improvement effort toward greater end-to-end performance gains.",
    "published": "2026-10-17T02:36:35Z",
    "updated": "2026-10-17T02:36:35Z",
    "categories": [
      "cs.AI",
      "cs.MA"
    ],
    "url": "https://arxiv.org/abs/2610.24383"
  },
  {
    "id": "2610.24382",
    "title": "Is This Your Agent? Identity Watermarking for Agent Systems in Dynamic Environments",
    "authors": [
      "Yuwei Zhong",
      "Yu Cheng",
      "Jiuan Zhou",
      "Weizhi Liu",
      "Yi Xie",
      "Yongkang Hu",
      "Yuan Xie",
      "Zhaoxia Yin"
    ],
    "abstract": "Agent systems deployed in dynamic environments continuously update their memories, skills, and runtime configurations, leading to evolving trajectories and challenges for persistent identity authentication. Existing text and agent watermarking methods struggle to achieve stable watermark embedding under dynamic environments, while embedded watermarks may become difficult to recover due to environmental changes. This paper proposes DASMark, an identity watermarking framework for dynamic agent systems. DASMark introduces Action-Preserving Embedding (APE), which learns semantically similar but distinguishable decision-expression channels from diverse interaction trajectories to enable stable watermark embedding in dynamic systems. It further introduces Shift-Robust Recovery (SRR) to mitigate context-induced shifts and improve watermark recovery stability under dynamic environments. In dynamic settings, DASMark achieves 98.5% bit-decoding accuracy and maintains 95.2% accuracy under attack scenarios, while preserving task utility comparable to unwatermarked agents.",
    "published": "2026-10-17T02:27:55Z",
    "updated": "2026-10-17T02:27:55Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24382"
  },
  {
    "id": "2610.24381",
    "title": "Learning from the Right Regions: Class-Conditioned Explanation Guidance for Medical Imaging",
    "authors": [
      "Zubair Faruqui",
      "Rahul Dubey"
    ],
    "abstract": "Deep neural networks can achieve strong predictive performance in medical imaging while relying on regions unrelated to the predicted finding. Explanation-guided learning can address this problem, but multi-label classification introduces a key challenge: multiple abnormalities may coexist in an image, requiring each prediction to align with its corresponding spatial evidence. We propose a class-conditioned explanation-guided learning framework that constructs a separate explanation for each positive class and penalizes evidence outside its class-specific annotated regions. We instantiate the framework using Gradient-weighted Class Activation Mapping (Grad-CAM) and evaluate it on 14 abnormalities using EfficientNet-B1, ViT-B/16, ViT-B/32, and Swin-B. Explanation guidance substantially improves annotation alignment across all architectures: All-Saliency Precision increases from 0.140 to 0.625, 0.052 to 0.551, 0.060 to 0.403, and 0.095 to 0.570, respectively. These improvements are accompanied by smaller, architecture-dependent changes in classification performance. Our results show that class-conditioned explanation guidance can substantially improve where multi-label classifiers concentrate their explanatory evidence while largely preserving predictive performance.",
    "published": "2026-10-17T02:27:03Z",
    "updated": "2026-10-17T02:27:03Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.24381"
  },
  {
    "id": "2610.24380",
    "title": "Train Locally, Learn Together: Distributed Multi-Agent Training via ADMM",
    "authors": [
      "Yiwei Chen",
      "Changsheng Wang",
      "Yicheng Lang",
      "Qing Qu",
      "Alfred O. Hero",
      "Sijia Liu"
    ],
    "abstract": "Multi-agent systems (MAS) can outperform individual language-model agents by combining specialized roles, diverse reasoning processes, and collaborative decision-making. However, collaborative MAS training is typically centralized, requiring a common trainer to aggregate role-local trajectories and learning signals and maintain model and optimization states. This motivates a distributed multi-agent learning paradigm in which agents improve system-level capabilities through role-local learning and decentralized communication, paving the way toward scalable, resilient, and self-organizing MAS. To this end, we introduce, to the best of our knowledge, the first optimization-grounded framework for distributed MAS training based on consensus alternating direction method of multipliers (ADMM). We formulate collaborative MAS learning as a consensus-constrained finite-sum optimization problem, naturally lending itself to distributed optimization via ADMM. The proposed approach alternates role-local learning with inter-agent consensus using distributed communication protocols such as ring all-reduce, enabling joint optimization while keeping each agent's data and training state local. We evaluate our framework on distributed safety alignment and general reasoning tasks. Under compromised-agent settings, ADMM can reduce HarmBench attack success rate (ASR) by up to 26.4%, while achieving reasoning gains comparable to centralized training. These results show that distributed MAS training retains the benefits of centralized joint optimization without requiring a centralized trainer.",
    "published": "2026-10-17T02:26:46Z",
    "updated": "2026-10-17T02:26:46Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.24380"
  },
  {
    "id": "2610.23663",
    "title": "PCDFusion: Proposal-Context-Detail Bayesian Rendering for Infrared-Visible Image Fusion",
    "authors": [
      "Rui Liu",
      "Lin Gu",
      "Hesong Li",
      "Ying Fu"
    ],
    "abstract": "Infrared-visible image fusion (IVIF) aims to combine visible and thermal infrared observations for human perception and downstream vision tasks. Visible and thermal infrared observations are physically complementary but unreliable in different ways. Existing deep IVIF methods mainly improve feature interaction and reconstruction, but often lack an explicit local rule for deciding when visible appearance should dominate and when thermal responses should contribute. To address this issue, we reformulate IVIF as local Bayesian posterior rendering, where fusion is controlled by posterior action weights rather than direct modality mixing. In this paper, we propose Proposal-Context-Detail Fusion (PCDFusion), a visible-anchored framework that implements this formulation through three rendering stages. PCDFusion preserves potentially useful thermal responses, updates exposure-degraded visible regions, and renders reliable band-limited infrared structures into the final luminance. Extensive experiments on public IVIF benchmarks show that PCDFusion improves fusion quality, target recovery, and downstream detection and segmentation performance under challenging illumination. The code is available at https://github.com/BIT-RuiLiu/PCDFusion.git.",
    "published": "2026-10-16T15:56:59Z",
    "updated": "2026-10-16T15:56:59Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23663"
  },
  {
    "id": "2610.23661",
    "title": "An Efficient Approach to Beetle Damage Detection of Banana Using Deep Learning",
    "authors": [
      "Md. Mehedi Hasan Naeem",
      "Ishtiyak Ahmmad Araf",
      "Md. Arefin Haque Mahir",
      "Tushar Kanti Saha"
    ],
    "abstract": "Visible surface damage of banana fruits by Basilepta subcostata (the banana fruit scarring beetle) can reduce their market value. Here, manual inspection of Banana fruits is subjective and difficult to scale. This study presents a lightweight framework based on YOLOv8n deep learning model for locating individual bananas and classifying their visible surface condition as healthy or unhealthy. The term beetle damage in the paper title is used operationally for the locally observed scar-like surface condition; the model does not identify a specific beetle species or biological cause. A custom dataset of 2,473 images containing 5,827 annotated banana instances was prepared from local-market imagery in Bangladesh. The reported experiment used an 80/20 protocol with 1,982 training images and 491 test images. A pretrained YOLOv8n model was trained at 640x640 resolution for 50 epochs with a batch size of 4. On the test partition, it achieved 81.36% precision, 74.30% recall, 77.67% F1-score, 87.04% mAP@0.50 and 59.33% mAP@0.50:0.95. A YOLOv8s comparison gave slightly lower F1 and mAP while using a substantially larger checkpoint. The YOLOv8n checkpoint occupied 5.96 MB and required 6.54 ms/image for inference on an NVIDIA Tesla T4. The results support YOLOv8n as a compact baseline for instance-level banana surface inspection within the studied acquisition conditions.",
    "published": "2026-10-16T15:55:23Z",
    "updated": "2026-10-16T15:55:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23661"
  },
  {
    "id": "2610.23659",
    "title": "FlexPart: Text-Controlled Semantics-Aware 3D Part Segmentation at Flexible Granularity",
    "authors": [
      "Yiqun Zhao",
      "Jiachen Xu",
      "Yihao Zhi",
      "Yunfei Zhao",
      "Zibo Zhao",
      "Xintong Han",
      "Chunchao Guo",
      "Shenghua Gao"
    ],
    "abstract": "A 3D asset admits multiple valid part decompositions, while semantics-aware segmentation should reflect both the desired granularity and the parts a user wants to extract. Ideally, a practical segmentation model should strive for a simple principle: what you ask for is what you get. However, realizing this goal is hindered by two core obstacles: the lack of multi-granularity training data and the absence of a holistic control mechanism. We propose FLEXPART, a unified framework for text-controlled 3D mesh segmentation. To establish flexible control, we introduce a holistic control prompt comprising semantic part names with location and shape clauses. To support this mechanism, we utilize an automated Vision-Language Model (VLM) pipeline to construct a large-scale dataset of multi-granularity partitions and their corresponding prompts. Driven by this data, FLEXPART generates a view-independent part-identity field in native 3D space, directly assigning discrete part IDs to mesh faces. To compel the model to respect semantic conditions rather than rely on geometric priors, we train the model using randomized background dropping. Furthermore, an inference-time VLM planner can automatically complete descriptive clauses from 2D renderings, allowing users to simply name the desired parts in ordinary words. FLEXPART with planner-completed prompts outperforms the strongest evaluated baseline by 15% in mIoU, even when that baseline receives ground-truth guidance. On our held-out FLEXPARTBENCH, FLEXPART leads at each granularity and improves average mIoU by 22% over the strongest baseline. With only the requested part names supplied by the user, it also improves IoU by 35% over the strongest click-driven baseline on selective segmentation.",
    "published": "2026-10-16T15:54:52Z",
    "updated": "2026-10-16T15:54:52Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23659"
  },
  {
    "id": "2610.23653",
    "title": "A Language-Informed Loss for Visual Generation",
    "authors": [
      "Suchir Agarwal",
      "Keshigeyan Chandrasegaran",
      "Ziyu Chen",
      "Kyle Sargent",
      "Juan Carlos Niebles",
      "Li Fei-Fei",
      "Jiajun Wu"
    ],
    "abstract": "End-to-end visual generation with pixel-space loss has recently achieved competitive performance without the need for learned image tokenizers. In this work, we study whether language-informed supervision can provide a richer training signal than pixel loss for visual generation. We introduce LILIE (pronounced \"lily\"), a Language-Informed and Lossless Image Encoder. LILIE is an invertible image transform trained such that a vision-language model can recover captions from noised features. The encoder uses a normalizing flow transformer trained jointly with a vision-language model via next token prediction. We then use the encoder to extract a simple language-informed loss for text-to-image generation. We train JiT models with LILIE loss, reducing gFD by 14 points (66.84 $\\to$ 53.01) against a pixel-only baseline on the GPIC dataset. Our code, encoders, and generative models are available at https://suchiragarwal.com/lilie.",
    "published": "2026-10-16T15:49:12Z",
    "updated": "2026-10-16T15:49:12Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.23653"
  },
  {
    "id": "2610.23642",
    "title": "Diversity Without Labels: Task-Agnostic Coreset Selection Across Perception and Action",
    "authors": [
      "Julia Hindel",
      "Benjamin Ramtoula",
      "Kyuhwan Yeon",
      "Nick Heppert",
      "Paul Newman",
      "Daniele De Martini",
      "Abhinav Valada"
    ],
    "abstract": "While data collection for model training is relatively easy, curating high-quality datasets from large collections is inherently challenging. Coreset estimation methods address this problem by identifying the best data subsets to train models on. However, existing approaches often require proxy model training, extensive annotations, or task-specific tailoring. Unsupervised alternatives typically exploit geometric properties in foundation model feature spaces, but are limited to pairwise image-to-image comparisons or comparisons against a fixed subset. We introduce CoreDNA, an unsupervised, task-agnostic coreset estimation approach that pools neuron activations from vision foundation models into per-image and per-dataset distributions. By comparing each image's distribution to the dataset-level distribution, CoreDNA can capture both low-level visual structure and high-level semantic information across layers. We find that high-quality samples concentrate in the tails of the last layer's activation statistics, which we validate by relating them to training-based coreset methods. Building on these findings, we develop a computationally efficient selection mechanism to construct task-agnostic, high-quality coresets for selective annotation and model training. Across image classification, semantic segmentation, depth estimation, and imitation learning for end-to-end driving and mobile manipulation, CoreDNA matches or outperforms the state of the art, demonstrating unprecedented generalization across perception and action tasks. These results highlight the effectiveness of compact activation-based representations for data selection.",
    "published": "2026-10-16T15:43:21Z",
    "updated": "2026-10-16T15:43:21Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23642"
  },
  {
    "id": "2610.23625",
    "title": "PresenceBench: An Exploratory Evaluation of Large Language Model Adaptation to User State",
    "authors": [
      "Peña Arroyo Gallego",
      "Mauro Ruiz Moreno",
      "Alejandro Acien",
      "Sergio Romero-Tapiador",
      "Teresa Arroyo-Gallego"
    ],
    "abstract": "Presence-aware intelligence is the capacity of an AI system's intelligence layer to adapt appropriately to the functional state of the person it serves (here readiness, flow, and stability) while preserving task quality and safety. We introduce PresenceBench, an instrument for measuring it. PresenceBench evaluates how the intelligence layer uses a supplied state, not how that state is sensed, and breaks the capability into measurable properties. Two are tested here. Receptivity: does the model take up the state and give a better response than with no signal? Specificity: does any improvement depend on the correct state, rather than on extra structured context? A third, adaptation across states, is a required endpoint not measured in this release. A five-arm causal design answers both questions, against each model's own baseline and an equally structured mismatched-state control, scored by a correctness-gated human paired comparison. The exploratory evaluation covered four models across eighteen single-turn, six fixed three-turn and six simulated natural-conversation scenarios. Supplying a synthetic state, raw or translated into a response policy, gave human-preference point estimates above 0.5 for all four models (Claude Sonnet 5, DeepSeek V4 Pro, Gemini 3.6 Flash, GPT-5.6 Terra), with three of eight 95% intervals excluding chance. Specificity was not resolved: no per-model interval excluded chance, and the design cannot yet separate the state values from a generic instruction to adapt. Policy delivery reduced priced cost and output tokens against each model's baseline; these are resource-use changes, not efficiency gains, because correctness non-inferiority was not established. Safety-floor failures were rare (13 of 360 cases), with a non-significant excess under policy delivery. We report the instrument, the frozen results, and the controls a confirmatory study needs.",
    "published": "2026-10-16T15:33:04Z",
    "updated": "2026-10-16T15:33:04Z",
    "categories": [
      "cs.HC",
      "cs.AI",
      "cs.CL"
    ],
    "url": "https://arxiv.org/abs/2610.23625"
  },
  {
    "id": "2610.23621",
    "title": "Stereo LWIR-RGB Automatic Labeling for Low-Light Camera-Based VRU Detection",
    "authors": [
      "Dimitrios Bouzoulas",
      "Pyry Jäppinen",
      "Pejman Habibiroudkenar",
      "Eerik Alamikkotervo",
      "Risto Ojala"
    ],
    "abstract": "VRU detection in low-light conditions is a key component in ensuring VRU safety during the most collision prone time of the day. Currently, advances in low-light detection are limited due to the lack of large scale datasets and automated labeling methods. Most autolabeling methods use RGB detections as their labels source, which cannot be replicated in low-light conditions. To fill this gap in this paper we present an automated pipeline for low-light VRU labeling. We use LWIR-RGB image pairs and source our labels from LWIR as VRUs differentiate from the background due to their body temperature. Unlike our previous work that relied on a complex hardware setup to align the two modalities, we perform this experiment using a LWIR-RGB stereo setup, lowering hardware complexity and cost, making the pipeline easier to reproduce. We evaluate method end-to-end on a dataset collected in the capital region of Finland. Models trained on our generated labels beat both off-the-shelf baselines and models fine tuned on a hand labeled subset on F1, mAP@50 and LAMR metrics when tested on a manually labeled dataset, and the result holds for two different LWIR detectors. This shows that low-light VRU autolabeling can be made both accessible and effective without specialized alignment hardware.",
    "published": "2026-10-16T15:31:37Z",
    "updated": "2026-10-16T15:31:37Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23621"
  },
  {
    "id": "2610.23617",
    "title": "GEMS: Molecular Structure Elucidation as Learned Search over Isomer Graphs",
    "authors": [
      "Utku Umur Acikalin",
      "Yingheng Wang",
      "Goncalo J. Gouveia",
      "Tyler J. Schwertfeger",
      "Frank C. Schroeder",
      "Carla P. Gomes"
    ],
    "abstract": "Identifying small-molecule structures from molecular formulas and tandem mass spectra remains a bottleneck in untargeted metabolomics and natural-product discovery. Even when database retrieval or de novo prediction misses the exact structure, the resulting candidates can provide starting points for exploring nearby structures through a few bond edits. We introduce GEMS (Guided Editing of Molecular Structures), which refines candidates through learned 2-switch bond edits that preserve the molecular formula and each atom's total valence. GEMS uses MIST, a pretrained spectrum-to-fingerprint model, to predict fingerprint probabilities once per spectrum. A neural policy compares each candidate's fingerprint with these predictions, links present features to the atoms and bonds that generate them, and scores all valid edits in one forward pass. The policy is trained on shortest edit paths between structures, so it can be pretrained on PubChem isomers without spectra and then fine-tuned with spectrum-predicted fingerprints. At inference, GEMS searches from multiple initial candidates matching the supplied molecular formula and ranks candidates by fingerprint agreement and multi-start consensus. With the target structure excluded from PubChem initialization, three edit rounds achieve Hit@1/Hit@10 of 29.64%/50.81% on NPLIB1 and 30.22%/41.33% on MassSpecGym, exceeding published baselines under comparable settings. On NPLIB1, GEMS achieves higher identification accuracy in about 3.3 minutes end to end, compared with 26.2 hours for our FRIGID run. GEMS also improves identification from generated candidates, including those refined by FRIGID. Experiments with exact target fingerprints identify fingerprint prediction error as a bottleneck in target recovery and final ranking. Deeper search recovers additional targets without retraining, with larger gains from weaker initial candidates.",
    "published": "2026-10-16T15:28:34Z",
    "updated": "2026-10-16T15:28:34Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23617"
  },
  {
    "id": "2610.24046",
    "title": "LUMINR: Intensity-conditioned Meta-learned INRs for Accelerated Medical Image Registration",
    "authors": [
      "Damian Rynczak",
      "Marek Wodzinski"
    ],
    "abstract": "Implicit neural representations (INRs) have been applied to deformable image registration, where a lightweight network maps a spatial coordinate to a deformation vector. Because an INR encodes one specific signal in its parameters, a fresh network must be optimized for every image pair at test time, which is slow. Existing methods reduce this cost by meta-learning an initialization across a population of image pairs, and condition the weights of the INR globally, so the same conditioning applies at every coordinate while the deformation field it initializes varies across the domain. We propose LUMINR, a meta-learning framework that accelerates this per-pair fitting and in which the conditioning is local instead. LUMINR uses an INR that maps a coordinate, together with local intensity and gradient features, to a deformation vector, so the conditioning varies over the domain at the resolution of the field being modelled. Its objective is to find an initialization of the INR parameters from which the network can be fine-tuned to register any unseen pair in only a few optimization iterations. We evaluate LUMINR on 3D deformable registration of brain MRI from the OASIS dataset, where local conditioning and the meta-learned initialization prove complementary: early in fitting they reach a markedly higher accuracy than either does alone. Fine-tuned from that initialization, LUMINR matches the accuracy of the same conditioned INR fit from scratch in roughly a tenth of the gradient steps and a tenth of the wall-clock time, while the deformation fields stay smooth with negligible folding.",
    "published": "2026-10-16T15:27:29Z",
    "updated": "2026-10-16T15:27:29Z",
    "categories": [
      "eess.IV",
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.24046"
  },
  {
    "id": "2610.23600",
    "title": "Learning to Discriminate Scene Structures Makes Self-Supervised Depth Learning Scalable",
    "authors": [
      "Mengtan Zhang",
      "Yuchuan Cui",
      "Yu Ma",
      "Zizhan Guo",
      "Wei Ye",
      "Rui Fan"
    ],
    "abstract": "Self-supervised monocular depth estimation is appealing for its potential to scale with unlabeled data, yet existing methods often degrade when trained on diverse scenes. This study finds that, under self-supervision, models tend to encode dataset-specific structural biases rather than transferable scene geometry, leading to cross-domain optimization conflicts. To address this issue, this study proposes the MaSS framework, aiming to make self-supervised depth learning scalable to diverse data. MaSS introduces a dedicated structural representation pathway explicitly decoupled from contextual features, which is guided by a novel scene-structure discrimination objective to learn generalized, layout-aware structural representations for depth decoding. Trained and evaluated on four diverse datasets, both individually and jointly, MaSS substantially outperforms prior self-supervised methods and is the first to consistently benefit from mixed-domain training. Zero-shot evaluation on eight additional datasets further demonstrates its remarkable generalizability, particularly on those entirely out-of-distribution scenes. The source code is publicly available at https://mias.group/MaSS.",
    "published": "2026-10-16T15:17:07Z",
    "updated": "2026-10-16T15:17:07Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.23600"
  },
  {
    "id": "2610.23599",
    "title": "From Trajectories to Differentiated Skills: Cognitive Differentiation for Self-Improving Agents",
    "authors": [
      "Yewei Zhao",
      "Derong Xu",
      "Wei Chen",
      "Yin Xu",
      "Peilun Zhou",
      "Xiaohan Wang",
      "Guojun Yin",
      "Wei Lin",
      "Mingjun Xiao"
    ],
    "abstract": "Large language model (LLM) agents tackle complex tasks through reasoning and interaction with external environments. Agent skills provide persistent, transferable capabilities that guide task planning, inform contextual decisions, support tool use, and enable executable procedures. Yet existing skill-evolution methods largely organize knowledge around skill artifacts, overlooking the functional heterogeneity within individual skills and its implications for knowledge maintenance and use. Inspired by cognitive science, we propose Cognitive Differentiation in Skill Evolution (CDSE), which evolves a unified skill through four functionally distinct yet coordinated components: Meta, Experience, Tool, and Script. CDSE extracts evidence-grounded semantic gradients from successful and failed trajectories, consolidates them by functional role, and applies component-specific updates and validation with cross-component coordination and adaptive invocation. An analysis of 500 top-ranked skill packages shows that 96.8% contain knowledge spanning at least two functional roles. Across six benchmarks, three agent models, and two execution harnesses, CDSE achieves the highest scores in all 36 settings, improving over the Base agent by 7.6 percentage points and the strongest competing method in each setting by 2.6 points on average. Ablation studies further support the importance of functional differentiation and adaptive invocation.",
    "published": "2026-10-16T15:16:56Z",
    "updated": "2026-10-16T15:16:56Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23599"
  },
  {
    "id": "2610.23598",
    "title": "RL-Guided Temporal Localization for Dual-Channel Retrieval in Long-Horizon Agent Memory",
    "authors": [
      "Dabin Sheng",
      "Zhe Wu",
      "Jinming Zhao",
      "Junliang Xing",
      "Yuanchun Shi"
    ],
    "abstract": "Time-aware retrieval is crucial for long-horizon LLM agents to effectively leverage ever-growing long-term memory. Existing methods focus on lexical or semantic similarity, leading to target memories being crowded out by temporally mismatched yet semantically similar candidates. Even time-aware approaches inject temporal cues only during memory organization or answer generation, overlooking temporal constraints at the retrieval stage, where candidate selection occurs - the root cause of the displacement. Inspired by the temporal contiguity effect in human episodic memory, we propose TIDER (Temporal Interval-driven Dual-channel Evidence Retrieval), a time-aware agentic retrieval framework. Central to TIDER is a reinforcement learning (RL)-trained temporal interval locator that infers the temporal windows in which the evidence lies. RL optimizes window localization as a discrete, non-differentiable retrieval decision, using composite rewards to convert sparse answer supervision into fine-grained retrieval feedback. These temporal windows first define the temporal retrieval channel; the retrieved candidates are then merged with results from the semantic channel and reranked by proximity to the windows. This temporal grounding enables TIDER to retrieve temporally aligned evidence that would otherwise be drowned out by the volume of semantically similar yet temporally mismatched memories. With a lightweight 1.7B locator, TIDER achieves state-of-the-art accuracy on both long-horizon memory benchmarks - 61.52% on LifeBench (+8.82%) and 78.96% on LoCoMo (+3.66%) - which indicates that temporal cues are crucial for pinpointing target evidence amid a vast pool of semantically similar historical events in long-term daily-life memory.",
    "published": "2026-10-16T15:16:50Z",
    "updated": "2026-10-16T15:16:50Z",
    "categories": [
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.23598"
  },
  {
    "id": "2610.21581",
    "title": "ClaimScope: Label-Blind Witness Verification for Mathematical Claim Auditing",
    "authors": [
      "Mushir Akhtar"
    ],
    "abstract": "Mathematical agents are commonly evaluated by answer accuracy or proof acceptance. We introduce ClaimScope, a 72-task benchmark for auditing proposed claims through a verdict, scope, counterexample, and repair. Tasks cover optimizer-state transport, finite-horizon affine recurrences, and exact $2\\times2$ linear algebra. We evaluate Qwen3-8B with direct generation and four matched two-pass conditions, each starting from the same draft. A witness checker evaluates only the model's submitted state, without consulting reference verdicts or supplying a replacement witness. Its feedback still conveys information about validity: a verified refutation establishes that the claim is false, and rejection reasons can suggest structural fixes. In this evaluation, verifier feedback yields $23/39$ accepted counterexamples on invalid claims and $25/72$ safe completions, compared with $15/39$ and $20/72$ for checker-free generic feedback. Strict completion remains $17/72$; verdict accuracy changes from $47/72$ to $46/72$. The claim-grouped safe-completion difference is $.094$, with a bootstrap 95\\% interval of $[.000,.198]$. All seven task-level gains follow horizon/input-length diagnostics. A post-hoc schema-only correction of the direct outputs reaches the same 25 safe tasks without another model call. These results separate claim classification from executable evidence, while locating the observed gains in witness-structure correction rather than demonstrating broader reasoning improvement.",
    "published": "2026-10-15T09:29:02Z",
    "updated": "2026-10-15T09:29:02Z",
    "categories": [
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21581"
  },
  {
    "id": "2610.21579",
    "title": "Learning to Search for Executable Patternmaking from Certified Programs",
    "authors": [
      "Zhuotao Xu",
      "Chi Zeng",
      "Liying Yang",
      "Xinxing Yu",
      "Yanyan Liang"
    ],
    "abstract": "Recent models generate sewing patterns from images or text, and program-based representations make these patterns executable. These systems produce a finished pattern and do not model how a patternmaker turns one pattern into another. In practice a new style is made by editing an existing pattern: lengthening the bodice, moving a dart, swapping a sleeve. Pattern archives record the results of such edits and none of the steps. We observe that the steps can be recovered by searching over editing actions until one pattern becomes the other. A deterministic compiler makes the recovered steps checkable. To this end, we present SemDraft, the first framework that learns to search for executable patternmaking programs from paired before-and-after sewing patterns without recorded editing steps. Specifically, a bounded search recovers a program of editing actions and certifies it only after three checks: it recompiles from scratch, every pair of its actions is classified as ordered or interchangeable, and an independent replay reaches the same pattern. The certified programs then train a model that ranks candidate actions inside the same search. On two frozen draws of 80 order-sensitive cases, with every other search component fixed, the learned ranker certifies 63 and 64 cases within 1,000 search executions, against at most 53 and 52 for non-learned rankers.",
    "published": "2026-10-15T09:28:18Z",
    "updated": "2026-10-15T09:28:18Z",
    "categories": [
      "cs.LG",
      "cs.AI",
      "cs.GR"
    ],
    "url": "https://arxiv.org/abs/2610.21579"
  },
  {
    "id": "2610.21573",
    "title": "MYOPIA: Understanding the Limits of Tree-Based Reasoning in Vision-Language Models",
    "authors": [
      "Islam Mesabah",
      "Sary Elmansoury",
      "Gerrit Großmann",
      "Peter Neigel",
      "Sebastian J. Vollmer"
    ],
    "abstract": "Decision trees can make vision-language model (VLM) classification interpretable by replacing a single prediction with a sequence of root-to-leaf questions. However, the accuracy cost of this greedy, non-backtracking procedure remains unclear. We introduce \\textbf{MYOPIA}, a benchmark comprising four LLM-generated, human-refined decision trees for GTSRB, MNIST, CIFAR-10, and MSCOCO, together with matched prompts, diagnostic protocols, and an evaluation harness. Across GPT-4o, Qwen-VL Max, and LLaMA-3.2 11B Vision, tree traversal underperforms zero-shot prompting in all 12 dataset--model pairs; paired bootstrap analyses consistently favor zero-shot. Our diagnostics characterize interacting failure modes associated with this gap. Models often recall tree-encoded class attributes more accurately than they ground the same attributes in images: the mean label--image accuracy gaps are 9.5, 13.8, and 12.6 points for GPT-4o, Qwen-VL Max, and LLaMA, respectively. Incorrect local decisions then irreversibly exclude the correct class, while answer extraction introduces additional model-dependent loss. A node-level audit of the four trees finds that split entropy is weakly but consistently associated with lower node accuracy, whereas depth, branching factor, and within-node grounding differences are less stable. \\textbf{MYOPIA} therefore provides a framework for diagnosing hierarchical visual classification and motivates testing tree designs that prioritize perceptual answerability and recovery from early errors. Code is available at https://github.com/islammesabah/VLM_Classification.",
    "published": "2026-10-15T09:25:10Z",
    "updated": "2026-10-15T09:25:10Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21573"
  },
  {
    "id": "2610.21571",
    "title": "Rethinking the Role of Tool Graph Memory in Multi-Turn Tool Use",
    "authors": [
      "Uiji Hwang",
      "Richeng Xuan",
      "Taeuk Kim"
    ],
    "abstract": "Large language model (LLM) agents solve complex tasks by calling external tools over multiple turns. Recent work has proposed tool graph memory, which stores past experience as tool transitions to guide subsequent selection. However, it remains unclear whether this component consistently improves agents' tool use or undermines it. We evaluate tool graph memory on nine models and two benchmarks, finding that it seldom improves significantly over baselines, and that its gains, where present, cost over twice the LLM calls. The memory's guidance is often incorrect, and random or no guidance retains most of the gain, implying that the benefit stems from extra computation rather than the memory itself. Moreover, even with the correct next tool suggested, many failures remain, such as giving up without a tool call. Storing the same experience instead as textual insights outperforms tool graph memory with almost no extra LLM calls. This suggests that memory serves better as a soft prior than as a prescription of the next tool, leading to a more effective and generalizable solution.",
    "published": "2026-10-15T09:24:30Z",
    "updated": "2026-10-15T09:24:30Z",
    "categories": [
      "cs.CL",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21571"
  },
  {
    "id": "2610.21570",
    "title": "Independent Data-Integrity Verification for LLM-Driven Functional Coverage Closure in Hardware Design",
    "authors": [
      "Venkata Krishna Kumar Vedantam"
    ],
    "abstract": "LLM agents can write directed tests that close functional coverage, but coverage only shows that a state was reached, not that the data on the way there was correct. This is a long-known point in verification and we do not claim it as new. We describe a small coverage-closure agent that applies it to an LLM loop: coverage is read from the report that the simulation itself exports (cocotb-coverage YAML) and never taken from the model's account, and data integrity is checked by scoreboards that are separate from the model. On three architecturally distinct RTL designs (an asynchronous FIFO, a UART transmitter and an AHB2APB bridge) the agent raised coverage from 91.7%, 88.9% and 67.4% to 100% within its 8-iteration budget in every logged run, using one design-agnostic agent. A reactive scoreboard monitor attached to the FIFO's base testbench also found a clock-domain-crossing bug in the author's own stimulus code. The monitor is not yet attached to the LLM-generated tests, so their data integrity is not independently checked; one manual check on a single FIFO test is reported as preliminary. We list the weaknesses of this evidence: three designs, no baseline, no ablation, and logged runs that come from several agent checkpoints.",
    "published": "2026-10-15T09:24:01Z",
    "updated": "2026-10-15T09:24:01Z",
    "categories": [
      "cs.AR",
      "cs.AI",
      "cs.SE"
    ],
    "url": "https://arxiv.org/abs/2610.21570"
  },
  {
    "id": "2610.21569",
    "title": "Decoupled Safety Control: A Safety-Control Algorithm for Training-Free Safety Guidance",
    "authors": [
      "Huilin Zhou",
      "Ruoxi Cheng",
      "Yuhang Wang",
      "Yuming Liu",
      "Minghao Sun",
      "Ruolong Ma",
      "Lan Zhang"
    ],
    "abstract": "Diffusion models achieve strong performance in text-to-image generation, but they can still produce unsafe content. Training-free safety guidance offers a practical inference-time alternative that intervenes during sampling without modifying model weights. However, many existing safeguards still rely on a coupled safety-control chain. In this chain, the same unsafe condition simultaneously specifies what should be avoided, indicates the current unsafe signal, constructs the intervention, and determines when that intervention remains active. This coupling can work when unsafe factors are explicit, but becomes less reliable once harmful and benign semantics are entangled in the current generation state, often leaving residual unsafe content or unnecessarily degrading benign-generation quality or prompt fidelity. We address this problem with Decoupled Safety Control (DSC), a plug-in safety-control algorithm for training-free safety guidance. DSC reformulates training-free safety guidance as an explicit state-dependent control process, so the executed intervention is determined from the current generation state rather than inherited directly from a single unsafe condition. Experiments on standard safety benchmarks show that DSC improves representative latent- and text-space safeguards, achieving stronger unsafe-content suppression while preserving benign-generation quality and maintaining efficient inference.",
    "published": "2026-10-15T09:24:00Z",
    "updated": "2026-10-15T09:24:00Z",
    "categories": [
      "cs.CV"
    ],
    "url": "https://arxiv.org/abs/2610.21569"
  },
  {
    "id": "2610.21565",
    "title": "BiShield-TEE: On the (In-)Security of Unilateral Weight Obfuscation in On-Device TEE-Shielded LLM Partition",
    "authors": [
      "Zhiyuan Wang",
      "Yuezhi Zhou",
      "Ziqi Zhang",
      "Zhu Zhang",
      "Zhixing Tan",
      "Yongheng Deng"
    ],
    "abstract": "On-device deployment of large language models (LLMs) is increasingly adopted due to latency and privacy requirements, but exposes proprietary models to reverse engineering and intellectual property theft. Trusted Execution Environments (TEEs) provide hardware-enforced isolation for on-device inference, yet most TEE-based parameter obfuscation relies on unilateral matrix transformations that obfuscate only the output side. We identify a vulnerability in this design, termed the Solution Determinacy Property (SDP): the obfuscation secret is uniquely determined, exposing the structure of the true key and enabling attackers to break the protection. Under our attacks, representative methods GroupCover and ArrowCloak are reduced to negligible protection, with attack accuracy reaching over 2.4 times the full-shielding black-box baseline and recovering near-complete model functionality. To address this vulnerability, we propose BiShield-TEE, a bilateral framework that induces Ambiguous Solutions through joint obfuscation of input and output dimensions, hiding the true key among many equally valid candidates. Experiments across diverse models and datasets show that BiShield-TEE confines attack accuracy to the full-shielding black-box baseline, while achieving higher inference efficiency than prior methods on real hardware. Our code is available at https://github.com/laduiw/BiShield-TEE.",
    "published": "2026-10-15T09:22:45Z",
    "updated": "2026-10-16T04:11:40Z",
    "categories": [
      "cs.CR",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21565"
  },
  {
    "id": "2610.21561",
    "title": "DialFork: Going Beyond Factuality to Evaluate Procedural Hallucination in Conversational Agents",
    "authors": [
      "Sergio Burdisso",
      "Esaú Villatoro-Tello",
      "Dairazalia Sánchez-Cortés",
      "Yanis Labrak",
      "Jordi Luque",
      "Milos Cernak",
      "Petr Motlicek"
    ],
    "abstract": "Large language models (LLMs) deployed as conversational agents are increasingly expected to follow procedural logic. While factual hallucination has received extensive attention, a different failure mode has been overlooked: procedural hallucination, in which an agent produces individually fluent and factually plausible utterances while deviating from the intended conversational process. We introduce DialFork, the first benchmark to measure this failure mode on raw dialogue text. DialFork is built by forking conformant dialogues at controlled turn positions and injecting one of four hallucination types, yielding 36,278 dialogues across 24 tasks in 12 domains; 30 human annotators validate the construction. We define three evaluation tasks that characterize procedural deviation at three granularities: how far a set of dialogues deviates from conformant ones (monitoring deployed agents), how far a single dialogue does (procedural retrieval), and at which turn a dialogue first goes off-track (real-time guardrails). For the first two, we propose dialog-flow-aware metrics, FlowKL and FlowScore, that compare dialogues by how they unfold rather than their content. At the dialogue level, FlowScore significantly outperforms all baselines across seven encoders, showing that semantic similarity is no substitute for procedural similarity. We release DialFork under open licenses at https://github.com/idiap/dialfork, hoping the community will measure conversational process alongside content.",
    "published": "2026-10-15T09:18:32Z",
    "updated": "2026-10-19T12:57:46Z",
    "categories": [
      "cs.CL",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21561"
  },
  {
    "id": "2610.21555",
    "title": "When Does Muon Actually Win? A Paired Data-, Time-, and Tuning-Budget Benchmark",
    "authors": [
      "Mushir Akhtar",
      "Hazem N. Nounou",
      "Majdi Mansouri",
      "Mohamed N. Nounou"
    ],
    "abstract": "Muon's gains in data efficiency motivate evaluating its performance under explicit data, time, and tuning budgets. On a single A100 GPU, we compare a reference single-device Muon implementation with AdamW across 17.7M- and 33.6M-parameter causal language models and 2.70M-parameter vision transformers. A common 23-candidate development budget selects configurations evaluated with five matched seeds, full validation trajectories, optimizer-step timing, and a frozen one-shot test. Muon reduces validation-loss area under the curve by 3.25--22.44\\% at equal data and lowers test loss in all 20 primary pairs. In this configuration, Muon improves time-normalized loss area} by 19.68--22.31\\% on vision, while AdamW is better by 3.38--6.96\\% on language. The full Muon optimizer call, including auxiliary AdamW updates, consumes 56.1--69.6\\% of training time, compared with 6.1--9.1\\% for the AdamW baseline. Muon also has higher expected regret under restricted access to these candidate pools. These results characterize small models with reference kernels; their wall-clock ordering does not establish a ranking for larger models or optimized implementations.",
    "published": "2026-10-15T09:15:49Z",
    "updated": "2026-10-15T09:15:49Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21555"
  },
  {
    "id": "2610.21554",
    "title": "Uncertainty Quantification in Pairwise Difference Learning for Classification",
    "authors": [
      "Mohamed Karim Belaid",
      "Maximilian Rabus",
      "Eyke Hüllermeier"
    ],
    "abstract": "Instead of learning a mapping from instances to outcomes in the standard way, the key idea of pairwise difference learning (PDL) is to learn a function that takes two instances as input and predicts the difference between the respective outcomes. Given a function of this kind, predictions for a query instance are derived from every training example and then averaged. We propose a version of PDL for the task of classification and propose a suitable meta-learning technique for this purpose. Moreover, we address the problem of uncertainty quantification, i.e., of representing and quantifying the uncertainty of a PDL classifier's predictions in a faithful manner. Building on recent work on the decomposition of total uncertainty into aleatoric and epistemic components, we propose different ways of extending corresponding measures to the setting of PDL, depending on how and to what extent uncertainty is represented by the underlying base learner. In large-scale empirical studies, we analyze both the predictive accuracy and the uncertainty awareness of our PDL classifier.",
    "published": "2026-10-15T09:15:08Z",
    "updated": "2026-10-15T09:15:08Z",
    "categories": [
      "cs.LG",
      "cs.AI"
    ],
    "url": "https://arxiv.org/abs/2610.21554"
  },
  {
    "id": "2610.21550",
    "title": "Rethinking Classifier-Free Guidance for TI2I Flow Matching",
    "authors": [
      "Andreas Floros",
      "Elena Koritska",
      "Teofilo de Campos",
      "Christoph Vogel",
      "Chu-Tak Li",
      "Anuj Sharma",
      "Alexandros Neophytou"
    ],
    "abstract": "We study Text-and-Image-to-Image (TI2I) flow matching methods for controllable image editing. In a broader generative modeling context, Classifier-Free Guidance (CFG) is established as a key component responsible for high quality outputs. However, we argue that its role in TI2I modeling is poorly understood. Specifically, we make the surprising observation that the CFG mechanism is implicitly harmful for editing in the noisy phase of flow modeling, hindering instruction following and controllability. We propose a simple correction in the early flow steps, enabling a richer alignment-preservation tradeoff at no extra cost. The effectiveness of our approach is demonstrated on both pixel-space and latent TI2I flows.",
    "published": "2026-10-15T09:13:23Z",
    "updated": "2026-10-15T09:13:23Z",
    "categories": [
      "cs.CV",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21550"
  },
  {
    "id": "2610.21549",
    "title": "When Is Muon Optimal? Radial Fragility and Minimax Geometry",
    "authors": [
      "Ao Xu"
    ],
    "abstract": "Muon replaces a matrix gradient by an approximate polar factor and has shown strong empirical performance in neural-network training. The Isotropic Curvature Model (ICM) provides a curvature-based explanation for this update by asking when gradient orthogonalization minimizes a one-step local-loss surrogate. We investigate the stability of this explanation when the fixed input radius of the ICM is replaced by a general radial law. We introduce the Random-Radius Isotropic Curvature Model (RR-ICM) and the Polar-Factor Admissibility Set, which encodes exact scaled-polar optimality as a geometric condition on the positive polar factor of the gradient. We derive an exact characterization of this set for arbitrary radial laws and show that all nonscalar admissible responses arise from radial atoms aligned with curvature kinks. Consequently, every atomless radial law exhibits zero-capacity rigidity: exact scaled-polar optimality is possible only when the gradient is already a scaled column isometry. To connect the curvature-based framework with the established spectral geometry of Muon, we introduce the Minimax RR-ICM by replacing directional averaging with worst-case optimization over probability laws on the sphere. We prove that every nonzero global minimizer lies on the polar ray of the gradient, while its scale is determined by a one-dimensional convex problem. The corresponding admissibility geometry is a positive-semidefinite trace slab, in sharp contrast to the spherical-zonoid geometry of the RR-ICM. Together, these results expose the radial fragility of average-curvature explanations and provide a new minimax variational characterization of Muon's polar direction.",
    "published": "2026-10-15T09:13:19Z",
    "updated": "2026-10-15T09:13:19Z",
    "categories": [
      "stat.ML",
      "cs.AI",
      "cs.LG"
    ],
    "url": "https://arxiv.org/abs/2610.21549"
  }
];
